const addButton = document.querySelectorAll(".questions img");
const allAnswer = document.querySelectorAll(".answer p");
const question = document.querySelectorAll("b");

let v = 1

addButton.forEach((button,index) => {
  if(v) {
    allAnswer[index].style.display = "block"
  button.src = "./assets/images/icon-minus.svg";
  console.log(button.src);
  }
  else {
    allAnswer[index].style.display = "none"
    button.src = "./assets/images/icon-plus.svg";
  }
  v = 0
})

addButton.forEach((button, index) => {
  button.addEventListener("click", () => {
    myFunction(allAnswer);
    function myFunction() {
      var x = allAnswer[index];
      if (x.style.display === "none") {
        x.style.display = "block";
        button.src = "./assets/images/icon-minus.svg";
      } else {
        x.style.display = "none";
        button.src = "./assets/images/icon-plus.svg";
      }
    }
  });
});

question.forEach((button, index) => {
    button.addEventListener("click", () => {
      myFunction(allAnswer);
      function myFunction() {
        var x = allAnswer[index];
        if (x.style.display === "none") {
          x.style.display = "block";
          addButton[index].src = "./assets/images/icon-plus.svg";
        } else {
          x.style.display = "none";
          addButton[index].src = "./assets/images/icon-minus.svg";
        }
      }
    });
  });
