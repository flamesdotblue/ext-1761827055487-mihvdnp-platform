import { motion } from 'framer-motion';
import { Smartphone, Monitor, Check } from 'lucide-react';

const options = [
  {
    name: 'Mobile Phone Counseling',
    icon: Smartphone,
    price: '$29',
    description: 'We shortlist 3 phones that match your budget, camera needs, ecosystem and longevity preferences.',
    bullets: [
      'Needs assessment (10-min chat)',
      'Personalized shortlist with pros/cons',
      'Links to best current prices',
      'Follow-up Q&A (email or chat)'
    ],
  },
  {
    name: 'Desktop/Laptop Counseling',
    icon: Monitor,
    price: '$39',
    description: 'Get a tailored PC/laptop build or model list for work, gaming or study — including peripherals.',
    bullets: [
      'Use-case and budget analysis',
      '2–3 tailored configs or models',
      'Upgrade path & warranty notes',
      'Optional parts list for DIY builds'
    ],
  },
];

export default function CounselingPlans() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Personalized Device Counseling</h2>
        <p className="mt-3 text-slate-300">Phones, desktops or laptops — we cut through specs and marketing to match what actually fits your life.</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {options.map((o, i) => (
          <motion.div
            key={o.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white">
              <o.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">{o.name}</h3>
            <p className="mt-1 text-2xl font-semibold bg-gradient-to-r from-indigo-300 to-cyan-200 bg-clip-text text-transparent">{o.price}</p>
            <p className="mt-2 text-sm text-slate-300">{o.description}</p>
            <ul className="mt-4 space-y-2">
              {o.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-slate-200">
                  <Check className="mt-0.5 h-4 w-4 text-indigo-300" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-2">
              <a href="#/about" className="flex-1 inline-flex items-center justify-center rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 transition">Start Counseling</a>
              <a href="#/about" className="rounded-full border border-white/10 px-4 py-2.5 text-sm text-slate-200 hover:bg-white/10 transition">How it works</a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-6 text-center">
        <p className="text-slate-200">Not sure which option to pick? Book a free 5-minute discovery chat and we’ll guide you.</p>
        <a href="#/about" className="mt-4 inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2.5 text-sm text-white hover:bg-white/15 transition">Book Discovery Chat</a>
      </div>
    </section>
  );
}
