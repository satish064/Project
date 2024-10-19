const body = document.querySelector('body')

function rgbColor() {
    let red =  Math.round(Math.random()*255)
    let green =  Math.round(Math.random()*255)
    let blue =  Math.round(Math.random()*255)
    body.style.backgroundColor = `rgb(${red},${green},${blue})`
}

function setColor(name) {
body.style.backgroundColor = name
}



