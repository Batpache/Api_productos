# Api_productos
Bacab López William Marco Manuel
4° "C" - DSM
Apps web


Objetivo
Aplicar correctamente los métodos HTTP (GET, POST, PUT, PATCH, DELETE), códigos de estado, headers y validaciones, construyendo una API REST del recurso /productos en 5 horas.
Resumen de la tarea
Desarrolla una API para el recurso /productos (puedes cambiar el nombre por /alumnos si lo prefieres) que permita crear, leer, actualizar parcial/completa y borrar elementos. La persistencia puede ser en memoria o en un archivo JSON. La API debe incluir validaciones, manejo de errores, y pruebas manuales con Postman o curl.
Cronograma
•	H1 – Preparación y GET 
•	Inicializa proyecto y servidor Express.
•	Implementa GET /productos (con filtros ?minPrecio&maxPrecio&activo) y GET /productos/:id.
•	Entregable: servidor corre y devuelve lista/detalle correctamente.
•	H2 – POST + validaciones 
•	Implementa POST /productos con validación (nombre, precio >= 0, stock >= 0, activo boolean).
•	Responde 201 Created, incluye header Location, y maneja 400/422 en errores de datos.
•	Entregable: creación correcta y casos de error documentados.
•	H3 – PUT + DELETE 
•	PUT /productos/:id reemplaza el recurso completo (idempotente).
•	Si no existe, crea (201); si existe, 200.
•	DELETE /productos/:id → 204 No Content (idempotente).
•	Entregable: upsert por PUT y borrado correcto.
•	H4 – PATCH + manejo de errores 
•	PATCH /productos/:id permite modificaciones parciales (solo claves válidas).
•	Middleware de manejo de errores y respuesta JSON consistente.
•	Entregable: parches válidos y errores coherentes.
•	H5 – Pruebas y documentación 
•	Pruebas con Postman o curl.
•	README: rutas, ejemplos, códigos, explicación de idempotencia (PUT/DELETE sí, POST no).
•	Entregables finales: repo + README + colección Postman (o script test.sh).
Requisitos técnicos mínimos
•	Node.js 18+
•	Postman o curl
•	Editor de código VS Code 
Especificación mínima del recurso
Estructura sugerida del recurso :
{
  "id": "string|uuid",
  "nombre": "string",
  "precio": "number",
  "stock": "number",
  "activo": "boolean"
}
