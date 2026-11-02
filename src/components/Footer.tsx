export default function Footer() {
  return (
    <footer className="w-full bg-[#F8FAFC] border-t-2 border-[#E5E7EB] mt-16">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12 border-b border-[#E5E7EB]">
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="font-display font-black text-lg text-[#111827]">JIHNARA MEDIA GROUP</span>
            </div>
            <p className="font-body text-sm text-[#4B5563] leading-relaxed max-w-sm">
              Ekosistem terpadu konten digital, agensi kreatif, edukasi pemasaran, dan inkubasi magang vokasi yang menghubungkan talenta Jawa Timur dengan standar industri profesional.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="px-3 py-1 rounded-xl bg-white border border-[#E5E7EB] text-xs font-mono font-bold text-[#008994]">Surabaya</span>
              <span className="px-3 py-1 rounded-xl bg-white border border-[#E5E7EB] text-xs font-mono font-bold text-brand-purple">Malang</span>
              <span className="px-3 py-1 rounded-xl bg-white border border-[#E5E7EB] text-xs font-mono font-bold text-brand-magenta">Sidoarjo</span>
              <span className="px-3 py-1 rounded-xl bg-white border border-[#E5E7EB] text-xs font-mono font-bold text-brand-amber">Banyuwangi</span>
            </div>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2.5">
              <span className="font-mono text-xs uppercase font-black text-[#008994]">4 Pilar Layanan</span>
              <a href="#layanan" className="text-sm font-bold text-[#4B5563] hover:text-[#111827]">Content Creator Skills</a>
              <a href="#layanan" className="text-sm font-bold text-[#4B5563] hover:text-[#111827]">Layanan Digital & Web</a>
              <a href="#edukasi" className="text-sm font-bold text-[#4B5563] hover:text-[#111827]">Edukasi Marketing</a>
              <a href="#magang" className="text-sm font-bold text-[#4B5563] hover:text-[#111827]">Program Magang & PKL</a>
            </div>
            <div className="flex flex-col gap-2.5">
              <span className="font-mono text-xs uppercase font-black text-brand-magenta">Jejaring Jawa Timur</span>
              <a href="#hubs" className="text-sm font-bold text-[#4B5563] hover:text-[#111827]">Surabaya HQ</a>
              <a href="#hubs" className="text-sm font-bold text-[#4B5563] hover:text-[#111827]">Malang 3D Lab</a>
              <a href="#hubs" className="text-sm font-bold text-[#4B5563] hover:text-[#111827]">Sidoarjo Studio</a>
              <a href="#hubs" className="text-sm font-bold text-[#4B5563] hover:text-[#111827]">SMK & Kampus Mitra</a>
            </div>
            <div className="flex flex-col gap-2.5">
              <span className="font-mono text-xs uppercase font-black text-brand-purple">Dukungan & Legal</span>
              <a href="#kontak" className="text-sm font-bold text-[#4B5563] hover:text-[#111827]">Konsultasi Kemitraan</a>
              <a href="#magang" className="text-sm font-bold text-[#4B5563] hover:text-[#111827]">Syarat Magang Siswa</a>
              <a href="#" className="text-sm font-bold text-[#4B5563] hover:text-[#111827]">Kebijakan Privasi</a>
              <a href="#" className="text-sm font-bold text-[#4B5563] hover:text-[#111827]">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6B7280]">
          <div>© 2026 Jihnara Media Group Inc. Seluruh hak cipta dilindungi.</div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-green"></span>
            <span>Status Sistem: Operasional Normal (Surabaya & Malang Hub Aktif)</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
