import { Accommodation } from '@/types'

export const accommodations: Accommodation[] = [
  {
    id: '1',
    name: 'Chalé das Flores',
    type: 'chalet',
    slug: 'chale-das-flores',
    description: 'Um refúgio romântico perfeito para casais que buscam tranquilidade e contato com a natureza. O Chalé das Flores oferece uma experiência única com vista para o jardim e montanhas ao fundo.',
    shortDescription: 'Aconchegante chalé com vista para o jardim',
    capacity: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    basePrice: 180,
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
    amenities: [
      'Wi-Fi',
      'Lareira',
      'Varanda privativa',
      'Roupa de cama premium',
      'Aquecedor',
      'Café da manhã incluso',
      'Estacionamento',
      'Jardim'
    ],
    rules: [
      'Check-in: 14h',
      'Check-out: 12h',
      'Não permitido animais',
      'Proibido fumar',
      'Silêncio após 22h'
    ],
    features: [
      { icon: 'Users', label: '2 hóspedes' },
      { icon: 'Bed', label: '1 quarto' },
      { icon: 'Bath', label: '1 banheiro' },
      { icon: 'Wifi', label: 'Wi-Fi' }
    ]
  },
  {
    id: '2',
    name: 'Chalé das Montanhas',
    type: 'chalet',
    slug: 'chale-das-montanhas',
    description: 'Perfeito para famílias pequenas ou grupos de amigos. Com vista panorâmica das montanhas, este chalé oferece conforto e privacidade com dois quartos espaçosos.',
    shortDescription: 'Vista panorâmica das montanhas',
    capacity: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    basePrice: 250,
    images: [
      'https://images.unsplash.com/photo-1502775700316-6b2963d0e2b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1543365067-fa127bcb2303?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
    amenities: [
      'Wi-Fi',
      'Lareira',
      'Varanda com rede',
      'Churrasqueira',
      'Cozinha completa',
      'TV a cabo',
      'Aquecedor',
      'Café da manhã incluso',
      'Estacionamento'
    ],
    rules: [
      'Check-in: 14h',
      'Check-out: 12h',
      'Não permitido animais',
      'Proibido fumar',
      'Silêncio após 22h'
    ],
    features: [
      { icon: 'Users', label: '4 hóspedes' },
      { icon: 'Bed', label: '2 quartos' },
      { icon: 'Bath', label: '2 banheiros' },
      { icon: 'Wifi', label: 'Wi-Fi' }
    ]
  },
  {
    id: '3',
    name: 'Casa Principal',
    type: 'house',
    slug: 'casa-principal',
    description: 'Ideal para grupos grandes e reuniões familiares. A Casa Principal oferece amplo espaço com 4 quartos, sala de estar espaçosa, cozinha completa e área gourmet externa.',
    shortDescription: 'Espaçosa casa para grupos maiores',
    capacity: 8,
    bedrooms: 4,
    beds: 4,
    bathrooms: 3,
    basePrice: 400,
    images: [
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
    amenities: [
      'Wi-Fi',
      'Lareira',
      'Varanda ampla',
      'Churrasqueira',
      'Cozinha gourmet',
      'TV a cabo',
      'Aquecedor',
      'Sala de jogos',
      'Área gourmet externa',
      'Café da manhã incluso',
      'Estacionamento para 3 carros'
    ],
    rules: [
      'Check-in: 14h',
      'Check-out: 12h',
      'Não permitido animais',
      'Proibido fumar',
      'Silêncio após 22h',
      'Festa mediante consulta'
    ],
    features: [
      { icon: 'Users', label: '8 hóspedes' },
      { icon: 'Bed', label: '4 quartos' },
      { icon: 'Bath', label: '3 banheiros' },
      { icon: 'Wifi', label: 'Wi-Fi' }
    ]
  }
]

// Função helper para buscar por slug
export function getAccommodationBySlug(slug: string): Accommodation | undefined {
  return accommodations.find(acc => acc.slug === slug)
}

// Função helper para buscar por ID
export function getAccommodationById(id: string): Accommodation | undefined {
  return accommodations.find(acc => acc.id === id)
}


// Galeria de imagens organizadas
export interface GalleryImage {
  id: string
  url: string
  title: string
  category: 'all' | 'exterior' | 'interior' | 'amenities' | 'views'
  accommodationId?: string
}

export const galleryImages: GalleryImage[] = [
  // Exteriores
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Chalé das Flores - Vista Externa',
    category: 'exterior',
    accommodationId: '1'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1502775700316-6b2963d0e2b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Chalé das Montanhas - Vista Externa',
    category: 'exterior',
    accommodationId: '2'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Casa Principal - Fachada',
    category: 'exterior',
    accommodationId: '3'
  },
  // Interiores
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Sala de Estar Aconchegante',
    category: 'interior',
    accommodationId: '1'
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Quarto com Vista',
    category: 'interior',
    accommodationId: '1'
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1543365067-fa127bcb2303?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Sala Ampla',
    category: 'interior',
    accommodationId: '2'
  },
  // Comodidades
  {
    id: '7',
    url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Cozinha Completa',
    category: 'amenities',
    accommodationId: '2'
  },
  {
    id: '8',
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Área Gourmet',
    category: 'amenities',
    accommodationId: '3'
  },
  // Vistas
  {
    id: '9',
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Vista das Montanhas',
    category: 'views'
  },
  {
    id: '10',
    url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Pôr do Sol',
    category: 'views'
  },
  {
    id: '11',
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Natureza ao Redor',
    category: 'views'
  },
  {
    id: '12',
    url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Jardim',
    category: 'views'
  }
]