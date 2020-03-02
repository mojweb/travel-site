class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector(".site-header__menu-icon")
        this.menuContent = document.querySelector(".site-header__menu-content")
        this.events()
        //// spageti kod..?!?!?
        // document.querySelector(".site-header__menu-icon").addEventListener("click", function () {
        //     console.log("the top right corner was clicked");
        // })
    }
    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
    }

    toggleTheMenu() {
        this.menuContent.classList.toggle("site-header__menu-content--is-visible")

    }


}


export default MobileMenu;