import { motion } from 'framer-motion';
import { Check, Wrench, Shield, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Quick Fix',
    price: '$39',
    best: false,
    icon: Wrench,
    description: 'For simple issues that need a fast, expert fix (30–45 min session).',
    features: [
      'Remote session (secure, encrypted)',
      'Error & app crash fixes',
      'Basic malware scan & removal',
      'Startup & performance tune-up',
    ],
  },
  {
    name: 'Deep Repair',
    price: '$79',
    best: true,
    icon: Shield,
    description: 'Full system health repair for persistent problems (60–90 min).',
    features: [
      'Advanced malware removal',
      'Driver cleanup & reinstall',
      'Windows services & registry tune',
      'System updates & validation',
      'Backup check & recommendations',
    ],
  },
  {
    name: 'Care Plan',
    price: '$19/mo',
    best: false,
    icon: Sparkles,
    description: 'Ongoing protection and performance with monthly checkups.',
    features: [
      'Monthly health check + clean up',
      'Security hardening & patches',
      'Backup monitoring',
      'Priority support scheduling',
    ],
  },
];

export default function RepairPlans() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Online Windows Repair</h2>
        <p className="mt-3 text-slate-300">Choose a plan and get connected to a Reflectech specialist. Secure remote sessions, transparent pricing, real results.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className={`relative rounded-2xl border ${p.best ? 'border-indigo-400/40' : 'border-white/10'} bg-white/[0.03] p-6 shadow-xl`}
          >
            {p.best && (
              <div className="absolute -top-3 right-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white shadow">Most Popular</div>
            )}
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white">
              <p.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">{p.name}</h3>
            <p className="mt-1 text-2xl font-semibold bg-gradient-to-r from-indigo-300 to-cyan-200 bg-clip-text text-transparent">{p.price}</p>
            <p className="mt-2 text-sm text-slate-300">{p.description}</p>
            <ul className="mt-4 space-y-2">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-200">
                  <Check className="mt-0.5 h-4 w-4 text-emerald-400" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-2">
              <a href="#/about" className={`flex-1 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium transition ${p.best ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-white/10 text-white hover:bg-white/15'}`}>Book Session</a>
              <a href="#/about" className="rounded-full border border-white/10 px-4 py-2.5 text-sm text-slate-200 hover:bg-white/10 transition">Ask a Question</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
