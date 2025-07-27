"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Upload, FileText, X } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function UploadDocumentsPage() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      setUploadedFiles((prev) => [...prev, ...filesArray])
    }
  }

  const removeFile = (indexToRemove: number) => {
    setUploadedFiles((prev) => prev.filter((_, index) => index !== indexToRemove))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate API call for document upload
    console.log("Uploading files:", uploadedFiles)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    alert("Documents uploaded successfully!")
    setUploadedFiles([])
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Upload Documents</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Securely upload land-related documents for your listings.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="document-upload"
                className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-12 h-12 mb-3 text-gray-500 dark:text-gray-400" />
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    PDF, DOC, DOCX, JPEG, PNG (Max 10MB per file)
                  </p>
                </div>
                <input id="document-upload" type="file" multiple className="hidden" onChange={handleFileUpload} />
              </label>
            </div>

            {uploadedFiles.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Uploaded Files</h2>
                <ul className="space-y-3">
                  {uploadedFiles.map((file, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                    >
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-emerald-500 mr-3" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{file.name}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                          ({(file.size / 1024 / 1024).toFixed(2)} MB)
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => removeFile(index)}>
                        <X className="h-4 w-4 text-gray-500" />
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Button type="submit" variant="primary" size="lg" className="w-full" disabled={uploadedFiles.length === 0}>
              Upload Documents
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
