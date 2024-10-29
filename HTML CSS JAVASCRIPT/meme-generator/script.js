const generateMemeBtn = document.querySelector('button')
const memeTitle = document.querySelector('.meme-title')
const memeImg = document.querySelector('img')
const writtenBy = document.querySelector('.Written-by')
const container = document.querySelector('.container')


if(memeTitle.innerText = "Loading....") {
    container.style.gap = 0;
}

async function getMemeData(){
const memeData = await fetch('https://meme-api.com/gimme/wholesomememes')
.then(res => res.json())
console.log(memeData);
container.style.gap = "1rem";
memeTitle.textContent = memeData.title;
memeImg.setAttribute("src",memeData.url)
writtenBy.textContent = `Meme By: ${memeData.author}` 
}

getMemeData()

generateMemeBtn.addEventListener('click' , () => {
    getMemeData()
})



