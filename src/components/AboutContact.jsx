import { motion } from 'framer-motion';
import { Phone, Mail, Clock } from 'lucide-react';

export default function AboutContact() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">About Reflectech</h2>
          <p className="mt-4 text-slate-300">
            Reflectech is your personal IT team — on demand. We specialize in fast, secure remote repair for Windows PCs and laptops, and clear, unbiased buying advice for phones and computers.
          </p>
          <p className="mt-3 text-slate-300">
            Our approach is simple: listen first, solve precisely, and explain clearly so you feel confident and in control.
          </p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <ul className="space-y-2 text-sm text-slate-200">
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-indigo-300" /> Support hours: Mon–Sat, 9am–7pm</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-indigo-300" /> support@reflectech.help</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-indigo-300" /> +1 (555) 012-3456</li>
            </ul>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
          onSubmit={(e) => { e.preventDefault(); alert('Thanks! We will get back to you shortly.'); }}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl"
        >
          <h3 className="text-xl font-semibold text-white">Contact us</h3>
          <div className="mt-4 grid gap-4">
            <input required type="text" placeholder="Your name" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input required type="email" placeholder="Email" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <select className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="Repair">Online Repair</option>
              <option value="Counseling-Mobile">Counseling – Mobile</option>
              <option value="Counseling-Desktop">Counseling – Desktop/Laptop</option>
              <option value="General">General Question</option>
            </select>
            <textarea rows="5" placeholder="How can we help?" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
            <button className="mt-2 inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 font-medium text-white hover:bg-indigo-500 transition">Send message</button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
