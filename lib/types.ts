export interface Land {
  id: string
  title: string
  description: string
  price: number
  area: number
  location: {
    address: string
    city: string
    state: string
    zipCode: string
    coordinates: {
      lat: number
      lng: number
    }
  }
  images: string[]
  features: string[]
  landType: "residential" | "commercial" | "agricultural" | "industrial"
  status: "available" | "pending" | "sold"
  seller: {
    id: string
    name: string
    email: string
    phone: string
    avatar?: string
  }
  documents: Document[]
  createdAt: string
  updatedAt: string
}

export interface Document {
  id: string
  name: string
  type: string
  url: string
  uploadedAt: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: {
    name: string
    avatar: string
  }
  publishedAt: string
  readTime: number
  tags: string[]
  image: string
}

export interface User {
  id: string
  name: string
  email: string
  phone?: string
  avatar?: string
  role: "buyer" | "seller" | "admin"
  createdAt: string
}

export interface Notification {
  id: string
  title: string
  message: string
  type: "info" | "success" | "warning" | "error"
  read: boolean
  createdAt: string
}
