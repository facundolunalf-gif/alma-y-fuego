/* ============================================================================
   LA CARTA  —  Alma y Fuego
   ----------------------------------------------------------------------------
   Acá está todo el menú. Para cambiar un precio o un plato, editá el texto
   entre comillas y guardá. La página se actualiza sola.

   CÓMO FUNCIONA (leelo una vez y listo):

   - La carta se divide en CATEGORÍAS (las solapas de arriba: Parrilla, Cocina...).
   - Cada categoría tiene GRUPOS (ej: "Parrilla tradicional", "Acompañamientos").
   - Cada grupo tiene PLATOS. Cada plato es una línea así:

        { nombre: "Bife de chorizo", detalle: "400gr", precio: "$43.000" },

     * nombre  = el nombre del plato (obligatorio)
     * detalle = aclaración chica en gris (opcional; podés borrar esta parte)
     * precio  = el precio como texto (opcional; para platos "a elección" dejalo vacío "")

   PARA AGREGAR UN PLATO: copiá una línea entera, pegala debajo y editala.
   PARA SACAR UN PLATO: borrá su línea completa.
   OJO: respetá las comas al final de cada línea y las llaves { }.

   El MENÚ EJECUTIVO (promo del mediodía) se edita más abajo, al final.
============================================================================ */

const MENU = {

  categorias: [

    /* =====================  PARRILLA  ===================== */
    {
      id: "parrilla",
      nombre: "Parrilla",
      subtitulo: "De tradición argentina",
      grupos: [
        {
          titulo: "Parrilla tradicional",
          items: [
            { nombre: "Bondiola al gancho", detalle: "600gr", precio: "$38.000" },
            { nombre: "Picaña al gancho", detalle: "400gr", precio: "$42.000" },
            { nombre: "Pollo deshuesado", detalle: "", precio: "$28.000" },
            { nombre: "Asado banderita", detalle: "13 costillas", precio: "$65.000" },
            { nombre: "Vacío novillo", detalle: "800gr", precio: "$65.000" },
            { nombre: "Bife de chorizo", detalle: "400gr", precio: "$43.000" },
            { nombre: "Media entraña", detalle: "300gr", precio: "$52.000" },
            { nombre: "Entraña", detalle: "600gr", precio: "$72.000" },
            { nombre: "Asado 7 costillas", detalle: "950gr", precio: "$73.000" },
            { nombre: "Vacío fino", detalle: "500gr", precio: "$73.000" },
          ],
        },
        {
          titulo: "Para compartir",
          items: [
            { nombre: "Mix parrilla para 4", detalle: "2 chorizos + 1 morcilla, 1 provoleta, asado banderita 13 costillas, vacío novillo y 2 guarniciones a elección", precio: "$149.000" },
          ],
        },
        {
          titulo: "Acompañamientos",
          items: [
            { nombre: "Papas fritas", detalle: "", precio: "$13.000" },
            { nombre: "Papas rotas", detalle: "", precio: "$13.000" },
            { nombre: "Puré de papa gratinado", detalle: "", precio: "$13.000" },
            { nombre: "Calabaza grillada", detalle: "", precio: "$12.000" },
            { nombre: "Batatas fritas", detalle: "", precio: "$13.000" },
            { nombre: "Batatas a la miel", detalle: "", precio: "$13.000" },
            { nombre: "Vegetales asados", detalle: "", precio: "$16.000" },
            { nombre: "Puré de calabaza", detalle: "", precio: "$13.000" },
          ],
        },
        {
          titulo: "Ensaladas clásicas",
          items: [
            { nombre: "Rúcula y parmesano", detalle: "", precio: "$14.000" },
            { nombre: "Mixta", detalle: "", precio: "$13.000" },
            { nombre: "Zanahoria y huevo", detalle: "", precio: "$17.000" },
            { nombre: "César clásica", detalle: "", precio: "$15.000" },
            { nombre: "Palta, tomate y cebolla", detalle: "", precio: "$16.000" },
          ],
        },
        {
          titulo: "Ensaladas principales",
          items: [
            { nombre: "Con Alma", detalle: "Rúcula, peras asadas, jamón crudo, queso roquefort y cherrys", precio: "$29.000" },
            { nombre: "César con pollo", detalle: "Lechuga, croutones, parmesano, pollo grillado y aderezo césar", precio: "$25.000" },
          ],
        },
      ],
    },

    /* =====================  NUESTRA COCINA  ===================== */
    {
      id: "cocina",
      nombre: "Cocina",
      subtitulo: "Entradas y platos tradicionales",
      grupos: [
        {
          titulo: "Entradas",
          items: [
            { nombre: "Empanada de lomo", detalle: "", precio: "$3.900" },
            { nombre: "Buñuelos de verdura", detalle: "", precio: "$15.000" },
            { nombre: "Tortilla clásica", detalle: "", precio: "$15.000" },
            { nombre: "Chorizo", detalle: "", precio: "$8.000" },
            { nombre: "Morcilla", detalle: "", precio: "$7.000" },
            { nombre: "Matrimonio", detalle: "", precio: "$13.000" },
            { nombre: "Provoleta artesanal", detalle: "", precio: "$16.500" },
            { nombre: "Mollejas", detalle: "", precio: "$45.000" },
            { nombre: "Chinchulín", detalle: "", precio: "$18.500" },
            { nombre: "Riñón", detalle: "", precio: "$18.500" },
            { nombre: "Mix de achuras", detalle: "Riñón, chinchulín y mollejas", precio: "$38.000" },
          ],
        },
        {
          titulo: "Milanesas a la pizza",
          nota: "Con guarnición",
          items: [
            { nombre: "Tradicional", detalle: "", precio: "$29.000" },
            { nombre: "Napolitana", detalle: "", precio: "$33.000" },
            { nombre: "4 quesos", detalle: "", precio: "$35.000" },
            { nombre: "Fugazzetta", detalle: "", precio: "$32.000" },
            { nombre: "Panceta y huevo frito", detalle: "", precio: "$34.000" },
            { nombre: "Rúcula, tomate asado y parmesano", detalle: "", precio: "$32.000" },
            { nombre: "Provoleta y jamón", detalle: "", precio: "$34.000" },
          ],
        },
        {
          titulo: "Cocina tradicional",
          items: [
            { nombre: "Bife Alma", detalle: "500gr, con morrón asado, huevo frito, jamón y papas fritas", precio: "$42.000" },
            { nombre: "Pastel de lomo", detalle: "", precio: "$29.000" },
            { nombre: "Pastel de bondiola y calabaza", detalle: "", precio: "$29.000" },
            { nombre: "Truchón a las brasas", detalle: "500gr, con vegetales asados", precio: "$49.000" },
            { nombre: "Milanesa de berenjena ahumada", detalle: "Con papas rotas", precio: "$27.000" },
            { nombre: "Guiso de lentejas", detalle: "", precio: "$28.000" },
          ],
        },
      ],
    },

    /* =====================  PASTAS  ===================== */
    {
      id: "pastas",
      nombre: "Pastas",
      subtitulo: "Artesanales, hechas en casa",
      grupos: [
        {
          titulo: "Pastas caseras",
          items: [
            { nombre: "Ñoquis de papa", detalle: "", precio: "$13.000" },
            { nombre: "Fussili al fierrito", detalle: "", precio: "$13.000" },
            { nombre: "Ravioles de osobuco", detalle: "", precio: "$13.000" },
            { nombre: "Sorrentinos de jamón y queso", detalle: "", precio: "$16.000" },
          ],
        },
        {
          titulo: "Salsas a elección",
          items: [
            { nombre: "Pomodoro / Crema / Rosa", detalle: "", precio: "$13.000" },
            { nombre: "Tuco Alma", detalle: "", precio: "$14.000" },
            { nombre: "Pesto de albahaca", detalle: "", precio: "$14.000" },
            { nombre: "Estofado de carne Fuego", detalle: "", precio: "$16.000" },
            { nombre: "4 quesos", detalle: "", precio: "$15.000" },
            { nombre: "Bolognesa", detalle: "", precio: "$16.000" },
          ],
        },
      ],
    },

    /* =====================  POSTRES Y BEBIDAS  ===================== */
    {
      id: "postres",
      nombre: "Postres y bebidas",
      subtitulo: "Para cerrar como corresponde",
      grupos: [
        {
          titulo: "Postres",
          items: [
            { nombre: "Flan casero mixto", detalle: "", precio: "$9.800" },
            { nombre: "Panqueque de dulce de leche", detalle: "", precio: "$12.000" },
            { nombre: "Tiramisú", detalle: "", precio: "$12.000" },
            { nombre: "Queso y dulce", detalle: "", precio: "$9.800" },
            { nombre: "Crème brûlée", detalle: "", precio: "$8.000" },
            { nombre: "Volcán de chocolate", detalle: "", precio: "$14.500" },
            { nombre: "Tentación del Alma", detalle: "Cubos de brownie, frutos secos caramelizados, frutillas y helado americana", precio: "$16.500" },
            { nombre: "Espresso helado", detalle: "Bocha de helado americana con café espresso", precio: "$8.500" },
          ],
        },
        {
          titulo: "Bebidas",
          items: [
            { nombre: "Gaseosa línea Coca", detalle: "", precio: "$4.800" },
            { nombre: "Aguas con / sin gas", detalle: "", precio: "$4.800" },
            { nombre: "Limonada menta y jengibre", detalle: "", precio: "$6.000" },
            { nombre: "Limonada de frutos rojos", detalle: "", precio: "$7.000" },
            { nombre: "Jarra de limonada", detalle: "", precio: "$18.000" },
            { nombre: "Pinta cerveza Imperial", detalle: "", precio: "$7.000" },
            { nombre: "Cerveza Imperial sin alcohol", detalle: "", precio: "$6.000" },
          ],
        },
      ],
    },

    /* =====================  COCTELERÍA  ===================== */
    {
      id: "cocteleria",
      nombre: "Coctelería",
      subtitulo: "De autor y clásicos",
      grupos: [
        {
          titulo: "De autor",
          items: [
            { nombre: "Alma Blanca", detalle: "Gin y vino blanco con esencia de manzana y lima", precio: "$13.000" },
            { nombre: "Tinto Fuego", detalle: "Vino blanco y gin con alma de manzana y un toque cálido de canela", precio: "$13.000" },
          ],
        },
        {
          titulo: "Clásicos",
          items: [
            { nombre: "Aperol Spritz", detalle: "", precio: "$10.000" },
            { nombre: "Gin Tonic", detalle: "", precio: "$13.000" },
            { nombre: "Caipi", detalle: "", precio: "$11.000" },
            { nombre: "Negroni", detalle: "", precio: "$14.000" },
            { nombre: "Fernet", detalle: "", precio: "$12.000" },
            { nombre: "Mojito", detalle: "", precio: "$12.000" },
            { nombre: "Campari", detalle: "", precio: "$10.000" },
          ],
        },
        {
          titulo: "Mocktails (sin alcohol)",
          items: [
            { nombre: "Apple Tártaro", detalle: "Té de manzana y canela con pomelo y limón", precio: "$7.000" },
            { nombre: "Ocean Tropic", detalle: "Aromático con ananá y té rosa mosqueta con naranja y limón", precio: "$7.000" },
          ],
        },
      ],
    },

    /* =====================  CAVA (VINOS)  ===================== */
    {
      id: "cava",
      nombre: "Cava",
      subtitulo: "Nuestra selección de vinos",
      grupos: [
        {
          titulo: "Vinos por copa",
          nota: "Servicio de descorche $14.000",
          items: [
            { nombre: "Salentein Reserva Malbec", detalle: "", precio: "$8.000" },
            { nombre: "Salentein Reserva Chardonnay", detalle: "", precio: "$8.000" },
            { nombre: "Luigi Bosca De Sangre Malbec", detalle: "", precio: "$13.000" },
            { nombre: "Luigi Bosca De Sangre White Blend", detalle: "", precio: "$13.000" },
          ],
        },
        {
          titulo: "Luigi Bosca",
          items: [
            { nombre: "Insignia Malbec", detalle: "", precio: "$27.000" },
            { nombre: "Pinot Noir", detalle: "", precio: "$29.000" },
            { nombre: "Cabernet Sauvignon", detalle: "", precio: "$27.000" },
            { nombre: "De Sangre Malbec", detalle: "", precio: "$46.000" },
            { nombre: "De Sangre White Blend", detalle: "", precio: "$39.000" },
            { nombre: "De Sangre Cabernet Sauvignon", detalle: "", precio: "$46.000" },
            { nombre: "Chardonnay", detalle: "", precio: "$29.000" },
            { nombre: "Brut Nature", detalle: "", precio: "$42.000" },
          ],
        },
        {
          titulo: "Bodegas Salentein",
          items: [
            { nombre: "Reserva Malbec", detalle: "", precio: "$22.000" },
            { nombre: "Reserva Cabernet Franc", detalle: "", precio: "$25.000" },
            { nombre: "Reserva Pinot Noir", detalle: "", precio: "$24.000" },
            { nombre: "Numina Malbec", detalle: "", precio: "$29.000" },
            { nombre: "Reserva Chardonnay", detalle: "", precio: "$24.000" },
            { nombre: "Killka Sauvignon Blanc", detalle: "", precio: "$18.000" },
            { nombre: "Espumante Extra Brut", detalle: "", precio: "$26.000" },
          ],
        },
        {
          titulo: "La Celia",
          items: [
            { nombre: "Reserva Malbec", detalle: "", precio: "$23.000" },
            { nombre: "Reserva Pinot Grigio", detalle: "", precio: "$20.000" },
            { nombre: "Reserva Rosé", detalle: "", precio: "$19.000" },
            { nombre: "Pioneer Cabernet Franc", detalle: "", precio: "$26.000" },
            { nombre: "Pioneer Chardonnay", detalle: "", precio: "$26.000" },
            { nombre: "Elite Malbec", detalle: "", precio: "$34.000" },
          ],
        },
        {
          titulo: "Escorihuela Gascón",
          items: [
            { nombre: "Gran Reserva Malbec", detalle: "", precio: "$29.000" },
            { nombre: "Familia Gascón Tempranillo", detalle: "", precio: "$18.000" },
            { nombre: "Familia Gascón Rosé", detalle: "", precio: "$19.000" },
            { nombre: "Gran Reserva Chardonnay", detalle: "", precio: "$28.000" },
            { nombre: "Gascón Dulce Cosecha Tardía", detalle: "", precio: "$19.000" },
          ],
        },
        {
          titulo: "Bodegas boutique",
          items: [
            { nombre: "Baluarte Malbec Gran Reserva", detalle: "De Diego Family Wines", precio: "$52.000" },
            { nombre: "2456 Reserva Malbec", detalle: "Partida limitada", precio: "$24.000" },
            { nombre: "2456 Chelines Blanc", detalle: "Partida limitada", precio: "$29.000" },
          ],
        },
        {
          titulo: "Casa Pirque",
          items: [
            { nombre: "Ojo de Buen Cubero Malbec", detalle: "", precio: "$21.000" },
            { nombre: "Aruma Malbec", detalle: "", precio: "$38.000" },
            { nombre: "Casa de Herrero Cabernet Franc", detalle: "", precio: "$29.000" },
          ],
        },
      ],
    },

    /* =====================  CAFETERÍA  ===================== */
    {
      id: "cafeteria",
      nombre: "Cafetería",
      subtitulo: "Que el café vuelva a ser nuestro punto de encuentro",
      grupos: [
        {
          titulo: "Café tradicional",
          items: [
            { nombre: "Café pocillo", detalle: "", precio: "$4.000" },
            { nombre: "Café jarrito", detalle: "", precio: "$4.500" },
            { nombre: "Café doble", detalle: "", precio: "$5.000" },
            { nombre: "Café frío", detalle: "", precio: "$5.000" },
            { nombre: "Submarino", detalle: "", precio: "$6.500" },
            { nombre: "Espresso helado", detalle: "Una medida de espresso con una bocha de helado", precio: "$7.600" },
          ],
        },
        {
          titulo: "Nuestra tradición",
          items: [
            { nombre: "Café", detalle: "", precio: "" },
            { nombre: "Lágrima", detalle: "", precio: "" },
            { nombre: "Café con leche", detalle: "", precio: "" },
            { nombre: "Capuccino", detalle: "", precio: "" },
            { nombre: "Cortado", detalle: "", precio: "" },
          ],
        },
        {
          titulo: "Tostados y medialunas",
          nota: "En pan árabe o pan de campo",
          items: [
            { nombre: "Jamón y queso", detalle: "", precio: "$6.000" },
            { nombre: "Bondiola y queso", detalle: "", precio: "$7.500" },
            { nombre: "Tomate y queso", detalle: "", precio: "$5.000" },
            { nombre: "Medialuna", detalle: "", precio: "$2.500" },
            { nombre: "Medialuna jamón y queso", detalle: "", precio: "$4.000" },
            { nombre: "Huevo revuelto, panceta y palta", detalle: "", precio: "$12.000" },
            { nombre: "Tostadas con manteca y dulce de leche", detalle: "", precio: "$5.800" },
          ],
        },
        {
          titulo: "Combinados especiales",
          nota: "Todos incluyen dip de manteca y dulce de leche",
          items: [
            { nombre: "Café o té + 2 medialunas", detalle: "", precio: "$6.000" },
            { nombre: "Café o té con tostado de jamón y queso", detalle: "", precio: "$8.500" },
            { nombre: "Café o té + 3 tostadas", detalle: "", precio: "$6.500" },
            { nombre: "Café pocillo o jarrito", detalle: "De 16:00 a 19:30", precio: "$3.000" },
          ],
        },
      ],
    },

  ],

  /* =====================  MENÚ EJECUTIVO (promo mediodía)  ===================== */
  ejecutivo: {
    dias: "Martes a Viernes",
    horario: "12:00 a 16:00",
    precio: "$28.000",
    incluye: "Principal + bebida + postre y café",
    principales: [
      "Angus baby beef con guarnición",
      "½ pollo deshuesado con guarnición",
      "Bondiola al gancho con guarnición",
      "Pastel de papa",
      "Pastel de bondiola y calabaza",
      "Guiso de lentejas",
      "Milanesa de novillo",
      "Suprema napolitana",
      "Milanesa de berenjena ahumada con guarnición",
      "Ñoquis",
      "Ravioles de pollo y verdura",
      "Fussili al fierrito (salsa a elección)",
      "Cazuela de pollo y arroz amarillo",
      "Ensalada césar con pollo",
    ],
    bebidas: [
      "Gaseosa línea Coca-Cola",
      "Cerveza Imperial tirada",
      "Copa de vino La Celia Reserva Malbec",
      "Agua con / sin gas",
    ],
    postres: ["Flan de vainilla mixto", "Bocha de helado"],
    adicionales: [
      { nombre: "Bebida adicional", precio: "$2.500" },
      { nombre: "Café adicional", precio: "$2.000" },
      { nombre: "Copa de vino adicional", precio: "$3.500" },
    ],
  },

};
