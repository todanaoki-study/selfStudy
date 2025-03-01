const url = "https://custom.microcms.io/api/v1/article";
const apiKey = "E5M9ZT9l83wWVNFwxczqS2Ld0cgqgrKQuSIX";

const fetchData = async () => {
    try {
        const response = await fetch(url, {
            headers: {
                'X-API-KEY': 'E5M9ZT9l83wWVNFwxczqS2Ld0cgqgrKQuSIX'
            }
        });
        const data = await response.json();
        renderPosts(data.contents);

    } catch (error) {
        console.error("itemデータの取得に失敗しました", error);
    }
};

// html作成
const renderPosts = (posts) => {
    posts.forEach((item) => {
        const cardHTML = `
        <div class="articles__list">
            <img class="articles__item" src="${item.img.url}" alt="記事画像1">
        </div>
        `;
        document.querySelector(".articles").insertAdjacentHTML("beforeend", cardHTML);
    });
};

fetchData();