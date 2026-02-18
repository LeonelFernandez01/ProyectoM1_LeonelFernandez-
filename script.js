

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

      const k = n => (n + h / 30) % 12;
      const a = s * Math.min(l, 1 - l);
      const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

      const r = Math.round(f(0) * 255);
      const g = Math.round(f(8) * 255);
      const b = Math.round(f(4) * 255);

      const toHex = x => x.toString(16).padStart(2, '0').toUpperCase();

      return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }

    function generarPaleta() {
      const contenedor = document.getElementById('paleta');
      contenedor.innerHTML = '';

      const cantidad = parseInt(document.getElementById('cantidad').value);

      for (let i = 0; i < cantidad; i++) {
        const color = generarColor();

        const card = document.createElement('div');
        card.classList.add('color-card');

        const box = document.createElement('div');
        box.classList.add('color-box');
        box.style.backgroundColor = color.hsl;

        const info = document.createElement('div');
        info.classList.add('color-info');

        const labelHex = document.createElement('p');
        labelHex.classList.add('color-label');
        labelHex.textContent = 'HEX';

        const codigoHex = document.createElement('p');
        codigoHex.classList.add('color-codigo');
        codigoHex.textContent = color.hex;

        const sep = document.createElement('hr');
        sep.classList.add('separador');

        const labelHsl = document.createElement('p');
        labelHsl.classList.add('color-label');
        labelHsl.textContent = 'HSL';

        const codigoHsl = document.createElement('p');
        codigoHsl.classList.add('color-codigo');
        codigoHsl.textContent = color.hsl;

        info.appendChild(labelHex);
        info.appendChild(codigoHex);
        info.appendChild(sep);
        info.appendChild(labelHsl);
        info.appendChild(codigoHsl);

        card.appendChild(box);
        card.appendChild(info);

        card.addEventListener('click', function () {
          navigator.clipboard.writeText(color.hex).then(function () {
            document.getElementById('mensaje').textContent = '✅ Copiado: ' + color.hex;
            setTimeout(function () {
              document.getElementById('mensaje').textContent = '';
            }, 2000);
          });
        });

        contenedor.appendChild(card);
      }
    }

    generarPaleta();
    console.log('Paleta de colores generada');
    

