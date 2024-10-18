const input = document.querySelector(".answer")

let string = ""

document.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
        if(string){
            string = eval(string)
        }
        else {
        input.value = 0
        }
        input.value = string
    }
    else if (e.target.innerHTML == 'AC') {
        string = ""
        input.value = string;
    }
    else if (e.target.innerHTML == 'DEL') {
        string = string.substring(0, string.length - 1);
        input.value = string;
    }
    else {
        string += e.target.innerHTML
        input.value = string
    }
})

