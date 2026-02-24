# ProyectoM1_LeonelFernandez-
# Generador de Paletas de Colores

Aplicación web interactiva para generar paletas de colores aleatorias en formatos HEX y HSL. Ideal para diseñadores, desarrolladores y creativos que necesiten inspiración de colores rápidamente.

---

## 📋 Tabla de Contenidos

- [Manual de Instrucciones de Uso](#manual-de-instrucciones-de-uso)
- [Decisiones Técnicas](#decisiones-técnicas)
- [Estructura del DOM](#estructura-del-dom)
- [Manipulación del DOM](#manipulación-del-dom)
- [Pasos para Descargar y Ejecutar](#pasos-para-descargar-y-ejecutar)
- [Pasos para Desplegar la Aplicación](#pasos-para-desplegar-la-aplicación)
- [Autor](#autor)

---

## 📖 Manual de Instrucciones de Uso

### Funcionalidades principales:

1. **Seleccionar cantidad de colores:**
   - Haz clic en el selector "Cantidad de colores"
   - Elige entre 6, 8 o 9 colores para tu paleta
   - Verás una confirmación del color seleccionado

2. **Seleccionar formato:**
   - Haz clic en el selector "Formato"
   - Elige entre **HEX** o **HSL**
   - El formato seleccionado aparecerá resaltado en las tarjetas de color

3. **Generar paleta:**
   - Presiona el botón "Generar Paleta"
   - La aplicación generará colores aleatorios con los parámetros seleccionados
   - Recibirás una confirmación de que la paleta fue generada exitosamente

4. **Copiar códigos de color:**
   - Haz clic en cualquier tarjeta de color
   - El código del formato seleccionado se copiará automáticamente al portapapeles
   - Verás un mensaje de confirmación con el código copiado

### Ejemplo de uso:
```
1. Selecciona "8" colores
2. Selecciona formato "HEX"
3. Haz clic en "Generar Paleta"
4. Haz clic en una tarjeta para copiar el código HEX
5. ¡Listo! Pega el código donde lo necesites
```

---

## 🔧 Decisiones Técnicas

### Stack tecnológico:
- **HTML5**: Estructura semántica de la aplicación
- **CSS3**: Diseño responsive y moderno con Flexbox
- **JavaScript (Vanilla)**: Lógica de generación y manipulación del DOM

### Decisiones de desarrollo:

1. **Sistema de colores HSL:**
   - Facilita la generación de colores con saturación y luminosidad controladas
   - Rango de saturación: 40-90% (evita colores muy desaturados)
   - Rango de luminosidad: 35-65% (evita colores muy oscuros o muy claros)

2. **Conversión HSL a HEX:**
   - Implementación de algoritmo matemático personalizado
   - Convierte valores HSL a RGB y luego a hexadecimal
   - Garantiza precisión en la representación de colores

3. **Interfaz de usuario:**
   - Diseño limpio y minimalista
   - Paleta de colores principal: púrpura (#6c3fcf)
   - Efectos hover y click para mejor retroalimentación visual
   - Mensajes de confirmación para acciones del usuario

4. **Clipboard API:**
   - Uso de `navigator.clipboard.writeText()` para copiar códigos
   - Compatible con navegadores modernos

5. **Responsividad:**
   - Flexbox para adaptarse a diferentes tamaños de pantalla
   - Interfaz adaptable en móviles, tablets y desktop

---

## 🏗️ Estructura del DOM

La estructura HTML del proyecto está organizada de la siguiente manera:

```html
<body>
  <h1>Generador de Paletas de Colores</h1>
  <p class="subtitulo">Descripción de la aplicación</p>
  
  <!-- CONTROLES: Selectores y botón de generación -->
  <div class="controles">
    <label for="cantidad">Cantidad de colores:</label>
    <select id="cantidad">...</select>
    
    <label for="formato">Formato:</label>
    <select id="formato">...</select>
    
    <button onclick="generarPaleta()">Generar Paleta</button>
  </div>
  
  <!-- PALETA: Contenedor donde se insertan las tarjetas de color dinámicamente -->
  <div id="paleta" class="paleta"></div>
  
  <!-- MENSAJE: Área de mensaje para feedback del usuario -->
  <p class="mensaje-copia" id="mensaje"></p>
  
  <!-- FOOTER: Pie de página -->
  <footer>...</footer>
</body>
```

### Elementos principales:

| Elemento | ID/Clase | Función |
|----------|----------|----------|
| `<select>` | `id="cantidad"` | Selector para elegir cantidad de colores (6, 8, 9) |
| `<select>` | `id="formato"` | Selector para elegir formato (HEX, HSL) |
| `<button>` | `onclick="generarPaleta()"` | Genera la paleta según los parámetros seleccionados |
| `<div>` | `id="paleta"` | Contenedor donde se insertan dinámicamente las tarjetas |
| `.color-card` | Clase | Tarjeta individual de color (creada dinámicamente) |
| `.color-box` | Clase | Cuadro de color en la tarjeta |
| `.color-info` | Clase | Información del color (HEX y HSL) |
| `<p>` | `id="mensaje"` | Muestra mensajes de confirmación al usuario |

---

## 🔨 Manipulación del DOM

La aplicación manipula el DOM de varias formas para crear una experiencia interactiva:

### 1. **Selección de elementos:**
```javascript
document.getElementById("cantidad")
document.getElementById("formato")
document.getElementById("paleta")
document.getElementById("mensaje")
```

### 2. **Event Listeners (Escuchadores de eventos):**

- **Cambio en cantidad de colores:**
  ```javascript
  document.getElementById("cantidad").addEventListener("change", function () {
    // Muestra mensaje de confirmación durante 2 segundos
    document.getElementById("mensaje").textContent = `✅ Cantidad seleccionada: ${cantidad} colores`;
  });
  ```

- **Cambio en formato:**
  ```javascript
  document.getElementById("formato").addEventListener("change", function () {
    // Muestra el formato seleccionado
    document.getElementById("mensaje").textContent = `✅ Formato seleccionado: ${formatoTexto}`;
  });
  ```

### 3. **Creación dinámica de elementos:**

La función `generarPaleta()` crea dinámicamente las tarjetas:

```javascript
// Crear tarjeta de color
const card = document.createElement("div");
card.classList.add("color-card");

// Crear cuadro de color
const box = document.createElement("div");
box.classList.add("color-box");
box.style.backgroundColor = color.hsl;  // Asignar color dinámicamente

// Crear información del color
const info = document.createElement("div");
info.classList.add("color-info");

// Añadir elementos al contenedor
card.appendChild(box);
card.appendChild(info);
contenedor.appendChild(card);
```

### 4. **Manipulación de clases:**

- **Resaltar formato seleccionado:**
  ```javascript
  if (formatoElegido === "hex") {
    codigoHex.classList.add("codigo-resaltado");
  }
  ```

### 5. **Event Listeners en elementos dinámicos:**

```javascript
// Copiar código al hacer clic en tarjeta
card.addEventListener("click", function () {
  const codigoACopiar = formatoElegido === "hex" ? color.hex : color.hsl;
  navigator.clipboard.writeText(codigoACopiar);
  // Mostrar mensaje de confirmación
  document.getElementById("mensaje").textContent = "✅ Copiado: " + codigoACopiar;
});
```

### 6. **Modificación de contenido:**

```javascript
// Limpiar paleta anterior
contenedor.innerHTML = "";

// Asignar texto a elementos
codigoHex.textContent = color.hex;
codigoHsl.textContent = color.hsl;

// Mostrar/Ocultar mensajes con temporizadores
setTimeout(function () {
  document.getElementById("mensaje").textContent = "";
}, 2000);
```

---

## 💻 Pasos para Descargar y Ejecutar

### Requisitos previos:
- Git instalado en tu sistema
- Un navegador web moderno (Chrome, Firefox, Safari, Edge)

### Instrucciones:

1. **Clonar el repositorio:**
```bash
git clone https://github.com/LeonelFernandez01/ProyectoM1_LeonelFernandez-.git
cd "ProyectoM1_LeonelFernandez-"
```

2. **Abrir la aplicación localmente:**

**Opción A - Abrir directamente:**
- Navega a la carpeta del proyecto
- Haz doble clic en `index.html`
- Se abrirá en tu navegador predeterminado

**Opción B - Usar Live Server (recomendado):**

Si usas **Visual Studio Code**:
```bash
# Instala la extensión "Live Server" desde VS Code
# Click derecho en index.html > Open with Live Server
```


3. **Verificar que funciona:**
   - Verás el título "Generador de Paletas de Colores"
   - Los selectores y botón deben ser interactivos
   - Prueba generar una paleta haciendo clic en "Generar Paleta"

---

## 🚀 Pasos para Desplegar la Aplicación

### Desplegar en GitHub Pages (Gratis)

1. **El repositorio ya existe en:**
```
https://github.com/LeonelFernandez01/ProyectoM1_LeonelFernandez-.git
```

2. **Habilitar GitHub Pages:**
   - Ve a **Settings** del repositorio en GitHub
   - En la sección "Pages" selecciona:
     - Source: `main` branch
     - Folder: `/ (root)`
   - Guarda los cambios

3. **Acceder a la aplicación desplegada:**
   - Tu sitio estará disponible en:
```
https://leonelfernandez01.github.io/ProyectoM1_LeonelFernandez-/
```

---

## ✨ Características

- ✅ Generación de colores aleatorios
- ✅ Múltiples formatos (HEX y HSL)
- ✅ Copiar códigos con un solo clic
- ✅ Interfaz responsive y moderna
- ✅ Mensajes de confirmación en tiempo real
- ✅ Diseño minimalista y atractivo

---

## 📝 Notas técnicas

- La aplicación funciona completamente en el navegador (no requiere servidor backend)
- Los colores se generan usando valores HSL controlados
- La conversión a HEX es 100% precisa
- Compatible con todos los navegadores modernos

---

## 👨‍💻 Autor

**Leonel Fernández**
- Proyecto de Henry M1
- Generador de Paleta de Colores

---

## 📄 Licencia

Este proyecto está libre de usar para fines personales y educativos.