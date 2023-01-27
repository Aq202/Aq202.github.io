const $container = document.querySelector("div.passwords-container")
if ($container) {

    const passwords = [""]
    const $fragment = document.createDocumentFragment()

    for (index in passwords) {

        const $item = document.createElement("div")
        $item.classList.add("password-item")

        $item.innerHTML = `<span class="level">Nivel ${index + 1}</span>
    <span class="password">${passwords[index]}</span>`

        $fragment.appendChild($item)
    }

    $container.appendChild($fragment)

}