# ususeg
Ejemplo de control de acceso a una aplicación.

https://ususeg.000webhostapp.com/

Para entender mejor el código, se recomienda estudiar primero los proyectos:
- https://github.com/gilpgnet/web1,
- https://github.com/gilpgnet/web2,
- https://github.com/gilpgnet/servicio,
- https://github.com/gilpgnet/sincro y
- https://github.com/gilpgnet/archyfor.

Si tu servidor no soporta transacciones, comenta las líneas con
begin_transaction y commit.

## Ejecución
Para poder ejecutar el código, primero han de crearse la base de datos, el usuario y la tabla con el script del archivo
[sql/create.sql](/sql/create.sql).

Modifica el archivo [servicios/conecta.php](/servicios/conecta.php) para usar la conexión de tu servidor.
