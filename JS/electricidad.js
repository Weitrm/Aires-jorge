// Boton de whatsapp para electricidad
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

// Formulario de contacto para electricidad
document.getElementById("form-electricidad").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const numero = "59893365696";
    const texto = `Hola, soy ${nombre}. ${mensaje}`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  });

