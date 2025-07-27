"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Filter, Grid, List, SlidersHorizontal } from "lucide-react"
import { LandCard } from "@/components/common/LandCard"
import { LandListItem } from "@/components/listings/LandListItem"
import { FilterSidebar } from "@/components/listings/FilterSidebar"
import { Button } from "@/components/ui/Button"
import { mockLands } from "@/lib/data"

export default function ListingsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    landType: "",
    minPrice: "",
    maxPrice: "",
    minArea: "",
    maxArea: "",
    location: "",
    features: [] as string[],
  })

  const filteredLands = useMemo(() => {
    return mockLands.filter((land) => {
      if (filters.landType && land.landType !== filters.landType) return false
      if (filters.minPrice && land.price < Number.parseInt(filters.minPrice)) return false
      if (filters.maxPrice && land.price > Number.parseInt(filters.maxPrice)) return false
      if (filters.minArea && land.area < Number.parseInt(filters.minArea)) return false
      if (filters.maxArea && land.area > Number.parseInt(filters.maxArea)) return false
      if (filters.location && !land.location.city.toLowerCase().includes(filters.location.toLowerCase())) return false
      if (filters.features.length > 0) {
        const hasAllFeatures = filters.features.every((feature) =>
          land.features.some((landFeature) => landFeature.toLowerCase().includes(feature.toLowerCase())),
        )
        if (!hasAllFeatures) return false
      }
      return true
    })
  }, [filters])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Land Properties</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover {filteredLands.length} properties available for purchase
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
        >
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="flex items-center">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <span className="text-sm text-gray-600 dark:text-gray-300">{filteredLands.length} results</span>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant={viewMode === "grid" ? "primary" : "outline"} size="sm" onClick={() => setViewMode("grid")}>
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant={viewMode === "list" ? "primary" : "outline"} size="sm" onClick={() => setViewMode("list")}>
              <List className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="w-80 flex-shrink-0"
            >
              <FilterSidebar filters={filters} onFiltersChange={setFilters} />
            </motion.div>
          )}

          {/* Results */}
          <div className="flex-1">
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLands.map((land, index) => (
                  <motion.div
                    key={land.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <LandCard land={land} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredLands.map((land, index) => (
                  <motion.div
                    key={land.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <LandListItem land={land} />
                  </motion.div>
                ))}
              </div>
            )}

            {filteredLands.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center py-12"
              >
                <div className="text-gray-400 dark:text-gray-600 mb-4">
                  <Filter className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No properties found</h3>
                <p className="text-gray-600 dark:text-gray-300">Try adjusting your filters to see more results.</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
