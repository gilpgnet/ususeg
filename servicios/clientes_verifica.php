<?php
require_once("util.php");
$respuesta = new stdClass();
try {
  protege(["Cliente"]);
} catch (Exception $e) {
  atrapa_error($respuesta, $e);
}
devuelve($respuesta);