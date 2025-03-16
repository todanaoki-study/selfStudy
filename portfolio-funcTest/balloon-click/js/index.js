//風船の画像集
const balloonList = [
    {
        tag: "red",
        inflate: "./img/inflate_balloon.png",
        deflate: "./img/deflate_balloon.png",
    },
    {
        tag: "purple",
        inflate: "./img/inflate_balloon2.png",
        deflate: "./img/deflate_balloon2.png",
    },
    {
        tag: "white",
        inflate: "./img/inflate_balloon3.png",
        deflate: "./img/deflate_balloon3.png",
    }
]
//破裂音の設定
const soundPlay = () => {
    const audio = new Audio("./sound/rupture.mp3");
    audio.play();
}

//画像の入れ替え設定
const changeImg = (index) => {
    balloon[index].setAttribute("src", balloonList[index].deflate);
    //アニメーション
    gsap.to(balloon[index], {
        autoAlpha: 0,
        rotate: 15,
    });
}

//画像削除の設定
const deleteImg = (index) => {
    balloon[index].remove();
}

//タイトル落下
const fallingDown = (count) => {
    const falling = count * 10;
    if (count < balloonList.length) {
        gsap.to(container, {
            y: falling,
        });
    }
    else if (count >= balloonList.length) {
        gsap.to(container, {
            y: 300,
            autoAlpha: 0,
        })
    }
    console.log(falling);
}
//?--------------------------------------

const balloon = document.querySelectorAll(".balloon__module img");
const container = document.querySelector(".balloon");
let clickCounter = 0;

//風船をクリック
for (let i = 0; i < balloonList.length; i++) {
    balloon[i].addEventListener("click", () => {
        changeImg(i);
        soundPlay();
        clickCounter++;
        fallingDown(clickCounter);
    });
}