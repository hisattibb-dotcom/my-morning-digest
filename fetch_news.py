import os
import ssl
import json
import urllib.request
import feedparser
from datetime import datetime, timedelta
import re
import time
from bs4 import BeautifulSoup
import google.generativeai as genai

# NOTE: 本番稼働時は環境変数等から安全に読み込む形に変更します
GEMINI_API_KEY = "AIzaSyCWn8BcxT-cYRtqqvp_8xAXrpBFJ9USgW4" 
genai.configure(api_key=GEMINI_API_KEY)

# SSL証明書エラー回避（ローカル環境用）
if hasattr(ssl, '_create_unverified_context'):
    ssl._create_default_https_context = ssl._create_unverified_context

# --- 1. 検索カテゴリとRSS URLの定義 ---
CATEGORIES = {
    "top-news": "https://news.google.com/rss?hl=ja&gl=JP&ceid=JP:ja",
    "startup": "https://news.google.com/rss/search?q=スタートアップ+OR+ベンチャー&hl=ja&gl=JP&ceid=JP:ja",
    "university": "https://news.google.com/rss/search?q=大学+研究+OR+産学連携&hl=ja&gl=JP&ceid=JP:ja"
}

# --- 2. 各記事の本文を簡易的に取得・抽出する関数 ---
def fetch_article_text(url):
    try:
        # User-Agent を設定してリクエスト
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as response:
            html = response.read()
            soup = BeautifulSoup(html, 'html.parser')
            
            # ニュースサイトの本文は通常pタグ等に入っているため、テキストだけを雑に抽出
            # ※サイトごとの構造の違いにより完璧ではないですが、AIに渡すための情報として集めます
            paragraphs = soup.find_all(['p', 'div', 'article'])
            text = " ".join([p.get_text() for p in paragraphs])
            
            # 不要な空白・改行を整理して冒頭2000文字程度を返す（トークン数節約のため）
            text = re.sub(r'\s+', ' ', text).strip()
            return text[:2000]
    except Exception as e:
        print(f"Failed to fetch {url}: {e}")
        return ""

# --- 3. Gemini APIによる要約処理 ---
def summarize_with_ai(title, text):
    try:
        if not text:
            # 本文が取れなかった場合はタイトルだけで推測要約
            prompt = f"以下のニュースのタイトルから、想定されるニュースの概要を3行以内で箇条書きで、新聞のような硬派な文体で要約してください。\nタイトル: {title}"
        else:
            prompt = f"以下のニュース記事の本文を読み、重要なポイントを3行以内で箇条書きで、新聞のような硬派な文体で要約してください。\nタイトル: {title}\n本文: {text}"
            
        model = genai.GenerativeModel("gemini-2.5-flash")
        response = model.generate_content(prompt)
        # HTMLで表示できるように箇条書き(・)を整形
        summary_html = response.text.replace('\n', '<br>').replace('・', '• ')
        return f"<span class='highlight'>AI要約:</span><br>{summary_html}"
    except Exception as e:
        print(f"Summarize AI error: {e}")
        return f"要約の生成に失敗しました。（{e}）"

# --- 4. メイン処理 ---
def main():
    print("ニュース収集と要約を開始します...")
    results = {}

    for category_id, url in CATEGORIES.items():
        print(f"\n--- カテゴリ取得開始: {category_id} ---")
        results[category_id] = []
        
        feed = feedparser.parse(url)
        # 各カテゴリトップ3件のみ取得
        entries = feed.entries[:3]
        
        for entry in entries:
            title = entry.title
            link = entry.link
            pub_date = entry.published  # TODO: 日時のフォーマット整形
            
            print(f"取得中: {title}")
            original_text_chunk = fetch_article_text(link)
            ai_summary = summarize_with_ai(title, original_text_chunk)
            
            # API無料枠の制限（5リクエスト/分）を回避するため15秒待機
            time.sleep(15)
            
            # 時間計算処理の簡易版（本来はtzを合わせる）
            time_display = "本日"
            
            # フロントエンド（app.jsのMOCK_DATA）の型に合わせる
            results[category_id].append({
                "title": title,
                "source": "Google News",
                "time": time_display,
                # TODO: 記事に関連しそうな画像をAIに生成させるか、ダミーを使うか調整
                "image": f"file:///C:/Users/yhisa/.gemini/antigravity/brain/3ec1b64c-9fb8-4f1b-bf97-7bf3efc89321/{category_id}_news_thumbnail.png",
                "summary": ai_summary,
                "original": original_text_chunk[:150] + "..." # 元記事は冒頭だけで良い
            })

    # 結果をJSONとして保存
    output_path = os.path.join(os.path.dirname(__file__), "news_data.json")
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=4)
        
    print(f"\n完了しました！データは {output_path} に保存されました。")

if __name__ == "__main__":
    main()
