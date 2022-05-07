// The loader part
const loader = document.querySelector(".loader_bg");
document.body.style.overflowY = "hidden";
setTimeout(() => {
    loader.classList.add("Disappear")
    document.body.style.overflowY = "scroll";
}, 2000);