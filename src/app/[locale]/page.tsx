import { Hero } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/AboutSection'
import { AccommodationsPreview } from '@/components/sections/AccommodationsPreview'
import { LocationSection } from '@/components/sections/LocationSection'

interface HomePageProps {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params
  
  return (
    <div className="overflow-hidden">
      <Hero locale={locale} />
      <AboutSection locale={locale} />
      <AccommodationsPreview locale={locale} />
      <LocationSection locale={locale} />
    </div>
  )
}