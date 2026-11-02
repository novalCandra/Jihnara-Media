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
    <section className="max-w-[1360px] mx-auto w-full px-4 md:px-8 py-20" id="biaya">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
        <span className="px-4 py-1.5 rounded-full bg-brand-magenta/10 text-brand-magenta font-mono text-xs uppercase font-black tracking-widest mb-3 border border-brand-magenta/20">
          Biaya & Investasi Layanan
        </span>
        <h2 className="font-display font-black text-3xl sm:text-4xl text-[#111827] tracking-tight">
          Investasi Transparan untuk Hasil Terukur
        </h2>
        <p className="font-body text-[#4B5563] text-base md:text-lg mt-2">
          Pilihan paket retainer agensi kreatif dan program akselerasi bisnis yang terbukti meningkatkan omset dan reputasi.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {paket.map((p, i) => (
          <div
            key={p.tag}
            className={`rounded-3xl bg-white p-8 border-2 border-[#E5E7EB] border-b-8 shadow-lg flex flex-col justify-between hover:-translate-y-1 transition-transform ${
              i === 1 ? 'border-brand-magenta border-b-8 shadow-2xl relative' : ''
            }`}
          >
            {i === 1 && (
              <div className="absolute -top-4 right-6 px-4 py-1 rounded-full bg-brand-magenta text-white font-mono text-xs font-black uppercase border-b-2 border-brand-magenta-dark shadow-md">
                {p.badge}
              </div>
            )}
            <div>
              <span className={`font-mono text-xs uppercase font-extrabold tracking-wider ${p.tagColor}`}>
                {p.tag}
              </span>
              <div className="flex items-baseline gap-1 mt-2 mb-6">
                <span className="font-display font-black text-3xl sm:text-4xl text-[#111827]">{p.price}</span>
                <span className="text-[#6B7280] font-bold text-xs">{p.per}</span>
              </div>
              <a
                href="#kontak"
                className={`w-full inline-flex items-center justify-center py-3.5 rounded-2xl ${p.btnBg} ${p.btnText} font-display font-extrabold text-sm border-2 ${p.btnBorder} shadow-md ${p.btnHover} transition-all uppercase tracking-wide`}
              >
                {p.btn}
              </a>
              <div className="mt-8 space-y-3 font-body text-sm text-[#4B5563]">
                {p.items.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-brand-cyan text-base font-black">check</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`mt-8 pt-4 text-xs font-mono font-bold text-center ${p.footerColor}`}>
              {p.footer}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
