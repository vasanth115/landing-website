"use client"

import { motion } from "framer-motion"
import { Shield, Search, MapPin, Users, Clock, Award } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Verified Listings",
    description: "All properties are thoroughly verified and authenticated before listing.",
  },
  {
    icon: Search,
    title: "Advanced Search",
    description: "Find exactly what you're looking for with our powerful search filters.",
  },
  {
    icon: MapPin,
    title: "Interactive Maps",
    description: "Explore properties with detailed maps and satellite imagery.",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Get guidance from our experienced real estate professionals.",
  },
  {
    icon: Clock,
    title: "24/7 Service",
    description: "Round-the-clock support for all your land buying and selling needs.",
  },
  {
    icon: Award,
    title: "Trusted Platform",
    description: "Join thousands of satisfied customers who trust our platform.",
  },
]

export function Features() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Why Choose LandHub?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We provide the most comprehensive and trusted platform for land transactions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                  <feature.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-4">{feature.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
