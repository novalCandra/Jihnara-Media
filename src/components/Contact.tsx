export default function Contact() {
  return (
    <section className="max-w-[1360px] mx-auto w-full px-4 sm:px-6 md:px-8 py-12 sm:py-16" id="kontak">
      <div className="rounded-3xl bg-gradient-to-br from-brand-cyan/20 via-white to-brand-magenta/10 border-2 border-brand-cyan border-b-8 p-5 sm:p-8 md:p-14 shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6 z-10">
            <span className="px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-xl bg-white border border-brand-cyan/30 text-[#008994] font-mono text-[10px] sm:text-xs font-black uppercase w-fit shadow-xs">
              Mulai Langkah Nyata
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#111827] tracking-tight leading-[1.15]">
              Kembangkan Potensi Brand & Karir Kreatif Digitalmu.
            </h2>
            <p className="font-body text-sm sm:text-base md:text-lg text-[#4B5563] max-w-none sm:max-w-lg leading-relaxed">
              Diskusikan kebutuhan produksi konten video, branding agensi, workshop pelatihan tim, atau penempatan magang vokasi bersama tim Jihnara Media Group.
            </p>
            <div className="pt-2 sm:pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 sm:gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-brand-magenta text-white font-display font-black text-[10px] sm:text-sm sm:text-base border-b-4 border-brand-magenta-dark shadow-lg hover:-translate-y-0.5 active:translate-y-1 active:border-b-0 transition-all uppercase tracking-wide leading-none"
              >
                <span>Hubungi via WhatsApp</span>
                <span className="material-symbols-outlined text-[16px] sm:text-lg">chat</span>
              </a>
              <a
                href="#biaya"
                className="inline-flex items-center justify-center gap-2 sm:gap-2 px-5 sm:px-6 py-3 sm:py-4 rounded-2xl bg-white text-[#111827] font-display font-black text-[10px] sm:text-sm border-2 border-[#E5E7EB] border-b-4 hover:border-brand-cyan transition-all leading-none"
              >
                <span>Lihat Paket Lengkap</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
            <div className="w-64 sm:w-72 bg-white border-4 border-[#111827] border-b-8 rounded-[44px] p-2 sm:p-3 shadow-2xl relative">
              <div className="w-20 sm:w-24 h-3 sm:h-4 rounded-full bg-[#111827] mx-auto mb-2 sm:mb-3" />
              <div className="rounded-[28px] bg-[#F8FAFC] border border-[#E5E7EB] p-2 sm:p-4 space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between pb-0.5">
                  <span className="font-mono text-[9px] sm:text-xs text-[#008994] font-black">JIHNARA CONNECT</span>
                  <span className="material-symbols-outlined text-[#6B7280] text-[14px] sm:text-base">notifications</span>
                </div>
                <div className="p-2 sm:p-3 rounded-2xl bg-white border border-[#E5E7EB] border-b-2 space-y-1">
                  <div className="text-[8px] sm:text-[10px] font-mono text-brand-magenta font-black">BATCH KONTEN SELESAI</div>
                  <div className="text-xs sm:text-sm font-bold text-[#111827]">12 Video TikTok Disetujui</div>
                  <div className="text-[8px] sm:text-[10px] text-[#6B7280]">Jadwal Tayang Minggu Ini</div>
                </div>
                <div className="p-2 sm:p-3 rounded-2xl bg-white border border-[#E5E7EB] border-b-2 space-y-1">
                  <div className="text-[8px] sm:text-[10px] font-mono text-[#008994] font-black">STATUS MAGANG AKTIF</div>
                  <div className="text-xs sm:text-sm font-bold text-[#111827]">Evaluasi Portofolio SMK Telkom</div>
                  <div className="text-[8px] sm:text-[10px] text-[#6B7280]">Nilai Industri: A (95)</div>
                </div>
                <div className="p-2 sm:p-3 rounded-2xl bg-brand-cyan border-b-3 border-brand-cyan-dark text-white text-center font-display font-black text-[9px] sm:text-xs shadow-xs">
                  + Konsultasi Langsung via Chat
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
