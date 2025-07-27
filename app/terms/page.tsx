"use client"

import { motion } from "framer-motion"

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Terms & Conditions</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Please read our terms of service carefully.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
        >
          <h2>1. Introduction</h2>
          <p>
            Welcome to LandHub. These Terms and Conditions govern your use of our website and services. By accessing or
            using LandHub, you agree to be bound by these Terms.
          </p>

          <h2>2. Use of the Platform</h2>
          <p>
            LandHub provides a platform for users to buy and sell land properties. You agree to use the platform only
            for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's
            use and enjoyment of the platform.
          </p>
          <ul>
            <li>You must be at least 18 years old to use our services.</li>
            <li>You are responsible for maintaining the confidentiality of your account information.</li>
            <li>All listings must be accurate and truthful.</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>
            All content on LandHub, including text, graphics, logos, images, and software, is the property of LandHub or
            its content suppliers and is protected by intellectual property laws.
          </p>

          <h2>4. Disclaimers</h2>
          <p>
            LandHub provides the platform on an "as is" and "as available" basis. We make no representations or
            warranties of any kind, express or implied, as to the operation of the platform or the information, content,
            materials, or products included on the platform.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            LandHub will not be liable for any damages of any kind arising from the use of this platform, including, but
            not limited to direct, indirect, incidental, punitive, and consequential damages.
          </p>

          <h2>6. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by and construed in accordance with the laws of the State of [Your
            State], without regard to its conflict of law principles.
          </p>

          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Your continued use of the platform after any such
            changes constitutes your acceptance of the new Terms.
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">Last updated: January 24, 2024</p>
        </motion.div>
      </div>
    </div>
  )
}
