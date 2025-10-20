'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { DateRange } from 'react-day-picker'
import { differenceInDays } from 'date-fns'
import { User, Mail, Phone, FileText, CreditCard, Tag } from 'lucide-react'
import { accommodations, getAccommodationById } from '@/lib/data'
import { Calendar } from '@/components/ui/Calendar'
import { BookingSummary } from '@/components/ui/BookingSummary'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function BookingPage() {
  const searchParams = useSearchParams()
  const accommodationId = searchParams.get('accommodation') || '1'
  const locale = 'pt' // Pegar do contexto depois
  
  const accommodation = getAccommodationById(accommodationId) || accommodations[0]
  
  const [dateRange, setDateRange] = useState<DateRange | undefined>()
  const [guests, setGuests] = useState(2)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    document: '',
    couponCode: ''
  })
  
  const nights = dateRange?.from && dateRange?.to 
    ? differenceInDays(dateRange.to, dateRange.from)
    : 0
    
  const subtotal = accommodation.basePrice * nights
  const discount = 0 // Implementar lógica de cupom depois
  const total = subtotal - discount

  const translations = {
    pt: {
      title: 'Finalizar Reserva',
      subtitle: 'Preencha seus dados e confirme sua reserva',
      selectDates: 'Selecione as Datas',
      selectGuests: 'Número de Hóspedes',
      guestInfo: 'Dados do Hóspede',
      payment: 'Informações de Pagamento',
      name: 'Nome Completo',
      namePlaceholder: 'Seu nome completo',
      email: 'E-mail',
      emailPlaceholder: 'seu@email.com',
      phone: 'Telefone',
      phonePlaceholder: '(00) 00000-0000',
      document: 'CPF/Passaporte',
      documentPlaceholder: '000.000.000-00',
      paymentMethod: 'Forma de Pagamento',
      creditCard: 'Cartão de Crédito',
      pix: 'PIX',
      debitCard: 'Cartão de Débito',
      installments: 'Parcelamento',
      installment: 'parcela',
      coupon: 'Cupom de Desconto',
      couponPlaceholder: 'Código do cupom',
      apply: 'Aplicar',
      confirmBooking: 'Confirmar Reserva',
      processing: 'Processando...',
      selectDatesFirst: 'Selecione as datas para continuar'
    }
  }

  const t = translations.pt

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!dateRange?.from || !dateRange?.to) {
      alert(t.selectDatesFirst)
      return
    }
    
    // Aqui será integrado com o backend
    console.log({
      accommodation,
      dateRange,
      guests,
      formData,
      total
    })
    
    alert('Reserva confirmada! (implementar integração)')
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {t.title}
          </h1>
          <p className="text-gray-600">{t.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Coluna Principal */}
            <div className="lg:col-span-2 space-y-6">
              {/* Seleção de Datas */}
              <Card>
                <CardHeader>
                  <CardTitle>{t.selectDates}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    locale={locale}
                    onDateSelect={setDateRange}
                    minStay={2}
                  />
                </CardContent>
              </Card>

              {/* Número de Hóspedes */}
              <Card>
                <CardHeader>
                  <CardTitle>{t.selectGuests}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <button
                      type="button"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-primary-600 hover:text-primary-600 transition-colors font-semibold"
                    >
                      -
                    </button>
                    <span className="text-2xl font-semibold w-12 text-center">
                      {guests}
                    </span>
                    <button
                      type="button"
                      onClick={() => setGuests(Math.min(accommodation.capacity, guests + 1))}
                      className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-primary-600 hover:text-primary-600 transition-colors font-semibold"
                    >
                      +
                    </button>
                    <span className="text-gray-600">
                      (máximo: {accommodation.capacity})
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Dados do Hóspede */}
              <Card>
                <CardHeader>
                  <CardTitle>{t.guestInfo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="inline h-4 w-4 mr-1" />
                        {t.name}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder={t.namePlaceholder}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Mail className="inline h-4 w-4 mr-1" />
                          {t.email}
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder={t.emailPlaceholder}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Phone className="inline h-4 w-4 mr-1" />
                          {t.phone}
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder={t.phonePlaceholder}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FileText className="inline h-4 w-4 mr-1" />
                        {t.document}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.document}
                        onChange={(e) => setFormData({...formData, document: e.target.value})}
                        placeholder={t.documentPlaceholder}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pagamento */}
              <Card>
                <CardHeader>
                  <CardTitle>{t.payment}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <CreditCard className="inline h-4 w-4 mr-1" />
                        {t.paymentMethod}
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        <button
                          type="button"
                          className="p-4 border-2 border-primary-600 bg-primary-50 rounded-lg text-center hover:bg-primary-100 transition-colors"
                        >
                          <CreditCard className="h-6 w-6 mx-auto mb-2 text-primary-600" />
                          <span className="text-sm font-medium">{t.creditCard}</span>
                        </button>
                        <button
                          type="button"
                          className="p-4 border-2 border-gray-300 rounded-lg text-center hover:border-primary-600 hover:bg-primary-50 transition-colors"
                        >
                          <span className="text-2xl mb-2 block">💳</span>
                          <span className="text-sm font-medium">{t.pix}</span>
                        </button>
                        <button
                          type="button"
                          className="p-4 border-2 border-gray-300 rounded-lg text-center hover:border-primary-600 hover:bg-primary-50 transition-colors"
                        >
                          <CreditCard className="h-6 w-6 mx-auto mb-2" />
                          <span className="text-sm font-medium">{t.debitCard}</span>
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.installments}
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                        {[1,2,3,4,5,6,7,8,9,10,11,12].map(num => (
                          <option key={num} value={num}>
                            {num}x de {(total / num).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Tag className="inline h-4 w-4 mr-1" />
                        {t.coupon}
                      </label>
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          value={formData.couponCode}
                          onChange={(e) => setFormData({...formData, couponCode: e.target.value})}
                          placeholder={t.couponPlaceholder}
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                        <Button type="button" variant="outline">
                          {t.apply}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - Resumo */}
            <div className="lg:col-span-1">
              <BookingSummary
                locale={locale}
                accommodation={{
                  name: accommodation.name,
                  type: accommodation.type
                }}
                checkIn={dateRange?.from}
                checkOut={dateRange?.to}
                nights={nights}
                guests={guests}
                pricePerNight={accommodation.basePrice}
                totalPrice={total}
                discount={discount}
              />

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                className="mt-4"
                disabled={!dateRange?.from || !dateRange?.to}
              >
                {t.confirmBooking}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}