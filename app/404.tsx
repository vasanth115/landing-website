"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Frown } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center text-center px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Frown className="h-24 w-24 text-emerald-500 mx-auto mb-6" />
        <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
          Oops! The page you are looking for might have been removed, had its name changed, or is temporarily
          unavailable.
        </p>
        <Link href="/">
          <Button variant="primary" size="lg">
            Go to Homepage
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}
