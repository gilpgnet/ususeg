import { query, execute, muestraError } from "./lib/util.js";
verifica();
async function verifica() {
  try {
    await query("servicios/clientes_verifica.php?XDEBUG_SESSION_START=name");
  } catch (e) {
    muestraError(e);
    window.location = "index.html";
  }
}