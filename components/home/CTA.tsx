"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { ArrowRight, Search, PlusCircle } from "lucide-react"

export function CTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-500 to-sky-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Find Your Perfect Land?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have found their dream properties through our platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/listings">
              <Button variant="default" size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                <Search className="h-5 w-5 mr-2" />
                Browse Properties
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link href="/sell">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent"
              >
                <PlusCircle className="h-5 w-5 mr-2" />
                List Your Land
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
