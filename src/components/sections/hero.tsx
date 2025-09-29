'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CalendarDays, Users, ArrowRight } from 'lucide-react'

interface HeroProps {
  locale: string
}

export function Hero({ locale }: HeroProps) {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(2)

  const translations = {
    pt: {
      title: 'Refúgio Perfeito em Monte Verde',
      subtitle: 'Chalés aconchegantes com vista para as montanhas. Sua experiência única na Serra da Mantiqueira começa aqui.',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      guests: 'Hóspedes',
      searchAvailability: 'Verificar Disponibilidade',
      bookNow: 'Reserve Agora',
      viewAccommodations: 'Ver Acomodações'
    },
    en: {
      title: 'Perfect Refuge in Monte Verde',
      subtitle: 'Cozy chalets with mountain views. Your unique experience in Serra da Mantiqueira starts here.',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      guests: 'Guests',
      searchAvailability: 'Check Availability',
      bookNow: 'Book Now',
      viewAccommodations: 'View Accommodations'
    },
    es: {
      title: 'Refugio Perfecto en Monte Verde',
      subtitle: 'Chalés acogedores con vista a las montañas. Tu experiencia única en Serra da Mantiqueira comienza aquí.',
      checkIn: 'Entrada',
      checkOut: 'Salida',
      guests: 'Huéspedes',
      searchAvailability: 'Verificar Disponibilidad',
      bookNow: 'Reservar Ahora',
      viewAccommodations: 'Ver Alojamientos'
    }
  }

  const t = translations[locale as keyof typeof translations] || translations.pt

  const handleSearch = () => {
    if (checkIn && checkOut) {
      window.location.href = `/${locale}/booking?checkin=${checkIn}&checkout=${checkOut}&guests=${guests}`
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 z-10" />
        <div 
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            {t.title}
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-200 animate-fade-in opacity-90">
            {t.subtitle}
          </p>

          {/* Search Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 mb-8 animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="text-left">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <CalendarDays className="inline h-4 w-4 mr-1" />
                  {t.checkIn}
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                />
              </div>

              <div className="text-left">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <CalendarDays className="inline h-4 w-4 mr-1" />
                  {t.checkOut}
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  min={checkIn || new Date().toISOString().split('T')[0]}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                />
              </div>

              <div className="text-left">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Users className="inline h-4 w-4 mr-1" />
                  {t.guests}
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? (locale === 'en' ? 'Guest' : locale === 'es' ? 'Huésped' : 'Hóspede') : (locale === 'en' ? 'Guests' : locale === 'es' ? 'Huéspedes' : 'Hóspedes')}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleSearch}
                className="w-full bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <span>{t.searchAvailability}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link
              href={`/${locale}/booking`}
              className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold text-lg flex items-center justify-center space-x-2"
            >
              <span>{t.bookNow}</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            
            <Link
              href={`/${locale}/accommodations`}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold text-lg"
            >
              {t.viewAccommodations}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}