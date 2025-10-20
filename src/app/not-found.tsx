'use client'

import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        {/* Número 404 */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full" />
        </div>

        {/* Mensagem */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Página Não Encontrada
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>

        {/* Ilustração */}
        <div className="mb-8">
          <div className="w-64 h-64 mx-auto bg-primary-100 rounded-full flex items-center justify-center">
            <Search className="h-32 w-32 text-primary-600" />
          </div>
        </div>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/pt">
            <Button variant="primary" size="lg">
              <Home className="h-5 w-5 mr-2" />
              Voltar para Home
            </Button>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Página Anterior
          </button>
        </div>

        {/* Links Úteis */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-4">Você pode estar procurando:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link 
              href="/pt/accommodations"
              className="text-primary-600 hover:text-primary-700 font-medium text-sm"
            >
              Acomodações
            </Link>
            <span className="text-gray-400">•</span>
            <Link 
              href="/pt/gallery"
              className="text-primary-600 hover:text-primary-700 font-medium text-sm"
            >
              Galeria
            </Link>
            <span className="text-gray-400">•</span>
            <Link 
              href="/pt/booking"
              className="text-primary-600 hover:text-primary-700 font-medium text-sm"
            >
              Reservas
            </Link>
            <span className="text-gray-400">•</span>
            <Link 
              href="/pt/contact"
              className="text-primary-600 hover:text-primary-700 font-medium text-sm"
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}