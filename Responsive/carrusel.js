document.addEventListener("DOMContentLoaded", function() {
  const textos = [
    "vestibulum mollis, tortor ac congue commodo",
    "otra línea de texto para mostrar",
    "tercera opción del texto carrusel"
  ];
  const elem = document.getElementById("texto-carrusel");

  function cambiarTexto() {
    let nuevoIdx;
    do {
      nuevoIdx = Math.floor(Math.random() * textos.length);
    } while (elem.dataset.idx == nuevoIdx);
    elem.dataset.idx = nuevoIdx;
    elem.textContent = textos[nuevoIdx];
  }

  // Inicial
  elem.dataset.idx = -1;
  cambiarTexto();
  // Cambiar cada 2 segundos
  setInterval(cambiarTexto, 2000);
});
document.addEventListener("DOMContentLoaded", () => {
  const botonOpciones = document.getElementById("botonOpciones");
  const menuLateral = document.getElementById("menuLateral");

  if (botonOpciones && menuLateral) {
    botonOpciones.addEventListener("click", () => {
      menuLateral.classList.toggle("d-none");
      console.log("Menú lateral alternado por Fabricio González 👨‍💻");
    });
  }
});
