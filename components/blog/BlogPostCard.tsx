"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock } from "lucide-react"
import type { BlogPost } from "@/lib/types"
import { motion } from "framer-motion"
import { slugify } from "@/lib/utils"

interface BlogPostCardProps {
  post: BlogPost
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
    >
      <Link href={`/blog/${slugify(post.title)}`}>
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-400 text-xs rounded-md font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/blog/${slugify(post.title)}`}>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 hover:text-emerald-600 transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs space-x-4">
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
