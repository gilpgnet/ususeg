import { query, execute, muestraError } from "./lib/util.js";
const vista = document.vista;
carga();
async function carga() {
  try {
    const respuesta = await query("servicios/sesion_busca.php?XDEBUG_SESSION_START=name");
    if (respuesta.cue) {
      alert("Ya iniciaste sesión.");
      document.location = "index.html";
    } else {
      vista.addEventListener("submit", iniciaSesion);
    }
  } catch (e) {
    muestraError(e);
  }
}
async function iniciaSesion(evt) {
  try {
    evt.preventDefault();
    await execute("servicios/sesion_inicia.php?XDEBUG_SESSION_START=name", vista, "index.html");
  } catch (e) {
    muestraError(e);
  }
}