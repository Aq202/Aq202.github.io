

fetch("navBar.html")
    .then(r => r.text())
    .then(fileContent => {
        const $header = document.querySelector("header")
        if ($header) $header.innerHTML = fileContent
        addNavBarListeners();
        changeNavBarColor();
    })

const changeNavBarColor = () => {
    const scrollValue = window.scrollY


    const $nav = document.querySelector("nav")
    if (scrollValue > 10) {
        $nav.classList.remove("transparent")
    } else if (!$nav.classList.contains("transparent")) $nav.classList.add("transparent")
}

const addNavBarListeners = () => {
    window.addEventListener("scroll", e => {
        changeNavBarColor();
    })
}