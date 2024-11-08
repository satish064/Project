const sharePopUp = document.querySelector('.share-platform ')
const shareBtn = document.querySelector('.share')
const right = document.querySelector('.right')


shareBtn.addEventListener('click', () => {
    sharePopUp.classList.toggle("show")
})
