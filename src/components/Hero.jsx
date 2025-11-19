import { motion } from 'framer-motion'

function Hero({ onShopGothic, onShopY2K }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-fuchsia-600/30 to-purple-600/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-slate-800/60 to-black/60 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.06),transparent_50%)]"/>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-24 pb-16 sm:pt-28 sm:pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300"
          >
            Gothic & Y2K Jewellery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
            className="mt-5 text-lg sm:text-xl text-slate-300/80 max-w-xl"
          >
            Handpicked pieces with edge and nostalgia. Sterling silver ravens, chrome hearts, pastel stars — built to shine under neon and moonlight alike.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button onClick={onShopGothic} className="px-6 py-3 rounded-xl bg-slate-900/80 border border-slate-700/60 text-white hover:border-fuchsia-400/60 hover:shadow-[0_0_30px_rgba(217,70,239,0.25)] transition">
              Shop Gothic
            </button>
            <button onClick={onShopY2K} className="px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white shadow-lg shadow-fuchsia-600/20 hover:shadow-fuchsia-600/30 transition">
              Shop Y2K
            </button>
          </motion.div>

          <div className="mt-6 flex items-center gap-6 text-slate-300/70 text-sm">
            <div className="flex items-center gap-2"><span className="i-lucide-star"/> Hypoallergenic</div>
            <div className="flex items-center gap-2"><span className="i-lucide-shield"/> 1-year warranty</div>
            <div className="flex items-center gap-2"><span className="i-lucide-truck"/> Free shipping $50+</div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="group relative mx-auto aspect-square w-full max-w-[520px] rounded-[28px] bg-gradient-to-b from-slate-900/60 to-black/60 border border-white/10 backdrop-blur-xl p-6">
            <div className="absolute inset-0 rounded-[28px] pointer-events-none shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_40px_120px_-35px_rgba(168,85,247,0.35)]"/>
            <motion.div 
              className="h-full w-full rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.25),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.25),transparent_35%)] flex items-center justify-center"
              whileHover={{ rotateX: 6, rotateY: -6 }}
              transition={{ type: 'spring', stiffness: 120, damping: 12 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1612277791330-05e6ce3d88a0?q=80&w=1200&auto=format&fit=crop"
                alt="Jewellery showcase"
                className="w-[85%] rounded-2xl shadow-2xl"
                style={{ transform: 'translateZ(22px)' }}
                whileHover={{ scale: 1.02 }}
              />
            </motion.div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-black/70 border border-white/10 text-slate-200 text-xs tracking-wide">
              3D hover — move your cursor
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
