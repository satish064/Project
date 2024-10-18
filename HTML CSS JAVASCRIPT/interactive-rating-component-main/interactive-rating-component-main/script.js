const starSelecting = document.querySelectorAll("span")
const ratingCount = document.querySelector(".orange-text")
const submitButton = document.querySelector("button")
const thankYouContainer = document.querySelector(".thank-you-container")

starSelecting.forEach(select => {
    select.addEventListener("click", (e) => {        
        for(let i = 0;i<starSelecting.length;i++) {
            starSelecting[i].classList.remove("selected")
        }
        select.classList.toggle("selected")
        ratingCount.innerText = `You select ${e.target.innerText} out of 5`
    })
});

submitButton.addEventListener("click", (e) => {
    document.querySelector("main").style.display = "none"
    thankYouContainer.style.display = "block"
    if (!(ratingCount.innerText)) {
        ratingCount.innerText = `You select 0 out of 5`
    }
})







