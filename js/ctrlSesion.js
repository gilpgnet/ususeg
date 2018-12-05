import {Util} from "./lib/util.js";
import {Navegacion} from "./navegacion.js";
const terminaSesion = document.getElementById("terminaSesion");
Util.registraServiceWorker();
Navegacion.sesionInicia();
document.inicioDeSesion.addEventListener("submit", onIniciaSesion);
terminaSesion.addEventListener("click", onTerminaSesion);
Util.consulta("servicios/sesion_busca.php", actualiza);
function onIniciaSesion() {
  const datos = new FormData(document.inicioDeSesion);
  Util.fetchJson("servicios/sesion_inicia.php",
      {credentials: 'include', method: "POST", body: datos}, actualiza);
}
function onTerminaSesion() {
  Util.consulta("servicios/sesion_termina.php",
      obj => {
        document.getElementById("sesionCue").value = "";
        Util.setVisible(document.getElementById("campoTerminaSesion"),
            false);
        Util.setVisible(document.inicioDeSesion, true);
        Util.setVisible(document.getElementById("navUsuarios"), false);
        document.inicioDeSesion.cue.value = "";
        document.inicioDeSesion.match.value = "";
      });
}
function actualiza(respuestaSesion) {
  document.getElementById("sesionCue").value = respuestaSesion.cue;
  Util.setVisible(document.getElementById("campoTerminaSesion"),
      respuestaSesion.cue);
  Util.setVisible(document.inicioDeSesion, !respuestaSesion.cue);
  Navegacion.sesionActualiza(respuestaSesion);
}