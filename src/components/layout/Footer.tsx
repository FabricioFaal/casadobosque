import Link from 'next/link'
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react'

interface FooterProps {
  locale: string
}

export function Footer({ locale }: FooterProps) {
  const translations = {
    pt: {
      contact: 'Contato',
      address: 'Endereço',
      phone: 'Telefone',
      email: 'E-mail',
      followUs: 'Siga-nos',
      quickLinks: 'Links Rápidos',
      home: 'Início',
      accommodations: 'Acomodações',
      gallery: 'Galeria',
      booking: 'Reservas',
      rights: 'Todos os direitos reservados',
      addressText: 'Rua das Montanhas, 123 - Monte Verde, MG',
      phoneNumber: '+55 (35) 3438-0000',
      emailAddress: 'contato@casadobosque.com.br'
    },
    en: {
      contact: 'Contact',
      address: 'Address',
      phone: 'Phone',
      email: 'E-mail',
      followUs: 'Follow Us',
      quickLinks: 'Quick Links',
      home: 'Home',
      accommodations: 'Accommodations',
      gallery: 'Gallery',
      booking: 'Booking',
      rights: 'All rights reserved',
      addressText: 'Mountain Street, 123 - Monte Verde, MG',
      phoneNumber: '+55 (35) 3438-0000',
      emailAddress: 'contact@casadobosque.com.br'
    },
    es: {
      contact: 'Contacto',
      address: 'Dirección',
      phone: 'Teléfono',
      email: 'Correo',
      followUs: 'Síguenos',
      quickLinks: 'Enlaces Rápidos',
      home: 'Inicio',
      accommodations: 'Alojamientos',
      gallery: 'Galería',
      booking: 'Reservas',
      rights: 'Todos los derechos reservados',
      addressText: 'Calle de las Montañas, 123 - Monte Verde, MG',
      phoneNumber: '+55 (35) 3438-0000',
      emailAddress: 'contacto@casadobosque.com.br'
    }
  }

  const t = translations[locale as keyof typeof translations] || translations.pt

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold">Casa do Bosque</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              {locale === 'pt' && 'Chalés aconchegantes em Monte Verde, perfeitos para momentos especiais em meio à natureza.'}
              {locale === 'en' && 'Cozy chalets in Monte Verde, perfect for special moments surrounded by nature.'}
              {locale === 'es' && 'Chalés acogedores en Monte Verde, perfectos para momentos especiales rodeados de naturaleza.'}
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="text-gray-300 hover:text-white transition-colors">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/accommodations`} className="text-gray-300 hover:text-white transition-colors">
                  {t.accommodations}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/gallery`} className="text-gray-300 hover:text-white transition-colors">
                  {t.gallery}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/booking`} className="text-gray-300 hover:text-white transition-colors">
                  {t.booking}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{t.addressText}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary-500" />
                <a href={`tel:${t.phoneNumber}`} className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t.phoneNumber}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary-500" />
                <a href={`mailto:${t.emailAddress}`} className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t.emailAddress}
                </a>
              </li>
            </ul>

            {/* Redes Sociais */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">{t.followUs}</h4>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Casa do Bosque. {t.rights}.
          </p>
        </div>
      </div>
    </footer>
  )
}