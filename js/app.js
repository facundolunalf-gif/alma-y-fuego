/* ============================================================================
   LÓGICA DEL SITIO  —  Alma y Fuego
   ----------------------------------------------------------------------------
   Este archivo arma la carta y conecta los datos con la página.
   NO hace falta editarlo para cambiar textos, precios, fotos ni horarios.
   (Todo eso se edita en config.js y menu.js.)

   Solo tocá esto si querés cambiar CÓMO funciona algo (programación).
============================================================================ */

document.addEventListener("DOMContentLoaded", function () {

  /* Herramienta corta para buscar elementos */
  const $ = (sel) => document.querySelector(sel);
  const crear = (tag, clase) => { const e = document.createElement(tag); if (clase) e.className = clase; return e; };

  /* ---- Escapar texto para que nunca rompa el HTML ---- */
  const seguro = (t) => String(t == null ? "" : t)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  /* ---- Número de WhatsApp listo para usar ---- */
  const wppDigitos = (CONFIG.whatsapp || "").replace(/\D/g, "");
  const wppBase = wppDigitos.length >= 8 ? "https://wa.me/" + wppDigitos : (CONFIG.instagram || "#");
  const wppLink = (mensaje) => wppBase + (wppDigitos.length >= 8 && mensaje ? "?text=" + encodeURIComponent(mensaje) : "");

  /* ========================================================================
     1) VOLCAR LOS DATOS DEL LOCAL (config.js) EN LA PÁGINA
  ======================================================================== */

  // Textos con  data-config="clave"  toman su valor de CONFIG
  document.querySelectorAll("[data-config]").forEach((el) => {
    const clave = el.getAttribute("data-config");
    if (CONFIG[clave]) el.textContent = CONFIG[clave];
  });

  // Instagram
  const igUrl = CONFIG.instagram || "#";
  ["#linkInstagram", "#pieInstagram"].forEach((s) => { const e = $(s); if (e) e.href = igUrl; });

  // WhatsApp (botón flotante + pie + dato de reservas)
  const wppSimple = wppLink("Hola! Quería hacer una consulta.");
  ["#wppFlotante", "#pieWhatsapp", "#linkWhatsappDato"].forEach((s) => { const e = $(s); if (e) e.href = wppSimple; });
  const datoWpp = $("#linkWhatsappDato"); if (datoWpp) datoWpp.textContent = CONFIG.telefono || "Escribinos";

  // Teléfono
  const tel = $("#linkTelefono");
  if (tel) { tel.textContent = CONFIG.telefono || ""; tel.href = "tel:" + (CONFIG.telefono || "").replace(/\s|-/g, ""); }

  // Email
  const emailTxt = CONFIG.email || "";
  ["#linkEmail", "#pieEmail"].forEach((s) => { const e = $(s); if (e) { e.textContent = e.id === "pieEmail" ? "Email" : emailTxt; e.href = "mailto:" + emailTxt; } });

  // Nosotros
  const cajaNos = $("#textoNosotros");
  if (cajaNos && Array.isArray(CONFIG.nosotros)) {
    cajaNos.innerHTML = CONFIG.nosotros.map((p) => "<p>" + seguro(p) + "</p>").join("");
  }

  // Horarios
  const listaHs = $("#listaHorarios");
  if (listaHs && Array.isArray(CONFIG.horarios)) {
    listaHs.innerHTML = CONFIG.horarios.map((h) =>
      '<li><span class="dia">' + seguro(h.dias) + '</span><span class="hs">' + seguro(h.horario) + "</span></li>"
    ).join("");
  }

  // Mapa de Google (si está cargado en config)
  const cajaMapa = $("#cajaMapa");
  if (cajaMapa && CONFIG.mapaEmbed && CONFIG.mapaEmbed.trim() !== "") {
    cajaMapa.innerHTML = '<iframe src="' + seguro(CONFIG.mapaEmbed) +
      '" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Ubicación de Alma y Fuego"></iframe>';
  }

  // Año actual en el pie
  const anio = $("#anio"); if (anio) anio.textContent = new Date().getFullYear();

  /* ========================================================================
     2) MENÚ EJECUTIVO (promo del mediodía)
  ======================================================================== */
  const eje = MENU.ejecutivo;
  const cajaEje = $("#cajaEjecutivo");
  if (eje && cajaEje) {
    const adic = (eje.adicionales || []).map((a) =>
      seguro(a.nombre) + " <span>" + seguro(a.precio) + "</span>").join("  ·  ");

    cajaEje.innerHTML =
      '<div class="eje__pitch">' +
        '<p class="eje__etiqueta">Menú ejecutivo</p>' +
        '<h2 class="eje__titulo">Mediodía en Alma y Fuego</h2>' +
        '<p class="eje__cuando">' + seguro(eje.dias) + ", de " + seguro(eje.horario) + "</p>" +
        '<p class="eje__precio">' + seguro(eje.precio) + "</p>" +
        '<p class="eje__incluye">' + seguro(eje.incluye) + "</p>" +
        (adic ? '<p class="eje__adic">Adicionales: ' + adic + "</p>" : "") +
      "</div>" +
      '<div class="eje__detalle">' +
        '<div class="eje__col"><h4>Principales a elección</h4>' +
          '<ul class="eje__lista">' + (eje.principales || []).map((p) => "<li>" + seguro(p) + "</li>").join("") + "</ul>" +
        "</div>" +
        '<div class="eje__col"><h4>Bebida</h4>' +
          '<ul class="eje__chips">' + (eje.bebidas || []).map((b) => "<li>" + seguro(b) + "</li>").join("") + "</ul>" +
        "</div>" +
        '<div class="eje__col"><h4>Postre</h4>' +
          '<ul class="eje__chips">' + (eje.postres || []).map((p) => "<li>" + seguro(p) + "</li>").join("") + "</ul>" +
        "</div>" +
      "</div>";
  }

  /* ========================================================================
     3) LA CARTA (solapas + platos, desde menu.js)
  ======================================================================== */
  const solapas = $("#solapasCarta");
  const cuerpo = $("#cuerpoCarta");

  if (solapas && cuerpo && MENU.categorias) {
    MENU.categorias.forEach((cat, i) => {

      // --- Solapa (botón de arriba) ---
      const btn = crear("button", "solapa" + (i === 0 ? " solapa--activa" : ""));
      btn.textContent = cat.nombre;
      btn.setAttribute("role", "tab");
      btn.dataset.destino = cat.id;
      solapas.appendChild(btn);

      // --- Panel de contenido ---
      const panel = crear("div", "carta__panel" + (i === 0 ? " carta__panel--activo" : ""));
      panel.id = "panel-" + cat.id;

      let html = '<div class="carta__panel-titulo"><h3>' + seguro(cat.nombre) + "</h3>";
      if (cat.subtitulo) html += "<p>" + seguro(cat.subtitulo) + "</p>";
      html += '</div><div class="carta__grupos">';

      (cat.grupos || []).forEach((g) => {
        html += '<div class="grupo"><h4 class="grupo__titulo">' + seguro(g.titulo) + "</h4>";
        if (g.nota) html += '<p class="grupo__nota">' + seguro(g.nota) + "</p>";
        (g.items || []).forEach((it) => {
          html += '<div class="item"><div><span class="item__nombre">' + seguro(it.nombre) + "</span>";
          if (it.detalle) html += '<span class="item__detalle">' + seguro(it.detalle) + "</span>";
          html += "</div>";
          html += '<span class="item__puntos"></span>';
          html += '<span class="item__precio">' + seguro(it.precio) + "</span></div>";
        });
        html += "</div>";
      });

      html += "</div>";
      panel.innerHTML = html;
      cuerpo.appendChild(panel);
    });

    // --- Cambio de solapa ---
    solapas.addEventListener("click", (e) => {
      const btn = e.target.closest(".solapa");
      if (!btn) return;
      solapas.querySelectorAll(".solapa").forEach((b) => b.classList.remove("solapa--activa"));
      cuerpo.querySelectorAll(".carta__panel").forEach((p) => p.classList.remove("carta__panel--activo"));
      btn.classList.add("solapa--activa");
      const panel = $("#panel-" + btn.dataset.destino);
      if (panel) panel.classList.add("carta__panel--activo");
    });
  }

  /* ========================================================================
     4) INTERACCIONES (menú móvil, barra al hacer scroll)
  ======================================================================== */
  const cabecera = $("#cabecera");
  const marcarScroll = () => cabecera && cabecera.classList.toggle("cabecera--solido", window.scrollY > 40);
  marcarScroll();
  window.addEventListener("scroll", marcarScroll, { passive: true });

  const botonMenu = $("#botonMenu");
  const nav = $(".nav");
  if (botonMenu && nav) {
    botonMenu.addEventListener("click", () => {
      const abierto = nav.classList.toggle("nav--abierto");
      botonMenu.setAttribute("aria-expanded", abierto ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
      nav.classList.remove("nav--abierto");
      botonMenu.setAttribute("aria-expanded", "false");
    }));
  }

  /* ========================================================================
     5) FORMULARIO DE RESERVA  ->  arma un mensaje de WhatsApp
  ======================================================================== */
  const form = $("#formReserva");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = new FormData(form);
      const partes = [
        "¡Hola! Quiero reservar una mesa en Alma y Fuego.",
        "",
        "Nombre: " + (d.get("nombre") || ""),
        "Fecha: " + (d.get("fecha") || ""),
        "Hora: " + (d.get("hora") || ""),
        "Personas: " + (d.get("personas") || ""),
      ];
      const com = (d.get("comentario") || "").trim();
      if (com) partes.push("Comentario: " + com);
      window.open(wppLink(partes.join("\n")), "_blank");
    });
  }

});
