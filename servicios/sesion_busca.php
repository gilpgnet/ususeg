<?php
require_once("util.php");
$respuesta = new stdClass();
try {
  session_start();
  $respuesta->cue = isset($_SESSION["cue"]) ? $_SESSION["cue"] : "";
  $respuesta->roles = isset($_SESSION["roles"]) ? $_SESSION["roles"] : [];
} catch (Exception $e) {
  atrapa_error($respuesta, $e);
}
devuelve($respuesta);