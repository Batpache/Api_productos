// index.js

const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 3000;

let productos = [
    { id: uuidv4(), nombre: "Laptop Gamer", precio: 1200, strock: 15, activo: true},
    { id: uuidv4(), nombre: "Mouse Óptico", precio: 25, stock: 50, activo: true },
    { id: uuidv4(), nombre: "Teclado Mecánico", precio: 80, stock: 30, activo: false },
    { id: uuidv4(), nombre: "Monitor 4K", precio: 450, stock: 10, activo: true },
];

app.get('/productos', (req, res) => {

    const { minPrecio, maxPrecio, activo} = req.query;

    let productosFiltrados = [...productos];

    if (minPrecio) {
        productosFiltrados = productosFiltrados.filter(p => p.precio >= parseFloat(minPrecio));
    }

    if (maxPrecio) {
        productosFiltrados = productosFiltrados.filter(p => p.precio <= parseFloat(maxPrecio));
    }

    if (activo) {
        const esActivo = activo == 'true';
        productosFiltrados = productosFiltrados.filter(p => p.activo === esActivo);
    }

    res.status(200).json(productosFiltrados);
});

app.get('/productos/:id', (req, res) => {
  const { id } = req.params;
  const producto = productos.find(p => p.id === id);

  if (!producto) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  res.status(200).json(producto);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

