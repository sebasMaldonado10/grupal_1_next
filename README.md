# 🎮 Mundo Gamer

Mundo Gamer es una plataforma web moderna, visual y dinámica diseñada para entusiastas de los videojuegos. Los usuarios pueden explorar títulos destacados, filtrar juegos mediante una hilera de categorías con scroll horizontal interactivo, gestionar una lista de favoritos y simular compras agregando productos a un carrito de compras interactivo. El proyecto cuenta con un sistema unificado de modo claro y oscuro.

## 🔌 API Integrada
El proyecto consume datos en tiempo real de la API externa **RAWG API** (Videojuegos), obteniendo dinámicamente el catálogo de juegos, calificaciones, imágenes de portada, fechas de lanzamiento y géneros.

## 👥 Integrantes
* **Maldonado Sebastián**
* **Nadalig Carla**
* **Urquiza Mateo**

## 🛠️ Instrucciones para correr el proyecto en local

1. Clonar el repositorio:
   ```bash
   git clone [PEGAR_ACÁ_EL_ENLACE_DE_SU_REPO_DE_GITHUB]

### Instalación y uso

Sigue estos pasos para ejecutar el proyecto localmente:

_1. Clonar el repositorio:_
```
git clone git@github.com:sebasMaldonado10/grupal_1_next.git
cd grupal_1_next
```
_2. Instalar dependencias:_
```
npm install
```
_3.Crear un archivo .env.local en la raíz del proyecto y agregar su clave de API de RAWG:_
```
RAWG_API_KEY=tu_clave_api_aqui
```
_4. Iniciar el servidor:_
```
npm run dev
```

_Ver el proyecto:_
Abrí tunavegador en http://localhost:3000

## Construido con

* Next.js - Framework de React
* Tailwind CSS - Libreria de CSS
