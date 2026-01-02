
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import { CONTACT } from './constants';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 selection:bg-brand-blue selection:text-white">
      <Header />
      
      <main>
        <Hero />
        <Services />
        <About />
        
        {/* Banner CTA */}
        <section className="bg-red-600 py-10 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <div className="flex whitespace-nowrap animate-marquee">
                {[...Array(10)].map((_, i) => (
                  <span key={i} className="font-display text-8xl mx-10 text-white">LIGUE AGORA 24H - {CONTACT.phone1} -</span>
                ))}
             </div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="font-display text-3xl md:text-5xl text-white mb-6">ESTÁ PRECISANDO DE AJUDA AGORA?</h2>
            <p className="text-white font-bold text-xl mb-8">Não espere mais. Estamos prontos para te atender em qualquer lugar de Manaus!</p>
            <a 
              href={`tel:${CONTACT.phone1.replace(/\D/g, '')}`} 
              className="bg-white text-red-600 px-12 py-5 rounded-2xl font-black text-2xl hover:bg-brand-yellow hover:text-brand-blue transition-all shadow-2xl transform hover:scale-105 inline-block"
            >
              LIGAR: {CONTACT.phone1}
            </a>
          </div>
          
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 30s linear infinite;
            }
          `}</style>
        </section>
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${CONTACT.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[100] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group flex items-center gap-3"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-bold">
          Orçamento via WhatsApp
        </span>
        <MessageCircle size={32} />
      </a>
    </div>
  );
};

export default App;
