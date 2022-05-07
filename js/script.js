// The loader part
const loader = document.querySelector(".loader_bg");
document.body.style.overflowY = "hidden";
setTimeout(() => {
    loader.style.display = "none";
    document.body.style.overflowY = "scroll";
}, 1000);