import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Building2, User } from 'lucide-react';

const entityOptions = [
  { value: 'llc', label: 'Single/Multi LLC', sub: 'Form 1065 / Sch C / 5472', icon: Briefcase, base: 650 },
  { value: 'corp', label: 'C-Corp / S-Corp', sub: 'Form 1120 / 1120-S', icon: Building2, base: 850 },
  { value: 'individual', label: 'Individual / Non-Resident', sub: 'Form 1040 / 1040-NR', icon: User, base: 450 },
];

const volumeLabels = [
  '< $10,000 / mo',
  '$10,000 - $50,000 / mo',
  '$50,000 - $150,000 / mo',
  '$150,000+ / mo',
];
const volumeCosts = [0, 200, 400, 750];

const addonOptions = [
  { id: 'payroll', label: 'US Payroll Management', value: 300 },
  { id: 'salestax', label: 'Multi-State Sales Tax Filing', value: 350 },
  { id: 'fincen', label: 'FinCEN BOI Reporting', value: 150 },
  { id: 'cfo', label: 'Fractional CFO Advisory', value: 600 },
];

export default function Calculator() {
  const [entity, setEntity] = useState('llc');
  const [volumeStep, setVolumeStep] = useState(2);
  const [addons, setAddons] = useState([]);

  const toggleAddon = (id) => {
    setAddons((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]));
  };

  const total = useMemo(() => {
    const base = entityOptions.find((e) => e.value === entity)?.base || 0;
    const volume = volumeCosts[volumeStep - 1];
    const addonsTotal = addons.reduce((sum, id) => sum + (addonOptions.find((a) => a.id === id)?.value || 0), 0);
    return base + volume + addonsTotal;
  }, [entity, volumeStep, addons]);

  return (
    <section id="calculator" className="py-24 bg-navy-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-gold-400">Transparent Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Interactive Fee Estimator</h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base">
            Select your business profile to generate an instant estimate for US tax preparation, accounting,
            and compliance services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-8">
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-4">
                1. Select US Business Entity Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {entityOptions.map((opt) => {
                  const Icon = opt.icon;
                  const active = entity === opt.value;
                  return (
                    <button
                      key={opt.value}
                      onClick={() => setEntity(opt.value)}
                      className={`cursor-pointer glass-card p-4 rounded-2xl border-2 flex flex-col items-center text-center transition-all ${
                        active ? 'border-gold-500' : 'border-transparent hover:border-slate-700'
                      }`}
                    >
                      <Icon className="w-6 h-6 mb-2 text-gold-400" />
                      <span className="font-bold text-sm text-white">{opt.label}</span>
                      <span className="text-[11px] text-slate-400 mt-1">{opt.sub}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-4">
                <span>2. Monthly Revenue / Transaction Volume</span>
                <span className="text-gold-400 normal-case font-bold">{volumeLabels[volumeStep - 1]}</span>
              </label>
              <input
                type="range"
                min={1}
                max={4}
                value={volumeStep}
                onChange={(e) => setVolumeStep(Number(e.target.value))}
                className="w-full accent-gold-500"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-4">
                3. Add-On Services
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addonOptions.map((a) => (
                  <label
                    key={a.id}
                    className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-700 cursor-pointer hover:border-gold-500/50"
                  >
                    <span className="flex items-center gap-3 text-sm font-semibold text-slate-200">
                      <input
                        type="checkbox"
                        checked={addons.includes(a.id)}
                        onChange={() => toggleAddon(a.id)}
                        className="accent-gold-500 w-4 h-4"
                      />
                      {a.label}
                    </span>
                    <span className="text-xs font-bold text-gold-400">+${a.value}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 glass-card p-8 rounded-3xl border border-gold-500/30 text-center sticky top-28">
            <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-3">
              Estimated Monthly Fee
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={total}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="text-5xl font-extrabold gold-gradient-text mb-4"
              >
                ${total.toLocaleString()}
              </motion.div>
            </AnimatePresence>
            <p className="text-xs text-slate-400 mb-6">
              Final pricing confirmed after a free 20-minute discovery call.
            </p>
            <a
              href="#contact"
              className="block w-full py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-gold-400 to-amber-500 hover:from-amber-400 hover:to-gold-500 transition-all"
            >
              Get This Proposal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
