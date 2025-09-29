import Link from 'next/link'
import { Users, Bed, ArrowRight } from 'lucide-react'

interface AccommodationsPreviewProps {
  locale: string
}

export function AccommodationsPreview({ locale }: AccommodationsPreviewProps) {
  const translations = {
    pt: {
      title: 'Nossas Acomodações',
      subtitle: 'Escolha a opção perfeita para sua estadia',
      viewAll: 'Ver Todas as Acomodações',
      from: 'A partir de',
      night: '/noite',
      bookNow: 'Reservar',
      accommodations: [
        {
          name: 'Chalé das Flores',
          description: 'Aconchegante chalé com vista para o jardim',
          capacity: 2,
          beds: 1,
          price: 180,
          image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Chalé das Montanhas',
          description: 'Vista panorâmica das montanhas',
          capacity: 4,
          beds: 2,
          price: 250,
          image: 'https://images.unsplash.com/photo-1502775700316-6b2963d0e2b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Casa Principal',
          description: 'Espaçosa casa para grupos maiores',
          capacity: 8,
          beds: 4,
          price: 400,
          image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
      ]
    },
    en: {
      title: 'Our Accommodations',
      subtitle: 'Choose the perfect option for your stay',
      viewAll: 'View All Accommodations',
      from: 'From',
      night: '/night',
      bookNow: 'Book Now',
      accommodations: [
        {
          name: 'Flower Chalet',
          description: 'Cozy chalet with garden view',
          capacity: 2,
          beds: 1,
          price: 180,
          image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Mountain Chalet',
          description: 'Panoramic mountain view',
          capacity: 4,
          beds: 2,
          price: 250,
          image: 'https://images.unsplash.com/photo-1502775700316-6b2963d0e2b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Main House',
          description: 'Spacious house for larger groups',
          capacity: 8,
          beds: 4,
          price: 400,
          image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
      ]
    },
    es: {
      title: 'Nuestros Alojamientos',
      subtitle: 'Elige la opción perfecta para tu estadía',
      viewAll: 'Ver Todos los Alojamientos',
      from: 'Desde',
      night: '/noche',
      bookNow: 'Reservar',
      accommodations: [
        {
          name: 'Chalé de las Flores',
          description: 'Acogedor chalé con vista al jardín',
          capacity: 2,
          beds: 1,
          price: 180,
          image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Chalé de las Montañas',
          description: 'Vista panorámica de las montañas',
          capacity: 4,
          beds: 2,
          price: 250,
          image: 'https://images.unsplash.com/photo-1502775700316-6b2963d0e2b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Casa Principal',
          description: 'Espaciosa casa para grupos grandes',
          capacity: 8,
          beds: 4,
          price: 400,
          image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
      ]
    }
  }

  const t = translations[locale as keyof typeof translations] || translations.pt

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {t.accommodations.map((accommodation, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url('${accommodation.image}')`
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {accommodation.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {accommodation.description}
                </p>
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{accommodation.capacity}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bed className="h-4 w-4" />
                    <span>{accommodation.beds}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary-600">
                    R$ {accommodation.price}
                    <span className="text-sm font-normal text-gray-500">
                      {t.night}
                    </span>
                  </div>
                  <Link
                    href={`/${locale}/booking`}
                    className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
                  >
                    {t.bookNow}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href={`/${locale}/accommodations`}
            className="inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            <span>{t.viewAll}</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}