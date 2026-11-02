const data = [
  {
    tag: 'Magang (PKL)',
    tagColor: 'bg-brand-cyan/15 text-[#008994]',
    school: 'SMK Telkom Malang',
    schoolColor: 'text-[#6B7280]',
    text: 'Magang di Jihnara Media membuka wawasan saya tentang <strong className="text-[#111827]">standar industri desain UI/UX dan frontend</strong>. Mentornya sangat suportif dan bimbingannya mendalam!',
    avatar: 'NA',
    avatarBg: 'bg-brand-cyan',
    name: 'Nabila Ayuningtyas',
    role: 'Intern UI/UX • RPL Moklet',
    roleColor: 'text-[#008994]',
    border: 'border-brand-cyan',
  },
  {
    tag: 'Mitra Klien',
    tagColor: 'bg-brand-magenta/15 text-brand-magenta',
    school: 'NusaCloud Surabaya',
    schoolColor: 'text-[#6B7280]',
    text: 'Jihnara membantu startup kami di Surabaya melakukan <strong className="text-[#111827]">rebranding dan kampanye TikTok viral</strong>. Jumlah pendaftaran pengguna naik 3x lipat dalam sebulan!',
    avatar: 'RD',
    avatarBg: 'bg-brand-magenta',
    name: 'Reza Dananjaya',
    role: 'Founder, NusaCloud Surabaya',
    roleColor: 'text-[#6B7280]',
    border: 'border-[#E5E7EB]',
    verified: true,
  },
  {
    tag: 'Magang (PKL)',
    tagColor: 'bg-brand-purple/15 text-brand-purple',
    school: 'SMKN 4 Malang',
    schoolColor: 'text-[#6B7280]',
    text: 'Pengalaman nyata <strong className="text-[#111827]">mengerjakan 3D modelling karakter dan animasi promosi</strong> untuk produk komersial. Portofolio saya langsung diakui saat lulus!',
    avatar: 'FB',
    avatarBg: 'bg-brand-purple',
    name: 'Fajar Bagaskara',
    role: 'Intern Animasi 3D • SMKN 4',
    roleColor: 'text-brand-purple',
    border: 'border-brand-purple',
  },
  {
    tag: 'Klien E-Commerce',
    tagColor: 'bg-brand-cyan/15 text-[#008994]',
    school: 'Sidoarjo',
    schoolColor: 'text-[#6B7280]',
    text: 'Optimasi strategi video pendek dan iklan dari tim Jihnara <strong className="text-[#111827]">meningkatkan transaksi penjualan toko online kami 45%</strong>. Sangat solutif dan responsif!',
    avatar: 'ML',
    avatarBg: 'bg-brand-cyan',
    name: 'Maya Lestari',
    role: 'Head of Marketing, Sidoarjo',
    roleColor: 'text-[#6B7280]',
    border: 'border-[#E5E7EB]',
    verified: true,
  },
  {
    tag: 'Magang Mahasiswa',
    tagColor: 'bg-brand-cyan/15 text-[#008994]',
    school: 'ITS Surabaya',
    schoolColor: 'text-[#6B7280]',
    text: 'Budaya kerja yang agile, <strong className="text-[#111827]">sprint mingguan dengan sistem gamifikasi XP</strong> membuat pembelajaran teknologi web dan desain antarmuka berlangsung cepat.',
    avatar: 'DS',
    avatarBg: 'bg-brand-cyan',
    name: 'Dimas Saputra',
    role: 'Intern Web Dev • DKV ITS',
    roleColor: 'text-[#008994]',
    border: 'border-brand-cyan',
  },
  {
    tag: 'Magang (PKL)',
    tagColor: 'bg-brand-magenta/15 text-brand-magenta',
    school: 'SMKN 1 Surabaya',
    schoolColor: 'text-[#6B7280]',
    text: 'Diajari langsung cara memproduksi feed visual profesional, video singkat produk, dan <strong className="text-[#111827]">copywriting persuasif yang memicu interaksi</strong>.',
    avatar: 'TI',
    avatarBg: 'bg-brand-magenta',
    name: 'Tiara Indah',
    role: 'Intern Desain • SMKN 1 Sby',
    roleColor: 'text-brand-magenta',
    border: 'border-brand-magenta',
  },
  {
    tag: 'Peserta Workshop',
    tagColor: 'bg-brand-amber/15 text-brand-amber-dark',
    school: 'Owner F&B, Sidoarjo',
    schoolColor: 'text-[#6B7280]',
    text: 'Pelatihan Edukasi Marketing Jihnara mengajarkan struktur iklan TikTok Ads yang profitable secara <strong className="text-[#111827]">praktis dan to-the-point tanpa teori berbelit-belit</strong>!',
    avatar: 'BP',
    avatarBg: 'bg-brand-amber',
    name: 'Bram Prasetyo',
    role: 'Owner F&B, Sidoarjo',
    roleColor: 'text-[#6B7280]',
    border: 'border-brand-amber',
    verified: true,
  },
  {
    tag: 'Magang (PKL)',
    tagColor: 'bg-brand-amber/15 text-brand-amber-dark',
    school: 'SMKN 2 Buduran',
    schoolColor: 'text-[#6B7280]',
    text: 'Suasana kantornya super seru! Diajari live streaming e-commerce dan riset tren. <strong className="text-[#111827]">Pulang magang dapat uang saku plus sertifikat industri resmi!</strong>',
    avatar: 'AD',
    avatarBg: 'bg-brand-amber',
    name: 'Aldo Pratama',
    role: 'Intern Bisnis Digital • Buduran',
    roleColor: 'text-brand-amber-dark',
    border: 'border-brand-amber',
  },
]

export default function Testimonials() {
  return (
    <section className="max-w-[1360px] mx-auto w-full px-4 sm:px-6 md:px-8 py-16 sm:py-20" id="ulasan">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <span className="px-4 sm:px-4 py-1 sm:py-1.5 rounded-full bg-brand-cyan/10 text-[#008994] font-mono text-[10px] sm:text-xs uppercase font-black tracking-widest mb-2 sm:mb-3 border border-brand-cyan/20">
          Suara Komunitas Jihnara
        </span>
        <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#111827] tracking-tight leading-[1.15]">
          Cerita Nyata Klien & Siswa Magang
        </h2>
        <p className="font-body text-sm sm:text-base md:text-lg text-[#4B5563] mt-2 sm:mt-2 leading-relaxed">
          Pengalaman langsung dari pemilik usaha, siswa SMK berprestasi, dan mahasiswa yang bertumbuh bersama kami.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {data.map((d) => (
          <div
            key={d.name}
            className={`p-4 sm:p-6 rounded-3xl bg-white border-2 ${d.border} border-b-6 shadow-md flex flex-col justify-between hover:-translate-y-1 transition-transform`}
          >
            <div>
              <div className="flex items-center justify-between pb-2 sm:pb-3">
                <span className={`px-2 sm:px-2.5 py-0.5 sm:py-0.5 rounded-md ${d.tagColor} font-mono text-[9px] sm:text-[10px] font-black uppercase`}>
                  {d.tag}
                </span>
                <span className={`text-[9px] sm:text-[11px] font-mono ${d.schoolColor} font-bold`}>{d.school}</span>
                {d.verified && <span className="material-symbols-outlined text-brand-magenta text-[12px] sm:text-base font-black">verified</span>}
              </div>
              <p className="font-body text-[10px] sm:text-sm text-[#4B5563] leading-relaxed" dangerouslySetInnerHTML={{ __html: d.text }}></p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-[#F1F5F9] mt-3 sm:mt-4">
              <div className={`w-6 sm:w-8 h-6 sm:h-8 rounded-xl ${d.avatarBg} text-white flex items-center justify-center font-black text-[9px] sm:text-xs`}>
                {d.avatar}
              </div>
              <div>
                <div className="font-display font-bold text-[10px] sm:text-xs text-[#111827] leading-none">{d.name}</div>
                <div className={`text-[8px] sm:text-[10px] font-mono ${d.roleColor}`}>{d.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
