const wrap = document.querySelector(".scroll__wrap");
const horizontal = document.querySelector(".scroll__horizontal");

//スクロールイベント
document.addEventListener("scroll", () => {
    //offsetで要素の座標を記録
    const parentPos = wrap.parentElement.offsetTop;
    //コンテナが画面のどの位置にあるかを計算(0以上で画面内)
    const percentage = ((window.scrollY - parentPos) / window.innerHeight) * 100;
    console.log(Math.floor(percentage) + "%");

    //要素の幅を超えないように制限
    if (percentage > 0 || percentage < 400) {
        //その間横に変換
        horizontal.style.transform = `translateX(${-(percentage)}vw)`;
    }
});