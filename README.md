# jCarley Cosmetics

A modern, responsive e-commerce website for jCarley Cosmetics built with Next.js 15, TypeScript, Tailwind CSS, and Supabase.

## 🎨 Features

- **Modern Design**: Beautiful, mobile-first responsive design with custom brand colors
- **Product Catalog**: Complete product browsing with filtering, search, and sorting
- **Shopping Cart**: Add to cart functionality with wishlist support
- **Contact System**: Contact form with company information and FAQ
- **SEO Optimized**: Proper metadata, Open Graph, and Twitter Card support
- **Performance**: Built with Next.js 15 and optimized for speed
- **Type Safety**: Full TypeScript support throughout the application

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom brand colors
- **UI Components**: shadcn/ui components
- **Icons**: Lucide React & Radix UI Icons
- **Backend**: Supabase (Database, Auth, Storage)
- **Fonts**: Inter (body) & Playfair Display (headings)

## 🎨 Brand Colors

- **Primary**: Pink (#FFC0CB)
- **Accent**: Gold (#FFD700)
- **Background**: White (#FFFFFF)

## 📁 Project Structure

```
jcarley-cosmetics/
├── public/              # Static assets (logo, images)
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── about/      # About page
│   │   ├── contact/    # Contact page
│   │   ├── products/   # Products page
│   │   ├── globals.css # Global styles with brand colors
│   │   ├── layout.tsx  # Root layout with fonts & metadata
│   │   └── page.tsx    # Home page
│   ├── components/     # Reusable UI components
│   │   ├── Header.tsx  # Navigation header
│   │   ├── Footer.tsx  # Site footer
│   │   ├── Layout.tsx  # Page layout wrapper
│   │   └── ProductCard.tsx # Product display component
│   └── lib/            # Utility functions & API calls
│       ├── utils.ts    # Utility functions
│       └── supabaseClient.ts # Supabase configuration
├── .env.example        # Environment variables template
├── components.json     # shadcn/ui configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- Supabase account (for backend services)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jcarley-cosmetics
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Setup (Supabase)

### Required Tables

Create these tables in your Supabase database:

```sql
-- Products table
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  image_url TEXT,
  category TEXT,
  in_stock BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Categories table
CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Cart items table
CREATE TABLE cart_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID REFERENCES products(id),
  quantity INTEGER DEFAULT 1,
  user_id UUID,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 🎨 Customization

### Brand Colors
Update the CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: #FFC0CB; /* Pink */
  --accent: #FFD700;  /* Gold */
  --background: #FFFFFF; /* White */
}
```

### Adding New Components
Use shadcn/ui to add new components:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

## 📱 Pages

- **Home** (`/`): Hero section, featured products, brand highlights
- **Products** (`/products`): Product catalog with filtering and search
- **About** (`/about`): Company story, values, team information
- **Contact** (`/contact`): Contact form, company info, FAQ

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Supabase](https://supabase.com/) - Backend as a Service
- [Lucide React](https://lucide.dev/) - Beautiful icons
- [Unsplash](https://unsplash.com/) - Stock photos for mockups

---

Built with ❤️ for jCarley Cosmetics
