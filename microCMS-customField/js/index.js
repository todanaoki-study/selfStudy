const url = "https://custom.microcms.io/api/v1/article";
const apiKey = "E5M9ZT9l83wWVNFwxczqS2Ld0cgqgrKQuSIX";
const fetchData = async () => {
    try {
        const response = await fetch(url,
            {
                headers: {
                    'X-API-KEY': apiKey
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
    const container = document.querySelector('.blog__container');
    container.innerHTML = '';
    posts.forEach(item => {
        const cardHTML = `
        <article class="blog__post post">
        <img src="${item.image.url}" alt="" class="post__image">
                    <h3 class="post__title">${item.title}</h3>
                    <p class="post__author">${item.writer}</p>
                    <p class="post__date">公開日: ${item.date}</p>
                    <div class="post__content">
                        <p>${item.overview}</p>
                    </div>
        </article>`+ `<p>あいうと</p>`;

        container.insertAdjacentHTML('beforeend', cardHTML);
    });
};

fetchData();