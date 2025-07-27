"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Mail, Lock, LogIn } from "lucide-react"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

// Define Zod schema for login form validation
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

type LoginFormInputs = z.infer<typeof loginSchema>

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  })

  const [loginError, setLoginError] = useState<string | null>(null)
  const [loginSuccess, setLoginSuccess] = useState<string | null>(null)

  const onSubmit = async (data: LoginFormInputs) => {
    setLoginError(null)
    setLoginSuccess(null)

    // Simulate API call for login
    await new Promise((resolve) => setTimeout(resolve, 1500))

    if (data.email === "user@example.com" && data.password === "password123") {
      setLoginSuccess("Login successful! Redirecting to dashboard...")
      // In a real app, you'd handle authentication (e.g., set a token, redirect)
      console.log("Login successful:", data)
      reset()
      // Example redirect: router.push('/dashboard');
    } else {
      setLoginError("Invalid email or password. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">Welcome Back!</h1>
          <p className="text-gray-600 dark:text-gray-300">Sign in to your LandHub account</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                id="email"
                type="email"
                {...register("email")}
                className="input-field pl-10"
                placeholder="you@example.com"
                disabled={isSubmitting}
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                id="password"
                type="password"
                {...register("password")}
                className="input-field pl-10"
                placeholder="••••••••"
                disabled={isSubmitting}
              />
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          {loginError && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm text-center"
            >
              {loginError}
            </motion.p>
          )}
          {loginSuccess && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-emerald-600 text-sm text-center"
            >
              {loginSuccess}
            </motion.p>
          )}

          <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
            <LogIn className="h-5 w-5 mr-2" />
            {isSubmitting ? "Logging In..." : "Login"}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <Link href="/forgot-password" className="text-emerald-600 hover:underline dark:text-emerald-400">
            Forgot password?
          </Link>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Don't have an account?{" "}
            <Link href="/signup" className="text-emerald-600 hover:underline dark:text-emerald-400">
              Sign Up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
