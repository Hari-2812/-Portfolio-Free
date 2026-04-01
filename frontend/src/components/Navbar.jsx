import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/dev1', label: 'Developer 1' },
  { to: '/dev2', label: 'Developer 2' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-white/10 bg-black/45 backdrop-blur-xl' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link to="/" className="group">
          <p className="font-display text-2xl font-extrabold leading-none gradient-text">CodeForge</p>
          <p className="text-[11px] uppercase tracking-[0.18em] text-orange-300/80">Forging Digital Solutions</p>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `relative py-1 text-sm ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'}`}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#ff6a00] to-[#ff3c00] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
