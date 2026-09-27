import { motion } from 'framer-motion';
import { CalendarClock, ExternalLink } from 'lucide-react';

const deadlines = [
  { date: 'Jan 31', event: 'W-2 / 1099-NEC deadline to recipients & IRS' },
  { date: 'Mar 15', event: 'Partnership (1065) & S-Corp (1120-S) returns due' },
  { date: 'Apr 15', event: 'Individual (1040) & C-Corp (1120) returns due' },
  { date: 'Jun 16', event: 'Q2 estimated tax payments due' },
  { date: 'Sep 15', event: 'Extended partnership & S-Corp returns due' },
  { date: 'Oct 15', event: 'Extended individual & C-Corp returns due' },
];

const resources = [
  { name: 'IRS.gov', url: 'https://www.irs.gov' },
  { name: 'FinCEN.gov', url: 'https://www.fincen.gov' },
  { name: 'USPTO.gov', url: 'https://www.uspto.gov' },
];

export default function Deadlines() {
  return (
    <>
      <section id="deadlines" className="py-24 bg-navy-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs font-extrabold uppercase tracking-widest text-gold-400">Stay Ahead</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">US Tax Compliance Calendar</h2>
            <p className="text-slate-400 mt-4 text-sm sm:text-base">Key federal filing deadlines we track for every client, automatically.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {deadlines.map((d, i) => (
              <motion.div
                key={d.date + d.event}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card p-5 rounded-2xl border border-slate-800 flex items-start gap-3"
              >
                <CalendarClock className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-white">{d.date}</div>
                  <div className="text-xs text-slate-400">{d.event}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="py-16 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-gold-400">Trusted References</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-8">Official IRS & Government Links</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {resources.map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-card border border-slate-800 hover:border-gold-500/40 text-sm font-semibold text-slate-200 hover:text-gold-400 transition-colors"
              >
                {r.name}
                <ExternalLink className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
