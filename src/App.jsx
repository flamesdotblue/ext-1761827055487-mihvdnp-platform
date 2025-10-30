import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import RepairPlans from './components/RepairPlans';
import CounselingPlans from './components/CounselingPlans';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';

function useHashRoute() {
  const getPath = () => {
    const raw = window.location.hash.replace('#', '') || '/';
    return raw.startsWith('/') ? raw : `/${raw}`;
  };

  const [route, setRoute] = useState(getPath());

  useEffect(() => {
    const onHashChange = () => setRoute(getPath());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return [route, (to) => { window.location.hash = to; }];
}

function Home() {
  return (
    <>
      <Hero />
      <div className="relative -mt-16 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServicesGrid />
        </div>
      </div>
    </>
  );
}

export default function App() {
  const [route] = useHashRoute();

  const Page = useMemo(() => {
    switch (route) {
      case '/':
        return <Home />;
      case '/repair':
        return <RepairPlans />;
      case '/counseling':
        return <CounselingPlans />;
      case '/about':
        return <AboutContact />;
      default:
        return (
          <div className="mx-auto max-w-3xl px-4 py-24 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white">Page not found</h2>
            <p className="mt-4 text-slate-300">The page you are looking for does not exist.</p>
            <a href="#/" className="mt-6 inline-flex items-center rounded-full bg-indigo-600 px-5 py-2.5 text-white hover:bg-indigo-500 transition">Go Home</a>
          </div>
        );
    }
  }, [route]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar currentRoute={route} />
      <AnimatePresence mode="wait">
        <motion.main
          key={route}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {Page}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
