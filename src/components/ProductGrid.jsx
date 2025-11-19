import { useEffect, useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function ProductCard({ item }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-slate-900/40 p-4 backdrop-blur hover:border-fuchsia-400/40 transition">
      <div className="aspect-square overflow-hidden rounded-xl bg-black/40">
        {item.image ? (
          <img src={item.image} alt={item.title} className="h-full w-full object-cover group-hover:scale-105 transition" />
        ) : (
          <div className="h-full w-full grid place-items-center text-slate-500">No image</div>
        )}
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <h3 className="text-white font-semibold tracking-tight">{item.title}</h3>
          <p className="text-xs text-slate-400 capitalize">{item.category}</p>
        </div>
        <div className="text-fuchsia-300 font-bold">${item.price}</div>
      </div>
      <button className="mt-3 w-full rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 py-2 text-white hover:opacity-90">Add to cart</button>
    </div>
  )
}

function ProductGrid({ activeCategory }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchItems = async () => {
    setLoading(true)
    try {
      const url = new URL(baseUrl + '/products')
      if (activeCategory) url.searchParams.set('category', activeCategory)
      const res = await fetch(url)
      const data = await res.json()
      setItems(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchItems()
  }, [activeCategory])

  if (loading) return <div className="text-slate-300">Loading products...</div>

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(item => <ProductCard key={item.id || item._id} item={item} />)}
    </div>
  )
}

export default ProductGrid
