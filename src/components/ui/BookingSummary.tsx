import { CalendarDays, Users, Home } from 'lucide-react'
import { format } from 'date-fns'
import { ptBR, enUS, es } from 'date-fns/locale'
import { Card, CardContent, CardHeader, CardTitle } from './Card'
import { formatCurrency } from '@/lib/utils'

interface BookingSummaryProps {
  locale: string
  accommodation: {
    name: string
    type: string
  }
  checkIn?: Date
  checkOut?: Date
  nights?: number
  guests: number
  pricePerNight: number
  totalPrice: number
  discount?: number
}

export function BookingSummary({
  locale,
  accommodation,
  checkIn,
  checkOut,
  nights = 0,
  guests,
  pricePerNight,
  totalPrice,
  discount = 0
}: BookingSummaryProps) {
  const locales = {
    pt: ptBR,
    en: enUS,
    es: es
  }

  const selectedLocale = locales[locale as keyof typeof locales] || ptBR

  const translations = {
    pt: {
      summary: 'Resumo da Reserva',
      accommodation: 'Acomodação',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      guests: 'Hóspedes',
      nights: 'noites',
      pricePerNight: 'Diária',
      subtotal: 'Subtotal',
      discount: 'Desconto',
      total: 'Total',
      selectDates: 'Selecione as datas para ver o valor',
      type: accommodation.type === 'chalet' ? 'Chalé' : 'Casa'
    },
    en: {
      summary: 'Booking Summary',
      accommodation: 'Accommodation',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      guests: 'Guests',
      nights: 'nights',
      pricePerNight: 'Price per night',
      subtotal: 'Subtotal',
      discount: 'Discount',
      total: 'Total',
      selectDates: 'Select dates to see the price',
      type: accommodation.type === 'chalet' ? 'Chalet' : 'House'
    },
    es: {
      summary: 'Resumen de Reserva',
      accommodation: 'Alojamiento',
      checkIn: 'Entrada',
      checkOut: 'Salida',
      guests: 'Huéspedes',
      nights: 'noches',
      pricePerNight: 'Precio por noche',
      subtotal: 'Subtotal',
      discount: 'Descuento',
      total: 'Total',
      selectDates: 'Seleccione las fechas para ver el precio',
      type: accommodation.type === 'chalet' ? 'Chalé' : 'Casa'
    }
  }

  const t = translations[locale as keyof typeof translations] || translations.pt

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle>{t.summary}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Acomodação */}
        <div className="pb-4 border-b border-gray-200">
          <div className="flex items-start space-x-3">
            <Home className="h-5 w-5 text-primary-600 mt-1" />
            <div>
              <p className="font-semibold text-gray-900">{accommodation.name}</p>
              <p className="text-sm text-gray-600">{t.type}</p>
            </div>
          </div>
        </div>

        {/* Datas */}
        {checkIn && checkOut ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-gray-600">
                <CalendarDays className="h-4 w-4" />
                <span className="text-sm">{t.checkIn}</span>
              </div>
              <span className="font-medium">
                {format(checkIn, 'dd/MM/yyyy', { locale: selectedLocale })}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-gray-600">
                <CalendarDays className="h-4 w-4" />
                <span className="text-sm">{t.checkOut}</span>
              </div>
              <span className="font-medium">
                {format(checkOut, 'dd/MM/yyyy', { locale: selectedLocale })}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-gray-600">
                <Users className="h-4 w-4" />
                <span className="text-sm">{t.guests}</span>
              </div>
              <span className="font-medium">{guests}</span>
            </div>
          </div>
        ) : (
          <div className="text-center py-4 text-gray-500 text-sm">
            {t.selectDates}
          </div>
        )}

        {/* Cálculo de Preços */}
        {nights > 0 && (
          <div className="pt-4 border-t border-gray-200 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">
                {formatCurrency(pricePerNight)} x {nights} {t.nights}
              </span>
              <span className="font-medium">
                {formatCurrency(pricePerNight * nights)}
              </span>
            </div>

            {discount > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-green-600">{t.discount}</span>
                <span className="font-medium text-green-600">
                  -{formatCurrency(discount)}
                </span>
              </div>
            )}

            <div className="pt-3 border-t border-gray-200 flex justify-between">
              <span className="font-bold text-lg">{t.total}</span>
              <span className="font-bold text-lg text-primary-600">
                {formatCurrency(totalPrice)}
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}