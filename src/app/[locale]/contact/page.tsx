'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const translations = {
    pt: {
      title: 'Entre em Contato',
      subtitle: 'Estamos prontos para ajudar você a planejar sua estadia perfeita',
      formTitle: 'Envie sua Mensagem',
      contactInfo: 'Informações de Contato',
      openingHours: 'Horário de Atendimento',
      name: 'Nome Completo',
      namePlaceholder: 'Seu nome',
      email: 'E-mail',
      emailPlaceholder: 'seu@email.com',
      phone: 'Telefone',
      phonePlaceholder: '(00) 00000-0000',
      subject: 'Assunto',
      subjectPlaceholder: 'Sobre o que deseja falar?',
      message: 'Mensagem',
      messagePlaceholder: 'Escreva sua mensagem aqui...',
      send: 'Enviar Mensagem',
      sending: 'Enviando...',
      whatsapp: 'Falar no WhatsApp',
      address: 'Endereço',
      addressText: 'Rua das Montanhas, 123 - Monte Verde, MG',
      phoneNumber: '+55 (35) 3438-0000',
      emailAddress: 'contato@casadobosque.com.br',
      hours: 'Segunda a Domingo: 8h às 20h',
      success: 'Mensagem enviada com sucesso! Responderemos em breve.',
      error: 'Erro ao enviar mensagem. Tente novamente.'
    }
  }

  const t = translations.pt

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simular envio (depois integrar com backend/email service)
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log('Form data:', formData)
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsApp = () => {
    const phone = '5535934380000' // Formato internacional
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre a Casa do Bosque.')
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulário */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>{t.formTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nome e Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.name} *
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

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.email} *
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
                  </div>

                  {/* Telefone e Assunto */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.phone}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder={t.phonePlaceholder}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.subject} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        placeholder={t.subjectPlaceholder}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.message} *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder={t.messagePlaceholder}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 text-sm">{t.success}</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800 text-sm">{t.error}</p>
                    </div>
                  )}

                  {/* Botão Submit */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        {t.sending}
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        {t.send}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Informações de Contato */}
          <div className="space-y-6">
            {/* Informações */}
            <Card>
              <CardHeader>
                <CardTitle>{t.contactInfo}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">{t.address}</p>
                    <p className="text-gray-600 text-sm">{t.addressText}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">{t.phone}</p>
                    <a 
                      href={`tel:${t.phoneNumber}`}
                      className="text-primary-600 hover:text-primary-700 text-sm"
                    >
                      {t.phoneNumber}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">{t.email}</p>
                    <a 
                      href={`mailto:${t.emailAddress}`}
                      className="text-primary-600 hover:text-primary-700 text-sm"
                    >
                      {t.emailAddress}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Horário */}
            <Card>
              <CardHeader>
                <CardTitle>{t.openingHours}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary-600" />
                  <p className="text-gray-700">{t.hours}</p>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="text-center py-8">
                <MessageSquare className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Prefere WhatsApp?
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Fale conosco diretamente pelo WhatsApp para resposta rápida!
                </p>
                <Button
                  type="button"
                  onClick={handleWhatsApp}
                  variant="primary"
                  size="lg"
                  fullWidth
                  className="bg-green-600 hover:bg-green-700"
                >
                  {t.whatsapp}
                </Button>
              </CardContent>
            </Card>

            {/* Mapa */}
            <Card padding="none">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"
                  }}
                >
                  <div className="w-full h-full bg-black/20 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <div className="flex items-center space-x-2 text-gray-800">
                        <MapPin className="h-5 w-5 text-primary-600" />
                        <span className="font-medium">Monte Verde, MG</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}