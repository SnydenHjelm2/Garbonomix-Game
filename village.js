function getVillageName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const name = getVillageName("text");
const villageGreeting = document.querySelector("h2");
const game = document.querySelector("#game");
const gameImg = document.querySelector("#game img");
const nImages = 5;
let imgNum = 1;


villageGreeting.textContent += decodeURIComponent(name) + "!";
gameImg.addEventListener("click", (e) => {
    if (imgNum >= nImages) {return};
    imgNum++;
    e.target.src = `images/village-home-${imgNum}.png`;
});

document.body.addEventListener("keypress", (e) => {
    if (imgNum >= nImages) {return};
    if (e.key === "Enter") {
        imgNum++;
        gameImg.src = `images/village-home-${imgNum}.png`;
    }
});