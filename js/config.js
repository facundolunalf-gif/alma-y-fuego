/* ============================================================================
   DATOS DEL LOCAL  —  Alma y Fuego
   ----------------------------------------------------------------------------
   Este es uno de los DOS archivos que vas a editar seguido (el otro es menu.js).
   Cambiá acá los datos y guardá el archivo. No hace falta tocar nada más.

   Reglas simples:
   - Todo lo que está entre comillas "..." es texto que podés cambiar.
   - No borres las comillas ni las comas al final de cada línea.
   - Lo que dice [COMPLETAR] hay que reemplazarlo por el dato real.
============================================================================ */

const CONFIG = {

  // ---- Identidad ----------------------------------------------------------
  nombre: "Alma y Fuego",
  tagline: "La esencia de la parrilla argentina",

  // ---- Contacto y reservas ------------------------------------------------
  // WhatsApp: número CON código de país, SIN el signo + ni espacios ni guiones.
  // Argentina: 549 + código de área sin el 0 + número sin el 15.
  // Ejemplo Buenos Aires 11 5555-4444  ->  "5491155554444"
  whatsapp: "[COMPLETAR: 549XXXXXXXXXX]",

  // Cómo se muestra el teléfono en pantalla (con formato lindo)
  telefono: "[COMPLETAR: +54 9 11 5555-4444]",

  email: "[COMPLETAR: hola@almayfuego.com.ar]",

  // ---- Dirección ----------------------------------------------------------
  direccion: "[COMPLETAR: Calle y número]",
  ciudad: "[COMPLETAR: Barrio, Ciudad]",

  // Mapa de Google:
  // 1) Buscá el local en Google Maps  2) Compartir > Insertar un mapa
  // 3) Copiá SOLO el enlace que está dentro de src="..." y pegalo acá.
  mapaEmbed: "",

  // ---- Redes --------------------------------------------------------------
  instagram: "https://www.instagram.com/almayfuegoresto",
  instagramUsuario: "@almayfuegoresto",

  // ---- Horarios -----------------------------------------------------------
  // Agregá o sacá filas libremente. Cada fila: { dias: "...", horario: "..." }
  horarios: [
    { dias: "Martes a Viernes", horario: "12:00 – 16:00  ·  20:00 – 00:00" },
    { dias: "Sábados y Domingos", horario: "12:00 – 00:00" },
    { dias: "Lunes", horario: "Cerrado" },
  ],

  // ---- Dato de carta ------------------------------------------------------
  cubierto: "$3.500",

  // ---- Sobre nosotros (texto de la sección "Nosotros") --------------------
  // Reemplazalo por la historia real del local cuando la tengan.
  nosotros: [
    "Alma y Fuego nació de una idea simple: que el asado vuelva a ser un punto de encuentro. Cortes elegidos, brasas de verdad y una cocina que respeta la tradición argentina sin apuro.",
    "Además de la parrilla, tenemos pastas caseras, una cava pensada con cariño y una cafetería para las tardes. Un lugar para quedarse.",
  ],

};
