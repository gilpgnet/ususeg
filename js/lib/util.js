export function muestraError(e) {
  console.error(e);
  alert(e.message);
}
export async function fetchJson(url, datos) {
  const respuestaHttp = await fetch(url, datos);
  if (respuestaHttp.ok) {
    const respuesta = await respuestaHttp.json();
    if (respuesta.error) {
      throw new Error(respuesta.error);
    } else {
      return respuesta;
    }
  } else {
    throw new Error(respuestaHttp.statusText);
  }
}
export async function query(url) {
  return fetchJson(url, { credentials: 'include' });
}
export async function execute(url, forma, regreso) {
  await fetchJson(url,
    { credentials: 'include', method: "POST", body: new FormData(forma) });
  window.location = regreso;
}
