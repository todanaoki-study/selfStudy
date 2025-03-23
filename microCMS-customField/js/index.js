const url = 0;
const apiKey = 0;
const fetchData = async () => {
    try {
        const response = await fetch(url,
            {
                headers: {
                    'X-API-KEY': 'apikeyを設定'
                }
            });
        const data = await response.json();
        renderPosts(data.contents);
    } catch (error) {
        console.error('データの取得に失敗しました', error);
    }
};

// html作成
const renderPosts = (posts) => {
    posts.forEach((item, index) => {
        const cardHTML = `
        `;
        console.log(item.links);
        document.querySelector('.articles__list').insertAdjacentHTML('beforeend', cardHTML);
    });
};

fetchData();