import logoText from '../assets/logo-text.png';

function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center"
              aria-label="Dev Stack home"
            >
              <img
                src={logoText}
                alt="Dev Stack"
                className="h-9 w-auto object-contain"
              />
            </a>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
              Explore modern technologies and build a development stack that
              fits your goals.
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-sm font-bold text-slate-600 transition hover:border-violet-300 hover:text-violet-600"
              >
                GH
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-sm font-bold text-slate-600 transition hover:border-violet-300 hover:text-violet-600"
              >
                X
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-sm font-bold text-slate-600 transition hover:border-violet-300 hover:text-violet-600"
              >
                in
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-bold text-slate-900">Product</h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li>
                <a
                  href="#technologies"
                  className="transition hover:text-violet-600"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="transition hover:text-violet-600"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#technologies"
                  className="transition hover:text-violet-600"
                >
                  Your Stack
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold text-slate-900">Company</h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li>
                <a href="#about" className="transition hover:text-violet-600">
                  About
                </a>
              </li>

              <li>
                <a href="#contact" className="transition hover:text-violet-600">
                  Contact
                </a>
              </li>

              <li>
                <a href="#home" className="transition hover:text-violet-600">
                  Home
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold text-slate-900">Legal</h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li>
                <a href="#privacy" className="transition hover:text-violet-600">
                  Privacy
                </a>
              </li>

              <li>
                <a href="#terms" className="transition hover:text-violet-600">
                  Terms
                </a>
              </li>

              <li>
                <a href="#contact" className="transition hover:text-violet-600">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#privacy" className="transition hover:text-violet-600">
              Privacy
            </a>

            <a href="#terms" className="transition hover:text-violet-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
