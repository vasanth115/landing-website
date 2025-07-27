"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { LayoutDashboard, User, Landmark, Bell } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Your Dashboard</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Welcome to your personalized LandHub dashboard.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center border border-gray-200 dark:border-gray-700"
          >
            <User className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Buyer Dashboard</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Track your interests, messages from sellers, and manage your saved properties.
            </p>
            <Link href="/dashboard/buyer">
              <Button variant="primary">Go to Buyer Dashboard</Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center border border-gray-200 dark:border-gray-700"
          >
            <Landmark className="h-16 w-16 text-sky-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Seller Dashboard</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Manage your land listings, view inquiries, and track performance.
            </p>
            <Link href="/dashboard/seller">
              <Button variant="secondary">Go to Seller Dashboard</Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center border border-gray-200 dark:border-gray-700"
          >
            <Bell className="h-16 w-16 text-purple-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Notifications</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Stay updated with new listings, price drops, and important alerts.
            </p>
            <Link href="/notifications">
              <Button variant="outline">View Notifications</Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center border border-gray-200 dark:border-gray-700"
          >
            <LayoutDashboard className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Admin Dashboard</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              (Admin Only) Manage all listings, users, and generate reports.
            </p>
            <Link href="/dashboard/admin">
              <Button variant="outline">Go to Admin Dashboard</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
