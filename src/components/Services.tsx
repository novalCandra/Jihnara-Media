export default function Services() {
  return (
    <section className="max-w-[1360px] mx-auto w-full px-4 md:px-8 py-16" id="layanan">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
        <span className="px-4 py-1.5 rounded-full bg-brand-cyan/10 text-[#008994] font-mono text-xs uppercase font-black tracking-widest mb-3 border border-brand-cyan/20">
          Alur Layanan & Pembelajaran
        </span>
        <h2 className="font-display font-black text-3xl sm:text-4xl text-[#111827] tracking-tight">
          Sentralisasi Eksekusi Digital
        </h2>
        <p className="font-body text-[#4B5563] text-base md:text-lg mt-2">
          Seluruh kebutuhan visual, materi iklan, dan pembelajaran digital terpadu dalam satu wadah komunikasi yang tangkas dan terorganisir.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-3xl bg-[#F8FAFC] p-8 border-2 border-[#E5E7EB] border-b-8 shadow-lg flex flex-col justify-between">
          <div>
            <span className="px-3 py-1 rounded-xl bg-brand-cyan/15 text-[#008994] font-mono text-xs font-extrabold uppercase">
              Sistem Brief Kilat
            </span>
            <h3 className="font-display font-black text-2xl text-[#111827] mt-4 mb-2">
              Pengajuan Ide & Brief Konten Cepat
            </h3>
            <p className="font-body text-[#4B5563] text-base leading-relaxed">
              Kirim ide konten, materi promosi, atau topik pelatihan kapan saja. Tim kami merespons dalam hitungan jam dengan rencana storyboard dan jadwal tayang yang jelas.
            </p>
          </div>
          <div className="mt-8 bg-white rounded-2xl p-5 border-2 border-[#E5E7EB] border-b-4">
            <div className="flex items-center justify-between pb-3">
              <span className="font-display font-black text-base text-[#111827]">Batch Video TikTok Promo Ramadhan</span>
              <span className="material-symbols-outlined text-brand-cyan text-xl font-bold">send</span>
            </div>
            <div className="flex items-center gap-2 pb-3 text-xs font-mono text-[#6B7280]">
              <span className="bg-[#F1F5F9] border border-[#E5E7EB] px-2 py-0.5 rounded-md text-brand-cyan font-bold">Portal Klien</span>
              <span>•</span>
              <span>Brand Kuliner Surabaya</span>
              <span>•</span>
              <span className="text-brand-magenta font-bold">🔥 Prioritas</span>
            </div>
            <div className="space-y-2">
              <div className="h-2.5 rounded-full bg-[#E5E7EB] w-full" />
              <div className="h-2.5 rounded-full bg-brand-cyan/50 w-3/4" />
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-[#F8FAFC] p-8 border-2 border-[#E5E7EB] border-b-8 shadow-lg flex flex-col justify-between">
          <div>
            <span className="px-3 py-1 rounded-xl bg-brand-magenta/15 text-brand-magenta font-mono text-xs font-extrabold uppercase">
              Standar Industri Modern
            </span>
            <h3 className="font-display font-black text-2xl text-[#111827] mt-4 mb-2">
              Software & Perangkat Kerja Mutakhir
            </h3>
            <p className="font-body text-[#4B5563] text-base leading-relaxed">
              Tim kreatif dan siswa binaan kami terbiasa menggunakan perkakas kelas dunia: CapCut Desktop, Premiere Pro, Figma, Blender 3D, Meta Ads Manager, hingga React & Tailwind CSS.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3 bg-white p-5 rounded-2xl border-2 border-[#E5E7EB]">
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
                className={`p-3 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] border-b-3 text-center font-display font-black text-xs ${t.color}`}
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
