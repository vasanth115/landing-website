"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "How do I list my land for sale?",
    answer:
      "To list your land, navigate to the 'Sell Land' page, fill out the detailed form with property information, images, and documents, then submit. Our team will review and approve your listing.",
  },
  {
    question: "What types of land can I buy on LandHub?",
    answer:
      "LandHub features a diverse range of land types including residential plots, commercial properties, agricultural farmlands, and industrial sites.",
  },
  {
    question: "Is there a fee to list my property?",
    answer:
      "Basic listings are free. We offer premium listing packages with enhanced visibility and features for a fee. You can find details on our 'Pricing' page.",
  },
  {
    question: "How do I contact a seller?",
    answer:
      "On each 'Single Land Detail Page', you'll find a 'Contact Seller' button or modal. Fill out the form, and your message will be securely sent to the seller.",
  },
  {
    question: "Can I compare multiple land properties?",
    answer:
      "Yes, our 'Compare Lands Page' allows you to select and view multiple properties side-by-side, making it easier to evaluate their features and pricing.",
  },
  {
    question: "How does the wishlist/favorites feature work?",
    answer:
      "You can save properties to your 'Favorites/Wishlist' by clicking the heart icon on any land listing. These properties are stored locally in your browser for easy access later.",
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Find answers to common questions about buying and selling land on LandHub.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</span>
                <ChevronDown
                  className={`h-6 w-6 text-gray-600 dark:text-gray-300 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-gray-700"
                >
                  <p className="pt-4">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: faqs.length * 0.1 }}
          className="text-center mt-12 p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-900"
        >
          <HelpCircle className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Still have questions?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            If you couldn't find the answer you were looking for, feel free to contact our support team.
          </p>
          <a href="/contact" className="btn-primary inline-flex items-center">
            Contact Support
          </a>
        </motion.div>
      </div>
    </div>
  )
}
