const addButton = document.querySelectorAll(".questions img");
const allAnswer = document.querySelectorAll(".answer p");
const question = document.querySelectorAll("b");



addButton.forEach((button, index) => {
  button.addEventListener("click", () => {
    myFunction(allAnswer);
    function myFunction() {
      var x = allAnswer[index];
      if (x.style.display === "none") {
        x.style.display = "block";
        button.src = "./assets/images/icon-plus.svg";
      } else {
        x.style.display = "none";
        button.src = "./assets/images/icon-minus.svg";
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
