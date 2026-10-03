import { useState } from 'react'

export default function App() {
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-[#070b12] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      {/* Header */}
      <header className="border-b border-slate-800/80 bg-[#070b12]/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-bold tracking-wider text-lg uppercase bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Visual Journalism Hub
            </span>
          </div>
          <a
            href="#newsletter"
            className="text-xs font-semibold px-4 py-2 rounded-full border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-all"
          >
            Bültene Katıl
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <section className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Etkileşimli Görsel Hikayeler & Araştırmalar
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Deniz ekosistemleri, su altı canlıları ve çevre gazeteciliği üzerine hazırladığımız özel interaktif projeleri keşfedin.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Card 1: Orfoz Projesi */}
          <article className="group relative rounded-2xl bg-slate-900/50 border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
            <div className="aspect-video w-full overflow-hidden bg-slate-800">
              <img
                src="/images/orfoz.jpg"
                alt="Orfoz Projesi"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-3">
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                Deniz Koruma
              </span>
              <h2 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Orfoz: Akdeniz'in Bekçisi
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Kıyı ekosisteminin tepe avcısı Orfoz balıklarının yaşam alanları ve koruma çabaları üzerine interaktif inceleme.
              </p>
            </div>
          </article>

          {/* Card 2: Nudibranch Projesi */}
          <a
            href="https://nudibranch.vercel.app" // Vercel üzerindeki tam URL adresini buraya ekleyin
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl bg-slate-900/50 border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 block"
          >
            <div className="aspect-video w-full overflow-hidden bg-slate-800 flex items-center justify-center">
              <span className="text-slate-500 text-sm">Nudibranch Visuals</span>
            </div>
            <div className="p-6 space-y-3">
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                Tür Çeşitliliği
              </span>
              <h2 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Nudibranch Haritası ↗
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Deniz Tavşanlarının büyüleyici renkleri ve mikroskobik dünyasına odaklanan etkileşimli görsel rehber.
              </p>
            </div>
          </a>
        </section>

        {/* Beehiiv Newsletter Section */}
        <section id="newsletter" className="rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-white">Yeni Hikayeleri Kaçırmayın</h2>
          <p className="text-slate-400 text-sm">
            Yayınlayacağımız yeni görsel projeler ve Kızıldeniz araştırmalarından anında haberdar olmak için bültenimize kaydolun.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-posta adresiniz"
              className="flex-1 px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-colors"
            >
              Abone Ol
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}