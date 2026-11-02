export default function Footer() {
  return (
    <footer className="w-full bg-[#F8FAFC] border-t-2 border-[#E5E7EB] mt-12 sm:mt-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start pb-8 sm:pb-12 border-b border-[#E5E7EB]">
          <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-2xl bg-brand-cyan border-b-3 sm:border-b-4 border-brand-cyan-dark flex items-center justify-center text-white font-bold">
                <span className="material-symbols-outlined text-[14px] sm:text-xl">bolt</span>
              </div>
              <span className="font-display font-black text-lg sm:text-xl text-[#111827] leading-none">JIHNARA MEDIA GROUP</span>
            </div>
            <p className="font-body text-xs sm:text-sm text-[#4B5563] leading-relaxed max-w-none sm:max-w-sm">
              Ekosistem terpadu konten digital, agensi kreatif, edukasi pemasaran, dan inkubasi magang vokasi yang menghubungkan talenta Jawa Timur dengan standar industri profesional.
            </p>
            <div className="flex flex-wrap items-center gap-1 sm:gap-2 pt-1 sm:pt-2">
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-xl bg-white border border-[#E5E7EB] text-[9px] sm:text-xs font-mono font-bold text-[#008994]">Surabaya</span>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-xl bg-white border border-[#E5E7EB] text-[9px] sm:text-xs font-mono font-bold text-brand-purple">Malang</span>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-xl bg-white border border-[#E5E7EB] text-[9px] sm:text-xs font-mono font-bold text-brand-magenta">Sidoarjo</span>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-xl bg-white border border-[#E5E7EB] text-[9px] sm:text-xs font-mono font-bold text-brand-amber">Banyuwangi</span>
            </div>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex flex-col gap-2 sm:gap-2.5">
              <span className="font-mono text-[9px] sm:text-xs uppercase font-black text-[#008994]">4 Pilar Layanan</span>
              <a href="#layanan" className="text-sm font-bold text-[#4B5563] hover:text-[#111827] leading-none">Content Creator Skills</a>
              <a href="#layanan" className="text-sm font-bold text-[#4B5563] hover:text-[#111827] leading-none">Layanan Digital & Web</a>
              <a href="#edukasi" className="text-sm font-bold text-[#4B5563] hover:text-[#111827] leading-none">Edukasi Marketing</a>
              <a href="#magang" className="text-sm font-bold text-[#4B5563] hover:text-[#111827] leading-none">Program Magang & PKL</a>
            </div>
            <div className="flex flex-col gap-2 sm:gap-2.5">
              <span className="font-mono text-[9px] sm:text-xs uppercase font-black text-brand-magenta">Jejaring Jawa Timur</span>
              <a href="#hubs" className="text-sm font-bold text-[#4B5563] hover:text-[#111827] leading-none">Surabaya HQ</a>
              <a href="#hubs" className="text-sm font-bold text-[#4B5563] hover:text-[#111827] leading-none">Malang 3D Lab</a>
              <a href="#hubs" className="text-sm font-bold text-[#4B5563] hover:text-[#111827] leading-none">Sidoarjo Studio</a>
              <a href="#hubs" className="text-sm font-bold text-[#4B5563] hover:text-[#111827] leading-none">SMK & Kampus Mitra</a>
            </div>
            <div className="flex flex-col gap-2 sm:gap-2.5">
              <span className="font-mono text-[9px] sm:text-xs uppercase font-black text-brand-purple">Dukungan & Legal</span>
              <a href="#kontak" className="text-sm font-bold text-[#4B5563] hover:text-[#111827] leading-none">Konsultasi Kemitraan</a>
              <a href="#magang" className="text-sm font-bold text-[#4B5563] hover:text-[#111827] leading-none">Syarat Magang Siswa</a>
              <a href="#" className="text-sm font-bold text-[#4B5563] hover:text-[#111827] leading-none">Kebijakan Privasi</a>
              <a href="#" className="text-sm font-bold text-[#4B5563] hover:text-[#111827] leading-none">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-[9px] sm:text-xs font-mono text-[#6B7280]">
          <div className="text-center sm:text-left">© 2025 Jihnara Media Group Inc. Seluruh hak cipta dilindungi.</div>
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-green"></span>
            <span>Status Sistem: Operasional Normal (Surabaya & Malang Hub Aktif)</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
