import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[78vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/40 to-slate-950 pointer-events-none"></div>
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/20 backdrop-blur">
            We are your personal IT
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
            Reflectech — expert online repair and buying advice
          </h1>
          <p className="mt-5 max-w-2xl text-slate-200/90">
            Fast, remote software and system repair for Windows PCs and laptops. Personalized counseling to choose the right phone or computer for your needs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#/repair" className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 font-medium text-white shadow hover:bg-indigo-500 transition">
              Fix My Computer
            </a>
            <a href="#/counseling" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-2.5 font-medium text-white hover:bg-white/10 transition">
              Get Buying Advice
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
