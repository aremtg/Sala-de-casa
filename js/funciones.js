// var button = document.querySelector("button");
// button.addEventListener("click", action);
// function action() {
//   alert("Hello!");
// };

function estado_bombillo() {
    var body = document.body;
    body.classList.toggle('bombillo-prendido');
  }

var luz = document.querySelector(".luz");

function estado_lampara(){
    luz.classList.toggle("display-none");
}

var estadoLicuadora = "apagado";
var caja_sonido = document.querySelector(".sonido");
var licuadora = document.getElementById("licuadora");

function controlarLicuadora() {
  if ( estadoLicuadora == "apagado" ) {
    estadoLicuadora = "encendido";
    caja_sonido.innerHTML = `<audio src="sound/botonLicuadora.mp3" autoplay></audio>`;

    setTimeout(() => {
      caja_sonido.innerHTML = `<audio src="sound/sonido-br.mp3" autoplay></audio>`;
    }, 300);+
    
    licuadora.classList.add("active");
   
  } else {
    estadoLicuadora = "apagado";
    caja_sonido.innerHTML = ` `;
    licuadora.classList.remove("active");
  }
}
