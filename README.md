# Project ReactJS - Sistema CRUD "Toallas Lizzy"
# Toallas Lizzy

- Proyecto: _Comercializadora de Toallas Lizzy_
- Curso: _ADSO 2025_
- Ficha: _2983215_
- Estudiante: _Elizabeth Hernandez Aroca_

## Descripción del Proyecto
Proyecto formativo desarrollado con React JS para el componente de desarrollo frontend. Sistema de gestión de productos con autenticación y operaciones CRUD completas.

---

## 📋 Información del Proyecto

- **Nombre:** project.reactjs
- **Ubicación:** /home/tony/Escritorio/project.reactjs
- **Framework:** React
- **Tipo:** Aplicación Web - CRUD de Productos
- **Gestor de paquetes:** npm

---

## 🛠️ Tecnologías y Versiones

### Entorno de Desarrollo
- **Sistema Operativo:** Linux (Ubuntu 18.04)
- **Node.js:** v16.20.2
- **npm:** v8.19.4
- **NVM (Node Version Manager):** v0.39.0

### Framework y Librerías
- **React:** v18.x (instalado con create-react-app)
- **React DOM:** v18.x
- **React Scripts:** v5.x

### Herramientas de Desarrollo
- **Create React App:** v5.1.0
- **Editor:** Visual Studio Code
- **Control de versiones:** Git (inicializado)

---

## 🚀 Instalación y Configuración

### Instalación de NVM (Node Version Manager)
```bash
# Descargar e instalar NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Cargar NVM (o reiniciar terminal)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Instalar Node.js 16
nvm install 16

# Usar Node.js 16
nvm use 16

# Establecer como versión predeterminada
nvm alias default 16

##  Enlaces Útiles

- **Documentación de React
- **Create React App
- **Node.js
- **NVM
---

"" 📝 Validaciones Implementadas
Campo                   Acción       Validación
MensajeUsuario (Login) Campo vacío   "Por favoringrese usuario y contraseña"
Contraseña (Login)     Campo vacío   "Por favor, ingrese usuario y contraseña"
EAN                    Obligatorio   "Por favor, complete todos los campos obligatorios"
Referencia             Obligatorio   "Por favor, complete todos los campos obligatorios"
Valor Unitario         Obligatorio   "Por favor, complete todos los campos obligatorios"
Eliminar producto      Confirmación  "¿Está seguro de eliminar este producto?"
---

> **💡 Importante:**
La lógica implementada corresponde únicamente a los módulos `Usuario` y `Producto`, aunque la `BD` incluye más tablas para un futuro desarrollo completo.

