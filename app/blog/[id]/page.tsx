"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { mockBlogPosts } from "@/lib/data"
import { slugify } from "@/lib/utils"

export default function SingleBlogPage({ params }: { params: { id: string } }) {
  const post = mockBlogPosts.find((p) => slugify(p.title) === params.id)

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Blog Post Not Found</h1>
          <Link href="/blog">
            <button className="btn-primary">Back to Blog</button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300 mb-6"
        >
          <Link href="/" className="hover:text-emerald-600">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-emerald-600">
            Blog
          </Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white line-clamp-1">{post.title}</span>
        </motion.nav>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">{post.title}</h1>

          <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-6 space-x-4">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readTime} min read</span>
            </div>
          </div>

          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={800}
            height={450}
            className="w-full h-auto rounded-lg mb-8"
          />

          <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <p>{post.content}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <h3>Key Takeaways</h3>
            <ul>
              <li>Understand market trends.</li>
              <li>Verify legal documents.</li>
              <li>Consider future development.</li>
            </ul>
            <p>
              For more detailed information, consult with a real estate expert or contact our support team. We are
              always here to help you make informed decisions.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Comments (Simulated)</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Image
                    src="/placeholder.svg?height=30&width=30"
                    alt="Commenter 1"
                    width={30}
                    height={30}
                    className="rounded-full mr-3"
                  />
                  <span className="font-semibold text-gray-900 dark:text-white">Alice Commenter</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-auto">2 days ago</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Great article! Very insightful for new land buyers.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Image
                    src="/placeholder.svg?height=30&width=30"
                    alt="Commenter 2"
                    width={30}
                    height={30}
                    className="rounded-full mr-3"
                  />
                  <span className="font-semibold text-gray-900 dark:text-white">Bob Reader</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-auto">1 day ago</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  I appreciate the tips on location. That's always been my biggest challenge.
                </p>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  )
}
