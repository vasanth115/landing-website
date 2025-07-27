"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function PricingPage() {
  const pricingPlans = [
    {
      name: "Basic",
      price: "Free",
      features: [
        "1 Standard Listing",
        "Basic Visibility",
        "Email Support",
        "Standard Analytics",
        "7-day Listing Duration",
      ],
      buttonText: "Get Started",
      highlight: false,
    },
    {
      name: "Premium",
      price: "$49",
      period: "/month",
      features: [
        "5 Featured Listings",
        "High Visibility",
        "Priority Email & Phone Support",
        "Advanced Analytics",
        "30-day Listing Duration",
        "Social Media Promotion",
      ],
      buttonText: "Choose Premium",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited Listings",
        "Top Visibility",
        "Dedicated Account Manager",
        "Custom Reporting",
        "Flexible Listing Duration",
        "Exclusive Marketing Campaigns",
      ],
      buttonText: "Contact Sales",
      highlight: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Our Pricing Plans</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Choose the perfect plan to maximize your land listing's reach and impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col border ${
                plan.highlight ? "border-emerald-500 ring-2 ring-emerald-500" : "border-gray-200 dark:border-gray-700"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                  Most Popular
                </div>
              )}
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{plan.name}</h2>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-extrabold text-emerald-600">{plan.price}</span>
                {plan.period && <span className="text-xl text-gray-600 dark:text-gray-300 ml-1">{plan.period}</span>}
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant={plan.highlight ? "primary" : "outline"} className="w-full mt-auto">
                {plan.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
