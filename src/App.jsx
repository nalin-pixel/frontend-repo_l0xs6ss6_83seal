import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProductGrid from './components/ProductGrid'

function App() {
  const [category, setCategory] = useState('')

  const handleShopGothic = () => setCategory('gothic')
  const handleShopY2K = () => setCategory('y2k')

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b12] to-black text-slate-200">
      <Navbar onCategoryChange={setCategory} />
      <Hero onShopGothic={handleShopGothic} onShopY2K={handleShopY2K} />

      <section className="max-w-7xl mx-auto px-6 sm:px-8 pb-24">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">Featured {category ? `— ${category.toUpperCase()}` : ''}</h2>
            <p className="text-slate-400 text-sm">Curated pieces ready to ship</p>
          </div>
          <a href="/test" className="text-xs text-slate-400 hover:text-slate-200 underline/30">System status</a>
        </div>
        <ProductGrid activeCategory={category} />
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-slate-400/80 text-sm">
        © {new Date().getFullYear()} NOCTILUX — All rights reserved.
      </footer>
    </div>
  )
}

export default App
