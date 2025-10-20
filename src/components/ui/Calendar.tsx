'use client'

import { useState } from 'react'
import { DayPicker, DateRange } from 'react-day-picker'
import { format, differenceInDays, addDays } from 'date-fns'
import { ptBR, enUS, es } from 'date-fns/locale'
import 'react-day-picker/dist/style.css'

interface CalendarProps {
  locale: string
  onDateSelect: (range: DateRange | undefined) => void
  disabledDates?: Date[]
  minStay?: number
}

export function Calendar({ 
  locale, 
  onDateSelect, 
  disabledDates = [],
  minStay = 2 
}: CalendarProps) {
  const [range, setRange] = useState<DateRange | undefined>()

  const locales = {
    pt: ptBR,
    en: enUS,
    es: es
  }

  const selectedLocale = locales[locale as keyof typeof locales] || ptBR

  const handleSelect = (selectedRange: DateRange | undefined) => {
    if (selectedRange?.from && selectedRange?.to) {
      const nights = differenceInDays(selectedRange.to, selectedRange.from)
      
      // Validar estadia mínima
      if (nights < minStay) {
        // Auto-ajustar para estadia mínima
        const adjustedRange = {
          from: selectedRange.from,
          to: addDays(selectedRange.from, minStay)
        }
        setRange(adjustedRange)
        onDateSelect(adjustedRange)
        return
      }
    }
    
    setRange(selectedRange)
    onDateSelect(selectedRange)
  }

  const modifiers = {
    disabled: [
      { before: new Date() }, // Desabilitar datas passadas
      ...disabledDates
    ]
  }

  return (
    <div className="calendar-wrapper">
      <style jsx global>{`
        .calendar-wrapper .rdp {
          --rdp-cell-size: 45px;
          --rdp-accent-color: #0ea5e9;
          --rdp-background-color: #e0f2fe;
          margin: 0;
        }
        
        .calendar-wrapper .rdp-months {
          justify-content: center;
        }
        
        .calendar-wrapper .rdp-month {
          margin: 0;
        }
        
        .calendar-wrapper .rdp-caption {
          margin-bottom: 1rem;
        }
        
        .calendar-wrapper .rdp-caption_label {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1f2937;
        }
        
        .calendar-wrapper .rdp-head_cell {
          font-weight: 600;
          color: #6b7280;
          font-size: 0.875rem;
        }
        
        .calendar-wrapper .rdp-cell {
          padding: 2px;
        }
        
        .calendar-wrapper .rdp-day {
          border-radius: 0.5rem;
          font-weight: 500;
          transition: all 0.2s;
        }
        
        .calendar-wrapper .rdp-day:hover:not(.rdp-day_disabled) {
          background-color: #f3f4f6;
        }
        
        .calendar-wrapper .rdp-day_selected {
          background-color: var(--rdp-accent-color) !important;
          color: white;
        }
        
        .calendar-wrapper .rdp-day_range_middle {
          background-color: var(--rdp-background-color) !important;
          color: var(--rdp-accent-color);
        }
        
        .calendar-wrapper .rdp-day_disabled {
          color: #d1d5db;
          cursor: not-allowed;
        }
        
        .calendar-wrapper .rdp-button:disabled {
          opacity: 0.5;
        }
      `}</style>
      
      <DayPicker
        mode="range"
        selected={range}
        onSelect={handleSelect}
        locale={selectedLocale}
        numberOfMonths={2}
        disabled={modifiers.disabled}
        modifiers={modifiers}
      />
      
      {range?.from && range?.to && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>
              {locale === 'pt' && 'Período selecionado:'}
              {locale === 'en' && 'Selected period:'}
              {locale === 'es' && 'Período seleccionado:'}
            </strong>
            <br />
            {format(range.from, 'PPP', { locale: selectedLocale })} 
            {' → '}
            {format(range.to, 'PPP', { locale: selectedLocale })}
            <br />
            <span className="text-blue-600 font-semibold">
              {differenceInDays(range.to, range.from)} 
              {locale === 'pt' && ' noites'}
              {locale === 'en' && ' nights'}
              {locale === 'es' && ' noches'}
            </span>
          </p>
        </div>
      )}
    </div>
  )
}