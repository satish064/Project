const button = document.querySelector('.share-icon')
const socialLinks = document.querySelector('.social-link')

button.addEventListener('click' , () => {
    socialLinks.classList.toggle('active')

    if(button.classList.contains('share-active')){
        button.classList.remove('share-active','share-active-img')
    }
    else {
        button.classList.add('share-active','share-active-img')
    }
})
