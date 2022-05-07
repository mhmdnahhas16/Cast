// The loader part
const loader = document.querySelector(".loader_bg");
document.body.style.overflowY = "hidden";
setTimeout(() => {
    loader.classList.add("Disappear")
    document.body.style.overflowY = "scroll";
}, 2000);
// Navbar
const Navbar = document.querySelector('.menu-icon');
const Buttons = document.querySelector('.Buttons');
Navbar.addEventListener("click", () => {
    Buttons.classList.toggle("Up");
});