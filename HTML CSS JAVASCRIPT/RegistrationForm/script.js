const singUpButton = document.querySelector('.sign-up')
const heading = document.querySelector('h1')
const submitButton = document.querySelector('button')
const inputName = document.querySelector('.name')


singUpButton.addEventListener('click' , () => {
    inputName.style.display = "block"
    heading.innerText = "Sign Up"
    submitButton.innerText = "Sign Up"
})

submitButton.addEventListener('click' , () => {
    inputName.style.display = "none"
    heading.innerText = "Login"
    submitButton.innerText = "Login"
})

