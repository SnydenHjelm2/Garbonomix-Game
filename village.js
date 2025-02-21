function getVillageName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const name = getVillageName("text");
const villageGreeting = document.querySelector("h2");
villageGreeting.textContent += decodeURIComponent(name) + " village!";