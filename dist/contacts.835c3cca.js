(()=>{
    const mobileMenu = document.querySelector(".js-lang-menu-container");
    const openMenuBtn = document.querySelector(".js-open-lang-menu");
    const closeMenuBtn = document.querySelector(".js-close-lang-menu");
    const toggleMenu = ()=>{
        const isMenuOpen = openMenuBtn.getAttribute("aria-expanded") === "true" || false;
        openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
        mobileMenu.classList.toggle("is-open");
        const scrollLockMethod = !isMenuOpen ? "disableBodyScroll" : "enableBodyScroll";
        bodyScrollLock[scrollLockMethod](document.body);
    };
    openMenuBtn.addEventListener("click", toggleMenu);
    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e)=>{
        if (!e.matches) return;
        mobileMenu.classList.remove("is-open");
        openMenuBtn.setAttribute("aria-expanded", false);
        bodyScrollLock.enableBodyScroll(document.body);
    });
})();

//# sourceMappingURL=contacts.835c3cca.js.map
