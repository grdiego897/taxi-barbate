export type Language = 'es' | 'en' | 'de';

export const translations = {
  es: {
    seo: {
      title: 'Taxi Barbate | Reservas, aeropuerto y estaciones | Diego Gallardo',
      description:
        'Taxi en Barbate con reserva previa. Servicio en Barbate, Zahara de los Atunes, Canos de Meca y Zahora. Precio cerrado, pagos con tarjeta, Bizum, Google Pay y Apple Pay.',
    },
    nav: {
      services: 'Servicios',
      prices: 'Precios',
      areas: 'Zonas',
      contact: 'Contacto',
      book: 'Reservar',
    },
    hero: {
      kicker: 'Barbate, Zahara de los Atunes, Canos de Meca y Zahora',
      headline: 'Taxi Barbate',
      subheadline:
        'Servicio de taxi con reserva previa, precio cerrado y traslados a aeropuertos y estaciones en la Costa de la Luz.',
      cta: 'Llamar a Diego',
      whatsapp: 'WhatsApp',
    },
    serviceOverview: {
      eyebrow: 'Servicio de taxi en Barbate y La Janda',
      title: 'Todo lo que el cliente necesita para reservar con confianza',
      subtitle:
        'Unimos en una sola seccion los servicios mas buscados, las ventajas reales del traslado y una foto del vehiculo para que la experiencia sea mas clara, mas rapida y mas comoda.',
      servicesLabel: 'Servicios mas solicitados',
      reasonsLabel: '¿Por qué elegirnos?',
      galleryLabel: 'Vehiculo y confort',
      galleryTitle: 'Taxi Barbate preparado para reservas previas y trayectos largos',
      galleryDesc:
        'Vehiculo amplio, trato directo y servicio pensado para moverte con comodidad entre Barbate, Zahara, Canos de Meca, Zahora y conexiones con aeropuerto o estacion.',
      imageAlt: 'Coche de Taxi Barbate listo para un servicio con reserva previa',
      stats: ['Reserva previa 24h', 'Precio cerrado', 'Tarjeta, Bizum y wallet'],
      primaryCta: 'Ver precio orientativo',
      secondaryCta: 'Ir a contacto',
      prevPhoto: 'Foto anterior',
      nextPhoto: 'Siguiente foto',
      goToPhoto: 'Ir a la foto',
    },
    benefits: {
      title: '¿Por qué elegirnos?',
      subtitle:
        'Servicio local pensado para residentes, viajeros y turistas que necesitan un traslado comodo, claro y facil de reservar.',
      items: [
        {
          title: '24h con reserva previa',
          desc: 'Organiza tu recogida con antelacion y confirma disponibilidad de dia o de noche.',
        },
        {
          title: 'Precio cerrado',
          desc: 'Conoce el coste del trayecto antes de salir y evita sorpresas al llegar.',
        },
        {
          title: 'Pagos flexibles',
          desc: 'Aceptamos efectivo, tarjeta, Bizum, Google Pay y Apple Pay.',
        },
        {
          title: 'Aeropuertos y estaciones',
          desc: 'Traslados directos desde Barbate y La Janda a Jerez, Sevilla, Malaga y principales estaciones.',
        },
        {
          title: 'Silla infantil disponible',
          desc: 'Indicalo en la reserva y preparamos el trayecto para viajar con mas tranquilidad.',
        },
        {
          title: 'Cobertura local real',
          desc: 'Trabajamos de forma habitual en Barbate, Zahara de los Atunes, Canos de Meca y Zahora.',
        },
      ],
    },
    services: {
      title: 'Servicios de taxi',
      local: {
        title: 'Trayectos locales',
        desc: 'Desplazamientos rapidos y seguros dentro de Barbate y entre las principales zonas de La Janda.',
      },
      airport: {
        title: 'Aeropuertos y estaciones',
        desc: 'Traslados puntuales a Jerez, Sevilla, Malaga y estaciones clave para continuar tu viaje sin complicaciones.',
      },
      longDistance: {
        title: 'Larga distancia',
        desc: 'Viajes comodos a cualquier punto de Espana, siempre con reserva previa y precio orientado al trayecto real.',
      },
    },
    popularRoutes: {
      title: 'Rutas populares',
      subtitle:
        'Trayectos frecuentes desde Barbate y alrededores para reservas, vacaciones, conexiones con tren y salidas al aeropuerto.',
      cta: 'Ver precio orientativo',
      items: [
        {
          title: 'Taxi Barbate - Aeropuerto de Jerez',
          desc: 'Una de las rutas mas habituales para vuelos nacionales e internacionales.',
        },
        {
          title: 'Taxi Barbate - Aeropuerto de Sevilla',
          desc: 'Traslado comodo para quienes viajan desde la costa hacia la capital andaluza.',
        },
        {
          title: 'Taxi Barbate - Aeropuerto de Malaga',
          desc: 'Ideal para conexiones con mas frecuencia de vuelos y recogidas programadas.',
        },
        {
          title: 'Taxi Barbate - Estacion de Cadiz',
          desc: 'Servicio util para enlazar con trenes, autobuses y llegadas desde otras provincias.',
        },
        {
          title: 'Taxi Zahara de los Atunes - Barbate',
          desc: 'Recogidas y traslados entre dos de las zonas con mas demanda de la comarca.',
        },
        {
          title: 'Taxi Canos de Meca - Barbate',
          desc: 'Una ruta frecuente en temporada alta, escapadas y reservas de ultima hora.',
        },
      ],
    },
    calculator: {
      title: 'Calculadora de precios',
      subtitle: 'Obtenga un precio estimado para su trayecto.',
      details: 'El importe total cubre el trayecto completo.',
      origin: 'Origen',
      dest: 'Destino',
      selectOrigin: 'Selecciona origen',
      selectDest: 'Selecciona destino',
      weekend: 'Fin de semana o festivo',
      calculate: 'Calcular precio',
      estimate: 'Precio estimado',
      routeDetails: 'Desglose de ruta',
      baseToOrigin: 'Barbate hasta origen',
      trip: 'Trayecto del cliente',
      returnBase: 'Retorno a Barbate',
      totalDist: 'Total de kilometros',
      note: '* Precio aproximado. Contacte para precio exacto.',
      groups: {
        airports: 'Aeropuertos',
        stations: 'Estaciones de tren',
        towns: 'Ciudades y pueblos',
      },
      places: {
        Barbate: 'Barbate',
        'Zahara de los Atunes': 'Zahara de los Atunes',
        'Canos de Meca': 'Canos de Meca',
        'Malaga Airport': 'Aeropuerto de Malaga',
        'Seville Airport': 'Aeropuerto de Sevilla',
        'Jerez Airport': 'Aeropuerto de Jerez',
        'San Fernando-Bahia Sur': 'Estacion San Fernando-Bahia Sur',
        'Cadiz Station': 'Estacion de Cadiz',
        'Algeciras Station': 'Estacion de Algeciras',
        'Jerez de la Frontera Station': 'Estacion de Jerez',
        'Seville-Santa Justa Station': 'Estacion Sevilla-Santa Justa',
        Cadiz: 'Cadiz',
        Malaga: 'Malaga',
        Seville: 'Sevilla',
        'Jerez de la Frontera': 'Jerez de la Frontera',
        Atlanterra: 'Atlanterra',
        Algeciras: 'Algeciras',
        'San Fernando': 'San Fernando',
        'Conil de la Frontera': 'Conil de la Frontera',
        'Vejer de la Frontera': 'Vejer de la Frontera',
        Montenmedio: 'Montenmedio',
      },
    },
    areas: {
      tag: 'Costa de la Luz',
      title: 'Zonas de servicio principal',
      barbate: 'Barbate',
      zahara: 'Zahara de los Atunes',
      canos: 'Canos de Meca',
      zahora: 'Zahora',
      desc: 'Servicio habitual en Barbate y alrededores. Recogidas 24 horas con reserva previa y cobertura especializada en La Janda.',
    },
    faq: {
      title: 'Preguntas frecuentes',
      subtitle:
        'Resuelve las dudas mas habituales antes de reservar tu taxi en Barbate o en cualquiera de las zonas cercanas.',
      items: [
        {
          question: 'Trabajais en Barbate, Zahara de los Atunes, Canos de Meca y Zahora?',
          answer:
            'Si. Esas son algunas de las zonas donde trabajamos con mas frecuencia, tanto para trayectos locales como para reservas hacia aeropuertos, estaciones y otras ciudades.',
        },
        {
          question: 'Como puedo reservar un taxi?',
          answer:
            'La forma mas rapida es llamar por telefono o escribir por WhatsApp. Asi podemos confirmar horario, punto de recogida, destino y necesidades especiales.',
        },
        {
          question: 'Trabajais 24 horas?',
          answer:
            'Si, siempre con reserva previa y sujeto a disponibilidad. Cuanto antes se confirme el servicio, mejor podemos asegurar la recogida.',
        },
        {
          question: 'Ofreceis precio cerrado?',
          answer:
            'Si, en muchos trayectos podemos confirmar un precio cerrado antes del servicio. La calculadora ofrece un precio orientativo y el importe final se confirma al reservar.',
        },
        {
          question: 'Que formas de pago aceptais?',
          answer:
            'Aceptamos efectivo, tarjeta, Bizum, Google Pay y Apple Pay para facilitar el pago a residentes y turistas.',
        },
        {
          question: 'Haceis traslados a aeropuertos y estaciones?',
          answer:
            'Si. Realizamos servicios hacia aeropuertos como Jerez, Sevilla y Malaga, ademas de estaciones de tren y conexiones habituales desde Barbate y La Janda.',
        },
        {
          question: 'Teneis silla infantil?',
          answer:
            'Si, disponemos de silla infantil. Solo necesitas solicitarla al hacer la reserva para preparar el trayecto con antelacion.',
        },
      ],
    },
    contact: {
      title: 'Contacto y reservas',
      subtitle: 'Reserva tu taxi, pide presupuesto y confirma tu traslado con antelacion.',
      call: 'Llamanos',
      email: 'Correo',
      location: 'Ubicacion',
      bookTitle: 'Reserva rapida',
      bookDesc:
        'Confirma por telefono o WhatsApp tu taxi en Barbate, Zahara de los Atunes, Canos de Meca o Zahora. Tambien organizamos traslados con precio cerrado a aeropuertos y estaciones.',
      footer: '© 2026 Taxi Barbate - Diego Gallardo. Todos los derechos reservados.',
    },
  },
  en: {
    seo: {
      title: 'Taxi Barbate | Airport and station transfers | Diego Gallardo',
      description:
        'Taxi in Barbate by advance booking. Service in Barbate, Zahara de los Atunes, Canos de Meca and Zahora with fixed prices, card payments and airport transfers.',
    },
    nav: {
      services: 'Services',
      prices: 'Prices',
      areas: 'Areas',
      contact: 'Contact',
      book: 'Book now',
    },
    hero: {
      kicker: 'Barbate, Zahara de los Atunes, Canos de Meca and Zahora',
      headline: 'Taxi Barbate',
      subheadline:
        'Advance-booked taxi service with fixed prices plus airport and station transfers across Costa de la Luz.',
      cta: 'Call Diego',
      whatsapp: 'WhatsApp',
    },
    serviceOverview: {
      eyebrow: 'Taxi service in Barbate and La Janda',
      title: 'Everything a traveller needs to book with confidence',
      subtitle:
        'This section combines the most requested services, the key reasons to choose the taxi and a real vehicle photo so the page feels clearer, faster and easier to use.',
      servicesLabel: 'Most requested services',
      reasonsLabel: 'Why choose Taxi Barbate',
      galleryLabel: 'Vehicle and comfort',
      galleryTitle: 'Taxi Barbate ready for advance bookings and longer transfers',
      galleryDesc:
        'A spacious vehicle, direct communication and a service built for comfortable journeys between Barbate, Zahara, Canos de Meca, Zahora and airport or station connections.',
      imageAlt: 'Taxi Barbate vehicle ready for an advance-booked service',
      stats: ['24/7 by booking', 'Fixed prices', 'Card, Bizum and wallet'],
      primaryCta: 'See estimated fare',
      secondaryCta: 'Go to contact',
      prevPhoto: 'Previous photo',
      nextPhoto: 'Next photo',
      goToPhoto: 'Go to photo',
    },
    benefits: {
      title: 'Why choose Taxi Barbate',
      subtitle:
        'A local taxi service for residents, holidaymakers and travellers who want a simple booking process and reliable pickup.',
      items: [
        {
          title: '24/7 with advance booking',
          desc: 'Book ahead to confirm availability for day or night pickups.',
        },
        {
          title: 'Fixed prices',
          desc: 'Know the cost of your journey before you travel whenever the route allows it.',
        },
        {
          title: 'Flexible payments',
          desc: 'We accept cash, card, Bizum, Google Pay and Apple Pay.',
        },
        {
          title: 'Airports and stations',
          desc: 'Direct transfers from Barbate and La Janda to Jerez, Seville, Malaga and key train stations.',
        },
        {
          title: 'Child seat available',
          desc: 'Let us know when booking and we will prepare the vehicle for your trip.',
        },
        {
          title: 'Real local coverage',
          desc: 'We regularly work in Barbate, Zahara de los Atunes, Canos de Meca and Zahora.',
        },
      ],
    },
    services: {
      title: 'Taxi services',
      local: {
        title: 'Local rides',
        desc: 'Fast and safe journeys within Barbate and between the main areas of La Janda.',
      },
      airport: {
        title: 'Airports and stations',
        desc: 'Reliable transfers to Jerez, Seville, Malaga and key train stations for smooth onward travel.',
      },
      longDistance: {
        title: 'Long distance',
        desc: 'Comfortable journeys across Spain with advance booking and pricing based on the actual route.',
      },
    },
    popularRoutes: {
      title: 'Popular routes',
      subtitle:
        'Common transfers from Barbate and nearby areas for holidays, train connections and airport departures.',
      cta: 'See estimated fare',
      items: [
        {
          title: 'Barbate taxi to Jerez Airport',
          desc: 'One of the most requested routes for domestic and international flights.',
        },
        {
          title: 'Barbate taxi to Seville Airport',
          desc: 'A comfortable transfer from the coast to Andalusia’s capital.',
        },
        {
          title: 'Barbate taxi to Malaga Airport',
          desc: 'Ideal for travellers who need more flight options and scheduled pickup.',
        },
        {
          title: 'Barbate taxi to Cadiz Station',
          desc: 'Useful for train connections, coach links and arrivals from other provinces.',
        },
        {
          title: 'Zahara de los Atunes taxi to Barbate',
          desc: 'Regular pickups and transfers between two of the area’s busiest coastal spots.',
        },
        {
          title: 'Canos de Meca taxi to Barbate',
          desc: 'A frequent route in high season, short breaks and pre-booked pickups.',
        },
      ],
    },
    calculator: {
      title: 'Fare calculator',
      subtitle: 'Get an estimated price for your journey.',
      details: 'The total amount covers the complete route.',
      origin: 'Pickup location',
      dest: 'Drop-off location',
      selectOrigin: 'Select origin',
      selectDest: 'Select destination',
      weekend: 'Weekend or public holiday',
      calculate: 'Calculate fare',
      estimate: 'Estimated fare',
      routeDetails: 'Route breakdown',
      baseToOrigin: 'Barbate to pickup',
      trip: 'Client journey',
      returnBase: 'Return to Barbate',
      totalDist: 'Total kilometres',
      note: '* Approximate price. Please contact us for the exact fare.',
      groups: {
        airports: 'Airports',
        stations: 'Train stations',
        towns: 'Cities and towns',
      },
      places: {
        Barbate: 'Barbate',
        'Zahara de los Atunes': 'Zahara de los Atunes',
        'Canos de Meca': 'Canos de Meca',
        'Malaga Airport': 'Malaga Airport',
        'Seville Airport': 'Seville Airport',
        'Jerez Airport': 'Jerez Airport',
        'San Fernando-Bahia Sur': 'San Fernando-Bahia Sur Station',
        'Cadiz Station': 'Cadiz Station',
        'Algeciras Station': 'Algeciras Station',
        'Jerez de la Frontera Station': 'Jerez Station',
        'Seville-Santa Justa Station': 'Seville-Santa Justa Station',
        Cadiz: 'Cadiz',
        Malaga: 'Malaga',
        Seville: 'Seville',
        'Jerez de la Frontera': 'Jerez de la Frontera',
        Atlanterra: 'Atlanterra',
        Algeciras: 'Algeciras',
        'San Fernando': 'San Fernando',
        'Conil de la Frontera': 'Conil de la Frontera',
        'Vejer de la Frontera': 'Vejer de la Frontera',
        Montenmedio: 'Montenmedio',
      },
    },
    areas: {
      tag: 'Costa de la Luz',
      title: 'Main service areas',
      barbate: 'Barbate',
      zahara: 'Zahara de los Atunes',
      canos: 'Canos de Meca',
      zahora: 'Zahora',
      desc: 'Regular service in Barbate and nearby areas. Pickups are available 24/7 with advance booking and local knowledge of La Janda.',
    },
    faq: {
      title: 'Frequently asked questions',
      subtitle: 'The most common questions before booking a taxi in Barbate or nearby areas.',
      items: [
        {
          question: 'Do you work in Barbate, Zahara de los Atunes, Canos de Meca and Zahora?',
          answer:
            'Yes. These are some of the areas where we work most often, both for local journeys and for bookings to airports, stations and other cities.',
        },
        {
          question: 'How can I book a taxi?',
          answer:
            'The fastest option is to call or send a WhatsApp message so we can confirm your pickup time, address, destination and any special requirements.',
        },
        {
          question: 'Do you work 24 hours?',
          answer:
            'Yes, with advance booking and subject to availability. The earlier you confirm the service, the easier it is to secure your pickup.',
        },
        {
          question: 'Do you offer fixed prices?',
          answer:
            'Yes. For many routes we can confirm a fixed price in advance. The fare calculator gives an estimate and the final amount is confirmed when booking.',
        },
        {
          question: 'Which payment methods do you accept?',
          answer:
            'We accept cash, card, Bizum, Google Pay and Apple Pay to make payment easier for both locals and visitors.',
        },
        {
          question: 'Do you provide airport and station transfers?',
          answer:
            'Yes. We run transfers to airports such as Jerez, Seville and Malaga, plus train stations and common connection points from Barbate and La Janda.',
        },
        {
          question: 'Do you have a child seat?',
          answer:
            'Yes, a child seat is available. Just request it when booking so we can prepare the vehicle in advance.',
        },
      ],
    },
    contact: {
      title: 'Contact and bookings',
      subtitle: 'Book your taxi, ask for a quote and confirm your transfer in advance.',
      call: 'Call us',
      email: 'Email',
      location: 'Location',
      bookTitle: 'Quick booking',
      bookDesc:
        'Book by phone or WhatsApp for taxi services in Barbate, Zahara de los Atunes, Canos de Meca or Zahora. We also organise fixed-price transfers to airports and stations.',
      footer: '© 2026 Taxi Barbate - Diego Gallardo. All rights reserved.',
    },
  },
  de: {
    seo: {
      title: 'Taxi Barbate | Flughafen- und Bahnhoftransfer | Diego Gallardo',
      description:
        'Taxi in Barbate mit Vorbestellung. Service in Barbate, Zahara de los Atunes, Canos de Meca und Zahora mit Festpreis, Kartenzahlung und Transfers zu Flughafen und Bahnhof.',
    },
    nav: {
      services: 'Leistungen',
      prices: 'Preise',
      areas: 'Gebiete',
      contact: 'Kontakt',
      book: 'Buchen',
    },
    hero: {
      kicker: 'Barbate, Zahara de los Atunes, Canos de Meca und Zahora',
      headline: 'Taxi Barbate',
      subheadline:
        'Taxi mit Vorbestellung, Festpreis sowie Transfers zu Flughafen und Bahnhof an der Costa de la Luz.',
      cta: 'Diego anrufen',
      whatsapp: 'WhatsApp',
    },
    serviceOverview: {
      eyebrow: 'Taxi-Service in Barbate und La Janda',
      title: 'Alles, was der Fahrgast fur eine sichere Buchung braucht',
      subtitle:
        'Hier fassen wir die wichtigsten Leistungen, die klaren Vorteile des Services und ein echtes Fahrzeugfoto zusammen, damit die Seite einfacher, schneller und angenehmer wirkt.',
      servicesLabel: 'Am haufigsten gebuchte Leistungen',
      reasonsLabel: 'Warum Taxi Barbate',
      galleryLabel: 'Fahrzeug und Komfort',
      galleryTitle: 'Taxi Barbate fur Vorbestellungen und langere Fahrten',
      galleryDesc:
        'Geraumiges Fahrzeug, direkter Kontakt und ein Service fur komfortable Fahrten zwischen Barbate, Zahara, Canos de Meca, Zahora sowie zu Flughafen und Bahnhof.',
      imageAlt: 'Fahrzeug von Taxi Barbate fur einen reservierten Transfer',
      stats: ['24/7 mit Vorbestellung', 'Festpreis', 'Karte, Bizum und Wallet'],
      primaryCta: 'Preis ansehen',
      secondaryCta: 'Zum Kontakt',
      prevPhoto: 'Vorheriges Foto',
      nextPhoto: 'Nachstes Foto',
      goToPhoto: 'Zum Foto',
    },
    benefits: {
      title: 'Warum Taxi Barbate',
      subtitle:
        'Ein lokaler Fahrdienst fur Einwohner, Urlauber und Reisende, die einfach buchen und zuverlassig abgeholt werden mochten.',
      items: [
        {
          title: '24/7 mit Vorbestellung',
          desc: 'Buche im Voraus, damit wir die Verfugbarkeit fur Tag oder Nacht bestatigen konnen.',
        },
        {
          title: 'Festpreis',
          desc: 'Bei vielen Strecken kennen Sie den Preis vor der Fahrt.',
        },
        {
          title: 'Flexible Zahlungen',
          desc: 'Wir akzeptieren Bargeld, Karte, Bizum, Google Pay und Apple Pay.',
        },
        {
          title: 'Flughafen und Bahnhof',
          desc: 'Direkte Transfers von Barbate und La Janda nach Jerez, Sevilla, Malaga und wichtigen Bahnhofen.',
        },
        {
          title: 'Kindersitz verfugbar',
          desc: 'Bitte bei der Reservierung angeben, damit wir alles vorbereiten konnen.',
        },
        {
          title: 'Lokale Abdeckung',
          desc: 'Wir arbeiten regelmassig in Barbate, Zahara de los Atunes, Canos de Meca und Zahora.',
        },
      ],
    },
    services: {
      title: 'Taxi-Leistungen',
      local: {
        title: 'Lokale Fahrten',
        desc: 'Schnelle und sichere Fahrten in Barbate und zwischen den wichtigsten Orten von La Janda.',
      },
      airport: {
        title: 'Flughafen und Bahnhof',
        desc: 'Zuverlassige Transfers nach Jerez, Sevilla, Malaga und zu wichtigen Bahnhofen.',
      },
      longDistance: {
        title: 'Langstrecke',
        desc: 'Komfortable Fahrten in ganz Spanien mit Vorbestellung und Preis nach realer Strecke.',
      },
    },
    popularRoutes: {
      title: 'Beliebte Strecken',
      subtitle:
        'Haufig gebuchte Transfers ab Barbate und Umgebung fur Urlaub, Zuganschlusse und Flughafenfahrten.',
      cta: 'Ungefahren Preis ansehen',
      items: [
        {
          title: 'Taxi Barbate - Flughafen Jerez',
          desc: 'Eine der am haufigsten gebuchten Strecken fur Inlands- und Auslandsfluge.',
        },
        {
          title: 'Taxi Barbate - Flughafen Sevilla',
          desc: 'Eine bequeme Verbindung von der Kuste in die andalusische Hauptstadt.',
        },
        {
          title: 'Taxi Barbate - Flughafen Malaga',
          desc: 'Ideal fur Reisende mit mehr Flugoptionen und geplanter Abholung.',
        },
        {
          title: 'Taxi Barbate - Bahnhof Cadiz',
          desc: 'Praktisch fur Zuganschlusse, Busverbindungen und Ankunfte aus anderen Regionen.',
        },
        {
          title: 'Taxi Zahara de los Atunes - Barbate',
          desc: 'Regelmassige Fahrten zwischen zwei stark nachgefragten Kustenorten.',
        },
        {
          title: 'Taxi Canos de Meca - Barbate',
          desc: 'Eine typische Strecke in der Hochsaison, fur Kurztrips und Vorbestellungen.',
        },
      ],
    },
    calculator: {
      title: 'Preisrechner',
      subtitle: 'Erhalten Sie einen ungefahrenen Preis fur Ihre Fahrt.',
      details: 'Der Gesamtbetrag deckt die gesamte Strecke ab.',
      origin: 'Abholort',
      dest: 'Zielort',
      selectOrigin: 'Abholort wahlen',
      selectDest: 'Zielort wahlen',
      weekend: 'Wochenende oder Feiertag',
      calculate: 'Preis berechnen',
      estimate: 'Geschaftzter Preis',
      routeDetails: 'Streckendetails',
      baseToOrigin: 'Barbate bis Abholung',
      trip: 'Fahrt des Kunden',
      returnBase: 'Ruckfahrt nach Barbate',
      totalDist: 'Gesamtkilometer',
      note: '* Ungefahrer Preis. Bitte kontaktieren Sie uns fur den genauen Fahrpreis.',
      groups: {
        airports: 'Flughafen',
        stations: 'Bahnhofe',
        towns: 'Stadte und Orte',
      },
      places: {
        Barbate: 'Barbate',
        'Zahara de los Atunes': 'Zahara de los Atunes',
        'Canos de Meca': 'Canos de Meca',
        'Malaga Airport': 'Flughafen Malaga',
        'Seville Airport': 'Flughafen Sevilla',
        'Jerez Airport': 'Flughafen Jerez',
        'San Fernando-Bahia Sur': 'Bahnhof San Fernando-Bahia Sur',
        'Cadiz Station': 'Bahnhof Cadiz',
        'Algeciras Station': 'Bahnhof Algeciras',
        'Jerez de la Frontera Station': 'Bahnhof Jerez',
        'Seville-Santa Justa Station': 'Bahnhof Sevilla-Santa Justa',
        Cadiz: 'Cadiz',
        Malaga: 'Malaga',
        Seville: 'Sevilla',
        'Jerez de la Frontera': 'Jerez de la Frontera',
        Atlanterra: 'Atlanterra',
        Algeciras: 'Algeciras',
        'San Fernando': 'San Fernando',
        'Conil de la Frontera': 'Conil de la Frontera',
        'Vejer de la Frontera': 'Vejer de la Frontera',
        Montenmedio: 'Montenmedio',
      },
    },
    areas: {
      tag: 'Costa de la Luz',
      title: 'Wichtige Einsatzgebiete',
      barbate: 'Barbate',
      zahara: 'Zahara de los Atunes',
      canos: 'Canos de Meca',
      zahora: 'Zahora',
      desc: 'Regelmassiger Service in Barbate und Umgebung. Abholungen rund um die Uhr mit Vorbestellung und lokaler Erfahrung in La Janda.',
    },
    faq: {
      title: 'Haufige Fragen',
      subtitle: 'Die wichtigsten Fragen vor einer Taxibuchung in Barbate oder in der Umgebung.',
      items: [
        {
          question: 'Arbeiten Sie in Barbate, Zahara de los Atunes, Canos de Meca und Zahora?',
          answer:
            'Ja. Dort fahren wir besonders haufig, sowohl fur lokale Strecken als auch fur Reservierungen zu Flughafen, Bahnhofen und anderen Stadten.',
        },
        {
          question: 'Wie kann ich ein Taxi reservieren?',
          answer:
            'Am schnellsten geht es per Telefon oder WhatsApp. So konnen wir Uhrzeit, Abholort, Ziel und besondere Wunsche direkt bestatigen.',
        },
        {
          question: 'Arbeiten Sie 24 Stunden?',
          answer:
            'Ja, mit Vorbestellung und je nach Verfugbarkeit. Je fruher die Reservierung bestatigt wird, desto besser konnen wir die Abholung sichern.',
        },
        {
          question: 'Gibt es Festpreise?',
          answer:
            'Ja. Fur viele Strecken konnen wir den Festpreis vorab bestatigen. Der Rechner zeigt einen Richtpreis, der Endpreis wird bei der Reservierung bestatigt.',
        },
        {
          question: 'Welche Zahlungsmethoden akzeptieren Sie?',
          answer:
            'Wir akzeptieren Bargeld, Karte, Bizum, Google Pay und Apple Pay. Das macht die Zahlung fur Einheimische und Besucher einfach.',
        },
        {
          question: 'Bieten Sie Transfers zu Flughafen und Bahnhof an?',
          answer:
            'Ja. Wir fahren unter anderem nach Jerez, Sevilla und Malaga sowie zu Bahnhofen und typischen Anschlusspunkten ab Barbate und La Janda.',
        },
        {
          question: 'Gibt es einen Kindersitz?',
          answer:
            'Ja, ein Kindersitz ist verfugbar. Bitte bei der Buchung angeben, damit wir das Fahrzeug vorbereiten konnen.',
        },
      ],
    },
    contact: {
      title: 'Kontakt und Reservierung',
      subtitle: 'Reservieren Sie Ihr Taxi, fragen Sie nach einem Preis und bestatigen Sie Ihre Fahrt im Voraus.',
      call: 'Anrufen',
      email: 'E-Mail',
      location: 'Standort',
      bookTitle: 'Schnelle Reservierung',
      bookDesc:
        'Reservieren Sie telefonisch oder per WhatsApp fur Barbate, Zahara de los Atunes, Canos de Meca oder Zahora. Wir organisieren auch Festpreis-Transfers zu Flughafen und Bahnhof.',
      footer: '© 2026 Taxi Barbate - Diego Gallardo. Alle Rechte vorbehalten.',
    },
  },
} as const;

export type TranslationTree = typeof translations.es;
