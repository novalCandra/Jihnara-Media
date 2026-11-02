const keunggulan = [
  {
    color: 'bg-brand-cyan/15 text-brand-cyan',
    icon: 'supervisor_account',
    title: 'Mentor Industri 1-on-1',
    sub: 'Bimbingan harian intensif',
  },
  {
    color: 'bg-brand-magenta/15 text-brand-magenta',
    icon: 'payments',
    title: 'Uang Saku Bulanan',
    sub: 'Dukungan transportasi & makan',
  },
  {
    color: 'bg-brand-purple/15 text-brand-purple',
    icon: 'military_tech',
    title: 'Sertifikat Industri',
    sub: 'Akreditasi resmi portofolio',
  },
  {
    color: 'bg-brand-green/15 text-[#46a302]',
    icon: 'rocket_launch',
    title: 'Jalur Rekrutmen Cepat',
    sub: 'Peluang langsung kerja tetap',
  },
]

const posisi = [
  {
    badge: 'Paling Diminati',
    badgeColor: 'bg-brand-magenta text-white',
    iconColor: 'bg-brand-magenta text-white border-b-3 border-brand-magenta-dark',
    icon: 'movie_filter',
    title: 'Magang Content Creator & Video Editor',
    loc: 'Surabaya / Sidoarjo / Hybrid',
    locColor: 'text-brand-magenta',
    batch: 'Batch Q3 (3-6 Bulan)',
    desc: 'Memproduksi konten video pendek untuk TikTok & Reels, shooting video produk, editing kreatif di CapCut/Premiere, dan riset audio yang sedang viral.',
    tool: 'CapCut Desktop, Premiere Pro, Kamera Smartphone',
    toolColor: 'text-brand-magenta',
    benefit: 'Uang saku bulanan + Studio podcast/shooting + Sertifikat',
    kuota: '4 Kursi',
    kuotaColor: 'text-brand-magenta',
    btn: 'Daftar Magang Konten',
    btnBg: 'bg-brand-magenta',
    btnBorder: 'border-b-4 border-brand-magenta-dark',
  },
  {
    badge: 'Desain Antarmuka',
    badgeColor: 'bg-brand-cyan text-[#004f55]',
    iconColor: 'bg-brand-cyan text-white border-b-3 border-brand-cyan-dark',
    icon: 'draw',
    title: 'Magang Desain Grafis & UI/UX',
    loc: 'Surabaya HQ / Hybrid',
    locColor: 'text-[#008994]',
    batch: 'Batch Q3 (3-6 Bulan)',
    desc: 'Merancang antarmuka aplikasi dan web modern, menyusun design system di Figma, membuat visual feed media sosial, serta prototipe interaktif.',
    tool: 'Figma, Adobe Illustrator, Photoshop',
    toolColor: 'text-brand-cyan',
    benefit: 'Uang saku + Review portofolio mingguan oleh Art Director',
    kuota: '3 Kursi',
    kuotaColor: 'text-[#008994]',
    btn: 'Daftar Magang Desain',
    btnBg: 'bg-brand-cyan',
    btnBorder: 'border-b-4 border-brand-cyan-dark',
  },
  {
    badge: 'Animasi 3D',
    badgeColor: 'bg-brand-purple text-white',
    iconColor: 'bg-brand-purple text-white border-b-3 border-brand-purple-dark',
    icon: 'view_in_ar',
    title: 'Magang 3D Motion & CGI Artist',
    loc: 'Malang Lab / Hybrid',
    locColor: 'text-brand-purple',
    batch: 'Batch Q3 (3-6 Bulan)',
    desc: 'Membantu tim 3D Jihnara dalam pembuatan aset 3D tactile, modeling kemasan produk komersial, texturing, dan animasi gerak menggunakan Blender.',
    tool: 'Blender 3D, Adobe After Effects',
    toolColor: 'text-brand-purple',
    benefit: 'Uang saku bulanan + Akses render farm studio + Sertifikat',
    kuota: '2 Kursi',
    kuotaColor: 'text-brand-purple',
    btn: 'Daftar Magang 3D',
    btnBg: 'bg-brand-purple',
    btnBorder: 'border-b-4 border-brand-purple-dark',
  },
  {
    badge: 'Growth & Ads',
    badgeColor: 'bg-brand-green text-white',
    iconColor: 'bg-brand-amber text-white border-b-3 border-brand-amber-dark',
    icon: 'campaign',
    title: 'Magang Digital Marketing & Live Host',
    loc: 'Sidoarjo / Surabaya',
    locColor: 'text-brand-amber-dark',
    batch: 'Batch Q3 (3-6 Bulan)',
    desc: 'Praktik menjalankan dashboard iklan berbayar (Meta & TikTok Ads), menganalisis metrik ROAS konten, serta memandu sesi live shopping.',
    tool: 'Riset Tren, Copywriting Iklan, Live Shopping',
    toolColor: 'text-brand-amber-dark',
    benefit: 'Uang saku + Komisi penjualan live shopping + Sertifikat',
    kuota: '3 Kursi',
    kuotaColor: 'text-brand-amber-dark',
    btn: 'Daftar Magang Marketing',
    btnBg: 'bg-brand-amber',
    btnBorder: 'border-b-4 border-brand-amber-dark',
  },
]

export default function Internship() {
  return (
    <section className="max-w-[1360px] mx-auto w-full px-4 sm:px-6 md:px-8 py-16 sm:py-20" id="magang">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-0.5 sm:py-1.5 rounded-full bg-brand-magenta/10 text-brand-magenta font-mono text-[9px] sm:text-xs uppercase font-black tracking-widest mb-2 sm:mb-3 border border-brand-magenta/20">
          ★ Inkubasi Talenta Kreatif Jawa Timur
        </div>
        <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#111827] tracking-tight leading-[1.15]">
          Program Magang & PKL Industri di Jihnara Media
        </h2>
        <p className="font-body text-sm sm:text-base md:text-lg text-[#4B5563] mt-2 sm:mt-3 leading-relaxed">
          Buka gerbang karir kreatif dan tech bersama Jihnara Media Group. Dirancang khusus untuk siswa SMK berbakat dan mahasiswa di Jawa Timur dengan bimbingan 1-on-1 mentor industri.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
        {keunggulan.map((k) => (
          <div
            key={k.title}
            className="p-3 sm:p-4 rounded-2xl bg-white border-2 border-[#E5E7EB] border-b-4 flex items-center gap-2 sm:gap-3 shadow-xs"
          >
            <div className={`w-8 sm:w-10 h-8 sm:h-10 rounded-xl ${k.color} flex items-center justify-center font-black`}>
              <span className="material-symbols-outlined text-[14px] sm:text-xl">{k.icon}</span>
            </div>
            <div className="min-w-0">
              <div className="font-display font-black text-[10px] sm:text-xs text-[#111827] leading-none">{k.title}</div>
              <div className="text-[8px] sm:text-[11px] font-mono text-[#6B7280] leading-none">{k.sub}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {posisi.map((p) => (
          <div
            key={p.title}
            className={`rounded-3xl bg-white p-5 sm:p-7 md:p-8 border-2 ${p.btnBg.includes('magenta') ? 'border-brand-magenta' : p.btnBg.includes('cyan') ? 'border-brand-cyan' : p.btnBg.includes('purple') ? 'border-brand-purple' : 'border-brand-amber'} border-b-8 shadow-xl flex flex-col justify-between hover:-translate-y-1 transition-transform relative`}
          >
            <div className="absolute -top-2 sm:-top-3 right-3 sm:right-6 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full ${p.badgeColor} text-[8px] sm:text-[10px] font-black uppercase shadow">
              {p.badge}
            </div>
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className={`w-10 sm:w-12 h-10 sm:h-12 rounded-2xl ${p.iconColor} flex items-center justify-center font-bold text-lg sm:text-xl`}>
                  <span className="material-symbols-outlined text-[20px] sm:text-2xl">{p.icon}</span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-black text-lg sm:text-xl text-[#111827] leading-snug">{p.title}</h3>
                  <div className="flex items-center gap-1 sm:gap-2 text-[9px] sm:text-xs font-mono text-[#6B7280]">
                    <span className={`${p.locColor} font-bold`}>{p.loc}</span>
                    <span>•</span>
                    <span>{p.batch}</span>
                  </div>
                </div>
              </div>
              <p className="font-body text-xs sm:text-sm text-[#4B5563] mb-3 sm:mb-4 leading-relaxed">{p.desc}</p>
              <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6 text-[9px] sm:text-xs font-bold text-[#111827]">
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className={`material-symbols-outlined ${p.toolColor} text-[12px] sm:text-base`}>check_circle</span>
                  Alat: {p.tool}
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-[#58CC02]">
                  <span className="material-symbols-outlined text-[12px] sm:text-base">paid</span>
                  {p.benefit}
                </div>
              </div>
            </div>
            <div className="pt-3 sm:pt-4 border-t border-[#F1F5F9] flex items-center justify-between gap-2 sm:gap-4">
              <span className="font-mono text-[9px] sm:text-xs font-bold text-[#6B7280]">
                Kuota: <strong className={`${p.kuotaColor}`}>{p.kuota}</strong>
              </span>
              <a
                href="#kontak"
                className={`inline-flex items-center justify-center gap-1 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl ${p.btnBg} text-white font-display font-black text-[9px] sm:text-xs ${p.btnBorder} shadow hover:-translate-y-0.5 transition-all uppercase tracking-wide leading-none`}
              >
                {p.btn}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 sm:mt-12 p-5 sm:p-8 rounded-3xl bg-[#F8FAFC] border-2 border-[#E5E7EB] border-b-6 shadow-md flex flex-col sm:flex-col md:flex-row items-center justify-between gap-3 sm:gap-6">
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-brand-green text-white flex items-center justify-center font-bold text-xl sm:text-2xl flex-shrink-0 border-b-3 sm:border-b-4 border-[#46a302]">
            🤝
          </div>
          <div className="min-w-0">
            <h4 className="font-display font-black text-base sm:text-lg text-[#111827] leading-snug">
              Pihak Sekolah (SMK) atau Perguruan Tinggi?
            </h4>
            <p className="font-body text-[9px] sm:text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              Bekerja sama dengan Jihnara Media Group untuk MoU Magang Industri, Program Guru Tamu, sinkronisasi kurikulum, atau sertifikasi keahlian siswa.
            </p>
          </div>
        </div>
        <a
          href="#kontak"
          className="whitespace-nowrap px-4 sm:px-6 py-2 sm:py-3.5 rounded-2xl bg-white text-[#111827] font-display font-extrabold text-[9px] sm:text-xs border-2 border-[#E5E7EB] border-b-4 hover:border-brand-cyan hover:text-[#008994] transition-all flex items-center gap-1 sm:gap-2 flex-shrink-0 uppercase tracking-wider leading-none"
        >
          Ajukan Kemitraan Sekolah
          <span className="material-symbols-outlined text-[12px] sm:text-sm">mail</span>
        </a>
      </div>
    </section>
  )
}
