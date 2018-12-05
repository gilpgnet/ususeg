<?php
require_once("util.php");
$respuesta = new stdClass();
try {
  verifica_roles(["Cliente"]);
} catch (Exception $e) {
  atrapa_error($respuesta, $e);
}
devuelve($respuesta);