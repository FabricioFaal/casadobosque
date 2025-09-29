import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['pt', 'en', 'es']
const defaultLocale = 'pt'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Verificar se já tem um locale válido no pathname
  const hasValidLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // Se não tem locale válido, redirecionar para o padrão
  if (!hasValidLocale) {
    const newUrl = new URL(`/${defaultLocale}${pathname}`, request.url)
    return NextResponse.redirect(newUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Aplicar em todas as rotas exceto arquivos estáticos
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*$).*)',
  ],
}