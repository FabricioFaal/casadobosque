import { notFound } from 'next/navigation'
import Link from 'next/link'
import { 
  Users, Bed, Bath, Wifi, MapPin, ArrowRight, 
  Check, X, Home, Mountain 
} from 'lucide-react'
import { getAccommodationBySlug } from '@/lib/data'
import { ImageGallery } from '@/components/ui/ImageGallery'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { formatCurrency } from '@/lib/utils'

interface AccommodationDetailPageProps {
  params: Promise<{ locale: string; slug: string }>
}

export default async function AccommodationDetailPage({ 
  params 
}: AccommodationDetailPageProps) {
  const { locale, slug } = await params
  const accommodation = getAccommodationBySlug(slug)

  if (!accommodation) {
    notFound()
  }

  const translations = {
    pt: {
      backToAccommodations: 'Voltar para Acomodações',
      about: 'Sobre esta acomodação',
      amenities: 'Comodidades',
      rules: 'Regras da Casa',
      location: 'Localização',
      bookNow: 'Reservar Agora',
      from: 'A partir de',
      night: '/noite',
      guests: 'hóspedes',
      bedrooms: 'quartos',
      bathrooms: 'banheiros',
      type: accommodation.type === 'chalet' ? 'Chalé' : 'Casa',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      minStay: 'Estadia mínima'
    },
    en: {
      backToAccommodations: 'Back to Accommodations',
      about: 'About this property',
      amenities: 'Amenities',
      rules: 'House Rules',
      location: 'Location',
      bookNow: 'Book Now',
      from: 'From',
      night: '/night',
      guests: 'guests',
      bedrooms: 'bedrooms',
      bathrooms: 'bathrooms',
      type: accommodation.type === 'chalet' ? 'Chalet' : 'House',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      minStay: 'Minimum stay'
    },
    es: {
      backToAccommodations: 'Volver a Alojamientos',
      about: 'Sobre este alojamiento',
      amenities: 'Comodidades',
      rules: 'Reglas de la Casa',
      location: 'Ubicación',
      bookNow: 'Reservar Ahora',
      from: 'Desde',
      night: '/noche',
      guests: 'huéspedes',
      bedrooms: 'habitaciones',
      bathrooms: 'baños',
      type: accommodation.type === 'chalet' ? 'Chalé' : 'Casa',
      checkIn: 'Entrada',
      checkOut: 'Salida',
      minStay: 'Estadía mínima'
    }
  }

  const t = translations[locale as keyof typeof translations] || translations.pt

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Link 
          href={`/${locale}/accommodations`}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
        >
          <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
          {t.backToAccommodations}
        </Link>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 text-gray-600 mb-2">
            {accommodation.type === 'chalet' ? (
              <Home className="h-5 w-5" />
            ) : (
              <Mountain className="h-5 w-5" />
            )}
            <span className="text-sm">{t.type}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {accommodation.name}
          </h1>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-1" />
            <span>Monte Verde, MG - Brasil</span>
          </div>
        </div>

        {/* Galeria de Imagens */}
        <div className="mb-8">
          <ImageGallery 
            images={accommodation.images} 
            title={accommodation.name}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna Principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Informações Rápidas */}
            <Card>
              <CardContent>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary-600" />
                    <div>
                      <p className="text-sm text-gray-600">Capacidade</p>
                      <p className="font-semibold">{accommodation.capacity} {t.guests}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bed className="h-5 w-5 text-primary-600" />
                    <div>
                      <p className="text-sm text-gray-600">Quartos</p>
                      <p className="font-semibold">{accommodation.bedrooms} {t.bedrooms}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bath className="h-5 w-5 text-primary-600" />
                    <div>
                      <p className="text-sm text-gray-600">Banheiros</p>
                      <p className="font-semibold">{accommodation.bathrooms} {t.bathrooms}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sobre */}
            <Card>
              <CardHeader>
                <CardTitle>{t.about}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {accommodation.description}
                </p>
              </CardContent>
            </Card>

            {/* Comodidades */}
            <Card>
              <CardHeader>
                <CardTitle>{t.amenities}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {accommodation.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Regras */}
            <Card>
              <CardHeader>
                <CardTitle>{t.rules}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {accommodation.rules.map((rule, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar de Reserva */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent>
                <div className="mb-6">
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900">
                      {formatCurrency(accommodation.basePrice)}
                    </span>
                    <span className="text-gray-600">{t.night}</span>
                  </div>
                  <p className="text-sm text-gray-500">{t.from}</p>
                </div>

                <Link href={`/${locale}/booking?accommodation=${accommodation.id}`}>
                  <Button variant="primary" size="lg" fullWidth>
                    <span>{t.bookNow}</span>
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>

                <div className="mt-6 pt-6 border-t border-gray-200 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t.checkIn}:</span>
                    <span className="font-medium">14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t.checkOut}:</span>
                    <span className="font-medium">12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t.minStay}:</span>
                    <span className="font-medium">2 noites</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Dica:</strong> Reserve com antecedência para garantir as melhores datas e preços!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}