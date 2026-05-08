
Actividad 1: Configuración de Entorno y Proyecto ReactEste documento detalla el proceso técnico realizado por Gerardo Burgos para la configuración de un entorno de desarrollo profesional sobre WSL (Windows Subsystem for Linux) y la inicialización de una aplicación web moderna utilizando Vite.1. Configuración del Sistema y ShellSe realizó la transición a un entorno basado en Linux para mejorar la eficiencia del flujo de trabajo. Se optó por Fish Shell debido a su capacidad de autocompletado y facilidad de personalización.Entorno: Ubuntu 22.04 LTS (WSL2).Shell: Fish Shell v3.7.0.Gestor de Plugins: Fisher v4.4.8.Comandos de Verificación:Bashpwd
fish -v
fisher -v
2. Gestión de Node.js y PaquetesPara evitar conflictos de versiones y asegurar un entorno estable para el desarrollo Full-Stack, se utilizó nvm.fish.Node.js: v20.20.2 (LTS).Gestor de Paquetes: Se configuró pnpm v9.15.9 para optimizar el almacenamiento de dependencias.Instalación de pnpm (Fuerza Bruta):Bashnpm install -g pnpm@9 --force
pnpm -v
3. Inicialización del Proyecto ViteSe utilizó Vite para crear un andamiaje de React, permitiendo un tiempo de recarga (HMR) extremadamente rápido.Bash# Creación del proyecto
pnpm create vite actividad-1 --template react

# Instalación de dependencias
cd actividad-1
pnpm install

# Ejecución del servidor de desarrollo
pnpm run dev
Nota: El servidor corre por defecto en http://localhost:5173/.4. Control de Versiones y Seguridad (SSH)Para el despliegue en GitHub, se configuró una llave SSH para garantizar una comunicación cifrada y segura, eliminando la necesidad de ingresar credenciales manualmente en cada operación.Generación de llave: RSA 4096 bits.Protocolo: Git sobre SSH.Flujo de Trabajo en Git:Bashgit init
git add .
git commit -m "Entrega actividad-1 completada"
git branch -M main
git remote add origin git@github.com:gerarb1/actividad-1.git
git push -u origin main
Resumen TécnicoHerramientaVersiónNode.js20.20.2NPM10.8.2PNPM9.15.9Vite8.0.11Estudiante: Gerardo BurgosCarrera: Ingeniería en Informática y Sistemas (Último año)Docente: Ing. Gary GuzmanFecha: 8 de mayo de 2026
