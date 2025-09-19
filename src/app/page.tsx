import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Sparkles, Star, Users } from 'lucide-react'
import Layout from '@/components/Layout'
import ProductCard from '@/components/ProductCard'

/**
 * Home page for jCarley Cosmetics
 * Features: Hero section, featured products, brand highlights
 */
export default function Home() {
  // Mock featured products data
  const featuredProducts = [
    {
      id: '1',
      name: 'Luxury Lipstick Collection',
      price: 29.99,
      imageUrl: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop',
      description: 'Long-lasting, vibrant colors for every occasion',
      rating: 4.8,
      isNew: true,
    },
    {
      id: '2',
      name: 'Glow Foundation',
      price: 39.99,
      imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
      description: 'Lightweight foundation with natural finish',
      rating: 4.6,
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
    },
  ]

  const features = [
    {
      icon: Sparkles,
      title: 'Premium Quality',
      description: 'Only the finest ingredients for your beauty routine',
    },
    {
      icon: Star,
      title: 'Expert Formulated',
      description: 'Created by professional makeup artists',
    },
    {
      icon: Users,
      title: 'Inclusive Beauty',
      description: 'Products for every skin tone and type',
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 to-pink-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Discover Your
                <span className="block bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                  True Beauty
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Premium cosmetics crafted with love and expertise. 
                Enhance your natural beauty with our carefully curated collection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/products"
                  className="inline-flex items-center px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-3 border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=600&fit=crop"
                  alt="Beautiful makeup collection"
                  width={600}
                  height={600}
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg shadow-lg">
                <p className="font-bold text-lg">New Collection</p>
                <p className="text-sm">Spring 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular and newest additions to the jCarley collection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Beautiful
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Subscribe to our newsletter for exclusive offers, beauty tips, and new product launches
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-pink-300 focus:outline-none"
            />
            <button className="px-8 py-3 bg-white text-pink-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
