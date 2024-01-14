const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function (swipe) {
        swipe.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}








let root = document.querySelector(":root");
let lightBg = document.getElementById('header__bg-l');
let darkBg = document.getElementById('header__bg-d');
let lightButton = document.getElementById('header__btn-l');
let darkButton = document.getElementById('header__btn-d');

lightButton.addEventListener('click', () => {
    if (darkBg.style.display = "none") {
        lightBg.style.display = "none";
        lightButton.style.display = "none";
        darkBg.style.display = "block";
        darkButton.style.display = "block";
        root.classList.toggle('dark');
    } else {
        darkBg.style.display = "none";
        darkButton.style.display = "none";
    }
})

darkButton.addEventListener('click', () => {
    if (lightBg.style.display = "none") {
        darkBg.style.display = "none";
        darkButton.style.display = "none";
        lightBg.style.display = "block";
        lightButton.style.display = "block";
        root.classList.toggle('light');
    } else {
        lightBg.style.display = "none";
        lightButton.style.display = "none";
    }
})


