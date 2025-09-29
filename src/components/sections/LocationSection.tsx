import { MapPin, Clock, Mountain, Camera } from 'lucide-react'

interface LocationSectionProps {
  locale: string
}

export function LocationSection({ locale }: LocationSectionProps) {
  const translations = {
    pt: {
      title: 'Nossa Localização',
      subtitle: 'No coração de Monte Verde, cercado pelas belezas da Serra da Mantiqueira',
      address: 'Rua das Montanhas, 123 - Monte Verde, MG',
      attractions: 'Pontos Turísticos Próximos',
      attractionsList: [
        { name: 'Pedra Redonda', distance: '5 km', time: '15 min', icon: Mountain },
        { name: 'Pico do Selado', distance: '8 km', time: '25 min', icon: Mountain },
        { name: 'Centro de Monte Verde', distance: '2 km', time: '8 min', icon: MapPin },
        { name: 'Mirante', distance: '3 km', time: '10 min', icon: Camera }
      ]
    },
    en: {
      title: 'Our Location',
      subtitle: 'In the heart of Monte Verde, surrounded by the beauty of Serra da Mantiqueira',
      address: 'Mountain Street, 123 - Monte Verde, MG',
      attractions: 'Nearby Attractions',
      attractionsList: [
        { name: 'Round Stone', distance: '5 km', time: '15 min', icon: Mountain },
        { name: 'Selado Peak', distance: '8 km', time: '25 min', icon: Mountain },
        { name: 'Monte Verde Center', distance: '2 km', time: '8 min', icon: MapPin },
        { name: 'Viewpoint', distance: '3 km', time: '10 min', icon: Camera }
      ]
    },
    es: {
      title: 'Nuestra Ubicación',
      subtitle: 'En el corazón de Monte Verde, rodeado por la belleza de Serra da Mantiqueira',
      address: 'Calle de las Montañas, 123 - Monte Verde, MG',
      attractions: 'Atracciones Cercanas',
      attractionsList: [
        { name: 'Piedra Redonda', distance: '5 km', time: '15 min', icon: Mountain },
        { name: 'Pico del Selado', distance: '8 km', time: '25 min', icon: Mountain },
        { name: 'Centro de Monte Verde', distance: '2 km', time: '8 min', icon: MapPin },
        { name: 'Mirador', distance: '3 km', time: '10 min', icon: Camera }
      ]
    }
  }

  const t = translations[locale as keyof typeof translations] || translations.pt

  return (
    <section id="location" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Mapa */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-gray-200 relative">
                {/* Placeholder para o mapa - depois integrar Google Maps */}
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"
                  }}
                >
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <div className="flex items-center space-x-2 text-gray-800">
                        <MapPin className="h-5 w-5 text-primary-600" />
                        <span className="font-medium">Monte Verde, MG</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Endereço</h3>
                    <p className="text-gray-600">{t.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pontos Turísticos */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t.attractions}
            </h3>
            <div className="space-y-4">
              {t.attractionsList.map((attraction, index) => {
                const IconComponent = attraction.icon
                return (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary-100 p-2 rounded-lg">
                        <IconComponent className="h-5 w-5 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{attraction.name}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                          <span>{attraction.distance}</span>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{attraction.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">
                {locale === 'pt' && 'Localização Estratégica'}
                {locale === 'en' && 'Strategic Location'}
                {locale === 'es' && 'Ubicación Estratégica'}
              </h4>
              <p className="text-gray-600 text-sm">
                {locale === 'pt' && 'Nossa pousada está estrategicamente localizada para que você possa explorar o melhor de Monte Verde com facilidade e conforto.'}
                {locale === 'en' && 'Our inn is strategically located so you can explore the best of Monte Verde with ease and comfort.'}
                {locale === 'es' && 'Nuestra posada está estratégicamente ubicada para que puedas explorar lo mejor de Monte Verde con facilidad y comodidad.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}