const openPopUp = document.querySelector('button')
const popUp = document.querySelector('.popup-container')
const closeIcon = document.querySelector('.close-icon')

openPopUp.addEventListener('click', () => {
        popUp.classList.add('popup-open')
})

closeIcon.addEventListener('click', () => {
    popUp.classList.remove('popup-open')
}) 

popUp.addEventListener('click', () => {
    popUp.classList.remove('popup-open')
}) 

