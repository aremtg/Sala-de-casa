// const button = document.querySelector("button");
// button.addEventListener("click", action);
// function action() {
//   alert("Hello!");
// };


var botonLuz = document.getElementById("switch");

function estado_bombillo(){
    document.body.style= `background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(227,227,227,1) 61%);`;
}

var luz = document.querySelector(".luz");

function estado_lampara(){
    luz.classList.toggle("display-none");
}