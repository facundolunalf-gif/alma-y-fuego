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
  direccion: "Av. Rivadavia 10399",
  ciudad: "Villa Luro, CABA",

  // Mapa de Google:
  // 1) Buscá el local en Google Maps  2) Compartir > Insertar un mapa
  // 3) Copiá SOLO el enlace que está dentro de src="..." y pegalo acá.
  mapaEmbed: "https://www.google.com/maps?q=Av.+Rivadavia+10399,+Villa+Luro,+CABA&output=embed",

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

  // ---- Reseñas de clientes (Google) ---------------------------------------
  // Para agregar una: copiá una línea entera y editala. estrellas va de 1 a 5.
  reseñas: [
    { nombre: "Karina Masi", estrellas: 5, cuando: "Hace un mes", texto: "Excelente, la comida abundante y riquísima. Fuimos varias personas y quedaron todas encantadas. ¡Expectativa vs. realidad, espectacular!" },
    { nombre: "Marina Fiorenza", estrellas: 5, cuando: "Hace un mes", texto: "Hermoso lugar, súper recomendable. Excelente atención de las chicas y la comida riquísima. Comimos el menú, platos abundantes. ¡Volveremos!" },
    { nombre: "Lily Loiacono", estrellas: 5, cuando: "Hace un mes", texto: "Un excelente lugar, totalmente recomendable. Exquisita comida, con porciones abundantes. El ambiente es muy cálido por la perfecta atención que brindan." },
    { nombre: "Griselda", estrellas: 5, cuando: "Local Guide", texto: "Precioso restaurante, súper bien atendido. Compartimos un menú ejecutivo: el bife estaba espectacular, carne tierna en su mejor punto, y la bocha de helado, generosa. Lo recomiendo." },
    { nombre: "Petunia", estrellas: 5, cuando: "Local Guide", texto: "Un lugar perfecto para cenar o almorzar. Muy rica comida, tanto de parrilla como de pastas, con opciones vegetarianas. La atención es impecable y el ambiente muy agradable." },
    { nombre: "Camila Mazondo", estrellas: 5, cuando: "Local Guide", texto: "Muy buena experiencia. Pedimos el vacío fino y las mollejas, ambos riquísimos y de muy buena calidad. El lugar es realmente hermoso. Sin duda volveremos." },
  ],

};
