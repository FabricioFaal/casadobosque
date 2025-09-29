interface AboutSectionProps {
  locale: string
}

export function AboutSection({ locale }: AboutSectionProps) {
  const translations = {
    pt: {
      title: 'Sobre a Casa do Bosque',
      description: 'Localizada em Monte Verde, nossa pousada oferece a experiência perfeita de contato com a natureza. Com chalés aconchegantes e uma casa principal, proporcionamos momentos únicos em meio à Serra da Mantiqueira.',
      features: [
        'Vista panorâmica das montanhas',
        'Ambiente aconchegante e familiar',
        'Localização privilegiada',
        'Experiência única na natureza'
      ]
    },
    en: {
      title: 'About Casa do Bosque',
      description: 'Located in Monte Verde, our inn offers the perfect experience of contact with nature. With cozy chalets and a main house, we provide unique moments in the Serra da Mantiqueira.',
      features: [
        'Panoramic mountain views',
        'Cozy and familiar atmosphere',
        'Privileged location',
        'Unique experience in nature'
      ]
    },
    es: {
      title: 'Sobre Casa do Bosque',
      description: 'Ubicada en Monte Verde, nuestra posada ofrece la experiencia perfecta de contacto con la naturaleza. Con chalés acogedores y una casa principal, proporcionamos momentos únicos en medio de la Serra da Mantiqueira.',
      features: [
        'Vista panorámica de las montañas',
        'Ambiente acogedor y familiar',
        'Ubicación privilegiada',
        'Experiencia única en la naturaleza'
      ]
    }
  }

  const t = translations[locale as keyof typeof translations] || translations.pt

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {t.title}
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              {t.description}
            </p>
            <ul className="space-y-3">
              {t.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}