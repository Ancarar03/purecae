import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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
    price: '15€',
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
    price: '15€',
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
    price: '15€',
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
    price: '15€',
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
    price: '15€',
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
    price: '15€',
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
  // Añadir el resto de pendientes con una estructura similar
  
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
    price: '15€',
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
    price: '15€',
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
    price: '15€',
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
    price: '15€',
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
    price: '15€',
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
    price: '15€',
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
    price: '15€',
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
    price: '15€',
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
      title: 'Producto no encontrado | Purecae',
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
    <main className="min-h-screen bg-white pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Migas de pan */}
        <div className="py-4 mb-8">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-gold-500 transition-colors">
              Inicio
            </Link>
            <span className="mx-2">/</span>
            <Link href="/#collection" className="hover:text-gold-500 transition-colors">
              Colección
            </Link>
            <span className="mx-2">/</span>
            <span className="text-black">{product.name}</span>
          </div>
        </div>
        
        {/* Producto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
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
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">{product.name}</h1>
            <p className="text-xl text-gold-500 font-medium mb-6">{product.price}</p>
            <div className="mb-8">
              <h2 className="text-lg font-medium mb-3">Descripción</h2>
              <div className="prose text-gray-700">
                {product.longDescription.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="mb-4">{paragraph.trim()}</p>
                ))}
              </div>
            </div>
            
            {/* Características */}
            <div className="mb-8">
              <h2 className="text-lg font-medium mb-3">Características</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {product.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            
            {/* Cuidados */}
            <div className="mb-10">
              <h2 className="text-lg font-medium mb-3">Cuidados</h2>
              <p className="text-gray-700">{product.careInstructions}</p>
            </div>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://wa.me/c/34632138331" target="_blank" rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-8 py-3 bg-gold-400 text-black font-medium tracking-wide transition-all hover:bg-gold-500 text-center"
              >
                Consultar disponibilidad
              </Link>
              <Link href="/#collection"
                className="inline-flex justify-center items-center px-8 py-3 border border-black text-black font-medium tracking-wide transition-all hover:bg-black hover:text-white text-center"
              >
                Ver más productos
              </Link>
            </div>
          </div>
        </div>
        
        {/* Productos relacionados - Simplificado */}
        <div className="mt-24">
          <h2 className="text-3xl font-serif mb-8 text-center">También te puede interesar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {jewelryItems
              .filter(item => item.slug !== product.slug)
              .slice(0, 4)
              .map(item => (
                <Link key={item.id} href={`/productos/${item.slug}`} className="group block">
                  <div className="aspect-square relative overflow-hidden mb-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-sm text-gold-500">{item.price}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
} 