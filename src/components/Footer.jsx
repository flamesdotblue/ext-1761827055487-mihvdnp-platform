export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5 bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400" />
            <div>
              <p className="text-white font-semibold">Reflectech</p>
              <p className="text-sm text-slate-400">We are your personal IT</p>
            </div>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <a className="text-slate-300 hover:text-white" href="#/">Home</a>
            <a className="text-slate-300 hover:text-white" href="#/repair">Online Repair</a>
            <a className="text-slate-300 hover:text-white" href="#/counseling">Counseling</a>
            <a className="text-slate-300 hover:text-white" href="#/about">About</a>
          </nav>
        </div>
        <div className="mt-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} Reflectech. All rights reserved.</div>
      </div>
    </footer>
  );
}
