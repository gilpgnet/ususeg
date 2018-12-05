<?php
function verifica_roles($roles) {
  session_start();
  if (count($roles) > 0 && (!isset($_SESSION["roles"])
      || count(array_intersect($roles, $_SESSION["roles"])) === 0)) {
    throw new Exception("No tienes permiso para acceder.");
  }
}
function atrapa_error($respuesta, $e) {
  $respuesta->error = $e->getMessage();
}
function devuelve($respuesta) {
  mb_internal_encoding("UTF-8");
  header('Content-type: application/json');
  echo \json_encode($respuesta);
}