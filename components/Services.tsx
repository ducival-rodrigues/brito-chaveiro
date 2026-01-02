
import React from 'react';
import { SERVICES, DETAILED_SERVICES } from '../constants';
import { CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-brand-blue mb-4">NOSSOS SERVIÇOS</h2>
          <div className="w-24 h-2 bg-brand-yellow mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto font-semibold">
            Tradição e tecnologia unidas para resolver seus problemas com segurança e agilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-gray-50 p-8 rounded-3xl border-2 border-transparent hover:border-brand-blue transition-all group shadow-lg hover:shadow-2xl"
            >
              <div className="bg-brand-yellow w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-brand-blue group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="font-display text-2xl text-brand-blue mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-brand-blue rounded-[50px] p-10 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          {/* Padrão de fundo usando o Mascote com blend mode para efeito de marca d'água */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <img 
                key={i} 
                src="mascote.png" 
                alt="" 
                className="absolute w-24 h-24 transform rotate-12 select-none mix-blend-screen" 
                style={{
                  top: `${Math.random() * 90}%`,
                  left: `${Math.random() * 95}%`,
                  transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random()})`,
                }} 
              />
            ))}
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display text-3xl md:text-4xl mb-8 border-b-4 border-brand-yellow inline-block">ESPECIALIDADES ADICIONAIS</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {DETAILED_SERVICES.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                    <CheckCircle className="text-brand-yellow flex-shrink-0" size={20} />
                    <span className="font-semibold text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-[30px] p-8 text-brand-blue flex flex-col justify-center items-center text-center shadow-inner">
               <div className="bg-brand-yellow p-4 rounded-full mb-6">
                 <span className="text-4xl">🏢</span>
               </div>
               <h4 className="font-display text-2xl mb-4">CONTRATO PARA CONDOMÍNIOS</h4>
               <p className="font-semibold mb-6">Oferecemos pacotes especiais de manutenção para empresas, associações e condomínios em toda Manaus.</p>
               <button className="bg-brand-blue text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition-colors shadow-lg">
                 SOLICITAR ORÇAMENTO
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
