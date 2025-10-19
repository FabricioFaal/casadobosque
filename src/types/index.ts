// Tipos de acomodações
export type AccommodationType = 'chalet' | 'house'

export interface Accommodation {
  id: string
  name: string
  type: AccommodationType
  slug: string
  description: string
  shortDescription: string
  capacity: number
  bedrooms: number
  beds: number
  bathrooms: number
  basePrice: number
  images: string[]
  amenities: string[]
  rules: string[]
  features: {
    icon: string
    label: string
  }[]
}

// Tipos de reserva
export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed'
export type PaymentStatus = 'pending' | 'processing' | 'paid' | 'failed' | 'refunded'

export interface Booking {
  id: string
  accommodationId: string
  guestName: string
  guestEmail: string
  guestPhone: string
  guestDocument: string
  checkIn: Date
  checkOut: Date
  guests: number
  totalAmount: number
  status: BookingStatus
  paymentStatus: PaymentStatus
  createdAt: Date
  updatedAt: Date
}

// Tipos de disponibilidade
export interface Availability {
  date: Date
  available: boolean
  price: number
  minStay?: number
}

// Tipos de preço
export type SeasonType = 'low' | 'mid' | 'high' | 'special'

export interface PricingRule {
  id: string
  accommodationId: string
  startDate: Date
  endDate: Date
  price: number
  seasonType: SeasonType
  minStay?: number
}

// Tipos de formulário de reserva
export interface BookingFormData {
  // Datas
  checkIn: string
  checkOut: string
  guests: number
  
  // Dados pessoais
  guestName: string
  guestEmail: string
  guestPhone: string
  guestDocument: string
  
  // Pagamento
  paymentMethod: 'credit_card' | 'pix' | 'debit_card'
  installments?: number
  
  // Cupom
  couponCode?: string
}

// Tipos de cupom
export interface Coupon {
  code: string
  discountType: 'percentage' | 'fixed'
  discountValue: number
  validFrom: Date
  validUntil: Date
  minAmount?: number
  maxUses?: number
  usedCount: number
}

// Tipos para idiomas
export type Locale = 'pt' | 'en' | 'es'

export interface Translation {
  [key: string]: {
    pt: string
    en: string
    es: string
  }
}