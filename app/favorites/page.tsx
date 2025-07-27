"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { HeartCrack } from "lucide-react"
import { LandCard } from "@/components/common/LandCard"
import { mockLands } from "@/lib/data"
import type { Land } from "@/lib/types"

export default function FavoritesPage() {
  const [favoriteLandIds, setFavoriteLandIds] = useState<string[]>([])
  const [favoriteLands, setFavoriteLands] = useState<Land[]>([])

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]")
    setFavoriteLandIds(storedFavorites)
  }, [])

  useEffect(() => {
    const filteredLands = mockLands.filter((land) => favoriteLandIds.includes(land.id))
    setFavoriteLands(filteredLands)
  }, [favoriteLandIds])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Your Favorites</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Properties you've saved for later.</p>
        </motion.div>

        {favoriteLands.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center py-20 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <HeartCrack className="h-20 w-20 text-gray-400 dark:text-gray-600 mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No Favorites Yet!</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Start browsing properties and click the heart icon to add them to your favorites.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favoriteLands.map((land, index) => (
              <motion.div
                key={land.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <LandCard land={land} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
