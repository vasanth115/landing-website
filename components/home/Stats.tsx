"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, MapPin, Award } from "lucide-react"

const stats = [
  {
    icon: MapPin,
    value: "1,000+",
    label: "Properties Listed",
    color: "text-emerald-500",
  },
  {
    icon: Users,
    value: "500+",
    label: "Happy Customers",
    color: "text-sky-500",
  },
  {
    icon: TrendingUp,
    value: "$50M+",
    label: "Total Sales",
    color: "text-emerald-500",
  },
  {
    icon: Award,
    value: "50+",
    label: "Cities Covered",
    color: "text-sky-500",
  },
]

export function Stats() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Our Impact in Numbers</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See how we've helped thousands of people find their perfect land.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
