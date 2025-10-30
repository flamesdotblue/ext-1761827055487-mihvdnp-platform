import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#/', label: 'Home' },
  { href: '#/repair', label: 'Online Repair' },
  { href: '#/counseling', label: 'Counseling' },
  { href: '#/about', label: 'About' },
];

export default function Navbar({ currentRoute }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/70 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 shadow-lg"></div>
          <div className="text-lg font-semibold tracking-tight">Reflectech</div>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => {
            const active = `#${currentRoute}` === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative text-sm transition hover:text-white ${active ? 'text-white' : 'text-slate-300'}`}
              >
                {l.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"></span>
                )}
              </a>
            );
          })}
          <a href="#/repair" className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 transition">
            Get Support
          </a>
        </nav>
        <button onClick={() => setOpen((s) => !s)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-white/5">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 bg-slate-950/80">
          <nav className="mx-auto max-w-7xl px-4 py-3 space-y-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-slate-200 hover:bg-white/5">
                {l.label}
              </a>
            ))}
            <a href="#/repair" onClick={() => setOpen(false)} className="block text-center rounded-md px-3 py-2 bg-indigo-600 text-white hover:bg-indigo-500">Get Support</a>
          </nav>
        </div>
      )}
    </header>
  );
}
