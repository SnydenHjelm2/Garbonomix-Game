function getVillageName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function getTrash() {
    if (cooldown) {
        cooldownMsg.style.display = "block";
        return;
    };

    cooldown = true;
    let metalGen = Math.ceil(Math.random() * 10);
    let cardboardGen = Math.ceil(Math.random() * 10);
    let plasticGen = Math.ceil(Math.random() * 10);
    let compostGen = Math.ceil(Math.random() * 10);
    metal.textContent = metalCount += metalGen;
    compost.textContent = compostCount += compostGen;
    plastic.textContent = plasticCount += plasticGen;
    cardboard.textContent = cardboardCount += cardboardGen;

    setTimeout(() => {
        cooldown = false;
    }, 300000);
}

const name = getVillageName("text");
const speechBubble1 = document.querySelector("#speech-bubble1");
const speechBubble2 = document.querySelector("#speech-bubble2");
const speechBubble3 = document.querySelector("#speech-bubble3");
const speechBubble4 = document.querySelector("#speech-bubble4");
const cooldownMsg = document.querySelector("#cooldown-msg");
const profilePic = document.querySelector("#profile-pic");
const centre = document.querySelector("#centre");
const map = document.querySelector("#map");
const mapImg = document.querySelector("#map img");
const collectTrash = document.querySelector("#collect-trash");

const villNamePara = document.querySelector("span");
const metal = document.querySelector("#metal");
const compost = document.querySelector("#compost");
const plastic = document.querySelector("#plastic");
const cardboard = document.querySelector("#cardboard");


let metalCount = 10;
let compostCount = 10;
let plasticCount = 10;
let cardboardCount = 10;
let cooldown = false;

villNamePara.innerHTML = decodeURIComponent(name);
metal.textContent = metalCount;
compost.textContent = compostCount;
plastic.textContent = plasticCount;
cardboard.textContent = cardboardCount;

profilePic.addEventListener("click", () => {
    speechBubble1.style.display = "block";
});

speechBubble1.addEventListener("click", () => {
    speechBubble1.style.display = "none";
});

speechBubble2.addEventListener("click", () => {
    speechBubble2.style.display = "none";
    speechBubble3.style.display = "block";
});

speechBubble3.addEventListener("click", () => {
    speechBubble3.style.display = "none";
});

speechBubble4.addEventListener("click", () => {
    speechBubble4.style.display = "none";
    centre.style.display = "block";
    collectTrash.style.display = "none";
    mapImg.src = `images/village-map.png`;
});

cooldownMsg.addEventListener("click", () => {
    cooldownMsg.style.display = "none";
});

centre.addEventListener("click", () => {
    if (cooldown) {
        cooldownMsg.style.display = "block";
        return;
    };
    mapImg.src = `images/trash-city.png`;
    centre.style.display = "none";
    collectTrash.style.display = "block";
    speechBubble2.style.display = "block";
});

collectTrash.addEventListener("click", () => {
    getTrash();
    speechBubble3.style.display = "none";
    speechBubble4.style.display = "block";
});