import { createClient } from '@supabase/supabase-js'

// Supabase configuration for jCarley Cosmetics
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Create Supabase client for client-side operations
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types for jCarley Cosmetics
export interface Product {
  id: string
  name: string
  description: string
  price: number
  image_url: string
  category: string
  in_stock: boolean
  created_at: string
  updated_at: string
}

export interface Category {
  id: string
  name: string
  description: string
  image_url?: string
  created_at: string
}

export interface CartItem {
  id: string
  product_id: string
  quantity: number
  user_id?: string
  created_at: string
}

// Helper functions for common operations
export const getProducts = async () => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('in_stock', true)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching products:', error)
    return []
  }

  return data as Product[]
}

export const getProductById = async (id: string) => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching product:', error)
    return null
  }

  return data as Product
}

export const getCategories = async () => {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name')

  if (error) {
    console.error('Error fetching categories:', error)
    return []
  }

  return data as Category[]
}
