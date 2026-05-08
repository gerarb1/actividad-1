Actividad 1: Configuración de Entorno y Proyecto React

Este documento detalla el proceso técnico realizado por Gerardo Burgos para la configuración de un entorno de desarrollo profesional sobre WSL (Windows Subsystem for Linux) y la inicialización de una aplicación web moderna utilizando Vite.
1. Configuración del Sistema y Shell

Se realizó la transición a un entorno basado en Linux para mejorar la eficiencia del flujo de trabajo. Se optó por Fish Shell debido a su capacidad de autocompletado y facilidad de personalización.

<img width="657" height="224" alt="fishterminal" src="https://github.com/user-attachments/assets/371f29a6-590a-462b-9652-a01d860ec103" />

    Entorno: Ubuntu 22.04 LTS (WSL2).

    Shell: Fish Shell v3.7.0.

    Gestor de Plugins: Fisher v4.4.8.
    pwd
Comandos de Verificación:
```   
fish -v
fisher -v
```
. Gestión de Node.js y Paquetes

Para evitar conflictos de versiones y asegurar un entorno estable para el desarrollo Full-Stack, se utilizó nvm.fish.

    Node.js: v20.20.2 (LTS).

    Gestor de Paquetes: Se configuró pnpm v9.15.9 para optimizar el almacenamiento de dependencias.
    
```
    npm install -g pnpm@9 --force
pnpm -v
```
3. Inicialización del Proyecto Vite

Se utilizó Vite para crear un andamiaje de React, permitiendo un tiempo de recarga (HMR) extremadamente rápido.
```
# Creación del proyecto
pnpm create vite actividad-1 --template react

# Instalación de dependencias
cd actividad-1
pnpm install

# Ejecución del servidor de desarrollo
pnpm run dev
```
<img width="654" height="459" alt="creandovite" src="https://github.com/user-attachments/assets/589fb4d9-d5cc-4a32-a3fa-bda7f29d233a" />

# Creación del proyecto
pnpm create vite actividad-1 --template react

# Instalación de dependencias
cd actividad-1
pnpm install

# Ejecución del servidor de desarrollo
pnpm run dev
Estudiante: Gerardo Burgos

Carrera: Sistemas Informaticos 

Docente: Ing. Gary Guzman

Fecha: 8 de mayo de 2026

