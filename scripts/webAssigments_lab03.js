const $container = document.querySelector("div.passwords-container")
if ($container) {

    const passwords = [
        "NH2SXQwcBdpmTEzi3bvBHMM9H66vVXjL",
        "rRGizSaX8Mk1RTb1CNQoXTcYZWU6lgzi",
        "aBZ0W5EmUfAf7kHTQeOwd8bauFJ2lAiG",
        "2EW7BBsr6aMMoJ2HjW067dm8EgX26xNe",
        "lrIWWI6bB37kxfiCQZqUdOIYfr6eEeqR",
        "P4L4vucdmLnm8I7Vl7jG1ApGSfjYKqJU",
        "z7WtoNQU2XfjmMtWA8u5rN4vzqu4v99S",
        "TESKZC0XvTetK0S9xNwm25STk5iWrBvP",
        "EN632PlfYiZbn3PhVK3XOGSlNInNE00t",
        "G7w8LIi6J3kTb8A7j9LgrywtEUlyyp6s",
        "6zPeziLdR2RKNdNYFNb6nVCKzphlXHBM",
        "JVNBBFSmZwKKOP0XbFXOoW8chDz5yVRv",
        "wbWdlBxEir4CaE8LaPhauuOo6pwRmrDw",
        "fGrHPx402xGC7U7rXKDaxiWFTOiF0ENq",
        "jN2kgmIXJ6fShzhT2avhotn4Zcka6tnt",
        "JQttfApK4SeyHwDlI9SXGR50qclOAil1",
        "VwOSWtCA7lRKkTfbr2IDh6awj9RNZM5e",
        "hga5tuuCLF6fFzUpnagiMN8ssu9LFrdg",
        "awhqfNnAbc1naukrpqDYcF95h7HoMTrC",
        "VxCazJaVykI6W36BkBU0mJTCM8rR95XT"

]
    const $fragment = document.createDocumentFragment()

    for (index in passwords) {

        const $item = document.createElement("div")
        $item.classList.add("password-item", "scrollbar-gray")

        $item.innerHTML = `<span class="level">bandit${parseInt(index) + 1}</span>
    <span class="password">${passwords[index]}</span>`

        $fragment.appendChild($item)
    }

    $container.appendChild($fragment)

}