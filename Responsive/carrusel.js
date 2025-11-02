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
