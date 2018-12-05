import { query, muestraError } from "../lib/util";
customElements.define("form-navegacion", class extends HTMLElement {
  async connectedCallback() {
    try {
      this.textContent = "Cargando información de sesión…";
      const respuesta = await query("servicios/sesion_busca.php?XDEBUG_SESSION_START=name");
      const cue = respuesta.cue;
      const roles = respuesta.roles;
      let contenido = '<a href="index.html">Inicio</a>';
      if (roles.indexOf("Cliente") >= 0) {
        contenido += ' <a href="clientes.html">Clientes</a>';
      }
      if (roles.indexOf("Invitado") >= 0) {
        contenido += ' <a href="invitados.html">Invitados</a>';
      }
      if (cue) {
        contenido += ' <a href="sesion.html">Sesión</a>';
      } else {
        contenido += ' <a href="inicia.html">Iniciar Sesión</a>';
      }
      this.innerHTML = contenido;
    } catch (e) {
      muestraError(e);
    }
  }
});