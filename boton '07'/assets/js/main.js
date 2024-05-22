document.querySelector("button.expand").addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    e.stopPropagation();
    const button = e.currentTarget;
    button.classList.add("loading");
    button.disabled = true;
    setTimeout(() => {
      button.classList.add("loaded");
      setTimeout(() => {
        button.classList.add("finished");
        setTimeout(() => {
          button.classList.remove("finished");
          button.classList.remove("loaded");
          button.classList.remove("loading");
          button.disabled = false;

        }, 1500);
      }, 700);
      // Crear un enlace de descarga programáticamente
      const link = document.createElement('a');
      link.href = 'documento.pdf'; // Ruta al archivo PDF
      link.download = 'documento.pdf'; // Nombre del archivo para la descarga
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1500);
  },
  false
);
