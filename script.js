function calcularTiempo() {
    let tiempo = new Date();
  
    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();
  
    let amPm = hora < 12 ? "AM" : "PM";

    if (hora > 12) {
        hora -= 12;
    }

    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;
  
    let pantallaReloj = hora + ":" + minuto + ":" + segundo + " " + amPm;
    let relojdigital = document.querySelector(".reloj");
    relojdigital.innerHTML = pantallaReloj;
  }
  
  setInterval(calcularTiempo, 1000);