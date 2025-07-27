"use client"

import { motion } from "framer-motion"
import { Users, Briefcase, Lightbulb, Award } from "lucide-react"
import Image from "next/image"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">About LandHub</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Your trusted partner in land buying and selling.
          </p>
        </motion.div>

        {/* Company History */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12 border border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Briefcase className="h-6 w-6 text-emerald-500 mr-3" /> Our Story
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Founded in 2020, LandHub was created with a vision to simplify the complex process of buying and selling
            land. We noticed a gap in the market for a dedicated, transparent, and user-friendly platform for land
            transactions. Our founders, a team of real estate veterans and tech innovators, set out to bridge this gap.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Since our inception, we've grown into a leading online marketplace, connecting thousands of buyers and
            sellers across the nation. We pride ourselves on our commitment to integrity, customer satisfaction, and
            leveraging technology to make land ownership accessible to everyone.
          </p>
        </motion.section>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Lightbulb className="h-6 w-6 text-sky-500 mr-3" /> Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our mission is to empower individuals and businesses to confidently buy and sell land by providing a
              secure, efficient, and transparent online platform. We aim to be the go-to resource for all land-related
              transactions, fostering growth and opportunity for our community.
            </p>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Award className="h-6 w-6 text-emerald-500 mr-3" /> Our Vision
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To be the leading global platform for land transactions, recognized for our innovation, reliability, and
              unwavering commitment to customer success. We envision a future where land ownership is accessible and
              beneficial for everyone.
            </p>
          </motion.section>
        </div>

        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <Users className="h-6 w-6 text-emerald-500 mr-3" /> Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: "Jane Doe", role: "CEO & Founder", avatar: "/placeholder.svg?height=120&width=120" },
              { name: "Mark Smith", role: "Chief Technology Officer", avatar: "/placeholder.svg?height=120&width=120" },
              { name: "Alice Brown", role: "Head of Sales", avatar: "/placeholder.svg?height=120&width=120" },
              { name: "David Green", role: "Marketing Director", avatar: "/placeholder.svg?height=120&width=120" },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Image
                  src={member.avatar || "/placeholder.svg"}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4 border-4 border-emerald-100 dark:border-emerald-900/30"
                />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}
