const works = document.querySelector('.works');
const container = document.querySelector('.works__container');

//停止の関数
// const scrollStop = (position) => {
// }

document.addEventListener('scroll', () => {
    const containerPos = container.getBoundingClientRect();

    if (containerPos.top <= 0) {
        works.scrollTop = works.scrollTop - containerPos;
    }
});