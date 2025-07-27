"use client"

import type React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/Button"
import { Upload, MapPin, DollarSign, Maximize, FileText } from "lucide-react"
import Image from "next/image"

// Define Zod schema for form validation
const formSchema = z.object({
  title: z.string().min(10, "Title must be at least 10 characters").max(100, "Title cannot exceed 100 characters"),
  description: z.string().min(50, "Description must be at least 50 characters"),
  price: z.number().min(1000, "Price must be at least $1,000"),
  area: z.number().min(100, "Area must be at least 100 sq ft"),
  landType: z.enum(["residential", "commercial", "agricultural", "industrial"], {
    required_error: "Please select a land type",
  }),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zipCode: z.string().min(5, "Zip Code is required"),
  images: z.array(z.string()).min(1, "At least one image is required"),
  documents: z.array(z.string()).optional(), // URLs for uploaded documents
})

type FormData = z.infer<typeof formSchema>

export function SellLandForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      area: 0,
      landType: "residential",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      images: [],
      documents: [],
    },
  })

  const watchedImages = watch("images")

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      const newImageUrls = filesArray.map((file) => URL.createObjectURL(file))
      setValue("images", [...watchedImages, ...newImageUrls], { shouldValidate: true })
    }
  }

  const handleDocumentUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      const newDocUrls = filesArray.map((file) => URL.createObjectURL(file))
      setValue("documents", [...(watch("documents") || []), ...newDocUrls], { shouldValidate: true })
    }
  }

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log("Form Data:", data)
    alert("Land listed successfully!")
    // In a real app, you'd send data to your backend
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-6">
      {/* Basic Details */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Basic Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Land Title
            </label>
            <input
              id="title"
              type="text"
              {...register("title")}
              className="input-field"
              placeholder="e.g., Prime Residential Plot in City Center"
            />
            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
          </div>
          <div>
            <label htmlFor="landType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Land Type
            </label>
            <select id="landType" {...register("landType")} className="input-field">
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="agricultural">Agricultural</option>
              <option value="industrial">Industrial</option>
            </select>
            {errors.landType && <p className="text-red-500 text-xs mt-1">{errors.landType.message}</p>}
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Price ($)
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                id="price"
                type="number"
                {...register("price", { valueAsNumber: true })}
                className="input-field pl-10"
                placeholder="e.g., 250000"
              />
            </div>
            {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price.message}</p>}
          </div>
          <div>
            <label htmlFor="area" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Area (sq ft)
            </label>
            <div className="relative">
              <Maximize className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                id="area"
                type="number"
                {...register("area", { valueAsNumber: true })}
                className="input-field pl-10"
                placeholder="e.g., 5000"
              />
            </div>
            {errors.area && <p className="text-red-500 text-xs mt-1">{errors.area.message}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Description
          </label>
          <textarea
            id="description"
            {...register("description")}
            rows={5}
            className="input-field resize-y"
            placeholder="Provide a detailed description of your land..."
          />
          {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
        </div>
      </div>

      {/* Location Details */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Location Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Address
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                id="address"
                type="text"
                {...register("address")}
                className="input-field pl-10"
                placeholder="Street address"
              />
            </div>
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              City
            </label>
            <input id="city" type="text" {...register("city")} className="input-field" placeholder="City" />
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              State
            </label>
            <input id="state" type="text" {...register("state")} className="input-field" placeholder="State" />
            {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state.message}</p>}
          </div>
          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Zip Code
            </label>
            <input id="zipCode" type="text" {...register("zipCode")} className="input-field" placeholder="Zip Code" />
            {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode.message}</p>}
          </div>
        </div>
      </div>

      {/* Images Upload */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Upload Images</h2>
        <label
          htmlFor="image-upload"
          className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400" />
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input id="image-upload" type="file" multiple className="hidden" onChange={handleImageUpload} />
        </label>
        {errors.images && <p className="text-red-500 text-xs mt-1">{errors.images.message}</p>}

        {watchedImages && watchedImages.length > 0 && (
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {watchedImages.map((image, index) => (
              <div key={index} className="relative w-full h-32 rounded-lg overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Uploaded image ${index + 1}`}
                  fill
                  className="object-cover"
                />
                {/* Add a remove button if needed */}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Documents Upload */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Upload Documents (Optional)</h2>
        <label
          htmlFor="document-upload"
          className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
        >
          <div className="flex flex-col items-center justify-center pt-3 pb-4">
            <FileText className="w-6 h-6 mb-2 text-gray-500 dark:text-gray-400" />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> documents
            </p>
          </div>
          <input id="document-upload" type="file" multiple className="hidden" onChange={handleDocumentUpload} />
        </label>
        {errors.documents && <p className="text-red-500 text-xs mt-1">{errors.documents.message}</p>}
        {watch("documents") && watch("documents")!.length > 0 && (
          <div className="mt-4 space-y-2">
            {watch("documents")!.map((doc, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-700 rounded-lg"
              >
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-emerald-500 mr-2" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{doc.split("/").pop()}</span>
                </div>
                {/* Add a remove button if needed */}
              </div>
            ))}
          </div>
        )}
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "List My Land"}
      </Button>
    </form>
  )
}
