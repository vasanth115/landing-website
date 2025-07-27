"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

export default function MapViewPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Interactive Map View</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Explore land properties on an interactive map.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-[600px] bg-gray-200 dark:bg-gray-700 rounded-xl shadow-lg flex items-center justify-center text-gray-500 dark:text-gray-400"
        >
          <MapPin className="h-16 w-16 mb-4" />
          <span className="text-xl">Map integration coming soon! (e.g., Mapbox/Leaflet)</span>
        </motion.div>
      </div>
    </div>
  )
}
