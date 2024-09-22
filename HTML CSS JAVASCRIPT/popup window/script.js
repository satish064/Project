const openPopUp = document.querySelector('button')
const popUp = document.querySelector('.popup-container')
const closeIcon = document.querySelector('.close-icon')
const overlay = document.querySelector('.overlay')

openPopUp.addEventListener('click', () => {
        popUp.classList.add('popup-open')
})

closeIcon.addEventListener('click', () => {
    popUp.classList.remove('popup-open')
}) 

overlay.addEventListener('click', () => {
    popUp.classList.remove('popup-open')
}) 

