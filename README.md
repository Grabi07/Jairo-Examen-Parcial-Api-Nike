# Nike Store API + Frontend
Proyecto desarrollado, donde consiste en una API con conexión a MongoDB y un frontend básico para la visualización y gestión de productos Nike.

# Descripción del Proyecto
Este proyecto permite registrar, listar y gestionar productos Nike, tales como zapatillas, ropa y accesorios. Incluye:
- Backend en Node.js.
- Base de datos en MongoDB Atlas.
- Frontend HTML, CSS y JavaScript para interacción con la API.

# Estructura del Proyecto
Proyecto Nike API
--backend
-index.js
-nike.model.js

--frontend
-nike.html
-nike.css
-nike.js


# Instalación 
# Requisitos
Antes de ejecutar el proyecto, necesitas tener instalado:
--Node.js
--MongoDB Atlas

# Pasos de instalación
1. Abre la carpeta del backend en tu terminal.
2. Instala dependencias:
   ```bash
   npm install
3. ejecuta el servidor nodemon ./index.js
4. coloca en el navegador http://localhost:3000/api/nike y verifica que se ejecute
5. ahora puedes iniciar mediante el archivo nike.html al ejecutarlo te mostrara la pagina html creada con funciones crear, editar o eliminar productos

# Rutas de la API
Método	   Ruta	                                 Descripción
GET	    localhost:3000/api/nike                  Obtiene todos los productos
POST	  localhost:3000/api/nike                  Crea un nuevo producto
PUT	    localhost:3000/api/nike/id(Producto)	   Actualiza un producto
DELETE	localhost:3000/api/nike/id(Producto)	   Elimina un producto

# Agregar producto ejemplo
Como primer paso a ya tener ejecutado nodemon ./index.js, y el puerto ejecutando 3000, y la base de datos conectada Mongo Atlas
Debes descargar una extension llamada Thunder Client, darle a new request y poner la direccion (http://localhost:3000/api/nike), 
y asi seleccionando la ruta que deseas utilizar, cosa que fue escrita anteriormente, en este caso agrergar un producto 
{
  "producto": "Nike Air Force",
  "categoria": "Zapatillas",
  "talla": "40",
  "precio": 120,
  "stock": 10,
  "imagen": "https://sportactionecuador.com/wp-content/uploads/2022/06/zapatillas-nike-white-ct3839-100_1.png"
}

