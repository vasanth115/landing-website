"use client"

import { motion } from "framer-motion"
import { PlusCircle, Edit, Trash2, BarChart2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

export default function SellerDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Seller Dashboard</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Manage your land listings and track their performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center border border-gray-200 dark:border-gray-700"
          >
            <PlusCircle className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Create New Listing</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">List a new land property for sale.</p>
            <Link href="/sell">
              <Button variant="primary">List Land</Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center border border-gray-200 dark:border-gray-700"
          >
            <Edit className="h-12 w-12 text-sky-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Manage My Listings</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">View, edit, or delete your existing properties.</p>
            <Button variant="outline">View Listings</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center border border-gray-200 dark:border-gray-700"
          >
            <BarChart2 className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Listing Performance</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Track views, inquiries, and engagement.</p>
            <Button variant="outline">View Analytics</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center border border-gray-200 dark:border-gray-700"
          >
            <Trash2 className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Archived Listings</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Review your sold or removed properties.</p>
            <Button variant="outline">View Archive</Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
