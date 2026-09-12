import { useState } from 'react';
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
  };
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Technologies', href: '#technologies' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
      {' '}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8">
        {' '}
        {/* Brand */}{' '}
        <a
          href="#home"
          aria-label="Dev Stack home"
          className="flex items-center gap-2.5"
          onClick={closeMenu}
        >
          {' '}
          <span className="gradient-primary flex h-8 w-8 items-center justify-center rounded-lg text-xs font-extrabold text-white">
            {' '}
            DS{' '}
          </span>{' '}
          <span className="text-base font-bold tracking-tight text-slate-900">
            {' '}
            Dev Stack{' '}
          </span>{' '}
        </a>{' '}
        {/* Desktop Navigation */}{' '}
        <nav className="hidden items-center gap-7 md:flex">
          {' '}
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition ${link.label === 'Home' ? 'text-rose-500' : 'text-slate-600 hover:text-rose-500'}`}
            >
              {' '}
              {link.label}{' '}
            </a>
          ))}{' '}
        </nav>{' '}
        {/* Desktop Actions */}{' '}
        <div className="hidden items-center gap-2 md:flex">
          {' '}
          <button
            type="button"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-rose-500"
          >
            {' '}
            Sign In{' '}
          </button>{' '}
          <button
            type="button"
            className="rounded-full bg-linear-to-r from-rose-400 to-pink-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            {' '}
            Sign Up{' '}
          </button>{' '}
        </div>{' '}
        {/* Mobile Controls */}{' '}
        <div className="flex items-center gap-1 md:hidden">
          {' '}
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-50"
          >
            {' '}
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l12 12M18 6L6 18"
                />{' '}
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />{' '}
              </svg>
            )}{' '}
          </button>{' '}
          <button
            type="button"
            className="rounded-lg px-2 py-2 text-xs font-medium text-slate-600"
          >
            {' '}
            Sign In{' '}
          </button>{' '}
          <button
            type="button"
            className="rounded-full bg-linear-to-r from-rose-400 to-pink-600 px-3 py-2 text-xs font-semibold text-white"
          >
            {' '}
            Sign Up{' '}
          </button>{' '}
        </div>{' '}
      </div>{' '}
      {/* Mobile Menu */}{' '}
      {menuOpen && (
        <nav className="border-t border-slate-100 bg-white px-6 py-3 md:hidden">
          {' '}
          <div className="flex flex-col">
            {' '}
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className={`rounded-lg px-3 py-3 text-sm font-medium transition ${link.label === 'Home' ? 'bg-rose-50 text-rose-500' : 'text-slate-600 hover:bg-slate-50 hover:text-rose-500'}`}
              >
                {' '}
                {link.label}{' '}
              </a>
            ))}{' '}
          </div>{' '}
        </nav>
      )}{' '}
    </header>
  );
}
export default Navbar;
