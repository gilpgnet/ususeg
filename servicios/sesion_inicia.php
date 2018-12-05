<?php
require_once "util.php";
$respuesta = new stdClass();
try {
  session_start();
  require_once "conecta.php";
  $con->verifica();
  $cue = trim(filter_input(INPUT_POST, "cue"));
  $match = trim(filter_input(INPUT_POST, "match"));
  $con->query(
    "SELECT USU_NOMBRE
        FROM USUARIO
        WHERE USU_CUE = ? AND SHA1(?) = USU_MATCH",
    "ss", $cue, $match);
  if (!$con->fetch_object()) {
    session_destroy();
    throw new Exception("Combinación cue/match incorrecta.");
  }
  $respuesta->cue = $cue;
  $respuesta->roles = [];
  $con->query("SELECT ROL_ID FROM USUARIO_ROL WHERE USU_CUE = ?", "s", $cue);
  while ($obj = $con->fetch_object()) {
    $respuesta->roles[] = $obj->ROL_ID;
  }
  $_SESSION["cue"] = $cue;
  $_SESSION["roles"] = $respuesta->roles;
} catch (Exception $e) {
  $_SESSION["cue"] = "";
  $_SESSION["roles"] = [];
  atrapa_error($respuesta, $e);
}
devuelve($respuesta);