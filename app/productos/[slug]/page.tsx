import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Product data
const jewelryItems = [
  {
    id: 1,
    slug: 'pendientes-perlas',
    name: 'Pendientes de Perlas',
    image: '/images/4.jpg',
    description: 'Pendientes de aro con perlas naturales',
    price: '120€',
    longDescription: `
      Estos elegantes pendientes combinan acero inoxidable de la más alta calidad con perlas naturales cuidadosamente seleccionadas. 
      
      Cada perla mantiene su forma única y brillo natural, haciendo de cada par una pieza irrepetible.
      
      Diseñados para ser cómodos y ligeros, son perfectos tanto para el uso diario como para ocasiones especiales. 
      
      Materiales: Acero inoxidable 316L y perlas naturales.
    `,
    features: [
      'Acero inoxidable de alta calidad',
      'Perlas naturales',
      'Cierre seguro',
      'Hipoalergénico',
      'Resistente al agua'
    ],
    careInstructions: 'Limpiar con un paño suave. Evitar el contacto con productos químicos como perfumes o lociones.'
  },
  {
    id: 2,
    slug: 'collar-minimalista',
    name: 'Collar Minimalista',
    image: '/images/3.jpg',
    description: 'Collar dorado de diseño minimalista',
    price: '150€',
    longDescription: `
      Este collar minimalista representa la esencia de nuestra filosofía: elegancia atemporal con un toque contemporáneo.
      
      Fabricado a mano con acero inoxidable dorado, su diseño sutil permite llevarlo todos los días o combinarlo con otras piezas para un look más elaborado.
      
      La cadena ajustable permite adaptarlo a diferentes estilos y escotes.
      
      Materiales: Acero inoxidable 316L con acabado en oro.
    `,
    features: [
      'Baño de oro de 18k',
      'Cadena ajustable de 40-45cm',
      'Hipoalergénico',
      'Resistente a la corrosión',
      'Cierre de mosquetón'
    ],
    careInstructions: 'Guardar en un lugar seco. Evitar exposición prolongada a la humedad. Limpiar con paño suave.'
  },
  {
    id: 3,
    slug: 'joya-signature',
    name: 'Joya Signature',
    image: '/images/1.jpg',
    description: 'Pieza icónica de nuestra colección',
    price: '180€',
    longDescription: `
      Nuestra pieza emblemática representa la culminación de nuestro arte joyero. Cada curva y ángulo ha sido cuidadosamente diseñado para crear una joya que sea tanto una declaración como un complemento sutil.
      
      Combinando técnicas tradicionales con diseño contemporáneo, esta pieza captura la esencia de PURECAE.
      
      Cada joya se crea a mano, asegurando atención al detalle y acabados perfectos.
      
      Materiales: Acero inoxidable con incrustaciones de piedra natural.
    `,
    features: [
      'Diseño exclusivo',
      'Piedras naturales',
      'Acabado premium',
      'Hipoalergénico',
      'Incluye estuche de regalo'
    ],
    careInstructions: 'Almacenar separada de otras joyas. Limpiar con paño suave y seco. Evitar productos químicos.'
  },
  {
    id: 4,
    slug: 'aretes-delicados',
    name: 'Aretes Delicados',
    image: '/images/2.jpg',
    description: 'Aretes con elegante diseño y acabado perfecto',
    price: '95€',
    longDescription: `
      Estos delicados aretes son una muestra perfecta de cómo la sencillez puede transformarse en belleza excepcional. 
      
      Su diseño equilibrado complementa cualquier rostro, mientras que su tamaño discreto los hace perfectos para el día a día.
      
      Fabricados con acero inoxidable de grado quirúrgico, son adecuados incluso para pieles sensibles.
      
      Materiales: Acero inoxidable 316L con acabado espejo.
    `,
    features: [
      'Diseño ligero y cómodo',
      'Acero inoxidable hipoalergénico',
      'Cierre seguro tipo mariposa',
      'Acabado de alta calidad',
      'Resistentes a la corrosión'
    ],
    careInstructions: 'Proteger de golpes. Limpiar con un paño suave y seco. Guardar en estuche cuando no se usen.'
  },
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