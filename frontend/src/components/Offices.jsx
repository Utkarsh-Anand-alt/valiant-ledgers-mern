import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';

const offices = [
  {
    flag: '🇺🇸',
    country: 'Florida, USA',
    city: 'Client-facing operations & IRS liaison',
    hours: '9:00 AM – 6:00 PM EST',
  },
  {
    flag: '🇮🇳',
    country: 'India Offshore',
    city: 'Delivery center — bookkeeping & filings',
    hours: '9:00 AM – 6:00 PM IST',
  },
];

export default function Offices() {
  return (
    <section id="offices" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-gold-400">Global Footprint</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Florida & India Offices</h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base">
            A follow-the-sun team structure means faster turnaround without sacrificing US-based oversight.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {offices.map((o, i) => (
            <motion.div
              key={o.country}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-8 rounded-3xl border border-slate-800 text-center"
            >
              <div className="text-4xl mb-4">{o.flag}</div>
              <h3 className="text-xl font-bold text-white mb-1">{o.country}</h3>
              <p className="text-sm text-slate-400 mb-6">{o.city}</p>
              <div className="flex items-center justify-center gap-2 text-xs font-semibold text-gold-400">
                <Clock className="w-4 h-4" />
                {o.hours}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
