import { motion } from 'framer-motion'
import LogoImage from "../../public/assets/logo.png"
const pilar = [
  { icon: 'movie', color: 'text-brand-magenta', label: '1. Keterampilan Content Creator' },
  { icon: 'web', color: 'text-brand-cyan', label: '2. Layanan Digital & Agensi' },
  { icon: 'school', color: 'text-brand-amber', label: '3. Edukasi Marketing' },
  { icon: 'work', color: 'text-brand-purple', label: '4. Program Magang & PKL' },
]

const aktivitas = [
  {
    icon: '✓',
    bg: 'bg-brand-green',
    label: 'Produksi 12 Video Pendek & Copywriting',
    tag: 'Content Lab',
    tagColor: 'bg-brand-magenta/10 text-brand-magenta',
  },
  {
    icon: '⚡',
    bg: 'bg-brand-purple',
    label: 'Desain UI/UX & Prototip Website Interaktif',
    tag: 'Digital Agensi',
    tagColor: 'bg-brand-purple/10 text-brand-purple',
  },
  {
    icon: '⚙',
    bg: 'bg-brand-amber',
    label: 'Workshop Paid Ads & Bimbingan Magang SMK',
    tag: 'Edukasi & PKL',
    tagColor: 'bg-brand-amber/10 text-brand-amber-dark',
  },
]

export default function Hero() {
  return (
    <section className="max-w-[1360px] mx-auto w-full px-4 md:px-8 pt-6 pb-16" id="beranda">
      <div className="w-full flex justify-center pt-6 pb-2 px-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8FAFC] border-2 border-[#E5E7EB] border-b-4 shadow-xs text-center">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-amber text-white text-xs font-black shadow-inner">
            ★
          </span>
          <span className="font-display font-black text-xs text-[#111827]">
            Partner Agensi Kreatif & Edukasi Digital #1 di Jawa Timur
          </span>
          <span className="text-[#9CA3AF] text-xs hidden sm:inline">•</span>
          <span className="font-mono text-xs uppercase font-extrabold tracking-wider text-brand-magenta hidden sm:inline">
            Inkubasi Talenta Vokasi 2025
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 w-fit text-[#008994] font-mono text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
            Akselerasi Brand & Talenta Kreatif Digital
          </div>
          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-[54px] lg:leading-[62px] tracking-tight text-[#111827]">
            Akselerasi{' '}
            <span className="relative inline-block px-3 py-1 text-white bg-brand-cyan rounded-2xl border-b-4 border-brand-cyan-dark shadow-sm transform -rotate-1">
              potensi kreatif
            </span> & bisnis digitalmu.
          </h1>
          <p className="font-body text-base md:text-lg text-[#4B5563] leading-relaxed max-w-xl">
            Solusi ekosistem terpadu dari Jihnara Media: Mulai dari produksi konten viral, branding modern, pelatihan marketing berorientasi hasil, hingga inkubasi program magang industri bersertifikasi di Jawa Timur.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <a
              href="#layanan"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-brand-cyan text-white font-display font-black text-sm sm:text-base border-b-4 border-brand-cyan-dark shadow-lg hover:-translate-y-0.5 active:translate-y-1 active:border-b-0 transition-all uppercase tracking-wide"
            >
              <span>Eksplorasi Layanan</span>
              <span className="material-symbols-outlined text-lg">bolt</span>
            </a>
            <a
              href="#magang"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#F8FAFC] text-[#111827] font-display font-black text-sm border-2 border-[#E5E7EB] border-b-4 hover:border-brand-magenta hover:text-brand-magenta transition-all"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse" />
              <span>Daftar Magang Q3 Terbuka</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3 pt-3 text-[#4B5563] text-xs font-extrabold uppercase">
            {pilar.map((p) => (
              <div
                key={p.label}
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] border-b-2 shadow-xs"
              >
                <span className={`material-symbols-outlined ${p.color} text-lg font-black`}>
                  {p.icon}
                </span>
                <span>{p.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative bg-white rounded-3xl p-6 md:p-8 border-2 border-[#E5E7EB] border-b-8 shadow-xl">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b-2 border-[#F1F5F9]">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-brand-cyan/20 to-brand-magenta/20 p-1 border-2 border-brand-cyan shadow-md flex-shrink-0">
                <img
                  alt="Maskot Robot Jihn-E"
                  className="w-full h-full object-cover rounded-xl"
                  src={LogoImage}
                />
                <span className="absolute -bottom-2 -right-2 bg-brand-magenta text-white font-mono text-[9px] px-2 py-0.5 rounded-full font-black uppercase shadow">
                  Studio AI
                </span>
              </div>
              <div className="relative bg-[#F8FAFC] rounded-2xl p-4 border border-[#E5E7EB] border-b-4 flex-1">
                <div className="font-display font-black text-xs text-[#008994] uppercase tracking-wide flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">waving_hand</span> Robot Jihn-E Berkata:
                </div>
                <p className="font-body text-sm font-bold text-[#1F2937] mt-1">
                  "Siap memproduksi konten viral, mendesain website modern, dan membimbing adik-adik magang hari ini!"
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#E6F9FB] border-2 border-brand-cyan/30 mb-4">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-brand-cyan text-xl font-bold">auto_awesome</span>
                <span className="font-display font-bold text-sm text-[#005a61]">
                  Sprint 04: Kampanye Video TikTok & Reels
                </span>
              </div>
              <span className="px-3 py-1 rounded-full bg-brand-cyan text-white font-mono text-xs font-black">
                SEDANG AKTIF
              </span>
            </div>
            <div className="space-y-3">
              {aktivitas.map((a) => (
                <div
                  key={a.label}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white border-2 border-[#E5E7EB] border-b-4 hover:border-brand-magenta transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-lg ${a.bg} text-white flex items-center justify-center font-bold text-xs`}>
                      {a.icon}
                    </div>
                    <span className="font-body font-bold text-sm text-[#111827]">{a.label}</span>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-lg ${a.tagColor} font-mono text-[11px] font-bold`}>
                    {a.tag}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t-2 border-[#F1F5F9] flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#6B7280]">
                <span>TARGET SPRINT BULANAN</span>
                <span className="text-brand-green font-black">940 / 1000 XP</span>
              </div>
              <div className="w-1/2 h-3.5 rounded-full bg-[#E5E7EB] overflow-hidden p-0.5">
                <div className="h-full rounded-full bg-brand-green border-b border-brand-green-dark" style={{ width: '94%' }} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
