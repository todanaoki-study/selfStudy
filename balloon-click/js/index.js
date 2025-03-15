const redBalloon = {
    tag: "red",
    inflate: "./img/inflate_balloon.png",
    deflate: "./img/deflate_balloon.png",
}

//破裂音の設定
const soundPlay = () => {
    const audio = new Audio("./sound/rupture.mp3");
    audio.play();
}

//画像の入れ替え設定
const changeImg = () => {
    balloon.setAttribute("src", redBalloon.deflate);
    gsap.to(balloon, {
        width: 30,
        height: 30,
        autoAlpha: 0,
        rotate: 15,

        ease: "back.in",
    });
}

//画像削除の設定
const deleteImg = () => {
    balloon.remove();
}

const balloon = document.querySelector(".balloon__module img");

balloon.addEventListener("click", () => {
    changeImg();
    soundPlay();
})