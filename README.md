# ProyectoM1_LeonelFernandez-
# Generador de Paletas de Colores

Aplicación web interactiva para generar paletas de colores aleatorias en formatos HEX y HSL. Ideal para diseñadores, desarrolladores y creativos que necesiten inspiración de colores rápidamente.

---

## 📋 Tabla de Contenidos

- [Manual de Instrucciones de Uso](#manual-de-instrucciones-de-uso)
- [Decisiones Técnicas](#decisiones-técnicas)
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

## 💻 Pasos para Descargar y Ejecutar

### Requisitos previos:
- Git instalado en tu sistema
- Un navegador web moderno (Chrome, Firefox, Safari, Edge)

### Instrucciones:

1. **Clonar el repositorio:**
```bash
git clone https://github.com/tu-usuario/Proyecto Henry M1.git
cd "Proyecto Henry M1"
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

### Opción 1: Desplegar en GitHub Pages (Gratis)

1. **Crear un repositorio en GitHub:**
   - Ve a [github.com](https://github.com)
   - Crea un nuevo repositorio público llamado `generador-paletas`

2. **Subir los archivos:**
```bash
git init
git add .
git commit -m "Initial commit: Generador de paletas"
git branch -M main
git remote add origin https://github.com/tu-usuario/generador-paletas.git
git push -u origin main
```

3. **Habilitar GitHub Pages:**
   - Ve a **Settings** del repositorio
   - En la sección "Pages" selecciona:
     - Source: `main` branch
     - Folder: `/ (root)`
   - Guarda los cambios

4. **Acceder a la aplicación:**
   - Tu sitio estará disponible en: `https://tu-usuario.github.io/generador-paletas`

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