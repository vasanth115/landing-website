"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, MapPin, Maximize, Eye, Calendar } from "lucide-react"
import type { Land } from "@/lib/types"
import { formatPrice, formatArea } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"

interface LandListItemProps {
  land: Land
}

export function LandListItem({ land }: LandListItemProps) {
  const [isFavorite, setIsFavorite] = useState(false)

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
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-80 h-48 md:h-auto">
          <Image src={land.images[0] || "/placeholder.svg"} alt={land.title} fill className="object-cover" />

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
        </div>

        <div className="flex-1 p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{land.title}</h3>

              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">
                  {land.location.address}, {land.location.city}, {land.location.state}
                </span>
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300 mb-3">
                <div className="flex items-center">
                  <Maximize className="h-4 w-4 mr-1" />
                  <span>{formatArea(land.area)}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Listed {new Date(land.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            <div className="text-right ml-4">
              <div className="text-2xl font-bold text-emerald-600 mb-2">{formatPrice(land.price)}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                ${Math.round((land.price / land.area) * 43560)} per acre
              </div>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{land.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {land.features.slice(0, 4).map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
              >
                {feature}
              </span>
            ))}
            {land.features.length > 4 && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md">
                +{land.features.length - 4} more
              </span>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600 dark:text-gray-300">Listed by {land.seller.name}</div>

            <Link href={`/land/${land.id}`}>
              <Button variant="primary">
                <Eye className="h-4 w-4 mr-2" />
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
