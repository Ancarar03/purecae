import Link from 'next/link';

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="text-2xl font-serif text-gold-500">
              PURECAE
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <Link href="/" className="text-black hover:text-gold-500 transition-colors">
                Inicio
              </Link>
              <Link href="/#collection" className="text-black hover:text-gold-500 transition-colors">
                Colección
              </Link>
              <Link href="/#story" className="text-black hover:text-gold-500 transition-colors">
                Historia
              </Link>
              <Link href="/#materials" className="text-black hover:text-gold-500 transition-colors">
                Materiales
              </Link>
              <Link href="/#contact" className="text-black hover:text-gold-500 transition-colors">
                Contacto
              </Link>
            </div>

            {/* Mobile Navigation - Simplificada */}
            <div className="md:hidden">
              <Link href="/" className="text-black mr-4">
                Inicio
              </Link>
              <Link href="/catalogo" className="text-black">
                Catálogo
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {children}
    </>
  );
} 