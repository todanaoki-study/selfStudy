//*関数定義

const imgList = document.querySelector(".scrollChange");
let rect = 0;
let scrollX = 0;
window.addEventListener("scroll", () => {
    rect = imgList.getBoundingClientRect();

    if (rect.y < 100 && scrollX < window.innerWidth * 2) {
        scrollX = window.scrollY;
    }
})