const menuButton = document.querySelector(".hamburger")
const menuIcon = document.querySelector(".menu-icon")
const closeIcon = document.querySelector(".menu-close-icon")
const menu = document.querySelector(".menu-small")
const menuItems = document.querySelectorAll(".item")




menuButton.addEventListener("click", () => {
    if (closeIcon.style.display == "block") {
        closeIcon.style.display = "none"
        menuIcon.style.display = "block"
        hideMenu()
    } else {
        closeIcon.style.display = "block"
        menuIcon.style.display = "none"
        showMenu()
    }
})


menuItems.forEach((element) => {
    element.addEventListener("click", () => {
        menuIcon.style.display = "block"
        closeIcon.style.display = "none"
        hideMenu()
    })
})


const showMenu = () => {
    menu.style.display = "block"
    menu.style.transform = "translateY(0)"
}

const hideMenu = () => {
    menu.style.display = "none"
    menu.style.transform = "translateY(-100%)"
}