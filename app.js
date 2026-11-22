const express = require('express');
const app = express();

// Middleware para leer datos JSON en las peticiones
app.use(express.json());

// Ruta raíz GET '/'
app.get('/', (req, res) => {
  res.send('Servidor activo');
});

// Ruta GET /api/productos para listar productos
app.get('/api/productos', (req, res) => {
  res.json([
    { id: 1, nombre: 'Laptop', precio: 1200 },
    { id: 2, nombre: 'Mouse', precio: 25 },
    { id: 3, nombre: 'Teclado', precio: 45 }
  ]);
});

// Ruta POST /api/productos para recibir nuevos datos
app.post('/api/productos', (req, res) => {
  const nuevoProducto = req.body;
  res.json({
    mensaje: 'Producto recibido con éxito',
    producto: nuevoProducto
  });
});

// Configurar el puerto de escucha del servidor
app.listen(3000, () => {
 //Actualizacion de tarea
  console.log('Holaaaa');
});