export default function Services() {
  return (
    <section className="max-w-[1360px] mx-auto w-full px-4 sm:px-6 md:px-8 py-12 sm:py-16" id="layanan">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <span className="px-4 sm:px-4 py-1 sm:py-1.5 rounded-full bg-brand-cyan/10 text-[#008994] font-mono text-[10px] sm:text-xs uppercase font-black tracking-widest mb-2 sm:mb-3 border border-brand-cyan/20">
          Alur Layanan & Pembelajaran
        </span>
        <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#111827] tracking-tight leading-[1.15]">
          Sentralisasi Eksekusi Digital
        </h2>
        <p className="font-body text-sm sm:text-base md:text-lg text-[#4B5563] mt-2 sm:mt-2 leading-relaxed">
          Seluruh kebutuhan visual, materi iklan, dan pembelajaran digital terpadu dalam satu wadah komunikasi yang tangkas dan terorganisir.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        <div className="rounded-3xl bg-[#F8FAFC] p-6 sm:p-8 border-2 border-[#E5E7EB] border-b-8 shadow-lg flex flex-col justify-between">
          <div>
            <span className="px-3 sm:px-3 py-1 sm:py-1 rounded-xl bg-brand-cyan/15 text-[#008994] font-mono text-[10px] sm:text-xs font-extrabold uppercase">
              Sistem Brief Kilat
            </span>
            <h3 className="font-display font-black text-xl sm:text-2xl text-[#111827] mt-3 sm:mt-4 mb-2 leading-snug">
              Pengajuan Ide & Brief Konten Cepat
            </h3>
            <p className="font-body text-sm sm:text-base text-[#4B5563] leading-relaxed">
              Kirim ide konten, materi promosi, atau topik pelatihan kapan saja. Tim kami merespons dalam hitungan jam dengan rencana storyboard dan jadwal tayang yang jelas.
            </p>
          </div>
          <div className="mt-6 sm:mt-8 bg-white rounded-2xl p-4 sm:p-5 border-2 border-[#E5E7EB] border-b-4">
            <div className="flex items-center justify-between pb-2 sm:pb-3">
              <span className="font-display font-black text-base sm:text-lg text-[#111827] leading-snug">Batch Video TikTok Promo Ramadhan</span>
              <span className="material-symbols-outlined text-brand-cyan text-[16px] sm:text-xl font-bold">send</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 pb-2 sm:pb-3 text-[10px] sm:text-xs font-mono text-[#6B7280]">
              <span className="bg-[#F1F5F9] border border-[#E5E7EB] px-2 sm:px-2 py-0.5 rounded-md text-brand-cyan font-bold">Portal Klien</span>
              <span>•</span>
              <span>Brand Kuliner Surabaya</span>
              <span>•</span>
              <span className="text-brand-magenta font-bold">🔥 Prioritas</span>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="h-2 sm:h-2.5 rounded-full bg-[#E5E7EB] w-full" />
              <div className="h-2 sm:h-2.5 rounded-full bg-brand-cyan/50 w-3/4" />
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-[#F8FAFC] p-6 sm:p-8 border-2 border-[#E5E7EB] border-b-8 shadow-lg flex flex-col justify-between">
          <div>
            <span className="px-3 sm:px-3 py-1 sm:py-1 rounded-xl bg-brand-magenta/15 text-brand-magenta font-mono text-[10px] sm:text-xs font-extrabold uppercase">
              Standar Industri Modern
            </span>
            <h3 className="font-display font-black text-xl sm:text-2xl text-[#111827] mt-3 sm:mt-4 mb-2 leading-snug">
              Software & Perangkat Kerja Mutakhir
            </h3>
            <p className="font-body text-sm sm:text-base text-[#4B5563] leading-relaxed">
              Tim kreatif dan siswa binaan kami terbiasa menggunakan perkakas kelas dunia: CapCut Desktop, Premiere Pro, Figma, Blender 3D, Meta Ads Manager, hingga React & Tailwind CSS.
            </p>
          </div>
          <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 bg-white p-3 sm:p-5 rounded-2xl border-2 border-[#E5E7EB]">
            {[
              { label: 'Figma Pro', color: 'text-[#008994]' },
              { label: 'CapCut / Premiere', color: 'text-brand-magenta' },
              { label: 'Meta Ads Hub', color: 'text-brand-purple' },
              { label: 'TikTok Studio', color: 'text-[#111827]' },
              { label: 'Blender 3D', color: 'text-[#008994]' },
              { label: 'React & Tailwind', color: 'text-brand-magenta' },
            ].map((t) => (
              <div
                key={t.label}
                className={`p-2 sm:p-3 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] border-b-3 text-center font-display font-black text-[10px] sm:text-xs ${t.color} leading-none`}
              >
                {t.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
