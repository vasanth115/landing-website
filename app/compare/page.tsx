"use client"

import { motion } from "framer-motion"
import { GitCompare } from "lucide-react"

export default function CompareLandsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Compare Properties</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Select properties to compare them side-by-side.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-[400px] bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700"
        >
          <GitCompare className="h-16 w-16 mb-4" />
          <span className="text-xl">Comparison feature coming soon!</span>
        </motion.div>
      </div>
    </div>
  )
}
