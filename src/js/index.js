

const mobileMenuButtons = [...document.getElementsByClassName("mobile-menu-button")];
const headerNav = document.getElementById("header-nav");

console.log(mobileMenuButtons);
mobileMenuButtons.forEach((element) => {
    element.addEventListener("click", () => {
        headerNav.toggleAttribute("isMobile")
    });
});

window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {
        headerNav.removeAttribute("isMobile");
    }


})