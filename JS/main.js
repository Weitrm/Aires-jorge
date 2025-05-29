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
