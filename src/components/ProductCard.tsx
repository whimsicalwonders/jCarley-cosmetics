'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ShoppingCart, Heart, Star } from 'lucide-react'

/**
 * ProductCard component for jCarley Cosmetics
 * Displays product information with add to cart functionality
 */
interface ProductCardProps {
  id: string
  name: string
  price: number
  imageUrl: string
  description?: string
  rating?: number
  isNew?: boolean
  isOnSale?: boolean
  originalPrice?: number
}

export default function ProductCard({
  id,
  name,
  price,
  imageUrl,
  description,
  rating = 4.5,
  isNew = false,
  isOnSale = false,
  originalPrice,
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isAddingToCart, setIsAddingToCart] = useState(false)

  const handleAddToCart = async () => {
    setIsAddingToCart(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsAddingToCart(false)
    // TODO: Implement actual cart functionality
    console.log('Added to cart:', { id, name, price })
  }

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    // TODO: Implement wishlist functionality
    console.log('Wishlist toggled:', { id, isWishlisted: !isWishlisted })
  }

  const discountPercentage = isOnSale && originalPrice 
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0

  return (
    <div className="group relative bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isNew && (
            <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              New
            </span>
          )}
          {isOnSale && (
            <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              -{discountPercentage}%
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          className="absolute top-2 right-2 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200"
          aria-label="Add to wishlist"
        >
          <Heart 
            className={`h-4 w-4 ${
              isWishlisted ? 'fill-pink-500 text-pink-500' : 'text-gray-600'
            }`} 
          />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({rating})</span>
        </div>

        {/* Product Name */}
        <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">
          {name}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {description}
          </p>
        )}

        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold text-gray-900">
              ${price.toFixed(2)}
            </span>
            {isOnSale && originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={isAddingToCart}
          className="w-full bg-pink-500 hover:bg-pink-600 disabled:bg-pink-300 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          {isAddingToCart ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>Adding...</span>
            </>
          ) : (
            <>
              <ShoppingCart className="h-4 w-4" />
              <span>Add to Cart</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}
