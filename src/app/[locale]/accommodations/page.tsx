import Link from 'next/link'
import { Users, Bed, Bath, Wifi, ArrowRight } from 'lucide-react'
import { accommodations } from '@/lib/data'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { formatCurrency } from '@/lib/utils'

interface AccommodationsPageProps {
  params: Promise<{ locale: string }>
}

export default async function AccommodationsPage({ params }: AccommodationsPageProps) {
  const { locale } = await params
  
  const translations = {
    pt: {
      title: 'Nossas Acomodações',
      subtitle: 'Escolha a opção perfeita para sua estadia em Monte Verde',
      from: 'A partir de',
      night: '/noite',
      viewDetails: 'Ver Detalhes',
      bookNow: 'Reservar Agora',
      guests: 'hóspedes',
      bedrooms: 'quartos',
      bathrooms: 'banheiros'
    },
    en: {
      title: 'Our Accommodations',
      subtitle: 'Choose the perfect option for your stay in Monte Verde',
      from: 'From',
      night: '/night',
      viewDetails: 'View Details',
      bookNow: 'Book Now',
      guests: 'guests',
      bedrooms: 'bedrooms',
      bathrooms: 'bathrooms'
    },
    es: {
      title: 'Nuestros Alojamientos',
      subtitle: 'Elige la opción perfecta para tu estadía en Monte Verde',
      from: 'Desde',
      night: '/noche',
      viewDetails: 'Ver Detalles',
      bookNow: 'Reservar Ahora',
      guests: 'huéspedes',
      bedrooms: 'habitaciones',
      bathrooms: 'baños'
    }
  }
  
  const t = translations[locale as keyof typeof translations] || translations.pt
  
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Acomodações */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {accommodations.map((accommodation) => (
            <Card key={accommodation.id} hover padding="none">
              {/* Imagens */}
              <div className="relative aspect-video overflow-hidden rounded-t-xl">
                <div 
                  className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url('${accommodation.images[0]}')`
                  }}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-primary-600">
                    {t.from} {formatCurrency(accommodation.basePrice)}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Título e Descrição */}
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {accommodation.name}
                  </h2>
                  <p className="text-gray-600">
                    {accommodation.shortDescription}
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{accommodation.capacity} {t.guests}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bed className="h-4 w-4" />
                    <span>{accommodation.bedrooms} {t.bedrooms}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bath className="h-4 w-4" />
                    <span>{accommodation.bathrooms} {t.bathrooms}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Wifi className="h-4 w-4" />
                    <span>Wi-Fi</span>
                  </div>
                </div>

                {/* Amenities Preview */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {accommodation.amenities.slice(0, 4).map((amenity, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                    {accommodation.amenities.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        +{accommodation.amenities.length - 4} mais
                      </span>
                    )}
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">
                      {formatCurrency(accommodation.basePrice)}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {t.night}
                    </span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link href={`/${locale}/accommodations/${accommodation.slug}`}>
                      <Button variant="outline" size="md">
                        {t.viewDetails}
                      </Button>
                    </Link>
                    
                    <Link href={`/${locale}/booking?accommodation=${accommodation.id}`}>
                      <Button variant="primary" size="md">
                        <span>{t.bookNow}</span>
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}