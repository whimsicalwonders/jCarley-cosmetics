import Image from 'next/image'
import { Heart, Award, Users, Globe } from 'lucide-react'
import Layout from '@/components/Layout'

/**
 * About page for jCarley Cosmetics
 * Features: Company story, values, team, mission
 */
export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Beauty',
      description: 'We believe everyone deserves to feel beautiful and confident in their own skin.',
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Every product is carefully crafted with premium ingredients and rigorous testing.',
    },
    {
      icon: Users,
      title: 'Inclusive Beauty',
      description: 'Our products are designed for all skin tones, types, and beauty preferences.',
    },
    {
      icon: Globe,
      title: 'Sustainable Practices',
      description: 'We are committed to eco-friendly packaging and cruelty-free formulations.',
    },
  ]

  const team = [
    {
      name: 'jCarley',
      bio: 'With over 15 years in the beauty industry, jCarley founded jCarley Cosmetics to create inclusive, high-quality products.',

                jCarley Cosmetics was founded in 2009 by jCarley, a passionate 
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop',
      bio: 'With over 15 years in the beauty industry, Carley founded jCarley Cosmetics to create inclusive, high-quality products.',
    },
    {
      name: 'Sarah Chen',
      role: 'Head of Product Development',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      bio: 'Sarah leads our product development team, ensuring every formula meets our high standards for quality and safety.',
    },
    {
      name: 'Maria Rodriguez',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop',
      bio: 'Maria brings our brand vision to life through stunning visuals and innovative product design.',
    },
  ]

  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '200+', label: 'Products' },
    { number: '15', label: 'Years Experience' },
    { number: '98%', label: 'Customer Satisfaction' },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 to-pink-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About
                <span className="block bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                  jCarley Cosmetics
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Born from a passion for beauty and a commitment to inclusivity, 
                jCarley Cosmetics has been empowering people to express their 
                unique beauty since 2009.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-pink-600">
                  <Heart className="h-5 w-5 mr-2" />
                  <span className="font-medium">Cruelty-Free</span>
                </div>
                <div className="flex items-center text-pink-600">
                  <Award className="h-5 w-5 mr-2" />
                  <span className="font-medium">Premium Quality</span>
                </div>
                <div className="flex items-center text-pink-600">
                  <Users className="h-5 w-5 mr-2" />
                  <span className="font-medium">Inclusive Beauty</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=600&fit=crop"
                  alt="jCarley Cosmetics team"
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                jCarley Cosmetics was founded in 2009 by Carley Johnson, a passionate 
                makeup artist who noticed a gap in the market for high-quality, 
                inclusive cosmetics that celebrated all forms of beauty.
              </p>
              <p>
                What started as a small collection of lipsticks has grown into a 
                comprehensive beauty brand with over 200 products, serving customers 
                in more than 30 countries worldwide.
              </p>
              <p>
                Today, we continue to innovate and expand our product line while 
                staying true to our core values: quality, inclusivity, and 
                empowering everyone to feel beautiful in their own skin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The passionate people behind jCarley Cosmetics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-pink-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-pink-100 leading-relaxed">
            To create premium, inclusive cosmetics that empower people to express 
            their unique beauty while maintaining the highest standards of quality, 
            sustainability, and ethical practices.
          </p>
        </div>
      </section>
    </Layout>
  )
}
