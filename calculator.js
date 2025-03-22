let string = "";
let buttons = document.querySelectorAll(".num");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let buttonValue = e.target.innerHTML;
    if (buttonValue === "C") {
      string = "";
      document.querySelector("#num1").value = string;
    }
    else if (buttonValue === "=") {
      try {
        string = eval(string).toString();
        document.querySelector("#num1").value = string;
      } catch (error) {
        document.querySelector("#num1").value = "Error";
        string = ""; 
      }
    }
    else if (buttonValue === "X") {
      string += "*";
      document.querySelector("#num1").value = string;
    }
    else {
      string += buttonValue;
      document.querySelector("#num1").value = string;
    }
  });
});
