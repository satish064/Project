const inputValue = document.querySelector('input')
const checkButton = document.querySelector('button')

// function checkPalindrome(Palindrome) {
//     for(let i = 0;i<Palindrome.length;i++) {
//         console.log(Palindrome[i] , Palindrome[Palindrome.length - i - 1]);
//        if(Palindrome[i] != Palindrome[Palindrome.length - i - 1]){
//         return false
//        }
//     }return true
// }

checkButton.addEventListener("click" , () => {
    check()
})

function reverseString(str) {
    return str.split("").reverse().join("")
}

function check() {
    const value = inputValue.value
    const reverse = reverseString(inputValue.value)
    
    if(value == reverse) {
        alert("P A L I N D R O M E")
    }
    else {
        alert("Not Today!")
    }

}



