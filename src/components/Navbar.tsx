import { useState } from 'react';
import logoText from '../assets/logo-text.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="relative mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
        {/* Desktop Logo */}
        <a
          href="#home"
          className="hidden items-center md:flex"
          aria-label="Dev Stack home"
        >
          <img
            src={logoText}
            alt="Dev Stack"
            className="h-9 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm font-medium text-slate-700 transition hover:text-violet-600"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="text-sm font-medium text-slate-700 transition hover:text-violet-600"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-slate-700 transition hover:text-violet-600"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-slate-700 transition hover:text-violet-600"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-slate-700 transition hover:text-violet-600"
          >
            Contact
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            className="px-3 py-2 text-sm font-semibold text-slate-700 transition hover:text-violet-600"
          >
            Sign In
          </button>

          <button
            type="button"
            className="gradient-primary rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex w-full items-center justify-between md:hidden">
          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Center Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="absolute left-1/2 -translate-x-1/2"
            aria-label="Dev Stack home"
          >
            <img
              src={logoText}
              alt="Dev Stack"
              className="h-8 w-auto object-contain"
            />
          </a>

          {/* Mobile Actions */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="px-2 py-2 text-xs font-semibold text-slate-700 transition hover:text-violet-600"
            >
              Sign In
            </button>

            <button
              type="button"
              className="gradient-primary rounded-full px-3 py-2 text-xs font-semibold text-white"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            <a
              href="#home"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-violet-600"
            >
              Home
            </a>

            <a
              href="#technologies"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-violet-600"
            >
              Technologies
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-violet-600"
            >
              Projects
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-violet-600"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-violet-600"
            >
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
