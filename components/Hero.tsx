
import React from 'react';
import { CONTACT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-brand-yellow py-12 lg:py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="z-10 text-center lg:text-left order-2 lg:order-1">
          <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-6 animate-pulse shadow-md">
            ATENDIMENTO 24 HORAS EM MANAUS
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-brand-blue text-stroke mb-6 leading-tight drop-shadow-sm">
            SUA CHAVE QUEBROU? <br/>
            NÃO SE DESESPERE!
          </h2>
          <p className="text-xl md:text-2xl text-blue-900 font-bold mb-8">
            Chame o <span className="underline decoration-red-600 decoration-4">Chaveiro Brito</span>. Especialistas em aberturas, 
            chaves codificadas e conserto de celulares.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href={`tel:${CONTACT.phone1.replace(/\D/g, '')}`}
              className="bg-brand-blue hover:bg-blue-800 text-white px-8 py-4 rounded-2xl text-xl font-black transition-all shadow-xl transform hover:-translate-y-1 active:translate-y-0"
            >
              CHAMAR AGORA: {CONTACT.phone1}
            </a>
          </div>
          
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
            <div className="flex items-center gap-2">
               <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-6" />
               <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-6" />
               <img src="https://img.icons8.com/color/48/pix.png" alt="Pix" className="h-6" />
            </div>
            <p className="text-sm font-bold text-blue-900">Aceitamos Cartões e PIX</p>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
          <div className="relative w-full max-w-lg">
            {/* 24h Badge */}
            <div className="absolute -top-6 -right-2 w-32 h-32 md:w-40 md:h-40 bg-red-600 rounded-full flex items-center justify-center border-8 border-white shadow-2xl z-30 transform rotate-12">
               <div className="text-center">
                  <span className="block font-display text-white text-4xl md:text-5xl">24h</span>
                  <span className="block text-white font-bold text-[8px] md:text-[10px] uppercase tracking-tighter">Sempre Atento</span>
               </div>
            </div>
            
            {/* Mascot Container com Transparência Simulada */}
            <div className="relative z-20 flex flex-col items-center">
               <div className="animate-float relative">
                  <img 
                    src="mascote.png" 
                    alt="Mascote Chaveiro Brito Oficial" 
                    className="w-full h-auto mix-blend-multiply"
                    style={{ maxHeight: '480px' }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://img.icons8.com/color/512/key.png";
                    }}
                  />
                  {/* Efeito de brilho atrás do mascote */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-white/40 rounded-full -z-10 blur-[60px]"></div>
               </div>
               <div className="mt-2 bg-white px-8 py-3 rounded-[25px] border-4 border-brand-blue shadow-2xl z-30 transform -rotate-2">
                  <span className="font-display text-xl md:text-2xl text-brand-blue uppercase tracking-tight">O ORIGINAL DE MANAUS!</span>
               </div>
            </div>

            {/* Qualidade Badge */}
            <div className="absolute bottom-6 -left-6 bg-brand-blue text-white p-5 rounded-3xl shadow-2xl z-30 transform -rotate-6 border-4 border-white hidden sm:block">
              <p className="font-bold text-base md:text-lg">QUALIDADE TOTAL</p>
              <p className="text-[10px] uppercase font-bold opacity-80">Garantia em cada serviço</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 320" className="relative block w-full h-[60px] text-white fill-current">
          <path d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
