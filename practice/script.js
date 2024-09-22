const hamburgerMenuIcon = document.querySelector('.close-icon')
const header = document.querySelector('.header-content ')
const hamburgerMenuContainer = document.querySelector('.hamburger-menu-container')

hamburgerMenuContainer.addEventListener('click' , (e) => {
    e.stopPropagation()
    header.classList.add('menu-open') 
})

hamburgerMenuIcon.addEventListener('click' , () => {
    header.classList.remove('menu-open') 
})

window.addEventListener('click' , () => {
    header.classList.remove('menu-open') 
})