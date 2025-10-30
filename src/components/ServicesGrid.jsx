import { motion } from 'framer-motion';
import { Wrench, Shield, Smartphone, Monitor, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Online System Repair',
    description: 'Remote troubleshooting for Windows PCs and laptops. Malware cleanup, performance tuning, driver fixes and more.',
    href: '#/repair',
    accent: 'from-indigo-500 to-cyan-400',
  },
  {
    icon: Smartphone,
    title: 'Phone Buying Advice',
    description: 'Personalized recommendation of the best smartphone for your budget, needs and ecosystem.',
    href: '#/counseling',
    accent: 'from-pink-500 to-rose-400',
  },
  {
    icon: Monitor,
    title: 'Desktop & Laptop Advice',
    description: 'We match you with the right desktop or laptop configuration for work, gaming or study.',
    href: '#/counseling',
    accent: 'from-emerald-500 to-teal-400',
  },
  {
    icon: Shield,
    title: 'Ongoing Care',
    description: 'Optional monthly checkups, security hardening and backup verification to keep you safe and fast.',
    href: '#/repair',
    accent: 'from-amber-500 to-orange-400',
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative -mt-8 mb-20">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <motion.a
            key={s.title}
            href={s.href}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-5 shadow-lg hover:shadow-xl hover:shadow-black/30"
          >
            <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${s.accent} text-white shadow` }>
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.description}</p>
            <div className="mt-4 inline-flex items-center gap-2 text-indigo-300 group-hover:text-indigo-200">
              <span className="text-sm">Learn more</span>
              <Sparkles className="h-4 w-4" />
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/20 to-transparent" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
