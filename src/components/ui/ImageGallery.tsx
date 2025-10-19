'use client'

import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageGalleryProps {
  images: string[]
  title: string
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openGallery = (index: number) => {
    setCurrentIndex(index)
    setIsOpen(true)
  }

  const closeGallery = () => {
    setIsOpen(false)
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
      {/* Grid de Imagens */}
      <div className="grid grid-cols-4 gap-2 h-[400px]">
        {/* Imagem Principal */}
        <div 
          className="col-span-2 row-span-2 relative rounded-lg overflow-hidden cursor-pointer group"
          onClick={() => openGallery(0)}
        >
          <div 
            className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: `url('${images[0]}')` }}
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
        </div>

        {/* Imagens Secundárias */}
        {images.slice(1, 5).map((image, index) => (
          <div 
            key={index}
            className="relative rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => openGallery(index + 1)}
          >
            <div 
              className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
              style={{ backgroundImage: `url('${image}')` }}
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
            
            {/* Mostrar contador na última imagem */}
            {index === 3 && images.length > 5 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">
                  +{images.length - 5} fotos
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal de Visualização */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          {/* Botão Fechar */}
          <button
            onClick={closeGallery}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Botão Anterior */}
          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>

          {/* Imagem */}
          <div className="max-w-5xl max-h-[80vh] mx-4">
            <img
              src={images[currentIndex]}
              alt={`${title} - Foto ${currentIndex + 1}`}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Botão Próximo */}
          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronRight className="h-12 w-12" />
          </button>

          {/* Contador */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
            <span className="text-lg">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </div>
      )}
    </>
  )
}