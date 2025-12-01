'use client';
import HeroSection from '@/Components/Home/Hero-section';
import ServicesSection from '@/Components/Home/Services-section';
import HowItWorksSection from '@/Components/Home/HowItWorks-section';
import CTASection from '@/Components/Home/CTA-section';
import MapSection from '@/Components/Home/Map-section';
import InspirationSection from '@/Components/Home/Inspiration-section';
import RecentOffersSection from '@/Components/Home/RecentOffer-secction';
import FooterSection from '@/Components/Home/Footer-section';

export default function Home() {
  const [fixers, setFixers] = useState<Fixer[]>([]);
  // Nuevo: estado controlado para el buscador
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash; // detecta #mapa o #trabajos-recientes
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // Si el elemento aún no existe, reintenta cada 100ms
          const interval = setInterval(() => {
            const el = document.querySelector(hash);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
              clearInterval(interval);
            }
          }, 100);
        }
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            Encuentra Servicios Cerca de Ti
          </h2>
          <Map />
        </div>
      </section>

      <ServicesSection />
      <HowItWorksSection />

      <CTASection />
      <FooterSection />
    </div>
  );
}
