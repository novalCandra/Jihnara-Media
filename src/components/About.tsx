import { motion } from 'framer-motion'

const pilar = [
  {
    icon: '🎬',
    border: 'border-brand-magenta',
    bg: 'bg-brand-magenta',
    borderB: 'border-b-3 border-brand-magenta-dark',
    title: '1. Content Creator Skills',
    color: 'text-brand-magenta',
    footerColor: 'text-brand-magenta',
    footerLabel: 'KONTEN VIRAL & RETENSI',
    desc: 'Produksi video vertikal berdaya sebar tinggi (TikTok, Reels, Shorts), visual storytelling emosional, live shopping, dan motion editing dinamis.',
  },
  {
    icon: '💻',
    border: 'border-brand-cyan',
    bg: 'bg-brand-cyan',
    borderB: 'border-b-3 border-brand-cyan-dark',
    title: '2. Layanan Digital & Agensi',
    color: 'text-brand-cyan',
    footerColor: 'text-[#008994]',
    footerLabel: 'BRANDING & WEB MODERN',
    desc: 'Transformasi identitas visual brand, UI/UX modern, pembuatan landing page konversi tinggi berbasis Tailwind, aset 3D CGI, dan kampanye iklan.',
  },
  {
    icon: '📈',
    border: 'border-brand-amber',
    bg: 'bg-brand-amber',
    borderB: 'border-b-3 border-brand-amber-dark',
    title: '3. Edukasi Marketing',
    color: 'text-brand-amber',
    footerColor: 'text-brand-amber-dark',
    footerLabel: 'WORKSHOP & MENTORING',
    desc: 'Workshop intensif Meta Ads, TikTok Ads, optimasi funnel konversi, strategi SEO lokal, hingga program inkubasi bisnis bagi tim perusahaan dan UMKM.',
  },
  {
    icon: '🎓',
    border: 'border-brand-purple',
    bg: 'bg-brand-purple',
    borderB: 'border-b-3 border-brand-purple-dark',
    title: '4. Program Magang & PKL',
    color: 'text-brand-purple',
    footerColor: 'text-brand-purple',
    footerLabel: 'VOKASI & SERTIFIKASI',
    desc: 'Penyaluran dan pembinaan siswa SMK Vokasi & mahasiswa di Jawa Timur dengan kurikulum industri nyata, bimbingan mentor 1-on-1, serta uang saku dan sertifikat resmi.',
  },
]

export default function About() {
  return (
    <section className="max-w-[1360px] mx-auto w-full px-4 md:px-8 py-20" id="edukasi">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
        <span className="px-4 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple font-mono text-xs uppercase font-black tracking-widest mb-3 border border-brand-purple/20">
          Tentang Jihnara Media & 4 Pilar
        </span>
        <h2 className="font-display font-black text-3xl sm:text-4xl text-[#111827] tracking-tight">
          Kreasi Nyata, Edukasi Berkelanjutan & Eksekusi Cepat
        </h2>
        <p className="font-body text-[#4B5563] text-base md:text-lg mt-3">
          Jihnara Media Group menyatukan keahlian kreator konten, jasa agensi digital, akademi pemasaran modern, dan wadah inkubasi magang vokasi di Jawa Timur.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pilar.map((p) => (
          <motion.div
            whileHover={{ y: -4 }}
            key={p.title}
            className={`p-6 rounded-3xl bg-white border-2 ${p.border} border-b-8 shadow-md flex flex-col justify-between hover:-translate-y-1 transition-transform`}
          >
            <div>
              <div className={`w-12 h-12 rounded-2xl ${p.bg} text-white flex items-center justify-center font-black text-xl mb-4 ${p.borderB}`}>
                {p.icon}
              </div>
              <h3 className="font-display font-black text-lg text-[#111827] mb-2">{p.title}</h3>
              <p className="font-body text-sm text-[#4B5563] leading-relaxed">{p.desc}</p>
            </div>
            <div className={`mt-6 pt-3 border-t border-[#F1F5F9] text-xs font-mono font-bold ${p.footerColor}`}>
              {p.footerLabel}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
