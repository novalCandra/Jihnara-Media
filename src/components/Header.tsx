import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import LogoImage from "../../public/assets/logo.png"
const links = [
  { href: '#beranda', label: 'Beranda' },
  { href: '#layanan', label: 'Layanan' },
  { href: '#edukasi', label: 'Edukasi' },
  { href: '#hubs', label: 'Hub Jatim' },
  { href: '#magang', label: 'Program Magang', badge: 'Aktif' },
  { href: '#biaya', label: 'Paket Biaya' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-sm">
      <div className="max-w-[1360px] mx-auto px-6 md:px-8 h-20 flex items-center justify-between gap-8">
        <a href="#beranda" className="flex items-center gap-3 group flex-shrink-0">
          <div>
            <img src={LogoImage} alt="logo" className='w-10 h-10 md:h-14 md:w-14 lg:w-18 lg:h-18 ' />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-xl tracking-tight text-[#111827] group-hover:text-[#008994] transition-colors leading-none">
              JIHNARA
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest font-extrabold text-[#6B7280] mt-1">
              MEDIA GROUP
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-display font-bold text-sm transition-colors ${link.badge
                ? 'text-[#4B5563] hover:text-[#111827] inline-flex items-center gap-1.5'
                : 'text-[#4B5563] hover:text-[#111827]'
                }`}
            >
              {link.label}
              {link.badge && (
                <span className="px-2 py-0.5 rounded-full bg-brand-cyan/15 text-[#008994] font-mono text-[10px] font-black uppercase">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 flex-shrink-0">
          <a
            href="#layanan"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-brand-magenta text-white font-display font-bold text-sm border-b-4 border-brand-magenta-dark hover:-translate-y-0.5 active:translate-y-1 active:border-b-0 transition-all uppercase tracking-wide"
          >
            Mulai Sekarang
            <span className="material-symbols-outlined text-lg">rocket_launch</span>
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-xl bg-[#F8FAFC] text-[#111827]"
            aria-label="Buka menu"
          >
            <span className="material-symbols-outlined text-xl">menu</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: 500 }}
            exit={{ opacity: 0, maxHeight: 0 }}
            className="lg:hidden bg-white border-b border-[#E5E7EB] overflow-hidden"
            layout
          >
            <div className="px-6 py-4 space-y-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-2xl font-display font-bold text-sm transition-colors text-[#4B5563] hover:bg-[#F8FAFC] hover:text-[#111827]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#layanan"
                className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-brand-magenta text-white font-display font-bold text-sm border-b-4 border-brand-magenta-dark uppercase tracking-wide w-full"
              >
                Mulai Sekarang
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
