# 🏥 Sistema de Turnos para una Clínica

Este proyecto es una aplicación web simple que simula un **sistema de turnos para pacientes en una clínica médica**, implementado con **HTML**, **CSS (Bootstrap)** y **JavaScript**. Utiliza una estructura de **cola FIFO (First-In-First-Out)** para organizar los pacientes según su orden de llegada.

---

## 📋 Características

- Registro de pacientes con nombre, edad y síntoma principal.
- Organización automática de pacientes en una cola de espera.
- Visualización del paciente en turno actual y del próximo turno.
- Eliminación del paciente atendido de la lista.
- Tabla dinámica con la lista de pacientes en espera.
- Anuncio de turnos mediante síntesis de voz (Speech API de JavaScript).

---

## 🚀 ¿Cómo usarlo?

1. **Abrí el archivo `index.html`** en cualquier navegador moderno (Google Chrome, Firefox, etc.).
2. **Ingresá los datos del paciente** (Nombre, Edad y Síntoma).
3. Hacé clic en **"Agregar a la Cola"** para registrarlo en el sistema.
4. Para atender al siguiente paciente, clic en **"Atender Siguiente Paciente"**.

---

## 🧠 Estructura Interna

### 🏗️ Estructuras de Datos
Se utiliza una **clase `Queue` (cola)** que contiene:
- `enqueue()`: agrega un nuevo paciente.
- `dequeue()`: elimina al paciente que está siendo atendido.
- `peek()`: muestra el primer paciente de la cola.
- `isEmpty()`: verifica si la cola está vacía.
- `printQueue()`: muestra todos los pacientes en espera.

Cada paciente es un nodo (`NodePaciente`) con:
- Nombre
- Edad
- Síntoma principal
- Enlace al siguiente paciente

### 🖥️ Interfaz Gráfica

La aplicación tiene tres secciones:
- **Formulario de registro**: para ingresar nuevos pacientes.
- **Turno actual y siguiente turno**: muestra información del paciente actual.
- **Tabla de pacientes en espera**: lista dinámica que se actualiza automáticamente.

### 🔈 Funcionalidad Extra

- Se puede habilitar el anuncio por voz del paciente en turno usando la API de **SpeechSynthesis** de JavaScript (comentado por defecto).

---

## 🛠️ Tecnologías Usadas

- **HTML5**
- **CSS3 + Bootstrap 5**
- **JavaScript (ES6)**
- **SpeechSynthesis API** (opcional)

---

## 📁 Archivos principales

| Archivo | Descripción |
|--------|-------------|
| `index.html` | Estructura HTML de la aplicación |
| `FIFO.js` | Lógica de la cola y gestión de pacientes |
| `custom.css` | (Opcional) Estilos personalizados |

---

## 📸 Captura de pantalla

![Captura desde 2025-06-13 16-48-30](https://github.com/user-attachments/assets/fa6ba274-7a31-4ce4-9ea7-a564eae0c283)


---

## 📌 Nota

Este proyecto fue desarrollado con fines educativos y como ejemplo de implementación de estructuras de datos en el frontend. Puede ser ampliado para integrarse con una base de datos o backend real.

---
