const errorLogo = document.querySelector('.error')
const errorBtn = document.querySelector('.arrow')
const erorrText = document.querySelector('.error-text')
const inputBox = document.querySelector('.input-box')
const input = document.querySelector('input')
const headerLogo = document.querySelector('.header-logo')

const emailPattern = 
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    if (window.innerWidth > 768) {
        // Then log this message to the console
        headerLogo.style.display = "none"
      }
    else {
        headerLogo.style.display = "flex"
    } 


errorBtn.addEventListener('click' , () => {
    if(!emailPattern.test(input.value)) {
        erorrText.style.display = "block"
        errorLogo.style.display = "flex"
        errorBtn.classList.add("errorBtnPosition")
        inputBox.classList.add("errorInputBoxOutline")
    }else {
        erorrText.style.display = "none"
        errorLogo.style.display = "none"
        errorBtn.classList.remove("errorBtnPosition")
        inputBox.classList.remove("errorInputBoxOutline")
    }
})

