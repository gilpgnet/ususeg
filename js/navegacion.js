import {Util} from "./lib/util.js";
export class Navegacion {
  static sesionInicia() {
    Util.setVisible(document.getElementById("navUsuarios"), false);
  }
  static sesionActualiza(respuesta) {
    Util.setVisible(document.getElementById("navUsuarios"),
        respuesta.roles.indexOf("Administrador") >= 0);
  }
}