// var button = document.querySelector("button");
// button.addEventListener("click", action);
// function action() {
//   alert("Hello!");
// };


var botonLuz = document.getElementById("switch");

function estado_bombillo() {
    const body = document.body;
    body.classList.toggle('bombillo-prendido');
  }

var luz = document.querySelector(".luz");

function estado_lampara(){
    luz.classList.toggle("display-none");
}