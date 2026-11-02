export default function Pricing() {
  const paket = [
    {
      tag: 'UMKM & Bisnis Bertumbuh',
      tagColor: 'text-[#008994]',
      price: 'Rp 4.500.000',
      per: '/ bulan',
      btn: 'Pilih Paket Starter',
      btnBg: 'bg-[#F8FAFC]',
      btnText: 'text-[#111827]',
      btnBorder: 'border-[#E5E7EB] border-b-4',
      btnHover: 'hover:border-brand-cyan hover:text-[#008994]',
      items: [
        '12 Video Pendek Siap Tayang (TikTok/Reels)',
        'Copywriting persuasif & riset tren viral',
        'Desain visual feed & carousel edukasi',
        'Laporan analitik performa bulanan',
      ],
      footer: 'Kontrak fleksibel bulanan',
      footerColor: 'text-[#9CA3AF]',
    },
    {
      tag: 'Akselerasi Brand Skala Menengah',
      tagColor: 'text-brand-magenta',
      price: 'Rp 9.500.000',
      per: '/ bulan',
      badge: 'Paling Populer',
      btn: 'Pilih Paket Pro Growth',
      btnBg: 'bg-brand-cyan',
      btnText: 'text-white',
      btnBorder: 'border-b-4 border-brand-cyan-dark',
      btnHover: 'hover:-translate-y-0.5 active:translate-y-1 active:border-b-0',
      items: [
        '24 Video Vertikal + Sesi Shooting Studio',
        'Pengelolaan Iklan Meta Ads & TikTok Ads',
        'Redesain Landing Page Konversi Tinggi',
        'Grup Koordinasi WhatsApp Prioritas',
      ],
      footer: 'Evaluasi sprint mingguan',
      footerColor: 'text-brand-magenta font-bold',
    },
    {
      tag: 'Enterprise & Edukasi Korporasi',
      tagColor: 'text-brand-purple',
      price: 'Rp 18.000.000+',
      per: '/ proyek',
      btn: 'Konsultasi Khusus',
      btnBg: 'bg-[#F8FAFC]',
      btnText: 'text-[#111827]',
      btnBorder: 'border-[#E5E7EB] border-b-4',
      btnHover: 'hover:border-brand-purple hover:text-brand-purple',
      items: [
        'Website Komprehensif & Aset 3D Interaktif',
        'In-House Workshop Digital Marketing Karyawan',
        'Setup Studio Live Shopping & SOP Konten',
        'Penyaluran Talenta Magang Siap Kerja',
      ],
      footer: 'Perjanjian NDA & Faktur Pajak Resmi',
      footerColor: 'text-[#9CA3AF]',
    },
  ]

  return (
    <section className="max-w-[1360px] mx-auto w-full px-4 sm:px-6 md:px-8 py-16 sm:py-20" id="biaya">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <span className="px-4 sm:px-4 py-1 sm:py-1.5 rounded-full bg-brand-magenta/10 text-brand-magenta font-mono text-[10px] sm:text-xs uppercase font-black tracking-widest mb-2 sm:mb-3 border border-brand-magenta/20">
          Biaya & Investasi Layanan
        </span>
        <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#111827] tracking-tight leading-[1.15]">
          Investasi Transparan untuk Hasil Terukur
        </h2>
        <p className="font-body text-sm sm:text-base md:text-lg text-[#4B5563] mt-2 sm:mt-2 leading-relaxed">
          Pilihan paket retainer agensi kreatif dan program akselerasi bisnis yang terbukti meningkatkan omset dan reputasi.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {paket.map((p, i) => (
          <div
            key={p.tag}
            className={`rounded-3xl bg-white p-6 sm:p-8 border-2 border-[#E5E7EB] border-b-8 shadow-lg flex flex-col justify-between hover:-translate-y-1 transition-transform ${
              i === 1 ? 'border-brand-magenta border-b-8 shadow-2xl relative' : ''
            }`}
          >
            {i === 1 && (
              <div className="absolute -top-3 sm:-top-4 right-4 sm:right-6 px-3 sm:px-4 py-0.5 sm:py-1 rounded-full bg-brand-magenta text-white font-mono text-[9px] sm:text-xs font-black uppercase border-b-2 border-brand-magenta-dark shadow-md">
                {p.badge}
              </div>
            )}
            <div>
              <span className={`font-mono text-[10px] sm:text-xs uppercase font-extrabold tracking-wider ${p.tagColor}`}>
                {p.tag}
              </span>
              <div className="flex items-baseline gap-1 mt-1 sm:mt-2 mb-4 sm:mb-6">
                <span className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#111827]">{p.price}</span>
                <span className="text-[#6B7280] font-bold text-[10px] sm:text-xs">{p.per}</span>
              </div>
              <a
                href="#kontak"
                className={`w-full inline-flex items-center justify-center py-3 sm:py-3.5 rounded-2xl ${p.btnBg} ${p.btnText} font-display font-extrabold text-[10px] sm:text-sm border-2 ${p.btnBorder} shadow-md ${p.btnHover} transition-all uppercase tracking-wide leading-none`}
              >
                {p.btn}
              </a>
              <div className="mt-5 sm:mt-8 space-y-2 sm:space-y-3 font-body text-[10px] sm:text-sm text-[#4B5563] leading-relaxed">
                {p.items.map((item) => (
                  <div key={item} className="flex items-center gap-2 sm:gap-2.5">
                    <span className="material-symbols-outlined text-brand-cyan text-[14px] sm:text-base font-black">check</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`mt-5 sm:mt-8 pt-2 sm:pt-4 text-[10px] sm:text-xs font-mono font-bold text-center ${p.footerColor}`}>
              {p.footer}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
