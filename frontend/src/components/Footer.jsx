export default function Footer() {
  return (
    <footer className="mx-auto mt-16 max-w-7xl border-t border-white/10 px-4 py-10 text-sm text-slate-400 md:px-8">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="font-display text-2xl font-extrabold gradient-text">CodeForge</p>
          <p>Forging Digital Solutions</p>
        </div>
        <p>© {new Date().getFullYear()} CodeForge. All rights reserved.</p>
      </div>
    </footer>
  );
}
