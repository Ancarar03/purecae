import HeroSection from './components/sections/HeroSection';
import CollectionSection from './components/sections/CollectionSection';
import StorySection from './components/sections/StorySection';
import MaterialsSection from './components/sections/MaterialsSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import Footer from './components/sections/Footer';
import Navbar from './components/ui/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="snap-container">
        <HeroSection />
        <CollectionSection />
        <StorySection />
        <MaterialsSection />
        <TestimonialsSection />
        <Footer />
      </main>
    </>
  );
} 