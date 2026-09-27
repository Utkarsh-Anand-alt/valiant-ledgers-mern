import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#services', label: 'Services Suite' },
  { href: '#resources', label: 'Official IRS/US Links' },
  { href: '#calculator', label: 'Fee Calculator' },
  { href: '#offices', label: 'Florida & India Offices' },
  { href: '#deadlines', label: 'Tax Calendar' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="glass-card rounded-2xl px-6 py-3 flex items-center justify-between shadow-2xl shadow-black/50">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-navy-900 via-gold-500 to-amber-300 p-0.5 shadow-lg shadow-gold-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center font-extrabold text-gold-400 text-xl tracking-wider">
                VL
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white">
                VALIANT LEDGERS
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold-400">
                valiantledgers.in
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-slate-300">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-gold-400 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-gold-400 to-amber-500 hover:from-amber-400 hover:to-gold-500 transition-all shadow-lg shadow-gold-500/20 active:scale-95"
            >
              Schedule Consultation
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden max-w-7xl mx-auto px-4 mt-2"
        >
          <div className="glass-card rounded-2xl p-6 flex flex-col space-y-4 shadow-2xl">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-slate-300 hover:text-gold-400"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="w-full text-center py-3 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-gold-400 to-amber-500"
            >
              Book Free Strategy Call
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
