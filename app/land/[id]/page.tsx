"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Heart,
  Share2,
  MapPin,
  Maximize,
  Calendar,
  User,
  Phone,
  Mail,
  FileText,
  ChevronLeft,
  ChevronRight,
  Map,
} from "lucide-react"
import { Button } from "@/components/ui/Button"
import { ContactSellerModal } from "@/components/land/ContactSellerModal"
import { mockLands } from "@/lib/data"
import type { Land } from "@/lib/types"
import { formatPrice, formatArea } from "@/lib/utils"
import Link from "next/link"

export default function LandDetailPage() {
  const params = useParams()
  const [land, setLand] = useState<Land | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)

  useEffect(() => {
    const foundLand = mockLands.find((l) => l.id === params.id)
    setLand(foundLand || null)
  }, [params.id])

  if (!land) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Property Not Found</h1>
          <Link href="/listings">
            <Button variant="primary">Back to Listings</Button>
          </Link>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % land.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + land.images.length) % land.images.length)
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]")
    if (isFavorite) {
      const updatedFavorites = favorites.filter((id: string) => id !== land.id)
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
    } else {
      favorites.push(land.id)
      localStorage.setItem("favorites", JSON.stringify(favorites))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300 mb-6"
        >
          <Link href="/" className="hover:text-emerald-600">
            Home
          </Link>
          <span>/</span>
          <Link href="/listings" className="hover:text-emerald-600">
            Listings
          </Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white">{land.title}</span>
        </motion.nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-96 rounded-xl overflow-hidden">
                <Image
                  src={land.images[currentImageIndex] || "/placeholder.svg"}
                  alt={land.title}
                  fill
                  className="object-cover"
                />

                {land.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}

                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 text-sm font-medium rounded-full ${
                      land.landType === "residential"
                        ? "bg-emerald-100 text-emerald-800"
                        : land.landType === "commercial"
                          ? "bg-sky-100 text-sky-800"
                          : land.landType === "agricultural"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {land.landType.charAt(0).toUpperCase() + land.landType.slice(1)}
                  </span>
                </div>

                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={toggleFavorite}
                    className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow"
                  >
                    <Heart
                      className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-600 dark:text-gray-300"}`}
                    />
                  </button>
                  <button className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow">
                    <Share2 className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  </button>
                </div>
              </div>

              {/* Image Thumbnails */}
              {land.images.length > 1 && (
                <div className="flex space-x-2 mt-4 overflow-x-auto">
                  {land.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 ${
                        index === currentImageIndex ? "ring-2 ring-emerald-500" : ""
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${land.title} ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Property Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6"
            >
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{land.title}</h1>

              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                <MapPin className="h-5 w-5 mr-2" />
                <span>
                  {land.location.address}, {land.location.city}, {land.location.state} {land.location.zipCode}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Maximize className="h-6 w-6 text-emerald-500 mx-auto mb-2" />
                  <div className="text-sm text-gray-600 dark:text-gray-300">Area</div>
                  <div className="font-semibold text-gray-900 dark:text-white">{formatArea(land.area)}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Calendar className="h-6 w-6 text-sky-500 mx-auto mb-2" />
                  <div className="text-sm text-gray-600 dark:text-gray-300">Listed</div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {new Date(land.createdAt).toLocaleDateString()}
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <FileText className="h-6 w-6 text-purple-500 mx-auto mb-2" />
                  <div className="text-sm text-gray-600 dark:text-gray-300">Type</div>
                  <div className="font-semibold text-gray-900 dark:text-white capitalize">{land.landType}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Map className="h-6 w-6 text-emerald-500 mx-auto mb-2" />
                  <div className="text-sm text-gray-600 dark:text-gray-300">Per Acre</div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    ${Math.round((land.price / land.area) * 43560).toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Description</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{land.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Features</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {land.features.map((feature, index) => (
                    <div key={index} className="flex items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price and Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 sticky top-24"
            >
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">{formatPrice(land.price)}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  ${Math.round((land.price / land.area) * 43560).toLocaleString()} per acre
                </div>
              </div>

              <div className="space-y-3">
                <Button variant="primary" className="w-full" onClick={() => setShowContactModal(true)}>
                  Contact Seller
                </Button>
                <Link href="/compare" className="block">
                  <Button variant="outline" className="w-full bg-transparent">
                    Add to Compare
                  </Button>
                </Link>
                <Link href="/map" className="block">
                  <Button variant="outline" className="w-full bg-transparent">
                    <Map className="h-4 w-4 mr-2" />
                    View on Map
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Seller Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Seller Information</h3>

              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mr-3">
                  <User className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{land.seller.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Property Owner</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Phone className="h-4 w-4 mr-3" />
                  <span className="text-sm">{land.seller.phone}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Mail className="h-4 w-4 mr-3" />
                  <span className="text-sm">{land.seller.email}</span>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full mt-4 bg-transparent"
                onClick={() => setShowContactModal(true)}
              >
                Send Message
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactSellerModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        seller={land.seller}
        landTitle={land.title}
      />
    </div>
  )
}
