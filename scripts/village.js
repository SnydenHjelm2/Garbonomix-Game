function getVillageName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const name = getVillageName("text");
const villageGreeting = document.querySelector("h2");
const game = document.querySelector("#game");
const gameImg = document.querySelector("#game img");
const nImages = 15;
let imgNum = 1;


villageGreeting.textContent += decodeURIComponent(name) + "!";
gameImg.addEventListener("click", (e) => {
    if (imgNum >= nImages) {return};
    imgNum++;
    e.target.src = `images/village-home-${imgNum}.png`;
});

document.body.addEventListener("keydown", (e) => {
    if ((imgNum === nImages && e.key.toLowerCase() === "d") || (imgNum === 1 && e.key.toLowerCase() === "a")) {return};
    console.log(e.key);
    if (e.key.toLowerCase() === "d") {
        imgNum++;
        gameImg.src = `images/village-home-${imgNum}.png`;
    } else if (e.key.toLowerCase() === "a") {
        imgNum--;
        gameImg.src = `images/village-home-${imgNum}.png`;
    }
});