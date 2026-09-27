import { motion } from 'framer-motion';
import { FileText, ShoppingCart, Users, Shield, TrendingUp, Calculator } from 'lucide-react';

const services = [
  {
    icon: FileText,
    color: 'text-gold-400 bg-gold-500/10 group-hover:bg-gold-500',
    title: 'Federal & State Tax Prep',
    desc: 'Accurate, on-time preparation and filing for every US entity type, resident or non-resident.',
    points: ['Form 1120, 1120-S, 1065, 1040/1040-NR', 'State-level corporate & franchise tax', 'Amended & prior-year catch-up filings'],
  },
  {
    icon: Calculator,
    color: 'text-emerald-400 bg-emerald-500/10 group-hover:bg-emerald-500',
    title: 'Bookkeeping & Accounting',
    desc: 'Monthly close, reconciliations, and investor-ready financial statements.',
    points: ['QuickBooks Online & Xero setup', 'Monthly close & reconciliation', 'GAAP-compliant financial statements'],
  },
  {
    icon: ShoppingCart,
    color: 'text-blue-400 bg-blue-500/10 group-hover:bg-blue-500',
    title: 'Multi-State Sales Tax',
    desc: 'End-to-end multi-state US Sales Tax compliance for e-commerce sellers, SaaS products, and physical businesses.',
    points: ['Economic Nexus Evaluation (Wayfair)', 'State Sales Tax Registrations', 'TaxJar, Avalara, & Stripe Tax Setup'],
  },
  {
    icon: Users,
    color: 'text-purple-400 bg-purple-500/10 group-hover:bg-purple-500',
    title: 'US Payroll & Contractor Pay',
    desc: 'Complete US employee payroll processing and international contractor payments.',
    points: ['Gusto, ADP, & Rippling Management', 'Form 941 & 940 Federal Tax Returns', 'W-2 & 1099-NEC Annual Filings'],
  },
  {
    icon: Shield,
    color: 'text-amber-400 bg-amber-500/10 group-hover:bg-amber-500',
    title: 'FinCEN BOI & Corporate CTA',
    desc: 'Compliance under the Corporate Transparency Act (CTA) for mandatory Beneficial Ownership reporting.',
    points: ['Mandatory FinCEN BOI Report Filings', 'Initial & Updated Applicant Filings', 'Penalty Prevention Audit ($500/day risk)'],
  },
  {
    icon: TrendingUp,
    color: 'text-rose-400 bg-rose-500/10 group-hover:bg-rose-500',
    title: 'Fractional CFO & Advisory',
    desc: 'Strategic financial leadership, tax-saving structuring, and cash flow forecasting.',
    points: ['Entity Formation (FL, DE, WY, TX)', 'Cash Flow & Budget Modeling', 'Transfer Pricing & Cross-Border Tax'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-gold-400">Full-Scope Coverage</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Our Services Suite</h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base">
            From day-to-day bookkeeping to complex cross-border structuring, every service is built for
            businesses operating between the US and India.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card p-8 rounded-3xl border border-slate-800 hover:border-gold-500/40 transition-colors duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${s.color} group-hover:text-slate-950`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2.5 text-xs font-semibold text-slate-300">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
