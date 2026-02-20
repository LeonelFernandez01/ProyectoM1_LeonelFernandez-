function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generarColor() {
  const h = aleatorio(0, 360);
  const s = aleatorio(40, 90);
  const l = aleatorio(35, 65);

  const hsl = `hsl(${h}, ${s}%, ${l}%)`;
  const hex = hslAHex(h, s, l);

  return { hsl, hex };
}

function hslAHex(h, s, l) {
  s /= 100;
  l /= 100;

  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

  const r = Math.round(f(0) * 255);
  const g = Math.round(f(8) * 255);
  const b = Math.round(f(4) * 255);

  const toHex = (x) => x.toString(16).padStart(2, "0").toUpperCase();

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Event listeners para mostrar mensaje al seleccionar cantidad o formato
document.getElementById("cantidad").addEventListener("change", function () {
  const cantidad = document.getElementById("cantidad").value;
  document.getElementById("mensaje").textContent =
    `✅ Cantidad seleccionada: ${cantidad} colores`;
  setTimeout(function () {
    document.getElementById("mensaje").textContent = "";
  }, 2000);
});

document.getElementById("formato").addEventListener("change", function () {
  const formato = document.getElementById("formato").value;
  const formatoTexto = formato.toUpperCase();
  document.getElementById("mensaje").textContent =
    `✅ Formato seleccionado: ${formatoTexto}`;
  setTimeout(function () {
    document.getElementById("mensaje").textContent = "";
  }, 2000);
});

function generarPaleta() {
  const contenedor = document.getElementById("paleta");
  contenedor.innerHTML = "";

  const cantidad = parseInt(document.getElementById("cantidad").value);
  const formatoElegido = document.getElementById("formato").value;

  for (let i = 0; i < cantidad; i++) {
    const color = generarColor();

    const card = document.createElement("div");
    card.classList.add("color-card");

    const box = document.createElement("div");
    box.classList.add("color-box");
    box.style.backgroundColor = color.hsl;

    const info = document.createElement("div");
    info.classList.add("color-info");

    const labelHex = document.createElement("p");
    labelHex.classList.add("color-label");
    labelHex.textContent = "HEX";

    const codigoHex = document.createElement("p");
    codigoHex.classList.add("color-codigo");
    codigoHex.textContent = color.hex;
    if (formatoElegido === "hex") {
      codigoHex.classList.add("codigo-resaltado");
    }

    const sep = document.createElement("hr");
    sep.classList.add("separador");

    const labelHsl = document.createElement("p");
    labelHsl.classList.add("color-label");
    labelHsl.textContent = "HSL";

    const codigoHsl = document.createElement("p");
    codigoHsl.classList.add("color-codigo");
    codigoHsl.textContent = color.hsl;
    if (formatoElegido === "hsl") {
      codigoHsl.classList.add("codigo-resaltado");
    }

    info.appendChild(labelHex);
    info.appendChild(codigoHex);
    info.appendChild(sep);
    info.appendChild(labelHsl);
    info.appendChild(codigoHsl);

    card.appendChild(box);
    card.appendChild(info);

    card.addEventListener("click", function () {
      const codigoACopiar = formatoElegido === "hex" ? color.hex : color.hsl;
      navigator.clipboard.writeText(codigoACopiar).then(function () {
        document.getElementById("mensaje").textContent =
          "✅ Copiado: " + codigoACopiar;
        setTimeout(function () {
          document.getElementById("mensaje").textContent = "";
        }, 2000);
      });
    });

    contenedor.appendChild(card);
  }

  // Mostrar mensaje de éxito
  document.getElementById("mensaje").textContent =
    "✅ Paleta generada exitosamente";
  setTimeout(function () {
    document.getElementById("mensaje").textContent = "";
  }, 2000);
}
