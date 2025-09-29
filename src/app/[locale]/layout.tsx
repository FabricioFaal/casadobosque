import '../globals.css'

export const metadata = {
  title: 'Casa do Bosque',
  description: 'Pousada em Monte Verde',
}

interface RootLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export default function LocaleLayout({
  children,
  params: { locale }
}: RootLayoutProps) {
  return (
    <html lang={locale}>
      <body>
        {children}
      </body>
    </html>
  )
}