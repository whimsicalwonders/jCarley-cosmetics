'use client'

import { useState } from 'react'
import { Filter, Grid, List, Search } from 'lucide-react'
import Layout from '@/components/Layout'
import ProductCard from '@/components/ProductCard'

/**
 * Products page for jCarley Cosmetics
 * Features: Product grid, filtering, search, sorting
 */
export default function Products() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('newest')

  // Mock products data
  const allProducts = [
    {
      id: '1',
      name: 'Luxury Lipstick Collection',
      price: 29.99,
      imageUrl: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop',
      description: 'Long-lasting, vibrant colors for every occasion',
      rating: 4.8,
      category: 'lipstick',
      isNew: true,
    },
    {
      id: '2',
      name: 'Glow Foundation',
      price: 39.99,
      imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
      description: 'Lightweight foundation with natural finish',
      rating: 4.6,
      category: 'foundation',
      isOnSale: true,
      originalPrice: 49.99,
    },
    {
      id: '3',
      name: 'Eyeshadow Palette',
      price: 24.99,
      imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop',
      description: '12 stunning shades for day and night looks',
      rating: 4.7,
      category: 'eyeshadow',
    },
    {
      id: '4',
      name: 'Mascara Pro',
      price: 19.99,
      imageUrl: 'https://images.unsplash.com/photo-1594736797933-d0c29c8b8551?w=400&h=400&fit=crop',
      description: 'Volumizing mascara for dramatic lashes',
      rating: 4.5,
      category: 'mascara',
    },
    {
      id: '5',
      name: 'Blush Duo',
      price: 22.99,
      imageUrl: 'https://images.unsplash.com/photo-1583241800029-7a2a2b0b0b0b?w=400&h=400&fit=crop',
      description: 'Natural flush with two complementary shades',
      rating: 4.4,
      category: 'blush',
    },
    {
      id: '6',
      name: 'Highlighter Stick',
      price: 26.99,
      imageUrl: 'https://images.unsplash.com/photo-1583241800029-7a2a2b0b0b0b?w=400&h=400&fit=crop',
      description: 'Creamy highlighter for that perfect glow',
      rating: 4.6,
      category: 'highlighter',
      isNew: true,
    },
  ]

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'lipstick', label: 'Lipstick' },
    { value: 'foundation', label: 'Foundation' },
    { value: 'eyeshadow', label: 'Eyeshadow' },
    { value: 'mascara', label: 'Mascara' },
    { value: 'blush', label: 'Blush' },
    { value: 'highlighter', label: 'Highlighter' },
  ]

  // Filter and search products
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      case 'newest':
      default:
        return 0 // Keep original order for newest
    }
  })

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-600">
            Discover our complete collection of premium cosmetics
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>

            {/* View Mode Toggle */}
            <div className="flex items-center justify-end">
              <div className="flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-pink-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-pink-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing {sortedProducts.length} of {allProducts.length} products
          </p>
          <button className="flex items-center text-pink-600 hover:text-pink-700">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </button>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* No Results */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
                setSortBy('newest')
              }}
              className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Load More Button */}
        {sortedProducts.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg transition-colors duration-200">
              Load More Products
            </button>
          </div>
        )}
      </div>
    </Layout>
  )
}
