
import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-brand-yellow">
      <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Logo/Mascote Principal com Blend Mode para Transparência */}
          <div className="relative w-[90px] h-[90px] flex-shrink-0 flex items-center justify-center">
            <img 
              src="mascote.png" 
              alt="Mascote Chaveiro Brito" 
              className="w-full h-full object-contain mix-blend-multiply"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://img.icons8.com/color/144/key.png";
              }}
            />
          </div>
          
          {/* Identidade Visual */}
          <div className="flex flex-col">
            <h1 className="font-display text-brand-blue text-2xl md:text-4xl leading-none">
              BRITO <span className="text-red-600">SERVIÇOS</span>
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="h-[2px] w-8 bg-brand-yellow hidden sm:block"></span>
              <p className="text-[10px] md:text-xs font-black text-gray-500 uppercase tracking-[0.2em]">Chaveiro & Celulares 24h</p>
            </div>
          </div>
        </div>

        {/* Navegação Desktop */}
        <nav className="hidden lg:flex items-center gap-8 font-extrabold text-sm uppercase text-brand-blue">
          <a href="#inicio" className="hover:text-red-600 transition-colors border-b-2 border-transparent hover:border-red-600">Início</a>
          <a href="#servicos" className="hover:text-red-600 transition-colors border-b-2 border-transparent hover:border-red-600">Serviços</a>
          <a href="#quem-somos" className="hover:text-red-600 transition-colors border-b-2 border-transparent hover:border-red-600">Quem Somos</a>
          <a href="#contato" className="hover:text-red-600 transition-colors border-b-2 border-transparent hover:border-red-600">Contato</a>
        </nav>

        {/* Botões de Ação */}
        <div className="flex items-center gap-3">
          <a 
            href={`tel:${CONTACT.phone1.replace(/\D/g, '')}`} 
            className="flex items-center gap-2 bg-red-600 text-white px-5 py-3 rounded-2xl font-black text-xs md:text-sm hover:bg-red-700 transition-all shadow-[0_4px_0_rgb(153,27,27)] active:shadow-none active:translate-y-1"
          >
            <Phone size={16} />
            LIGAR 24H
          </a>
          <a 
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-2xl font-black text-xs md:text-sm hover:bg-green-600 transition-all shadow-[0_4px_0_rgb(21,128,61)] active:shadow-none active:translate-y-1"
          >
            <MessageCircle size={16} />
            WHATSAPP
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
