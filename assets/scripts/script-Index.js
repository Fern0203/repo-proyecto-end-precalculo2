function filterTemas() {
    // Obtener el valor del input y covertirlo a minúsculas
    let input = document.getElementById('id-browser').value.toLowerCase()

    // Obtener todos los elementos <a> dentro de .context-box-tema
    let temas =  document.querySelectorAll('.content-box-tema a')

    // Iterar sobre los temas y compararlos con el texto ingresado
    temas.forEach(function (tema) {
        let textoTema = tema.textContent.toLowerCase()

        // Si el texto del tema incluye lo que se escribió, lo mostramos, si no, lo ocultamos
        if (textoTema.includes(input)) {
            tema.style.display = ''
        } else {
            tema.style.display = 'none'
        }
    })
}

// MOSTRAR MENU
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
        // Agregar show-menu class to nav menu
        nav.classList.toggle('show-menu')
        // Agregar show-icon a mostrar and hidden menu icon
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle', 'nav-menu')