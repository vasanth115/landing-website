"use client"

import { Button } from "@/components/ui/Button"

interface FilterSidebarProps {
  filters: {
    landType: string
    minPrice: string
    maxPrice: string
    minArea: string
    maxArea: string
    location: string
    features: string[]
  }
  onFiltersChange: (filters: any) => void
}

export function FilterSidebar({ filters, onFiltersChange }: FilterSidebarProps) {
  const landTypes = ["residential", "commercial", "agricultural", "industrial"]
  const commonFeatures = [
    "Utilities Available",
    "Paved Road Access",
    "Mature Trees",
    "Level Ground",
    "Water Rights",
    "Highway Access",
  ]

  const updateFilter = (key: string, value: any) => {
    onFiltersChange({ ...filters, [key]: value })
  }

  const toggleFeature = (feature: string) => {
    const updatedFeatures = filters.features.includes(feature)
      ? filters.features.filter((f) => f !== feature)
      : [...filters.features, feature]
    updateFilter("features", updatedFeatures)
  }

  const clearFilters = () => {
    onFiltersChange({
      landType: "",
      minPrice: "",
      maxPrice: "",
      minArea: "",
      maxArea: "",
      location: "",
      features: [],
    })
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Filters</h3>
        <Button variant="ghost" size="sm" onClick={clearFilters}>
          Clear All
        </Button>
      </div>

      <div className="space-y-6">
        {/* Land Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Land Type</label>
          <div className="space-y-2">
            {landTypes.map((type) => (
              <label key={type} className="flex items-center">
                <input
                  type="radio"
                  name="landType"
                  value={type}
                  checked={filters.landType === type}
                  onChange={(e) => updateFilter("landType", e.target.value)}
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300 capitalize">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Price Range</label>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              placeholder="Min Price"
              value={filters.minPrice}
              onChange={(e) => updateFilter("minPrice", e.target.value)}
              className="input-field text-sm"
            />
            <input
              type="number"
              placeholder="Max Price"
              value={filters.maxPrice}
              onChange={(e) => updateFilter("maxPrice", e.target.value)}
              className="input-field text-sm"
            />
          </div>
        </div>

        {/* Area Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Area (sq ft)</label>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              placeholder="Min Area"
              value={filters.minArea}
              onChange={(e) => updateFilter("minArea", e.target.value)}
              className="input-field text-sm"
            />
            <input
              type="number"
              placeholder="Max Area"
              value={filters.maxArea}
              onChange={(e) => updateFilter("maxArea", e.target.value)}
              className="input-field text-sm"
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Location</label>
          <input
            type="text"
            placeholder="City, State"
            value={filters.location}
            onChange={(e) => updateFilter("location", e.target.value)}
            className="input-field text-sm"
          />
        </div>

        {/* Features */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Features</label>
          <div className="space-y-2">
            {commonFeatures.map((feature) => (
              <label key={feature} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.features.includes(feature)}
                  onChange={() => toggleFeature(feature)}
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{feature}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
