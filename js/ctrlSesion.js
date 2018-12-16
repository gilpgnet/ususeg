import { query, execute, muestraError } from "./lib/util.js";
const vista = document.vista;
carga();
async function carga() {
  try {
    const respuesta = await query("servicios/sesion_busca.php?XDEBUG_SESSION_START=name");
    if (respuesta.cue) {
      vista.cue.value = respuesta.cue;
      vista.terminaSesion.addEventListener("click", terminaSesion);
    } else {
      alert("No has iniciado sesión.");
      document.location = "index.html";
    }
  } catch (e) {
    muestraError(e);
  }
}
async function terminaSesion(evt) {
  try {
    await execute("servicios/sesion_termina.php?XDEBUG_SESSION_START=name", vista, "index.html");
  } catch (e) {
    muestraError(e);
  }
}