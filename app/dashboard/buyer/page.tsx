"use client"

import { motion } from "framer-motion"
import { Heart, MessageSquare, Eye } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

export default function BuyerDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Buyer Dashboard</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Track your interests and manage your property search.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center border border-gray-200 dark:border-gray-700"
          >
            <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">My Favorites</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">View all the properties you've saved.</p>
            <Link href="/favorites">
              <Button variant="primary">View Favorites</Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center border border-gray-200 dark:border-gray-700"
          >
            <MessageSquare className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Messages from Sellers</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Review communications from property sellers.</p>
            <Button variant="outline">View Messages</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center border border-gray-200 dark:border-gray-700"
          >
            <Eye className="h-12 w-12 text-sky-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Recently Viewed</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Quickly access properties you've recently checked.</p>
            <Button variant="outline">View History</Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
