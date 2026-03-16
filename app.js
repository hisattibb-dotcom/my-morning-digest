const MOCK_DATA = {
    "top-news": [
        {
            title: "日銀、マイナス金利解除を決定 17年ぶり利上げ",
            source: "経済ニュース",
            time: "2時間前",
            image: "file:///C:/Users/yhisa/.gemini/antigravity/brain/3ec1b64c-9fb8-4f1b-bf97-7bf3efc89321/major_news_thumbnail_1773630566898.png",
            summary: "<span class='highlight'>日銀は17年ぶりの利上げ</span>に踏み切り、大規模金融緩和の転換点を迎えました。これにより、住宅ローン金利や企業への貸出金利への影響が懸念されていますが、当面は緩和的な環境を維持する方針です。",
            original: "日本銀行は19日の金融政策決定会合で、マイナス金利政策の解除を決定した。金利を引き上げるのは2007年2月以来、17年ぶり。長短金利操作（イールドカーブ・コントロール、YCC）の撤廃や上場投資信託（ETF）の新規買い入れ終了も決め、異次元緩和と呼ばれる大規模な金融緩和策は正常化に向けて歴史的な転換点を迎えた。"
        },
        {
            title: "次世代AIモデル「GPT-5」が今夏にもリリースか",
            source: "テクノロジー通信",
            time: "4時間前",
            image: "file:///C:/Users/yhisa/.gemini/antigravity/brain/3ec1b64c-9fb8-4f1b-bf97-7bf3efc89321/major_news_thumbnail_1773630566898.png",
            summary: "OpenAIが今夏に<span class='highlight'>「GPT-5」をリリース</span>する可能性が浮上。従来モデルより推論能力が劇的に向上し、AIエージェントによる自律的なタスク実行が強化される見込みです。",
            original: "米メディアの報道によると、OpenAIは早ければ今年夏にも次世代の巨大言語モデル「GPT-5」をリリースする準備を進めている。一部の企業顧客に対しては既にデモが提供されており、その性能に対して「以前のものとは比較にならないほど優れている」との声が上がっている。"
        }
    ],
    "startup": [
        {
            title: "国内ユニコーン企業A社、米国展開へ向けて50億円の資金調達",
            source: "STARTUP HUB",
            time: "1時間前",
            image: "file:///C:/Users/yhisa/.gemini/antigravity/brain/3ec1b64c-9fb8-4f1b-bf97-7bf3efc89321/startup_news_thumbnail_1773630594765.png",
            summary: "SaaSを提供するA社が<span class='highlight'>シリーズCラウンドで50億円を調達</span>。この資金をもとに、来年春からの本格的な北米市場への進出と、現地での開発チーム採用を推進します。",
            original: "バックオフィス業務を効率化するSaaSプラットフォームを提供する株式会社Aは、複数のベンチャーキャピタルを引受先とする第三者割当増資により、総額50億円の資金調達を実施したと発表した。調達した資金は、プロダクトのAI機能強化および米国市場への本格参入に向けた人材採用に充当される。"
        },
        {
            title: "東大発ディープテック・スタートアップがシードで3億円調達",
            source: "INNOVATION DAILY",
            time: "昨日",
            image: "file:///C:/Users/yhisa/.gemini/antigravity/brain/3ec1b64c-9fb8-4f1b-bf97-7bf3efc89321/startup_news_thumbnail_1773630594765.png",
            summary: "東大発のロボティクスベンチャーが<span class='highlight'>3億円のシード調達</span>を実施。独自のAIアルゴリズムを用いて、物流倉庫の完全無人化を目指すプロトタイプの開発を加速させます。",
            original: "東京大学の研究室からスピンアウトした次世代ロボティクススタートアップの株式会社Bが、シードラウンドにおいて約3億円の資金調達を実施した。同社は独自の強化学習アルゴリズムを活用し、複雑で非定型なピッキング作業を自動化するロボットアームの開発を行っている。"
        }
    ],
    "university": [
        {
            title: "京都大学、全固体電池の寿命を2倍に延長する新素材を発見",
            source: "サイエンスポータル",
            time: "3時間前",
            image: "file:///C:/Users/yhisa/.gemini/antigravity/brain/3ec1b64c-9fb8-4f1b-bf97-7bf3efc89321/university_news_thumbnail_1773630608606.png",
            summary: "京都大学の研究チームが、EV向け<span class='highlight'>全固体電池の寿命を2倍</span>にする画期的な固体電解質の新素材を開発。実用化されれば充電インフラの課題解決に貢献する可能性があります。",
            original: "京都大学大学院工学研究科の〇〇教授らの研究グループは、次世代バッテリーとして期待される全固体電池において、充放電における劣化を劇的に抑えることができる新しい固体電解質の材料組成を発見したと発表した。従来と比較して約2倍の充放電サイクルに耐えることが実証された。"
        },
        {
            title: "文科省、「地域中核大学」のスタートアップ創出支援事業を公募開始",
            source: "大学ジャーナル",
            time: "5時間前",
            image: "file:///C:/Users/yhisa/.gemini/antigravity/brain/3ec1b64c-9fb8-4f1b-bf97-7bf3efc89321/university_news_thumbnail_1773630608606.png",
            summary: "文科省は、地方大学発スタートアップの創出を支援する<span class='highlight'>「地域中核・特色ある研究大学強化促進事業」</span>の公募を開始。最大で年間数十億円の支援が見込まれます。",
            original: "文部科学省は本日より、地域の中核となる大学や特定分野で強みを持つ大学を対象に、イノベーション創出やスタートアップの育成を強力に後押しするための新たな補助事業の公募を開始した。この事業では、大学の産学連携体制の抜本的な強化や、インキュベーション施設の整備などを支援する。"
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. 日付の設定
    const dateElement = document.getElementById('current-date');
    const today = new Date();
    const days = ['日', '月', '火', '水', '木', '金', '土'];
    dateElement.textContent = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日(${days[today.getDay()]})`;

    // --- 2. 記事データの処理 ---
    const API_DATA_FILE = 'news_data.json';

    // UI状態管理
    let currentData = { ...MOCK_DATA };
    let isDataLoaded = false;

    // --- ニュースデータファイル(news_data.json)の読み込み ---
    async function fetchNewsData() {
        if (isDataLoaded) return;

        try {
            console.log("ニュースのロードを開始します...");
            // Pythonスクリプトが生成したJSONを読み込む
            const response = await fetch(API_DATA_FILE);
            if (!response.ok) {
                throw new Error("news_data.json の読み込みに失敗しました");
            }
            const data = await response.json();
            currentData = data;
            isDataLoaded = true;

            // 現在アクティブなモードを維持して再描画
            const toggleInput = document.getElementById('view-mode-toggle');
            const mode = toggleInput.checked ? 'original' : 'ai';
            renderNews(mode);
        } catch (error) {
            console.error("データ取得エラー:", error);
        }
    }

    // --- レンダリング処理 ---
    const renderNews = (mode) => {
        const isOriginalMode = mode === 'original';

        Object.keys(currentData).forEach(categoryId => {
            const container = document.getElementById(`${categoryId}-container`);
            container.innerHTML = ''; // クリア

            currentData[categoryId].forEach(news => {
                const card = document.createElement('article');
                card.className = `news-card ${isOriginalMode ? 'original-mode' : ''}`;

                const bodyContent = isOriginalMode ? news.original : news.summary;

                const aiBadgeHTML = `
                    <div class="ai-badge">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        AI 3行要約
                    </div>
                `;

                card.innerHTML = `
                    <div class="card-top">
                        <div class="card-content">
                            <span class="news-source">${news.source} • ${news.time}</span>
                            <h2 class="news-title">
                                <a href="${news.link || '#'}" target="_blank" rel="noopener noreferrer" class="news-title-link">
                                    ${news.title}
                                    <svg class="external-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                                </a>
                            </h2>
                        </div>
                        <img src="${news.image}" alt="サムネイル" class="news-image">
                    </div>
                    <div class="news-body">
                        ${aiBadgeHTML}
                        <p>${bodyContent}</p>
                    </div>
                `;
                container.appendChild(card);
            });
        });
    };

    // 初期表示：まずはモックデータで画面を描画し、その後APIからの取得を試みる
    renderNews('ai');

    // UI上にロード中の表示を出したい場合の拡張用（今回はコンソールのみ）
    fetchNewsData().catch(err => console.error("ニュース取得失敗:", err));

    // 3. トグルスイッチの制御
    const toggleInput = document.getElementById('view-mode-toggle');
    toggleInput.addEventListener('change', (e) => {
        const mode = e.target.checked ? 'original' : 'ai';
        renderNews(mode);
    });

    // 4. タブの切り替え制御
    const tabBtns = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('.news-section');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // アクティブタブの切り替え
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // セクションの切り替え
            const targetId = btn.getAttribute('data-target');
            sections.forEach(sec => {
                sec.classList.remove('active-section');
                if (sec.id === targetId) {
                    sec.classList.add('active-section');
                }
            });
        });
    });
});
