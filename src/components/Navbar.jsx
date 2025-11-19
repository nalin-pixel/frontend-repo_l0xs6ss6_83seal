import { useState } from 'react'

function Navbar({ onCategoryChange }) {
  const [active, setActive] = useState('')

  const setCat = (cat) => {
    setActive(cat)
    onCategoryChange?.(cat)
  }

  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-black/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <a href="/" className="text-white font-black tracking-widest text-lg">NOCTI<span className="text-fuchsia-500">LUX</span></a>
        <nav className="flex items-center gap-2 text-sm">
          <button onClick={() => setCat('')} className={`px-3 py-1.5 rounded-md border ${active===''? 'border-fuchsia-400/50 text-white' : 'border-white/10 text-slate-300'} bg-black/40 hover:border-fuchsia-400/40`}>All</button>
          <button onClick={() => setCat('gothic')} className={`px-3 py-1.5 rounded-md border ${active==='gothic'? 'border-fuchsia-400/50 text-white' : 'border-white/10 text-slate-300'} bg-black/40 hover:border-fuchsia-400/40`}>Gothic</button>
          <button onClick={() => setCat('y2k')} className={`px-3 py-1.5 rounded-md border ${active==='y2k'? 'border-fuchsia-400/50 text-white' : 'border-white/10 text-slate-300'} bg-black/40 hover:border-fuchsia-400/40`}>Y2K</button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
