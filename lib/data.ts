import type { Land, BlogPost, Notification } from "./types"

export const mockLands: Land[] = [
  {
    id: "1",
    title: "Beautiful Residential Plot in Downtown",
    description:
      "Prime residential land perfect for building your dream home. Located in a peaceful neighborhood with excellent connectivity.",
    price: 250000,
    area: 5000,
    location: {
      address: "123 Oak Street",
      city: "Springfield",
      state: "CA",
      zipCode: "90210",
      coordinates: { lat: 34.0522, lng: -118.2437 },
    },
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    features: ["Utilities Available", "Paved Road Access", "Mature Trees", "Level Ground"],
    landType: "residential",
    status: "available",
    seller: {
      id: "seller1",
      name: "John Smith",
      email: "john@example.com",
      phone: "+1-555-0123",
    },
    documents: [],
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
  },
  {
    id: "2",
    title: "Commercial Land Near Highway",
    description:
      "Excellent commercial opportunity with high visibility and traffic. Perfect for retail, office, or mixed-use development.",
    price: 500000,
    area: 10000,
    location: {
      address: "456 Business Blvd",
      city: "Los Angeles",
      state: "CA",
      zipCode: "90028",
      coordinates: { lat: 34.0928, lng: -118.3287 },
    },
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    features: ["Highway Access", "High Traffic", "Zoned Commercial", "Utilities Ready"],
    landType: "commercial",
    status: "available",
    seller: {
      id: "seller2",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      phone: "+1-555-0456",
    },
    documents: [],
    createdAt: "2024-01-10T14:30:00Z",
    updatedAt: "2024-01-10T14:30:00Z",
  },
  {
    id: "3",
    title: "Agricultural Farmland - 50 Acres",
    description:
      "Fertile agricultural land perfect for farming or ranching. Includes water rights and existing irrigation system.",
    price: 750000,
    area: 2178000,
    location: {
      address: "789 Farm Road",
      city: "Fresno",
      state: "CA",
      zipCode: "93650",
      coordinates: { lat: 36.7378, lng: -119.7871 },
    },
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    features: ["Water Rights", "Irrigation System", "Fertile Soil", "Farm Equipment Included"],
    landType: "agricultural",
    status: "available",
    seller: {
      id: "seller3",
      name: "Mike Wilson",
      email: "mike@example.com",
      phone: "+1-555-0789",
    },
    documents: [],
    createdAt: "2024-01-05T09:15:00Z",
    updatedAt: "2024-01-05T09:15:00Z",
  },
]

export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Complete Guide to Buying Land: What Every First-Time Buyer Should Know",
    excerpt:
      "Learn the essential steps, legal considerations, and financial aspects of purchasing land for the first time.",
    content: "Buying land is one of the most significant investments you can make...",
    author: {
      name: "Emily Davis",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    publishedAt: "2024-01-20T10:00:00Z",
    readTime: 8,
    tags: ["Buying Guide", "First Time Buyers", "Investment"],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "2",
    title: "Top 10 Factors to Consider When Choosing Land Location",
    excerpt: "Location is everything in real estate. Discover the key factors that make a land location valuable.",
    content: "When it comes to land investment, location truly is everything...",
    author: {
      name: "Robert Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    publishedAt: "2024-01-18T14:30:00Z",
    readTime: 6,
    tags: ["Location", "Investment Tips", "Real Estate"],
    image: "/placeholder.svg?height=300&width=500",
  },
]

export const mockNotifications: Notification[] = [
  {
    id: "1",
    title: "New Land Listed in Your Area",
    message: "A new residential plot has been listed in Springfield, CA matching your preferences.",
    type: "info",
    read: false,
    createdAt: "2024-01-22T10:00:00Z",
  },
  {
    id: "2",
    title: "Price Drop Alert",
    message: "The commercial land on Business Blvd has reduced its price by $50,000.",
    type: "success",
    read: false,
    createdAt: "2024-01-21T15:30:00Z",
  },
]
