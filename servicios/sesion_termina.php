<?php
require_once("util.php");
$respuesta = new stdClass();
$respuesta->cue = "";
$respuesta->roles = [];
try {
  session_start();
  session_destroy();
  $_SESSION["cue"] = "";
  $_SESSION["roles"] = [];
} catch (Exception $e) {
  atrapa_error($respuesta, $e);
}
devuelve($respuesta);