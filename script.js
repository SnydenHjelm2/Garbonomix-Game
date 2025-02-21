function pickAvatar(avatar) {
    if (avatar === "leila") {
        avatarImage.src = `images/${avatar}.png`;
    } else if (avatar === "omrah") {
        avatarImage.src = `images/${avatar}.png`;
    } else if (avatar === "nattie") {
        avatarImage.src = `images/${avatar}.png`;
    }

    overlay.style.display = "none";
}



const chooseAvatar = document.querySelector("#char-select");
const avatarImage = document.querySelector("#avatar img");
const overlay = document.querySelector(".overlay");
const leila = document.querySelector("#leila img");
const omrah = document.querySelector("#omrah img");
const nattie = document.querySelector("#nattie img");



chooseAvatar.addEventListener("click", () => {overlay.style.display = "block"});

leila.addEventListener("click", () => {
    pickAvatar("leila");
});

omrah.addEventListener("click", () => {
    pickAvatar("omrah");
});

nattie.addEventListener("click", () => {
    pickAvatar("nattie");
});