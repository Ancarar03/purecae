import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/ui/Navbar';

// Obtener todos los archivos de imágenes y convertirlos en productos
const generateProductsFromImages = () => {
  // Lista de productos basada en las imágenes disponibles
  const pendientes = [
    { slug: 'pendientes-abyss', name: 'Pendientes Abyss', image: '/images/Pendientes_Abyss.jpg' },
    { slug: 'pendientes-accra-mini', name: 'Pendientes Accra Mini', image: '/images/Pendientes_Accra_Mini.jpg' },
    { slug: 'pendientes-agadez', name: 'Pendientes Agadez', image: '/images/Pendientes_Agadez.jpg' },
    { slug: 'pendientes-alba', name: 'Pendientes Alba', image: '/images/Pendientes_Alba.jpg' },
    { slug: 'pendientes-altair', name: 'Pendientes Altair', image: '/images/Pendientes_Altair.jpg' },
    { slug: 'pendientes-ambala', name: 'Pendientes Ambala', image: '/images/Pendientes_Ambala.jpg' },
    { slug: 'pendientes-aqua', name: 'Pendientes Aqua', image: '/images/Pendientes_Aqua.jpg' },
    { slug: 'pendientes-arena', name: 'Pendientes Arena', image: '/images/Pendientes_Arena.jpg' },
    { slug: 'pendientes-artemis', name: 'Pendientes Artemis', image: '/images/Pendientes_Artemis.jpg' },
    { slug: 'pendientes-astrea', name: 'Pendientes Astrea', image: '/images/Pendientes_Astrea.jpg' },
    { slug: 'pendientes-aura', name: 'Pendientes Aura', image: '/images/Pendientes_Aura.jpg' },
    { slug: 'pendientes-bruma', name: 'Pendientes Bruma', image: '/images/Pendientes_Bruma.jpg' },
    { slug: 'pendientes-calicut', name: 'Pendientes Calicut', image: '/images/Pendientes_Calicut.jpg' },
    { slug: 'pendientes-clarise', name: 'Pendientes Clarise', image: '/images/Pendientes_Clarise.jpg' },
    { slug: 'pendientes-coralina', name: 'Pendientes Coralina', image: '/images/Pendientes_Coralina.jpg' },
    { slug: 'pendientes-delhi', name: 'Pendientes Delhi', image: '/images/Pendientes_Delhi.jpg' },
    { slug: 'pendientes-gaya', name: 'Pendientes Gaya', image: '/images/Pendientes_Gaya.jpg' },
    { slug: 'pendientes-globo', name: 'Pendientes Globo', image: '/images/Pendientes_Globo.jpg' },
    { slug: 'pendientes-grace', name: 'Pendientes Grace', image: '/images/Pendientes_Grace.jpg' },
    { slug: 'pendientes-hubble', name: 'Pendientes Hubble', image: '/images/Pendientes_Hubble.jpg' },
    { slug: 'pendientes-ivory', name: 'Pendientes Ivory', image: '/images/Pendientes_Ivory.jpg' },
    { slug: 'pendientes-kalpa', name: 'Pendientes Kalpa', image: '/images/Pendientes_Kalpa.jpg' },
    { slug: 'pendientes-kepler', name: 'Pendientes Kepler', image: '/images/Pendientes_Kepler.jpg' },
    { slug: 'pendientes-kochi', name: 'Pendientes Kochi', image: '/images/Pendientes_Kochi.jpg' },
    { slug: 'pendientes-lira', name: 'Pendientes Lira', image: '/images/Pendientes_Lira.jpg' },
    { slug: 'pendientes-lunar', name: 'Pendientes Lunar', image: '/images/Pendientes_Lunar.jpg' },
    { slug: 'pendientes-maradi', name: 'Pendientes Maradi', image: '/images/Pendientes_Maradi.jpg' },
    { slug: 'pendientes-nemesis', name: 'Pendientes Némesis', image: '/images/Pendientes_Némesis.jpg' },
    { slug: 'pendientes-nereida', name: 'Pendientes Nereida', image: '/images/Pendientes_Nereida.jpg' },
    { slug: 'pendientes-nova', name: 'Pendientes Nova', image: '/images/Pendientes_Nova.jpg' },
    { slug: 'pendientes-orion', name: 'Pendientes Orión', image: '/images/Pendientes_Orión.jpg' },
    { slug: 'pendientes-safira', name: 'Pendientes Safira', image: '/images/Pendientes_Safira.jpg' },
    { slug: 'pendientes-siena', name: 'Pendientes Siena', image: '/images/Pendientes_Siena.jpg' },
    { slug: 'pendientes-soyo', name: 'Pendientes Soyo', image: '/images/Pendientes_Soyo.jpg' },
  ];

  const colgantes = [
    { slug: 'colgante-alhena', name: 'Colgante Alhena', image: '/images/Colgante_Alhena.jpg' },
    { slug: 'colgante-bretzel', name: 'Colgante Bretzel', image: '/images/Colgante_Bretzel.jpg' },
    { slug: 'colgante-croissant', name: 'Colgante Croissant', image: '/images/Colgante_Croissant.jpg' },
    { slug: 'colgante-cupcake', name: 'Colgante Cupcake', image: '/images/Colgante_Cupcake.jpg' },
    { slug: 'colgante-donut', name: 'Colgante Donut', image: '/images/Colgante_Donut.jpg' },
    { slug: 'colgante-donut-glaseado', name: 'Colgante Donut Glaseado', image: '/images/Colgante_Donut_Glaseado.jpg' },
    { slug: 'colgante-helado', name: 'Colgante Helado', image: '/images/Colgante_Helado.jpg' },
    { slug: 'colgante-kollam', name: 'Colgante Kollam', image: '/images/Colgante_Kollam.jpg' },
    { slug: 'colgante-tunis-mini', name: 'Colgante Tunis Mini', image: '/images/Colgante_Tunis_Mini.jpg' },
  ];

  return {
    pendientes,
    colgantes
  };
};

// Metadatos de la página
export const metadata = {
  title: 'Catálogo Completo | Purecae Jewelry',
  description: 'Explora nuestra colección completa de joyería artesanal. Pendientes, colgantes y más, todos a 15€.',
};

export default function CatalogoPage() {
  const { pendientes, colgantes } = generateProductsFromImages();

  // Mapa de precios según la lista proporcionada
  const preciosMap: Record<string, string> = {
    'Pendientes Abyss': '15,00 €',
    'Pendientes Accra Mini': '18,00 €',
    'Pendientes Agadez': '15,00 €',
    'Pendientes Alba': '17,00 €',
    'Pendientes Altair': '17,00 €',
    'Pendientes Ambala': '23,00 €',
    'Pendientes Aqua': '17,00 €',
    'Pendientes Arena': '15,00 €',
    'Pendientes Artemis': '15,00 €',
    'Pendientes Astrea': '15,00 €',
    'Pendientes Aura': '15,00 €',
    'Pendientes Bruma': '17,00 €',
    'Pendientes Calicut': '8,00 €',
    'Pendientes Clarise': '17,00 €',
    'Pendientes Coralina': '23,00 €',
    'Pendientes Delhi': '15,00 €',
    'Pendientes Gaya': '15,00 €',
    'Pendientes Globo': '15,00 €',
    'Pendientes Grace': '16,00 €',
    'Pendientes Hubble': '15,00 €',
    'Pendientes Ivory': '25,00 €',
    'Pendientes Kalpa': '15,00 €',
    'Pendientes Kepler': '15,00 €',
    'Pendientes Kochi': '15,00 €',
    'Pendientes Lira': '17,00 €',
    'Pendientes Lunar': '15,00 €',
    'Pendientes Maradi': '15,00 €',
    'Pendientes Némesis': '15,00 €',
    'Pendientes Nereida': '15,00 €',
    'Pendientes Nova': '17,00 €',
    'Pendientes Orión': '15,00 €',
    'Pendientes Safira': '17,00 €',
    'Pendientes Siena': '15,00 €',
    'Pendientes Soyo': '17,00 €',
    'Colgante Alhena': '12,00 €',
    'Colgante Bretzel': '12,00 €',
    'Colgante Croissant': '12,00 €',
    'Colgante Cupcake': '12,00 €',
    'Colgante Donut': '12,00 €',
    'Colgante Donut Glaseado': '12,00 €',
    'Colgante Helado': '12,00 €',
    'Colgante Kollam': '15,00 €',
    'Colgante Tunis Mini': '12,00 €'
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Catálogo Completo</h1>
            <p className="text-lg md:text-xl text-black/70 max-w-2xl mx-auto">
              Explora nuestra colección completa de joyería artesanal. 
              Todas las piezas están cuidadosamente fabricadas a mano con materiales de alta calidad.
            </p>
            <p className="mt-4 text-2xl text-gold-500 font-medium">Todos los artículos a 15€</p>
          </div>

          {/* Filtro de categorías */}
          <div className="flex justify-center mb-12 space-x-4">
            <a href="#pendientes" className="px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors">
              Pendientes
            </a>
            <a href="#colgantes" className="px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors">
              Colgantes
            </a>
          </div>

          {/* Sección de Pendientes */}
          <section id="pendientes" className="mb-20">
            <div className="border-b border-black/10 mb-8">
              <h2 className="text-3xl font-serif mb-4">Pendientes</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {pendientes.map((product) => (
                <Link key={product.slug} href={`/productos/${product.slug}`} className="group">
                  <div className="aspect-square relative overflow-hidden bg-beige-50 mb-3">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    />
                  </div>
                  <h3 className="text-sm md:text-base font-medium truncate">{product.name}</h3>
                  <p className="text-sm text-gold-500">{preciosMap[product.name] || '15€'}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Sección de Colgantes */}
          <section id="colgantes" className="mb-20">
            <div className="border-b border-black/10 mb-8">
              <h2 className="text-3xl font-serif mb-4">Colgantes</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {colgantes.map((product) => (
                <Link key={product.slug} href={`/productos/${product.slug}`} className="group">
                  <div className="aspect-square relative overflow-hidden bg-beige-50 mb-3">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    />
                  </div>
                  <h3 className="text-sm md:text-base font-medium truncate">{product.name}</h3>
                  <p className="text-sm text-gold-500">{preciosMap[product.name] || '12€'}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Banner promocional */}
          <div className="bg-beige-100 p-8 md:p-12 text-center rounded-sm">
            <h2 className="text-2xl md:text-3xl font-serif mb-4">Envíos a toda Europa</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Todas nuestras piezas se envían en elegante packaging, ideal para regalo.
            </p>
            <Link 
              href="/#contact" 
              className="inline-block px-8 py-3 bg-black text-white font-medium tracking-wide transition-all hover:bg-gold-500 hover:text-black"
            >
              CONTACTAR
            </Link>
          </div>
        </div>
      </main>
    </>
  );
} 