//*関数定義
function transform(container) {
    const offsetTop = container.parentElement.offsetTop;
    const scrollItem = container.querySelector('.scroll__horizontal')
    //おそらくwindowのtopから要素のtopの間が何％開いているか調べている。
    //くっついている時は0%
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    console.log(percentage + "%");

    percentage = percentage < 0 ? 0 : percentage > 300 ? 300 : percentage;
    scrollItem.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
}

const wrap = document.querySelectorAll(".scroll__wrap");

window.addEventListener("scroll", (e) => {
    for (let i = 0; i < wrap.length; i++) {
        transform(wrap[i]);
    }
})