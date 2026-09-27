import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_BASE_URL || '/api';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', entity: 'fl', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  const reset = () => {
    setForm({ name: '', email: '', phone: '', entity: 'fl', message: '' });
    setStatus('idle');
  };

  return (
    <section id="contact" className="py-24 bg-navy-950 border-t border-slate-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-gold-400">Let's Connect</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Request a Fee Proposal</h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base">
            Tell us about your business and our Florida & India specialists will respond within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800 relative"
        >
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center text-center py-10"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Request Received</h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-md mb-6">
                  Thank you for reaching out to Valiant Ledgers. Your message was emailed to our team and
                  we'll respond within 24 hours.
                </p>
                <button
                  onClick={reset}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold bg-slate-800 text-white hover:bg-slate-700 border border-slate-600"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-gold-400 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-gold-400 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-gold-400 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="entity" className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-2">
                      Entity Jurisdiction
                    </label>
                    <select
                      id="entity"
                      value={form.entity}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-gold-400 transition-colors text-sm"
                    >
                      <option value="fl">Florida LLC / Corp</option>
                      <option value="other-us">Other US State (DE, WY, TX, CA, etc.)</option>
                      <option value="nonres">Non-Resident US LLC</option>
                      <option value="new">Planning to Form Entity</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-2">
                    Project Brief / Questions *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Provide details regarding your entity, volume, software, or specific tax requirements..."
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-gold-400 transition-colors text-sm"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 bg-rose-500/10 border border-rose-500/30 rounded-xl px-4 py-3">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {errorMsg}
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl font-extrabold text-slate-950 bg-gradient-to-r from-gold-400 via-amber-400 to-gold-500 hover:from-amber-400 hover:to-gold-500 transition-all shadow-lg shadow-gold-500/20 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Proposal Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
