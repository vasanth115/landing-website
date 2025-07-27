"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, MapPin, Maximize, Eye } from "lucide-react"
import type { Land } from "@/lib/types"
import { formatPrice, formatArea } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"

interface LandCardProps {
  land: Land
}

export function LandCard({ land }: LandCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
    // Here you would typically save to localStorage or API
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
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
    >
      <div className="relative">
        <Image
          src={land.images[currentImageIndex] || "/placeholder.svg"}
          alt={land.title}
          width={400}
          height={250}
          className="w-full h-48 object-cover"
        />

        <div className="absolute top-3 left-3">
          <span
            className={`px-2 py-1 text-xs font-medium rounded-full ${
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

        <button
          onClick={toggleFavorite}
          className="absolute top-3 right-3 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow"
        >
          <Heart
            className={`h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-600 dark:text-gray-300"}`}
          />
        </button>

        {land.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {land.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">{land.title}</h3>
          <div className="text-right">
            <div className="text-2xl font-bold text-emerald-600">{formatPrice(land.price)}</div>
          </div>
        </div>

        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">
            {land.location.city}, {land.location.state}
          </span>
        </div>

        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
          <Maximize className="h-4 w-4 mr-1" />
          <span className="text-sm">{formatArea(land.area)}</span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{land.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {land.features.slice(0, 2).map((feature, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
            >
              {feature}
            </span>
          ))}
          {land.features.length > 2 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md">
              +{land.features.length - 2} more
            </span>
          )}
        </div>

        <Link href={`/land/${land.id}`}>
          <Button variant="primary" className="w-full">
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}
