
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="quem-somos" className="py-20 bg-brand-yellow">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 flex justify-center">
           <div className="relative w-full max-w-sm">
              <div className="absolute -inset-4 bg-brand-blue rounded-[60px] blur-xl opacity-20 animate-pulse"></div>
              <div className="bg-white/90 backdrop-blur-sm p-10 rounded-[60px] border-8 border-brand-blue shadow-2xl text-center relative z-10">
                 <div className="flex justify-center mb-8">
                    <img 
                      src="mascote.png" 
                      alt="Mascote Chaveiro Brito" 
                      className="w-full h-auto max-h-56 object-contain mix-blend-multiply"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://img.icons8.com/color/512/key.png";
                      }}
                    />
                 </div>
                 <div className="absolute top-10 right-6 bg-red-600 p-4 rounded-full border-4 border-white rotate-12 shadow-lg">
                   <span className="font-display text-white text-4xl">!</span>
                 </div>
                 <h4 className="font-display text-3xl text-brand-blue uppercase">CHAVEIRO BRITO</h4>
                 <p className="font-bold text-gray-600 mt-2 uppercase tracking-widest">Sempre Pronto!</p>
              </div>
           </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <h2 className="font-display text-4xl md:text-5xl text-brand-blue mb-8">QUEM SOMOS</h2>
          <div className="space-y-6 text-blue-900 font-semibold text-lg text-justify">
            <p>
              Com anos de tradição e confiança no mercado de Manaus, o <span className="text-red-600 font-black">Chaveiro Brito</span> se consolidou como a principal escolha para quem busca segurança e excelência técnica.
            </p>
            <p>
              Nossa equipe é altamente qualificada e equipada com o que há de mais moderno para realizar aberturas, confecção de chaves e reparos em dispositivos eletrônicos com total transparência e preço justo.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-6 rounded-3xl shadow-lg border-b-8 border-brand-blue group hover:-translate-y-1 transition-all duration-300">
                <span className="block text-4xl mb-3">📍</span>
                <span className="block text-xs uppercase text-gray-500 font-bold mb-1">Presença em</span>
                <span className="block font-display text-2xl text-brand-blue">TODA MANAUS</span>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-lg border-b-8 border-brand-blue group hover:-translate-y-1 transition-all duration-300">
                <span className="block text-4xl mb-3">⚡</span>
                <span className="block text-xs uppercase text-gray-500 font-bold mb-1">Compromisso com</span>
                <span className="block font-display text-2xl text-brand-blue">AGILIDADE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
