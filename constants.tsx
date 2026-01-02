
import React from 'react';
// Removed Tool, HardDrive, PenTool and duplicate Smartphone import
import { Key, Watch, Shield, Car, Home, Smartphone as Phone } from 'lucide-react';
import { ServiceItem, ContactInfo } from './types';

export const CONTACT: ContactInfo = {
  phone1: "(92) 99382-3788",
  phone2: "(92) 99382-3710",
  whatsapp: "5592993823788",
  location: "Atendemos em Toda Manaus",
  hours: "Atendimento 24 Horas"
};

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    category: 'chaveiro',
    title: 'Abertura de Veículos',
    description: 'Nacionais e importados sem danos ao veículo.',
    icon: <Car className="w-8 h-8" />
  },
  {
    id: '2',
    category: 'chaveiro',
    title: 'Chaves Codificadas',
    description: 'Confecção e reparo de chaves com chip para carros e motos.',
    icon: <Key className="w-8 h-8" />
  },
  {
    id: '3',
    category: 'chaveiro',
    title: 'Residencial e Comercial',
    description: 'Abertura de portas (madeira, alumínio, ferro e vidro).',
    icon: <Home className="w-8 h-8" />
  },
  {
    id: '4',
    category: 'celular',
    title: 'Conserto de Celulares',
    description: 'Troca de tela, bateria, conectores e reparos em placa.',
    icon: <Phone className="w-8 h-8" />
  },
  {
    id: '5',
    category: 'chaveiro',
    title: 'Cofres e Travas',
    description: 'Abertura de cofres digitais e mecânicos. Instalação de travas de segurança.',
    icon: <Shield className="w-8 h-8" />
  },
  {
    id: '6',
    category: 'outros',
    title: 'Relógios e Carimbos',
    description: 'Troca de bateria, pulseiras e confecção de carimbos personalizados.',
    icon: <Watch className="w-8 h-8" />
  }
];

export const DETAILED_SERVICES = [
  "Recuperação de Chaves Quebradas",
  "Unificação de Segredos",
  "Troca de Segredos de Portas",
  "Instalação de Fechaduras Eletrônicas",
  "Instalação de Trava Tetra de Segurança",
  "Instalação de Olho Mágico",
  "Conserto de Ignição de Carros e Motos",
  "Confecção de Chaves de Armário e Gavetas",
  "Canivetes e Telecomandos",
  "Conserto de Relógios em Geral",
  "Confecção de Carimbos"
];
