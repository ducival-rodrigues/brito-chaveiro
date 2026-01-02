
import React from 'react';
import { CONTACT } from '../constants';
import { Instagram, Facebook, Phone, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-brand-blue text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 flex-shrink-0 bg-white rounded-2xl p-1 shadow-inner overflow-hidden flex items-center justify-center">
                <img 
                  src="mascote.png" 
                  alt="Mascote Chaveiro Brito" 
                  className="w-full h-full object-contain mix-blend-multiply"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://img.icons8.com/color/96/key.png";
                  }}
                />
              </div>
              <div>
                <h2 className="font-display text-2xl leading-none">BRITO</h2>
                <h2 className="font-display text-xl text-brand-yellow">SERVIÇOS</h2>
              </div>
            </div>
            <p className="text-blue-100 font-medium">
              Sua solução 24 horas para problemas com chaves, fechaduras, cofres e celulares em Manaus. Profissionalismo e honestidade.
            </p>
            <div className="flex gap-4">
               <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-brand-yellow hover:text-brand-blue transition-all"><Instagram size={20}/></a>
               <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-brand-yellow hover:text-brand-blue transition-all"><Facebook size={20}/></a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl mb-6 text-brand-yellow">SERVIÇOS</h3>
            <ul className="space-y-3 font-semibold text-blue-100">
              <li className="hover:text-white transition-colors"><a href="#servicos">Chaveiro Automotivo</a></li>
              <li className="hover:text-white transition-colors"><a href="#servicos">Chaveiro Residencial</a></li>
              <li className="hover:text-white transition-colors"><a href="#servicos">Conserto de Celulares</a></li>
              <li className="hover:text-white transition-colors"><a href="#servicos">Cofres e Travas</a></li>
              <li className="hover:text-white transition-colors"><a href="#servicos">Conserto de Relógios</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl mb-6 text-brand-yellow">CONTATO</h3>
            <ul className="space-y-4 font-semibold">
              <li className="flex items-center gap-3">
                <Phone className="text-brand-yellow" size={20} />
                <a href={`tel:${CONTACT.phone1.replace(/\D/g, '')}`}>{CONTACT.phone1}</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-yellow" size={20} />
                <a href={`tel:${CONTACT.phone2.replace(/\D/g, '')}`}>{CONTACT.phone2}</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="text-brand-yellow" size={20} />
                <span>Manaus - AM</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-brand-yellow" size={20} />
                <span>Atendimento 24h</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl mb-6 text-brand-yellow">PAGAMENTO</h3>
            <p className="text-sm font-semibold mb-4 text-blue-100 italic">"Facilitamos seu pagamento para que você não fique na mão."</p>
            <div className="grid grid-cols-3 gap-2">
               <div className="bg-white p-2 rounded-lg flex items-center justify-center h-10 shadow-md">
                 <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-6" />
               </div>
               <div className="bg-white p-2 rounded-lg flex items-center justify-center h-10 shadow-md">
                 <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-6" />
               </div>
               <div className="bg-white p-2 rounded-lg flex items-center justify-center h-10 shadow-md">
                 <img src="https://img.icons8.com/color/48/pix.png" alt="Pix" className="h-6" />
               </div>
               <div className="bg-white p-2 rounded-lg flex items-center justify-center h-10 shadow-md col-span-3">
                 <span className="text-brand-blue font-black text-xs">PAGAMENTO FACILITADO</span>
               </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center text-sm font-semibold text-blue-200">
          <p>© {new Date().getFullYear()} Brito Serviços de Chaveiro e Celulares. Todos os direitos reservados.</p>
          <p className="mt-2 text-[10px] uppercase tracking-widest opacity-50">Ligue e Confira!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
