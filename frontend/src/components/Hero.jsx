import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const checklist = [
  {
    title: 'US Federal & 50-State Tax Filings',
    desc: 'Form 1120, 1120-S, 1065, 1040, and 1040-NR Non-Resident filings.',
  },
  {
    title: 'Multi-State Sales & Use Tax',
    desc: 'Economic Nexus tracking, TaxJar/Avalara automation, quarterly filings.',
  },
  {
    title: 'Bookkeeping & Payroll Management',
    desc: 'QuickBooks Online, Xero, Gusto payroll, 1099/W-2 preparation.',
  },
];

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 navy-gradient-bg overflow-hidden flex items-center min-h-[90vh]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d15_1px,transparent_1px),linear-gradient(to_bottom,#1f293d15_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <motion.div
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >
            <motion.div
              variants={item}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card border border-gold-500/30"
            >
              <div className="flex items-center gap-1.5 text-xs font-semibold">
                <span className="flex items-center gap-1 text-slate-200">
                  🇺🇸 <strong className="text-white">Florida, USA</strong>
                </span>
                <span className="text-gold-400">┼</span>
                <span className="flex items-center gap-1 text-slate-200">
                  🇮🇳 <strong className="text-white">India Offshore</strong>
                </span>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-400 border border-gold-500/30">
                Cross-Border Excellence
              </span>
            </motion.div>

            <motion.h1 variants={item} className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Premier <span className="gold-gradient-text">US Tax, Sales Tax</span> & Advisory Services
            </motion.h1>

            <motion.p variants={item} className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Valiant Ledgers (<strong className="text-white">valiantledgers.in</strong>) empowers US small
              businesses, e-commerce brands, non-residents, and multinational firms with full-scope CPAs,
              tax filings, payroll, multi-state sales tax nexus, and FinCEN compliance.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-gold-400 via-amber-400 to-gold-500 hover:shadow-xl hover:shadow-gold-500/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Get Custom Fee Proposal</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#resources"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold glass-card hover:bg-slate-800/80 transition-all flex items-center justify-center gap-2 border border-slate-700"
              >
                <ExternalLink className="w-5 h-5 text-gold-400" />
                <span>Official IRS & Government Hub</span>
              </a>
            </motion.div>

            <motion.div variants={item} className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80">
              {[
                ['Form 1040 / 1120', 'Federal & State Tax'],
                ['Wayfair Nexus', 'Sales & Use Tax'],
                ['FinCEN BOI', 'Federal Compliance'],
                ['24/7 Synergy', 'US & India Teams'],
              ].map(([big, small]) => (
                <div key={big} className="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                  <div className="text-xl font-bold text-gold-400">{big}</div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">{small}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="glass-card rounded-3xl p-8 border border-gold-500/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl" />

              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">Full US Compliance Active</h3>
                    <p className="text-xs text-slate-400">IRS Registered PTIN / EFIN Ready</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                  Verified
                </span>
              </div>

              <div className="py-6 space-y-4">
                {checklist.map((c, i) => (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800"
                  >
                    <CheckCircle2 className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-white">{c.title}</h4>
                      <p className="text-[11px] text-slate-400">{c.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
