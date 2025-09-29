import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, locale: string = 'pt-BR'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: locale === 'pt-BR' ? 'BRL' : 'USD',
  }).format(amount)
}

export function formatDate(date: Date, locale: string = 'pt-BR'): string {
  return new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

export function calculateNights(checkIn: Date, checkOut: Date): number {
  const diffTime = checkOut.getTime() - checkIn.getTime()
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}