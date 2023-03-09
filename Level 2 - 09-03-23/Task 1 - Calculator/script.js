console.log("I'm working");
let string = "";
let x = document.querySelectorAll(".button");
Array.from(x).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "AC") {
      string = "";
    } else if (e.target.innerHTML == "=") {
      string = eval(string);
      console.log(string);
    } else if (e.target.innerHTML == "%") {
      string = eval(string) / 100;
    } else if (e.target.innerHTML == "DEL") {
      if (string != "") string = string.slice(0, string.length - 1);
    } else {
      string += e.target.innerHTML;
    }
    document.querySelector("input").value = string;
    console.log(e.target.innerHTML);
  });
});
