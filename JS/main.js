document.getElementById("btuForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const width = parseFloat(document.getElementById("width").value);
  const length = parseFloat(document.getElementById("length").value);
  const height = parseFloat(document.getElementById("height").value);

  if (width > 0 && length > 0 && height > 0) {
    const area = width * length * height;
    const btu = Math.round(area * 400);

    let recomendacion = "";

    if (btu <= 10000) {
      recomendacion = "Te recomendamos un equipo de <strong>9000 BTU</strong>.";
    } else if (btu <= 14000) {
      recomendacion = "Te recomendamos un equipo de <strong>12000 BTU</strong>.";
    } else if (btu <= 20000) {
      recomendacion = "Te recomendamos un equipo de <strong>18000 BTU</strong>.";
    } else if (btu <= 26000) {
      recomendacion = "Te recomendamos un equipo de <strong>24000 BTU</strong>.";
    } else {
      recomendacion = "<strong>La habitación es muy grande.</strong> Te recomendamos contactar con un profesional.";
    }

    document.getElementById("recomendacionOutput").innerHTML = recomendacion;

    const result = document.getElementById("result");
    result.classList.remove("d-none");
  } else {
    alert("Por favor, ingresá valores válidos.");
  }
});

const elements = document.querySelectorAll('.fade-in');

    const showOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;

      elements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
        }
      });
    };

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

// Mostrar calculadora de BTU al hacer clic en el botón
  const btnMostrar = document.getElementById("btnMostrarCalculadora");
  const btnCerrar = document.getElementById("btnCerrarCalculadora");
  const calculadora = document.getElementById("calculadora");
  const btnMostrarContainer = document.getElementById("btnMostrarContainer");

  btnMostrar.addEventListener("click", () => {
    calculadora.classList.add("visible");
    btnMostrarContainer.classList.add("d-none");
    calculadora.scrollIntoView({ behavior: "smooth" });
  });

  btnCerrar.addEventListener("click", () => {
    calculadora.classList.remove("visible");
    setTimeout(() => {
      btnMostrarContainer.classList.remove("d-none");
      btnMostrarContainer.scrollIntoView({ behavior: "smooth" });
    }, 600); 
  });