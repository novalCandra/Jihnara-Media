export default function Ribbon() {
  const ribbon1 = [
    '★ Produksi Konten Viral TikTok & Reels',
    'Storytelling Visual',
    '★ Layanan Desain UI/UX & Web Modern',
    'Sprint 48 Jam',
    '★ Live Streaming Commerce & Iklan Berbayar',
  ]
  const ribbon2 = [
    '✦ Kelas & Workshop Digital Marketing',
    'Mentoring Praktisi',
    '✦ Program Magang & PKL Vokasi Jatim',
    'Bimbingan 1-on-1',
    '✦ Hub: Surabaya • Malang • Sidoarjo • Banyuwangi',
  ]

  return (
    <div className="w-full flex flex-col gap-1 sm:gap-1.5 overflow-hidden py-1 sm:py-2 select-none">
      <div className="w-full bg-brand-magenta text-white py-2 sm:py-2.5 border-y-2 border-brand-magenta-dark shadow-xs">
        <div className="flex whitespace-nowrap items-center gap-6 sm:gap-8 justify-around font-display font-black text-xs sm:text-sm uppercase tracking-wider" style={{ animation: 'marquee 14s linear infinite' }}>
          {ribbon1.map((item, i) => (
            <span key={i} className="flex items-center gap-1 sm:gap-2">
              {item}
            </span>
          ))}
          {ribbon1.map((item, i) => (
            <span key={i + 'b'} className="flex items-center gap-1 sm:gap-2">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="w-full bg-brand-cyan text-[#004f55] py-2 sm:py-2.5 border-y-2 border-brand-cyan-dark shadow-xs">
        <div className="flex whitespace-nowrap items-center gap-6 sm:gap-8 justify-around font-display font-black text-xs sm:text-sm uppercase tracking-wider" style={{ animation: 'marquee 14s linear infinite' }}>
          {ribbon2.map((item, i) => (
            <span key={i} className="flex items-center gap-1 sm:gap-2">
              {item}
            </span>
          ))}
          {ribbon2.map((item, i) => (
            <span key={i + 'b'} className="flex items-center gap-1 sm:gap-2">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
