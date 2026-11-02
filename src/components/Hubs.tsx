export default function Hubs() {
  const points = [
    {
      left: '47%',
      top: '34%',
      color: 'bg-brand-cyan',
      colorText: 'text-brand-cyan',
      title: 'Surabaya HQ',
      sub: 'Hub Utama & UI/UX',
      border: 'border-brand-cyan',
    },
    {
      left: '50%',
      top: '52%',
      color: 'bg-brand-magenta',
      colorText: 'text-brand-magenta',
      title: 'Sidoarjo Studio',
      sub: 'Content Lab',
      border: 'border-brand-magenta',
    },
    {
      left: '44%',
      top: '68%',
      color: 'bg-brand-purple',
      colorText: 'text-brand-purple',
      title: 'Malang Lab',
      sub: '3D & Animasi',
      border: 'border-brand-purple',
    },
    {
      left: '84%',
      top: '62%',
      color: 'bg-brand-amber',
      colorText: 'text-brand-amber-dark',
      title: 'Banyuwangi',
      sub: 'Komunitas Kreatif',
      border: 'border-brand-amber',
    },
  ]

  const hubs = [
    {
      name: 'Surabaya HQ',
      tag: 'Hub Utama',
      tagColor: 'bg-[#58CC02]/15 text-[#46a302]',
      focus: 'Desain UI/UX, Website Modern, & Strategi Kampanye Agensi',
      border: 'hover:border-brand-cyan',
    },
    {
      name: 'Malang Lab',
      tag: 'Studio 3D',
      tagColor: 'bg-[#58CC02]/15 text-[#46a302]',
      focus: 'Animasi 3D CGI, Modelling Produk, & Rendering Komersial',
      border: 'hover:border-brand-purple',
    },
    {
      name: 'Sidoarjo Studio',
      tag: 'Konten Lab',
      tagColor: 'bg-[#58CC02]/15 text-[#46a302]',
      focus: 'Video TikTok, Reels, Live Commerce, & Copywriting',
      border: 'hover:border-brand-magenta',
    },
    {
      name: 'Banyuwangi Hub',
      tag: 'Komunitas',
      tagColor: 'bg-[#58CC02]/15 text-[#46a302]',
      focus: 'Komunitas Konten Kreator, Wisata Digital & Brand Lokal',
      border: 'hover:border-brand-amber',
    },
  ]

  const mitra = [
    {
      tag: 'Mitra Animasi 3D',
      tagColor: 'bg-[#8B35D8]/15 text-[#8B35D8]',
      name: 'SMK Negeri 4 Malang',
      konsentrasi: 'Konsentrasi: Animasi 3D & DKV',
      desc: 'Penyelarasan 3D modeling di Blender, rigging karakter, dan pengerjaan aset komersial nyata.',
      border: 'hover:border-brand-purple',
    },
    {
      tag: 'Mitra RPL & UI/UX',
      tagColor: 'bg-brand-cyan/15 text-[#008994]',
      name: 'SMK Telkom Malang (Moklet)',
      konsentrasi: 'Konsentrasi: Rekayasa Perangkat Lunak',
      desc: 'Praktik industri pengembangan web modern (React, Tailwind), UI design system, dan prototipe.',
      border: 'hover:border-brand-cyan',
    },
    {
      tag: 'Mitra Multimedia & Video',
      tagColor: 'bg-brand-magenta/15 text-brand-magenta',
      name: 'SMKN 1 Surabaya',
      konsentrasi: 'Konsentrasi: Broadcasting & Perfilman',
      desc: 'Produksi video komersial, teknik lighting studio, audio profesional, dan video editing cepat.',
      border: 'hover:border-brand-magenta',
    },
    {
      tag: 'Mitra Bisnis Digital',
      tagColor: 'bg-brand-amber/15 text-brand-amber-dark',
      name: 'SMKN 2 Buduran Sidoarjo',
      konsentrasi: 'Konsentrasi: Pemasaran & Bisnis Digital',
      desc: 'Copywriting iklan, riset tren media sosial, live streaming penjualan di platform TikTok dan Shopee.',
      border: 'hover:border-brand-amber',
    },
    {
      tag: 'Riset Teknologi Web',
      tagColor: 'bg-brand-cyan/15 text-[#008994]',
      name: 'Institut Teknologi Sepuluh Nopember (ITS)',
      konsentrasi: 'Fakultas Desain Kreatif & Informatika',
      desc: 'Riset kolaboratif dalam optimasi antarmuka UX modern, animasi canvas interaktif, dan analitik digital.',
      border: 'hover:border-brand-cyan',
    },
    {
      tag: 'Studio Inkubasi DKV',
      tagColor: 'bg-brand-purple/15 text-brand-purple',
      name: 'Universitas Negeri Malang (UM)',
      konsentrasi: 'Fakultas Sastra: Jurusan DKV & Animasi',
      desc: 'Inkubasi perancangan identitas brand, karakter maskot komersial, serta kuliah tamu praktisi.',
      border: 'hover:border-brand-purple',
    },
  ]

  return (
    <section className="max-w-[1360px] mx-auto w-full px-4 sm:px-6 md:px-8 py-16 sm:py-20" id="hubs">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <span className="px-4 sm:px-4 py-1 sm:py-1.5 rounded-full bg-brand-cyan/10 text-[#008994] font-mono text-[10px] sm:text-xs uppercase font-black tracking-widest mb-2 sm:mb-3 border border-brand-cyan/20">
          Ekosistem Kreatif Jawa Timur
        </span>
        <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#111827] tracking-tight leading-[1.15]">
          Jejaring Hub Kreatif & Aliansi Pendidikan
        </h2>
        <p className="font-body text-sm sm:text-base md:text-lg text-[#4B5563] mt-2 sm:mt-3 leading-relaxed">
          Beroperasi secara aktif di Surabaya, Malang, Sidoarjo, dan Banyuwangi untuk menjangkau klien UMKM, enterprise, serta menginkubasi talenta muda dari sekolah vokasi unggulan.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-5 sm:p-6 md:p-10 border-2 border-[#E5E7EB] border-b-8 shadow-xl mb-10 sm:mb-12">
        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl bg-[#E6F9FB]/50 border-2 border-brand-cyan/30 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(#00D9E8_1px,transparent_1px)] [background-size:20px_20px sm:24px_24px] opacity-40" />
          <svg
            className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 1000 500"
          >
            <path
              d="M 100 280 Q 250 240 380 230 T 560 210 Q 720 230 840 270 T 960 380"
              fill="none"
              stroke="#00D9E8"
              strokeLinecap="round"
              strokeWidth="32 sm:40"
            />
            <path
              d="M 420 160 Q 560 150 680 180"
              fill="none"
              stroke="#EC168F"
              strokeDasharray="10 10 sm:12 12"
              strokeWidth="18 sm:22"
            />
          </svg>
          {points.map((p) => (
            <div
              key={p.title}
              className="absolute"
              style={{ left: p.left, top: p.top }}
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute w-7 sm:w-9 h-7 sm:h-9 rounded-full bg-brand-cyan opacity-50 animate-ping" />
                <div className={`w-6 sm:w-8 h-6 sm:h-8 rounded-full ${p.color} text-white flex items-center justify-center font-black text-[10px] sm:text-sm border-2 border-white shadow-lg`}>
                  ★
                </div>
              </div>
              <div className={`absolute left-1/2 -top-8 sm:-top-10 transform -translate-x-1/2 whitespace-nowrap px-2 sm:px-3 py-0.5 sm:py-1 rounded-xl bg-white border-2 ${p.border} shadow-md text-[10px] sm:text-xs font-display font-black text-[#111827]`}>
                {p.title} <span className={`${p.colorText} font-normal`}>• {p.sub}</span>
              </div>
            </div>
          ))}
          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-white/95 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-2 rounded-2xl border border-[#E5E7EB] border-b-3 shadow-xs flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-mono font-bold text-[#4B5563]">
            <span className="flex items-center gap-1 sm:gap-1.5">
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-brand-green" /> 15+ SMK & Kampus Mitra
            </span>
            <span className="text-[#008994]">35+ Siswa Magang Aktif per Batch</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-8">
          {hubs.map((h) => (
            <div
              key={h.name}
              className={`p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border-2 border-[#E5E7EB] border-b-4 transition-all ${h.border}`}
            >
              <div className="flex items-center justify-between mb-1 sm:mb-2">
                <span className="font-display font-black text-base text-[#111827] leading-snug">{h.name}</span>
                <span className={`px-2 sm:px-2 py-0.5 sm:py-0.5 rounded-full ${h.tagColor} text-[9px] sm:text-[10px] font-mono font-black`}>{h.tag}</span>
              </div>
              <p className="text-[10px] sm:text-xs text-[#4B5563] leading-snug">Fokus: {h.focus}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-[#E5E7EB] border-b-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b-2 border-[#F1F5F9]">
          <div>
            <div className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-3 py-0.5 sm:py-1 rounded-xl bg-brand-purple/10 text-brand-purple font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1 sm:mb-2">
              <span className="material-symbols-outlined text-[12px] sm:text-sm">school</span> Aliansi Pendidikan Vokasi
            </div>
            <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl text-[#111827] leading-[1.15]">
              Sekolah Menengah Kejuruan (SMK) & Universitas Mitra
            </h3>
            <p className="font-body text-xs sm:text-sm sm:text-base text-[#4B5563] mt-1 leading-relaxed">
              Bekerja sama erat dengan institusi pendidikan terbaik di Jawa Timur untuk sinkronisasi kurikulum industri, guru tamu, dan magang bersertifikat resmi.
            </p>
          </div>
          <span className="px-3 sm:px-4 py-1 sm:py-2 rounded-2xl bg-brand-cyan/10 text-[#008994] font-display font-black text-[10px] sm:text-xs border border-brand-cyan/30 flex-shrink-0">
            ✓ Kemitraan Industri Terverifikasi
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {mitra.map((m) => (
            <div
              key={m.name}
              className={`p-4 sm:p-6 rounded-2xl bg-[#F8FAFC] border-2 border-[#E5E7EB] border-b-4 transition-all ${m.border}`}
            >
              <span className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg ${m.tagColor} font-mono text-[9px] sm:text-[11px] font-black uppercase`}>
                {m.tag}
              </span>
              <h4 className="font-display font-black text-base sm:text-lg text-[#111827] mt-2 sm:mt-3 mb-1 leading-snug">{m.name}</h4>
              <p className="text-xs sm:text-sm font-mono text-[#6B7280] mb-1 sm:mb-2">{m.konsentrasi}</p>
              <p className="font-body text-[10px] sm:text-xs sm:text-sm text-[#4B5563] leading-snug">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
