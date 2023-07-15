  //---menu mobile---
  const menuIcon = document. querySelector(".mobile-menu-toggle");
  const navBar = document. querySelector(".menu-wrap");
  

  menuIcon.addEventListener("click",()=> {
      navBar.classList.toggle("show-hide");

      if (menuIcon.classList.contains("active")) {
          menuIcon.classList.remove("active");
          menuIcon.querySelector("span").textContent = "Menú";
      } else {
          menuIcon.classList.add("active");
          menuIcon.querySelector("span").textContent = "Cerrar";
      }      
  });

  var texto = document.getElementById("bienvenida").textContent;

  function reemplazarLetra(letraOriginal, letraReemplazo) {
      var nuevoTexto = "";
      for (var i = 0; i < texto.length; i++) {
          if (texto[i] === letraOriginal) {
          nuevoTexto += letraReemplazo;
          } else {
          nuevoTexto += texto[i];
          }
      }
      return nuevoTexto;
      }

  function cambiarLetraEnLoop(letrasReemplazo) {
      var indice = 0;
      setInterval(function() {
          var letraOriginal = "a";
          var letraReemplazo = letrasReemplazo[indice];

          var nuevoTexto = reemplazarLetra(letraOriginal, letraReemplazo);
          document.getElementById("bienvenida").textContent = nuevoTexto;

          indice++;
          if (indice >= letrasReemplazo.length) {
          indice = 0;
          }
      }, 500); // Cambia cada segundo (1000 milisegundos)
      }

      var letrasReemplazo = ["o", "e", "x", "a"];
      cambiarLetraEnLoop(letrasReemplazo);

  //---darkmode---
  // const body = document.querySelector("body");
  // const darkmode = document.querySelector(".darkmode-toggle");
  // darkmode.addEventListener("click", ()=>{
  //     body.classList.toggle("dark");
  // })