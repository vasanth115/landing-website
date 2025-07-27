"use client"

import { motion } from "framer-motion"
import { SellLandForm } from "@/components/sell/SellLandForm"

export default function SellLandPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            List Your Land for Sale
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Fill out the details below to list your property on LandHub.
          </p>
        </motion.div>

        <SellLandForm />
      </div>
    </div>
  )
}
