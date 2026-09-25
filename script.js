const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

window.addEventListener("scroll", () => {
    const shouldBeRendered = window.scrollY > 700;

    if (shouldBeRendered !== isBackToTopRendered) {
        isBackToTopRendered = shouldBeRendered;

        backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
        backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
        backToTopButton.style.transform = isBackToTopRendered ? "scale(1)" : "scale(0)";
    }
});