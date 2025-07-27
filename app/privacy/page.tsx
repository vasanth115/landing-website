"use client"

import { motion } from "framer-motion"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Your privacy is important to us. Learn how we collect, use, and protect your data.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
        >
          <h2>1. Introduction</h2>
          <p>
            This Privacy Policy describes how LandHub collects, uses, and discloses your personal information when you
            visit or make a purchase from our website.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We collect various types of information in connection with the services we provide, including:</p>
          <ul>
            <li>
              **Personal Information:** Name, email address, phone number, physical address, and payment information.
            </li>
            <li>
              **Usage Data:** Information about how you access and use the platform, such as IP address, browser type,
              pages visited, and time spent on pages.
            </li>
            <li>
              **Listing Data:** Details about properties you list or view, including images, descriptions, and location
              data.
            </li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect for various purposes, including:</p>
          <ul>
            <li>To provide and maintain our services.</li>
            <li>To process your transactions and manage your listings.</li>
            <li>To communicate with you, including sending updates and promotional materials.</li>
            <li>To improve our website and services.</li>
            <li>To ensure the security of our platform.</li>
          </ul>

          <h2>4. Sharing Your Information</h2>
          <p>We may share your information with third parties in certain circumstances, such as:</p>
          <ul>
            <li>With service providers who assist us in operating our business.</li>
            <li>With other users (e.g., sellers' contact info to interested buyers).</li>
            <li>When required by law or to protect our rights.</li>
          </ul>

          <h2>5. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information from unauthorized access,
            disclosure, alteration, and destruction. However, no method of transmission over the Internet or electronic
            storage is 100% secure.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have certain rights regarding your personal information, including
            the right to access, correct, or delete your data. Please contact us to exercise these rights.
          </p>

          <h2>7. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page.
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">Last updated: January 24, 2024</p>
        </motion.div>
      </div>
    </div>
  )
}
