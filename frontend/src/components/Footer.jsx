export default function Footer() {
  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gold-500 flex items-center justify-center text-slate-950 font-black text-sm">
              VL
            </div>
            <span className="font-extrabold text-white text-base">Valiant Ledgers</span>
            <span className="text-gold-400 font-semibold">(valiantledgers.in)</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 font-semibold">
            <a href="https://www.irs.gov" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400">IRS.gov</a>
            <a href="https://www.fincen.gov" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400">FinCEN.gov</a>
            <a href="#services" className="hover:text-gold-400">Services</a>
            <a href="#calculator" className="hover:text-gold-400">Estimator</a>
            <a href="#contact" className="hover:text-gold-400">Contact</a>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Valiant Ledgers (valiantledgers.in). Florida, USA & India Operational Offices. All rights reserved.</p>
          <p>Disclaimer: Valiant Ledgers provides professional accounting, tax preparation, and advisory services.</p>
        </div>
      </div>
    </footer>
  );
}
