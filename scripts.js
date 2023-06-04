function lista() {
    function menuClick() {
        const menuClick = document.querySelector('.bg header i')
        const nav = document.querySelector('.bg header nav ul')
    
        function clicou() {
            nav.classList.toggle('ativo')
        }
    
        menuClick.addEventListener('click', clicou)
    }
    
    menuClick()
    
    const lista = document.querySelectorAll('.js-texto p')
    const listaIcone = document.querySelectorAll('.js-texto i')
    
    function clickLista(index) {
        lista.forEach((item) => {
            item.classList.remove('ativo')
        })
        lista[index].classList.add('ativo')
    }
    
    listaIcone.forEach((item, index) => {
        item.addEventListener('click', () => {
            clickLista(index)
        }) 
    })
}

lista()

const scroll = document.querySelectorAll('.js-scroll')
const height = window.innerHeight * 0.6
scroll[0].classList.add('ativo')

function mouseScroll() {
    scroll.forEach((section) => {
        const sectionTop = (section.getBoundingClientRect().top - height) < 0
        if(sectionTop) {
            section.classList.add('ativo')
        }
    })
}

window.addEventListener('scroll', mouseScroll)

