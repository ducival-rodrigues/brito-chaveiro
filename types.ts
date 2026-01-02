
// Add React import to support React.ReactNode type
import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'chaveiro' | 'celular' | 'outros';
}

export interface ContactInfo {
  phone1: string;
  phone2: string;
  whatsapp: string;
  location: string;
  hours: string;
}