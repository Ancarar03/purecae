import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '../../components/ui/Navbar';

// Product data
const jewelryItems = [
  // Pendientes
  {
    id: 1,
    slug: 'pendientes-agadez',
    name: 'Pendientes Agadez',
    image: '/images/Pendientes_Agadez.jpg',
    description: 'Elegantes pendientes con diseño minimalista',
    price: '15€',
    longDescription: `
      Estos elegantes pendientes Agadez combinan un diseño minimalista con la máxima elegancia.
      
      Fabricados en acero inoxidable de la más alta calidad, son ligeros y cómodos para uso diario.
      
      Su forma sutil y atemporal los hace perfectos para combinar con cualquier estilo, desde el más casual hasta el más formal.
      
      Materiales: Acero inoxidable 316L con acabado premium.
    `,
    features: [
      'Acero inoxidable de alta calidad',
      'Diseño ligero y cómodo',
      'Hipoalergénico',
      'Resistente a la corrosión',
      'Cierre seguro'
    ],
    careInstructions: 'Limpiar con un paño suave. Evitar el contacto con productos químicos como perfumes o lociones.'
  },
  {
    id: 2,
    slug: 'pendientes-abyss',
    name: 'Pendientes Abyss',
    image: '/images/Pendientes_Abyss.jpg',
    description: 'Pendientes con diseño inspirado en las profundidades marinas',
    price: '15€',
    longDescription: `
      Los pendientes Abyss evocan la misteriosa belleza de las profundidades del océano.
      
      Su diseño único captura la esencia de las formas orgánicas marinas, con líneas fluidas y elegantes.
      
      Perfectos para quienes buscan piezas con personalidad y un toque de misticismo marino.
      
      Materiales: Acero inoxidable 316L con acabado satinado.
    `,
    features: [
      'Diseño inspirado en el océano',
      'Forma orgánica y fluida',
      'Ligeros y cómodos',
      'Hipoalergénicos',
      'Acabado resistente'
    ],
    careInstructions: 'Guardar en lugar seco. Evitar contacto con agua salada y productos químicos.'
  },
  {
    id: 3,
    slug: 'pendientes-accra-mini',
    name: 'Pendientes Accra Mini',
    image: '/images/Pendientes_Accra_Mini.jpg',
    description: 'Pequeños pendientes con la esencia de África',
    price: '18€',
    longDescription: `
      Los pendientes Accra Mini, en su versión reducida, capturan la vibrante esencia de la capital de Ghana.
      
      Su diseño minimalista pero lleno de carácter refleja el espíritu de la cultura africana contemporánea.
      
      Ideales para llevar todos los días o combinar con otras piezas para un look más elaborado.
      
      Materiales: Acero inoxidable 316L con acabado pulido.
    `,
    features: [
      'Diseño minimalista inspirado en África',
      'Versión reducida, perfecta para uso diario',
      'Materiales hipoalergénicos',
      'Acabado pulido brillante',
      'Cierre de mariposa seguro'
    ],
    careInstructions: 'Limpiar con paño suave. Guardar por separado para evitar arañazos.'
  },
  {
    id: 4,
    slug: 'pendientes-orion',
    name: 'Pendientes Orión',
    image: '/images/Pendientes_Orión.jpg',
    description: 'Pendientes inspirados en la famosa constelación',
    price: '15€',
    longDescription: `
      Los pendientes Orión rinden homenaje a una de las constelaciones más reconocibles del cielo nocturno.
      
      Su diseño geométrico y brillante evoca la disposición de estrellas de esta formación celestial.
      
      Una pieza con carácter que aportará un toque cósmico a cualquier conjunto.
      
      Materiales: Acero inoxidable 316L con acabado brillante.
    `,
    features: [
      'Diseño inspirado en la constelación de Orión',
      'Estructura geométrica y moderna',
      'Acabado brillante que evoca las estrellas',
      'Ligeros y confortables',
      'Cierre seguro tipo gancho'
    ],
    careInstructions: 'Limpiar con paño suave y seco. Evitar productos químicos abrasivos.'
  },
  {
    id: 5,
    slug: 'pendientes-safira',
    name: 'Pendientes Safira',
    image: '/images/Pendientes_Safira.jpg',
    description: 'Pendientes con el brillo y elegancia de un zafiro',
    price: '17€',
    longDescription: `
      Los pendientes Safira capturan la intensidad y elegancia de la piedra preciosa que les da nombre.
      
      Su diseño refinado y atemporal evoca la luminosidad y profundidad característica de los zafiros.
      
      Una joya versátil que añade un toque de sofisticación a cualquier atuendo.
      
      Materiales: Acero inoxidable 316L con acabado espejo.
    `,
    features: [
      'Diseño inspirado en la piedra preciosa',
      'Forma elegante y atemporal',
      'Brillo intenso y refinado',
      'Hipoalergénicos',
      'Cierre de presión seguro'
    ],
    careInstructions: 'Guardar en estuche protector. Limpiar con paño suave sin productos abrasivos.'
  },
  {
    id: 6,
    slug: 'pendientes-siena',
    name: 'Pendientes Siena',
    image: '/images/Pendientes_Siena.jpg',
    description: 'Pendientes inspirados en la arquitectura toscana',
    price: '15€',
    longDescription: `
      Los pendientes Siena evocan la belleza clásica y armoniosa de la arquitectura de esta ciudad toscana.
      
      Su diseño estructurado con líneas limpias refleja la elegancia atemporal del estilo italiano.
      
      Perfectos para quienes aprecian la sutileza de las formas arquitectónicas clásicas.
      
      Materiales: Acero inoxidable 316L con acabado mate.
    `,
    features: [
      'Diseño arquitectónico inspirado en Italia',
      'Estructura geométrica equilibrada',
      'Acabado mate sofisticado',
      'Ligeros y cómodos de llevar',
      'Cierre de mariposa de calidad'
    ],
    careInstructions: 'Limpiar con paño suave seco. Evitar contacto con productos químicos.'
  },
  {
    id: 7,
    slug: 'pendientes-soyo',
    name: 'Pendientes Soyo',
    image: '/images/Pendientes_Soyo.jpg',
    description: 'Pendientes con un diseño inspirado en la naturaleza',
    price: '17€',
    longDescription: `
      Los pendientes Soyo toman su inspiración de las formas orgánicas encontradas en la naturaleza.
      
      Su diseño fluido y armónico evoca el movimiento de las hojas mecidas por el viento.
      
      Una pieza que conecta con lo natural y aporta un toque distintivo a cualquier look.
      
      Materiales: Acero inoxidable 316L con acabado pulido y satinado.
    `,
    features: [
      'Diseño orgánico inspirado en elementos naturales',
      'Combinación de texturas pulidas y satinadas',
      'Estructura ligera y ergonómica',
      'Hipoalergénicos',
      'Cierre de alta seguridad'
    ],
    careInstructions: 'Evitar humedad excesiva. Limpiar con paño suave y guardar en lugar seco.'
  },
  {
    id: 8,
    slug: 'pendientes-alba',
    name: 'Pendientes Alba',
    image: '/images/Pendientes_Alba.jpg',
    description: 'Pendientes elegantes con diseño inspirado en el amanecer',
    price: '17€',
    longDescription: `
      Los pendientes Alba capturan la suave y delicada luz del amanecer.
      
      Su diseño ligero y fluido evoca los primeros rayos del sol al despuntar el día.
      
      Perfectos para quienes buscan un accesorio sutil pero con personalidad.
      
      Materiales: Acero inoxidable 316L con acabado mate.
    `,
    features: [
      'Diseño inspirado en el amanecer',
      'Forma ligera y elegante',
      'Acabado mate sofisticado',
      'Hipoalergénicos',
      'Cómodos para uso diario'
    ],
    careInstructions: 'Limpiar con paño suave. Guardar en estuche para proteger el acabado.'
  },
  {
    id: 9,
    slug: 'pendientes-altair',
    name: 'Pendientes Altair',
    image: '/images/Pendientes_Altair.jpg',
    description: 'Pendientes con diseño estelar',
    price: '17€',
    longDescription: `
      Los pendientes Altair están inspirados en una de las estrellas más brillantes del cielo nocturno.
      
      Su diseño geométrico y brillante evoca la luz de las estrellas que han guiado a navegantes durante siglos.
      
      Una pieza con personalidad para quienes buscan un toque celestial en su joyería.
      
      Materiales: Acero inoxidable 316L con acabado pulido.
    `,
    features: [
      'Diseño inspirado en constelaciones',
      'Forma geométrica moderna',
      'Acabado brillante y luminoso',
      'Ligeros para máxima comodidad',
      'Cierre seguro reforzado'
    ],
    careInstructions: 'Mantener alejado de productos químicos. Limpiar con paño suave y seco.'
  },
  {
    id: 10,
    slug: 'pendientes-ambala',
    name: 'Pendientes Ambala',
    image: '/images/Pendientes_Ambala.jpg',
    description: 'Pendientes con diseño inspirado en la cultura hindú',
    price: '23€',
    longDescription: `
      Los pendientes Ambala rinden homenaje a los intrincados diseños de la joyería tradicional hindú.
      
      Su forma equilibrada combina la rica herencia cultural de la India con un toque contemporáneo.
      
      Ideales para quienes aprecian la fusión entre tradición y modernidad.
      
      Materiales: Acero inoxidable 316L con acabado satinado.
    `,
    features: [
      'Diseño inspirado en la cultura hindú',
      'Patrón geométrico equilibrado',
      'Acero inoxidable hipoalergénico',
      'Ligeros a pesar de su diseño detallado',
      'Cierre de alta calidad'
    ],
    careInstructions: 'Evitar el contacto con agua y humedad. Limpiar con paño suave no abrasivo.'
  },
  {
    id: 11,
    slug: 'pendientes-aqua',
    name: 'Pendientes Aqua',
    image: '/images/Pendientes_Aqua.jpg',
    description: 'Pendientes con la frescura y transparencia del agua',
    price: '17€',
    longDescription: `
      Los pendientes Aqua capturan la esencia fluida y cristalina del agua.
      
      Su diseño minimalista y elegante refleja la pureza y ligereza del elemento natural que los inspira.
      
      Ideales para quienes buscan accesorios frescos, sutiles y con un toque de modernidad.
      
      Materiales: Acero inoxidable 316L con acabado espejo.
    `,
    features: [
      'Diseño inspirado en el agua',
      'Estructura fluida y elegante',
      'Acero inoxidable pulido',
      'Ligeros y cómodos',
      'Cierre de presión seguro'
    ],
    careInstructions: 'Limpiar con paño suave después de cada uso. Guardar en lugar seco y protegido.'
  },
  {
    id: 12,
    slug: 'pendientes-arena',
    name: 'Pendientes Arena',
    image: '/images/Pendientes_Arena.jpg',
    description: 'Pendientes inspirados en las suaves dunas del desierto',
    price: '15€',
    longDescription: `
      Los pendientes Arena evocan las suaves ondulaciones de las dunas del desierto.
      
      Su superficie texturizada y su forma orgánica crean un juego único de luces y sombras que cambia con el movimiento.
      
      Una pieza versátil que añade carácter y sofisticación a cualquier look.
      
      Materiales: Acero inoxidable 316L con acabado texturizado.
    `,
    features: [
      'Diseño orgánico texturizado',
      'Inspirados en la naturaleza',
      'Acero inoxidable duradero',
      'Peso ligero para mayor comodidad',
      'Cierre de mariposa reforzado'
    ],
    careInstructions: 'Limpiar suavemente con paño seco. Evitar productos abrasivos que puedan dañar la textura.'
  },
  {
    id: 13,
    slug: 'pendientes-artemis',
    name: 'Pendientes Artemis',
    image: '/images/Pendientes_Artemis.jpg',
    description: 'Pendientes elegantes inspirados en la diosa de la caza',
    price: '15€',
    longDescription: `
      Los pendientes Artemis rinden homenaje a la diosa griega de la caza y la naturaleza salvaje.
      
      Su diseño evoca la fuerza y elegancia de esta poderosa deidad, combinando líneas estilizadas con un aire místico.
      
      Perfectos para quienes buscan joyería con significado y carácter.
      
      Materiales: Acero inoxidable 316L con acabado brillante.
    `,
    features: [
      'Diseño inspirado en la mitología griega',
      'Líneas elegantes y definidas',
      'Acabado de alta calidad',
      'Hipoalergénicos',
      'Cierre seguro y confortable'
    ],
    careInstructions: 'Evitar el contacto con productos químicos agresivos. Limpiar con paño suave y seco.'
  },
  {
    id: 14,
    slug: 'pendientes-astrea',
    name: 'Pendientes Astrea',
    image: '/images/Pendientes_Astrea.jpg',
    description: 'Pendientes con diseño celestial',
    price: '15€',
    longDescription: `
      Los pendientes Astrea están inspirados en la diosa de la justicia y las estrellas de la mitología griega.
      
      Su diseño equilibrado y armónico evoca la belleza de los cuerpos celestes y la precisión del cosmos.
      
      Una joya perfecta para quienes buscan elegancia con un toque de misticismo estelar.
      
      Materiales: Acero inoxidable 316L con acabado pulido.
    `,
    features: [
      'Diseño inspirado en elementos celestiales',
      'Forma geométrica balanceada',
      'Acabado brillante que refleja la luz',
      'Ligeros y cómodos de llevar',
      'Cierre seguro para mayor confort'
    ],
    careInstructions: 'Guardar en lugar seco. Limpiar periódicamente con paño suave para mantener su brillo.'
  },
  {
    id: 15,
    slug: 'pendientes-aura',
    name: 'Pendientes Aura',
    image: '/images/Pendientes_Aura.jpg',
    description: 'Pendientes con un aura de elegancia y sutileza',
    price: '15€',
    longDescription: `
      Los pendientes Aura capturan la esencia etérea y luminosa que rodea a los seres y objetos.
      
      Su diseño delicado y fluido evoca la sutileza de la energía que nos rodea, apenas visible pero siempre presente.
      
      Perfectos para quienes aprecian la joyería con significado espiritual y estético.
      
      Materiales: Acero inoxidable 316L con acabado satinado.
    `,
    features: [
      'Diseño inspirado en el concepto de aura energética',
      'Formas fluidas y orgánicas',
      'Acabado satinado elegante',
      'Ligeros y cómodos para uso diario',
      'Cierre seguro de mariposa'
    ],
    careInstructions: 'Mantener alejado de productos químicos. Limpiar con paño suave y seco.'
  },
  {
    id: 16,
    slug: 'pendientes-bruma',
    name: 'Pendientes Bruma',
    image: '/images/Pendientes_Bruma.jpg',
    description: 'Pendientes que evocan la suave neblina matutina',
    price: '17€',
    longDescription: `
      Los pendientes Bruma capturan la textura difusa y etérea de la niebla que cubre los paisajes al amanecer.
      
      Su diseño suave y difuminado evoca la sensación de misterio y calma que trae consigo la bruma.
      
      Ideales para quienes buscan piezas con inspiración natural y un toque romántico.
      
      Materiales: Acero inoxidable 316L con acabado mate.
    `,
    features: [
      'Diseño inspirado en elementos naturales',
      'Textura suave y acabado sutil',
      'Estructura ligera y cómoda',
      'Hipoalergénicos',
      'Cierre seguro reforzado'
    ],
    careInstructions: 'Limpiar con paño suave y seco. Evitar la exposición prolongada a la humedad.'
  },
  {
    id: 17,
    slug: 'pendientes-calicut',
    name: 'Pendientes Calicut',
    image: '/images/Pendientes_Calicut.jpg',
    description: 'Pendientes inspirados en la histórica ciudad comercial india',
    price: '8€',
    longDescription: `
      Los pendientes Calicut rinden homenaje a la rica historia comercial de esta importante ciudad portuaria de la India.
      
      Su diseño evoca la fusión cultural y la influencia de las rutas comerciales que unían Oriente y Occidente.
      
      Una pieza con personalidad para quienes aprecian la joyería con raíces históricas y culturales.
      
      Materiales: Acero inoxidable 316L con acabado pulido.
    `,
    features: [
      'Diseño inspirado en motivos tradicionales indios',
      'Estructura geométrica equilibrada',
      'Tamaño ideal para uso diario',
      'Acero inoxidable hipoalergénico',
      'Cierre seguro y confortable'
    ],
    careInstructions: 'Evitar el contacto con agua salada. Limpiar con paño suave y seco.'
  },
  {
    id: 18,
    slug: 'pendientes-clarise',
    name: 'Pendientes Clarise',
    image: '/images/Pendientes_Clarise.jpg',
    description: 'Pendientes con la claridad y pureza del cristal',
    price: '17€',
    longDescription: `
      Los pendientes Clarise evocan la transparencia y pureza del cristal más fino.
      
      Su diseño geométrico y limpio refleja la luz creando destellos sutiles que realzan la belleza natural.
      
      Perfectos para quienes buscan elegancia atemporal con un toque contemporáneo.
      
      Materiales: Acero inoxidable 316L con acabado pulido brillante.
    `,
    features: [
      'Diseño minimalista y elegante',
      'Líneas limpias y definidas',
      'Acabado de alta precisión',
      'Ligeros y cómodos',
      'Cierre seguro de presión'
    ],
    careInstructions: 'Limpiar regularmente con paño suave para mantener su brillo. Evitar productos químicos.'
  },
  {
    id: 19,
    slug: 'pendientes-coralina',
    name: 'Pendientes Coralina',
    image: '/images/Pendientes_Coralina.jpg',
    description: 'Pendientes inspirados en las hermosas formaciones coralinas',
    price: '23€',
    longDescription: `
      Los pendientes Coralina capturan la belleza orgánica y compleja de los arrecifes de coral.
      
      Su diseño texturizado y natural evoca las intrincadas estructuras que forman estos hermosos ecosistemas marinos.
      
      Una pieza única para quienes aprecian la belleza natural y buscan accesorios con inspiración oceánica.
      
      Materiales: Acero inoxidable 316L con acabado texturizado.
    `,
    features: [
      'Diseño inspirado en formaciones coralinas',
      'Textura orgánica y natural',
      'Estructura tridimensional detallada',
      'Acero inoxidable duradero',
      'Cierre de mariposa reforzado'
    ],
    careInstructions: 'Limpiar suavemente con paño seco. Evitar productos que puedan dañar la textura.'
  },
  {
    id: 20,
    slug: 'pendientes-delhi',
    name: 'Pendientes Delhi',
    image: '/images/Pendientes_Delhi.jpg',
    description: 'Pendientes con la esencia de la capital india',
    price: '15€',
    longDescription: `
      Los pendientes Delhi capturan el espíritu vibrante y multicultural de la capital de la India.
      
      Su diseño equilibrado mezcla elementos tradicionales con un enfoque contemporáneo, reflejando la dualidad de esta histórica ciudad.
      
      Perfectos para quienes buscan piezas con carácter e inspiración cultural.
      
      Materiales: Acero inoxidable 316L con acabado satinado.
    `,
    features: [
      'Diseño inspirado en la arquitectura de Delhi',
      'Combinación de formas tradicionales y modernas',
      'Acero inoxidable hipoalergénico',
      'Estructura ligera y equilibrada',
      'Cierre seguro de mariposa'
    ],
    careInstructions: 'Guardar en lugar seco. Limpiar con paño suave y evitar productos químicos abrasivos.'
  },
  {
    id: 21,
    slug: 'pendientes-gaya',
    name: 'Pendientes Gaya',
    image: '/images/Pendientes_Gaya.jpg',
    description: 'Pendientes inspirados en la ciudad sagrada budista',
    price: '15€',
    longDescription: `
      Los pendientes Gaya rinden homenaje a uno de los lugares más sagrados del budismo en la India.
      
      Su diseño sereno y equilibrado evoca la paz y la armonía asociadas con este importante centro espiritual.
      
      Una pieza con significado para quienes aprecian la joyería con raíces culturales profundas.
      
      Materiales: Acero inoxidable 316L con acabado mate.
    `,
    features: [
      'Diseño inspirado en símbolos budistas',
      'Formas equilibradas y armónicas',
      'Estructura ligera y confortable',
      'Acero inoxidable hipoalergénico',
      'Cierre seguro para uso diario'
    ],
    careInstructions: 'Limpiar con paño suave. Evitar el contacto con agua y productos químicos.'
  },
  {
    id: 22,
    slug: 'pendientes-globo',
    name: 'Pendientes Globo',
    image: '/images/Pendientes_Globo.jpg',
    description: 'Pendientes con forma esférica y elegante',
    price: '15€',
    longDescription: `
      Los pendientes Globo capturan la perfección y simetría de la forma esférica.
      
      Su diseño limpio y minimalista evoca la elegancia atemporal de la geometría más pura.
      
      Perfectos para quienes buscan piezas versátiles que combinen con cualquier estilo.
      
      Materiales: Acero inoxidable 316L con acabado pulido espejo.
    `,
    features: [
      'Diseño geométrico perfecto',
      'Acabado pulido de alta calidad',
      'Reflejos brillantes a la luz',
      'Ligeros a pesar de su apariencia',
      'Cierre seguro reforzado'
    ],
    careInstructions: 'Limpiar regularmente con paño suave para mantener el brillo. Evitar arañazos.'
  },
  {
    id: 23,
    slug: 'pendientes-grace',
    name: 'Pendientes Grace',
    image: '/images/Pendientes_Grace.jpg',
    description: 'Pendientes que personifican la elegancia y la gracia',
    price: '16€',
    longDescription: `
      Los pendientes Grace encarnan la delicadeza y fluidez del movimiento elegante.
      
      Su diseño suave y armonioso evoca la ligereza de un gesto grácil, capturando la esencia de la belleza en movimiento.
      
      Ideales para quienes buscan accesorios que añadan un toque de refinamiento a cualquier conjunto.
      
      Materiales: Acero inoxidable 316L con acabado satinado.
    `,
    features: [
      'Diseño inspirado en el movimiento fluido',
      'Líneas curvas y elegantes',
      'Estructura ligera y cómoda',
      'Acabado satinado sofisticado',
      'Cierre seguro para máximo confort'
    ],
    careInstructions: 'Guardar por separado para evitar arañazos. Limpiar con paño suave.'
  },
  {
    id: 24,
    slug: 'pendientes-hubble',
    name: 'Pendientes Hubble',
    image: '/images/Pendientes_Hubble.jpg',
    description: 'Pendientes inspirados en el famoso telescopio espacial',
    price: '15€',
    longDescription: `
      Los pendientes Hubble rinden homenaje al revolucionario telescopio que nos ha permitido observar el universo como nunca antes.
      
      Su diseño geométrico y preciso evoca la tecnología de vanguardia y la exploración del cosmos.
      
      Perfectos para amantes de la astronomía y la ciencia.
      
      Materiales: Acero inoxidable 316L con acabado pulido.
    `,
    features: [
      'Diseño inspirado en tecnología espacial',
      'Estructura geométrica moderna',
      'Acabado brillante de alta precisión',
      'Ligeros y equilibrados',
      'Cierre seguro para máxima comodidad'
    ],
    careInstructions: 'Limpiar con paño suave y seco. Evitar contacto con productos químicos.'
  },
  {
    id: 25,
    slug: 'pendientes-ivory',
    name: 'Pendientes Ivory',
    image: '/images/Pendientes_Ivory.jpg',
    description: 'Pendientes elegantes con la suavidad del marfil',
    price: '25€',
    longDescription: `
      Los pendientes Ivory se inspiran en la suavidad y delicadeza del marfil, capturando su elegancia atemporal de forma ética.
      
      Su diseño suave y orgánico evoca la calidez y sutileza de este material natural, sin utilizar elementos de origen animal.
      
      Una pieza sofisticada para quienes aprecian la estética clásica con valores contemporáneos.
      
      Materiales: Acero inoxidable 316L con acabado mate suave.
    `,
    features: [
      'Diseño inspirado en formas orgánicas naturales',
      'Acabado mate que simula la textura del marfil',
      'Estructura ligera y confortable',
      'Materiales 100% éticos',
      'Cierre seguro reforzado'
    ],
    careInstructions: 'Limpiar suavemente con paño suave. Evitar productos químicos agresivos.'
  },
  {
    id: 26,
    slug: 'pendientes-kalpa',
    name: 'Pendientes Kalpa',
    image: '/images/Pendientes_Kalpa.jpg',
    description: 'Pendientes inspirados en el concepto cósmico hindú',
    price: '15€',
    longDescription: `
      Los pendientes Kalpa se inspiran en el concepto hindú y budista que representa un ciclo cósmico de creación y destrucción.
      
      Su diseño cíclico y fluido evoca el movimiento perpetuo y la naturaleza cambiante del universo.
      
      Una pieza con profundo significado para quienes aprecian la joyería con raíces filosóficas.
      
      Materiales: Acero inoxidable 316L con acabado combinado mate y pulido.
    `,
    features: [
      'Diseño inspirado en conceptos filosóficos orientales',
      'Forma circular que simboliza los ciclos cósmicos',
      'Combinación de acabados para crear contraste',
      'Estructura ligera y equilibrada',
      'Cierre seguro de mariposa'
    ],
    careInstructions: 'Mantener alejado de humedad excesiva. Limpiar con paño suave y seco.'
  },
  {
    id: 27,
    slug: 'pendientes-kepler',
    name: 'Pendientes Kepler',
    image: '/images/Pendientes_Kepler.jpg',
    description: 'Pendientes inspirados en el astrónomo y sus descubrimientos',
    price: '15€',
    longDescription: `
      Los pendientes Kepler rinden homenaje al astrónomo que revolucionó nuestra comprensión de los movimientos planetarios.
      
      Su diseño elíptico y preciso evoca las órbitas planetarias descritas en las famosas leyes de Kepler.
      
      Perfectos para amantes de la ciencia y la astronomía.
      
      Materiales: Acero inoxidable 316L con acabado pulido de alta precisión.
    `,
    features: [
      'Diseño inspirado en órbitas planetarias',
      'Forma elíptica matemáticamente precisa',
      'Acabado brillante que refleja la luz',
      'Estructura ligera y estable',
      'Cierre seguro para mayor comodidad'
    ],
    careInstructions: 'Limpiar con paño suave para mantener el brillo. Evitar arañazos.'
  },
  {
    id: 28,
    slug: 'pendientes-kochi',
    name: 'Pendientes Kochi',
    image: '/images/Pendientes_Kochi.jpg',
    description: 'Pendientes inspirados en la vibrante ciudad costera india',
    price: '15€',
    longDescription: `
      Los pendientes Kochi capturan la esencia de esta colorida ciudad portuaria del sur de la India.
      
      Su diseño equilibrado refleja la fusión de culturas y tradiciones que han dado forma a este importante centro comercial histórico.
      
      Una pieza con personalidad para quienes aprecian la joyería con influencias culturales diversas.
      
      Materiales: Acero inoxidable 316L con acabado satinado.
    `,
    features: [
      'Diseño inspirado en la arquitectura de Kochi',
      'Estructura geométrica balanceada',
      'Acero inoxidable hipoalergénico',
      'Ligeros y cómodos para uso diario',
      'Cierre seguro y resistente'
    ],
    careInstructions: 'Guardar en lugar seco. Limpiar con paño suave no abrasivo.'
  },
  {
    id: 29,
    slug: 'pendientes-lira',
    name: 'Pendientes Lira',
    image: '/images/Pendientes_Lira.jpg',
    description: 'Pendientes inspirados en el antiguo instrumento musical',
    price: '17€',
    longDescription: `
      Los pendientes Lira rinden homenaje a este emblemático instrumento de cuerda de la antigua Grecia.
      
      Su diseño curvo y armónico evoca la forma del instrumento que simbolizaba la armonía y la música en la mitología clásica.
      
      Perfectos para amantes de la música y la cultura clásica.
      
      Materiales: Acero inoxidable 316L con acabado pulido.
    `,
    features: [
      'Diseño inspirado en instrumentos musicales clásicos',
      'Forma curva elegante y armoniosa',
      'Estructura equilibrada y ligera',
      'Acabado brillante de alta calidad',
      'Cierre seguro para mayor comodidad'
    ],
    careInstructions: 'Limpiar con paño suave y seco. Guardar por separado para evitar arañazos.'
  },
  {
    id: 30,
    slug: 'pendientes-lunar',
    name: 'Pendientes Lunar',
    image: '/images/Pendientes_Lunar.jpg',
    description: 'Pendientes inspirados en las fases de la luna',
    price: '15€',
    longDescription: `
      Los pendientes Lunar capturan la misteriosa belleza de nuestro satélite natural y sus cambiantes fases.
      
      Su diseño curvo y delicado evoca la silueta de la luna creciente, símbolo de renovación y ciclos eternos.
      
      Una pieza con significado para quienes sienten conexión con los ciclos naturales y la astronomía.
      
      Materiales: Acero inoxidable 316L con acabado pulido espejo.
    `,
    features: [
      'Diseño inspirado en fases lunares',
      'Forma curva precisa y elegante',
      'Acabado brillante que refleja la luz',
      'Estructura ligera y equilibrada',
      'Cierre seguro reforzado'
    ],
    careInstructions: 'Limpiar regularmente con paño suave para mantener su brillo. Evitar productos abrasivos.'
  },
  {
    id: 31,
    slug: 'pendientes-maradi',
    name: 'Pendientes Maradi',
    image: '/images/Pendientes_Maradi.jpg',
    description: 'Pendientes inspirados en la ciudad nigeriana',
    price: '15€',
    longDescription: `
      Los pendientes Maradi capturan la esencia de esta importante ciudad del sur de Níger.
      
      Su diseño geométrico y equilibrado refleja los patrones tradicionales de la región y su rica herencia cultural.
      
      Una pieza única para quienes aprecian la joyería con influencias étnicas y culturales auténticas.
      
      Materiales: Acero inoxidable 316L con acabado satinado.
    `,
    features: [
      'Diseño inspirado en patrones africanos tradicionales',
      'Estructura geométrica simbólica',
      'Acero inoxidable resistente',
      'Ligeros a pesar de su apariencia sólida',
      'Cierre seguro de mariposa'
    ],
    careInstructions: 'Evitar el contacto con agua y productos químicos. Limpiar con paño seco.'
  },
  {
    id: 32,
    slug: 'pendientes-nemesis',
    name: 'Pendientes Némesis',
    image: '/images/Pendientes_Némesis.jpg',
    description: 'Pendientes inspirados en la diosa griega del equilibrio divino',
    price: '15€',
    longDescription: `
      Los pendientes Némesis rinden homenaje a la diosa griega que personificaba el equilibrio cósmico y la justicia divina.
      
      Su diseño balanceado y simétrico evoca el concepto de equilibrio entre fuerzas opuestas que esta deidad representaba.
      
      Una pieza con carácter para quienes aprecian la joyería con simbolismo mitológico.
      
      Materiales: Acero inoxidable 316L con acabado combinado mate y pulido.
    `,
    features: [
      'Diseño inspirado en la mitología griega',
      'Estructura perfectamente balanceada',
      'Combinación de texturas contrastantes',
      'Acero inoxidable hipoalergénico',
      'Cierre seguro para mayor comodidad'
    ],
    careInstructions: 'Limpiar con paño suave y seco. Evitar productos químicos abrasivos.'
  },
  {
    id: 33,
    slug: 'pendientes-nereida',
    name: 'Pendientes Nereida',
    image: '/images/Pendientes_Nereida.jpg',
    description: 'Pendientes inspirados en las ninfas marinas de la mitología griega',
    price: '15€',
    longDescription: `
      Los pendientes Nereida evocan la gracia y fluidez de estas ninfas marinas que personificaban la belleza del mar Mediterráneo.
      
      Su diseño ondulante y dinámico captura el movimiento de las olas y la esencia etérea de estas criaturas mitológicas.
      
      Perfectos para quienes sienten conexión con el mar y su simbolismo.
      
      Materiales: Acero inoxidable 316L con acabado pulido.
    `,
    features: [
      'Diseño inspirado en elementos marinos',
      'Forma ondulada que evoca el movimiento del agua',
      'Estructura ligera y fluida',
      'Acabado brillante que refleja la luz',
      'Cierre seguro tipo gancho'
    ],
    careInstructions: 'Guardar en lugar seco. Limpiar con paño suave para mantener su brillo.'
  },
  {
    id: 34,
    slug: 'pendientes-nova',
    name: 'Pendientes Nova',
    image: '/images/Pendientes_Nova.jpg',
    description: 'Pendientes inspirados en la explosión estelar',
    price: '17€',
    longDescription: `
      Los pendientes Nova capturan el dramático estallido de luz que caracteriza a estas potentes explosiones estelares.
      
      Su diseño radiante y dinámico evoca la liberación de energía cósmica y la transformación estelar.
      
      Una pieza impactante para quienes aprecian la joyería inspirada en fenómenos astronómicos.
      
      Materiales: Acero inoxidable 316L con acabado de alta precisión.
    `,
    features: [
      'Diseño inspirado en explosiones estelares',
      'Patrón radiante que evoca rayos de luz',
      'Estructura geométrica precisa',
      'Acabado brillante multifacético',
      'Cierre seguro reforzado'
    ],
    careInstructions: 'Limpiar con paño suave y seco. Evitar productos abrasivos que puedan dañar el acabado.'
  },
  // Colgantes
  {
    id: 30,
    slug: 'colgante-kollam',
    name: 'Colgante Kollam',
    image: '/images/Colgante_Kollam.jpg',
    description: 'Colgante inspirado en los diseños tradicionales de la India',
    price: '15€',
    longDescription: `
      El colgante Kollam rinde homenaje a los intrincados diseños tradicionales del sur de la India.
      
      Su patrón geométrico finamente elaborado refleja la rica tradición artística de la región de Kerala.
      
      Una pieza con personalidad que aporta un toque étnico y sofisticado a cualquier conjunto.
      
      Materiales: Acero inoxidable 316L con acabado brillante.
    `,
    features: [
      'Diseño inspirado en patrones tradicionales indios',
      'Elaborados detalles geométricos',
      'Cadena incluida ajustable',
      'Material hipoalergénico',
      'Cierre de mosquetón seguro'
    ],
    careInstructions: 'Evitar contacto con agua. Limpiar con paño suave y seco.'
  },
  {
    id: 31,
    slug: 'colgante-tunis-mini',
    name: 'Colgante Tunis Mini',
    image: '/images/Colgante_Tunis_Mini.jpg',
    description: 'Colgante con estilo mediterráneo en versión mini',
    price: '12€',
    longDescription: `
      El colgante Tunis Mini captura la esencia del Mediterráneo en una versión reducida y elegante.
      
      Su diseño evoca la arquitectura y patrones tradicionales del norte de África, con líneas limpias y armoniosas.
      
      Perfecto para quienes buscan una joya sutil pero con carácter y raíces culturales profundas.
      
      Materiales: Acero inoxidable 316L con acabado mate.
    `,
    features: [
      'Diseño inspirado en patrones mediterráneos',
      'Tamaño mini, ideal para uso diario',
      'Incluye cadena de 45cm',
      'Acabado mate duradero',
      'Hipoalergénico y resistente'
    ],
    careInstructions: 'Guardar en lugar seco. Limpiar suavemente con paño no abrasivo.'
  },
  {
    id: 32,
    slug: 'colgante-alhena',
    name: 'Colgante Alhena',
    image: '/images/Colgante_Alhena.jpg',
    description: 'Colgante con diseño estelar inspirado en constelaciones',
    price: '12€',
    longDescription: `
      El colgante Alhena toma su nombre de una de las estrellas más brillantes de la constelación de Géminis.
      
      Su diseño geométrico y elegante captura la esencia de las formaciones estelares que han fascinado a la humanidad durante milenios.
      
      Una pieza con carácter para quienes buscan joyería con simbolismo y significado profundo.
      
      Materiales: Acero inoxidable 316L con acabado pulido.
    `,
    features: [
      'Diseño inspirado en constelaciones',
      'Forma geométrica precisa',
      'Incluye cadena ajustable',
      'Hipoalergénico y duradero',
      'Cierre seguro de mosquetón'
    ],
    careInstructions: 'Mantener alejado de productos químicos. Limpiar periódicamente con paño suave.'
  },
  {
    id: 33,
    slug: 'colgante-bretzel',
    name: 'Colgante Bretzel',
    image: '/images/Colgante_Bretzel.jpg',
    description: 'Colgante con forma de pretzel, divertido y original',
    price: '12€',
    longDescription: `
      El colgante Bretzel es una pieza divertida y original que reproduce fielmente la forma de este icónico snack.
      
      Su diseño detallado y realista añade un toque de humor y originalidad a cualquier look.
      
      Perfecto para quienes buscan accesorios con personalidad y un punto diferente.
      
      Materiales: Acero inoxidable 316L con acabado satinado.
    `,
    features: [
      'Diseño original con forma de pretzel',
      'Detalles realistas bien definidos',
      'Incluye cadena de 45cm',
      'Material hipoalergénico',
      'Ligero y cómodo de llevar'
    ],
    careInstructions: 'Evitar golpes que puedan dañar los detalles. Limpiar con paño suave.'
  },
  {
    id: 34,
    slug: 'colgante-croissant',
    name: 'Colgante Croissant',
    image: '/images/Colgante_Croissant.jpg',
    description: 'Colgante con forma de croissant, perfecto para amantes de la repostería',
    price: '12€',
    longDescription: `
      El colgante Croissant reproduce con fidelidad este icónico bollo francés, añadiendo un toque divertido a cualquier conjunto.
      
      Su diseño detallado captura perfectamente la textura y forma característica de esta delicia de pastelería.
      
      Ideal para amantes de la gastronomía y para quienes buscan un accesorio único y conversacional.
      
      Materiales: Acero inoxidable 316L con acabado dorado mate.
    `,
    features: [
      'Diseño realista de croissant',
      'Textura que simula las capas de la masa',
      'Incluye cadena de 45cm',
      'Acero inoxidable hipoalergénico',
      'Acabado resistente a largo plazo'
    ],
    careInstructions: 'Evitar el contacto con agua y productos químicos. Limpiar con paño suave.'
  },
  {
    id: 35,
    slug: 'colgante-cupcake',
    name: 'Colgante Cupcake',
    image: '/images/Colgante_Cupcake.jpg',
    description: 'Dulce colgante con forma de cupcake',
    price: '12€',
    longDescription: `
      El colgante Cupcake es una pieza encantadora que reproduce en miniatura este popular dulce.
      
      Cada detalle ha sido cuidadosamente diseñado para capturar la esencia de un cupcake recién horneado, desde su base hasta su decoración.
      
      Perfecto para añadir un toque dulce y divertido a cualquier conjunto.
      
      Materiales: Acero inoxidable 316L con detalles en diferentes acabados.
    `,
    features: [
      'Diseño detallado de cupcake',
      'Múltiples texturas y acabados',
      'Cadena incluida de 45cm',
      'Ligero a pesar de su diseño elaborado',
      'Materiales hipoalergénicos'
    ],
    careInstructions: 'Limpiar con paño suave. Evitar productos que puedan dañar los detalles del diseño.'
  },
  {
    id: 36,
    slug: 'colgante-donut',
    name: 'Colgante Donut',
    image: '/images/Colgante_Donut.jpg',
    description: 'Colgante con forma de donut clásico',
    price: '12€',
    longDescription: `
      El colgante Donut captura perfectamente la forma redondeada y el acabado brillante de esta famosa delicia.
      
      Su diseño realista y detallado lo convierte en una pieza divertida que añade personalidad a cualquier look.
      
      Una joya que combina humor, originalidad y un acabado de alta calidad.
      
      Materiales: Acero inoxidable 316L con acabado pulido.
    `,
    features: [
      'Diseño fiel de donut clásico',
      'Forma circular perfecta',
      'Incluye cadena resistente',
      'Acero inoxidable duradero',
      'Cierre seguro de mosquetón'
    ],
    careInstructions: 'Guardar en lugar seco. Limpiar con paño suave no abrasivo.'
  },
  {
    id: 37,
    slug: 'colgante-donut-glaseado',
    name: 'Colgante Donut Glaseado',
    image: '/images/Colgante_Donut_Glaseado.jpg',
    description: 'Colgante con forma de donut con glaseado',
    price: '12€',
    longDescription: `
      El colgante Donut Glaseado es una versión más elaborada de nuestro donut clásico, con detalles que simulan un delicioso glaseado.
      
      Su diseño colorido y juguetón añade un toque de diversión y originalidad a cualquier conjunto.
      
      Una pieza conversacional perfecta para amantes de los accesorios únicos y con personalidad.
      
      Materiales: Acero inoxidable 316L con acabados variados.
    `,
    features: [
      'Diseño de donut con glaseado',
      'Textura que simula el glaseado',
      'Cadena ajustable incluida',
      'Materiales hipoalergénicos',
      'Acabado resistente y duradero'
    ],
    careInstructions: 'Evitar el contacto con agua. Guardar en lugar seco y limpiar periódicamente con paño suave.'
  },
  {
    id: 38,
    slug: 'colgante-helado',
    name: 'Colgante Helado',
    image: '/images/Colgante_Helado.jpg',
    description: 'Refrescante colgante con forma de helado',
    price: '12€',
    longDescription: `
      El colgante Helado es una pieza divertida y veraniega inspirada en este refrescante dulce.
      
      Su diseño detallado reproduce fielmente un helado de cucurucho, con todos sus elementos característicos.
      
      Perfecto para añadir un toque juguetón y desenfadado a cualquier conjunto.
      
      Materiales: Acero inoxidable 316L con acabados variados.
    `,
    features: [
      'Diseño realista de helado',
      'Detalles bien definidos',
      'Cadena de 45cm incluida',
      'Ligero y cómodo de llevar',
      'Materiales duraderos'
    ],
    careInstructions: 'Limpiar con paño suave y seco. Evitar productos químicos agresivos.'
  }
  // Puedes añadir más productos si es necesario
];

// Función para obtener datos de producto por slug
function getProductBySlug(slug: string) {
  return jewelryItems.find(item => item.slug === slug);
}

// Generar metadata dinámica para SEO
export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  
  if (!product) {
    return {
      title: 'Producto no encontrado | Purecae Jewelry',
      description: 'El producto que buscas no está disponible.'
    };
  }
  
  return {
    title: `${product.name} | Purecae Jewelry`,
    description: product.description,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  
  // Si no existe el producto, mostrar 404
  if (!product) {
    notFound();
  }
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-20 pb-16 md:pt-24 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Migas de pan */}
          <div className="py-2 md:py-4 mb-4 md:mb-8">
            <div className="flex items-center text-xs md:text-sm text-gray-500">
              <Link href="/" className="hover:text-gold-500 transition-colors">
                Inicio
              </Link>
              <span className="mx-2">/</span>
              <Link href="/catalogo" className="hover:text-gold-500 transition-colors">
                Catálogo
              </Link>
              <span className="mx-2">/</span>
              <span className="text-black">{product.name}</span>
            </div>
          </div>
          
          {/* Producto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-16">
            {/* Imagen del producto */}
            <div className="aspect-square relative overflow-hidden bg-beige-50">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Detalles del producto */}
            <div className="flex flex-col justify-start mt-4 md:mt-0 md:justify-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-2 md:mb-4">{product.name}</h1>
              <p className="text-lg md:text-xl text-gold-500 font-medium mb-4 md:mb-6">{product.price}</p>
              <div className="mb-6 md:mb-8">
                <h2 className="text-base md:text-lg font-medium mb-2 md:mb-3">Descripción</h2>
                <div className="prose text-sm md:text-base text-gray-700">
                  {product.longDescription.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="mb-3 md:mb-4">{paragraph.trim()}</p>
                  ))}
                </div>
              </div>
              
              {/* Características */}
              <div className="mb-6 md:mb-8">
                <h2 className="text-base md:text-lg font-medium mb-2 md:mb-3">Características</h2>
                <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-1">
                  {product.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              {/* Cuidados */}
              <div className="mb-8 md:mb-10">
                <h2 className="text-base md:text-lg font-medium mb-2 md:mb-3">Cuidados</h2>
                <p className="text-sm md:text-base text-gray-700">{product.careInstructions}</p>
              </div>
              
              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link 
                  href={`https://wa.me/34632138331?text=Hola, me interesa el producto ${product.name} (${product.price}). ¿Está disponible?`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center px-6 py-3 md:px-8 bg-black text-white hover:bg-green-600 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  Comprar por WhatsApp
                </Link>
                <Link 
                  href="/catalogo"
                  className="inline-flex justify-center items-center px-6 py-3 md:px-8 border border-black/50 text-black/70 font-medium tracking-wide transition-all hover:border-black hover:text-black text-center"
                >
                  Ver más productos
                </Link>
              </div>
            </div>
          </div>
          
          {/* Productos relacionados - Simplificado */}
          <div className="mt-16 md:mt-24">
            <h2 className="text-2xl md:text-3xl font-serif mb-6 md:mb-8 text-center">También te puede interesar</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {jewelryItems
                .filter(item => item.slug !== product.slug)
                .slice(0, 4)
                .map(item => (
                  <Link key={item.id} href={`/productos/${item.slug}`} className="group block">
                    <div className="aspect-square relative overflow-hidden mb-2 md:mb-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                      />
                    </div>
                    <h3 className="text-sm md:text-lg font-medium">{item.name}</h3>
                    <p className="text-xs md:text-sm text-gold-500">{item.price}</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 