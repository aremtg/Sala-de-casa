let meses = ["Enero","Febrero","Marzo","Abril",
            "Mayo","Junio","Julio","Agosto","Septiembre",
            "Octubre","Noviembre","Diciembre"]
let date = new Date();

let diaMes = date.getDate();
let mes = meses[date.getMonth()];
let año = date.getFullYear();

let fecha = document.querySelector(".fecha");
fecha.innerHTML =  "<h1>" + diaMes + " de " + mes + " del " + año + "</h1>";

function generarImagen() {
    html2canvas(document.querySelector(".hoja")).then(function(canvas) {
      // el img crear
      var img = new Image();
      img.src = canvas.toDataURL();
      var resultado = document.querySelector(".resultado");

      // se generooo
      resultado.appendChild(img);
    });
  }