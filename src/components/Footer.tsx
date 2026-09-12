function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-100 bg-white">
      {' '}
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 md:px-8">
        {' '}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {' '}
          {/* Brand */}{' '}
          <div>
            {' '}
            <a
              href="#home"
              aria-label="Dev Stack home"
              className="inline-flex items-center gap-2.5"
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
            <p className="mt-4 max-w-xs text-xs leading-5 text-slate-500">
              {' '}
              Curated tools, technologies, and resources for developers building
              modern software.{' '}
            </p>{' '}
            <div className="mt-5 flex items-center gap-4 text-xs font-medium text-slate-500">
              {' '}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-rose-500"
              >
                {' '}
                GitHub{' '}
              </a>{' '}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-rose-500"
              >
                {' '}
                Twitter{' '}
              </a>{' '}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-rose-500"
              >
                {' '}
                LinkedIn{' '}
              </a>{' '}
            </div>{' '}
          </div>{' '}
          {/* Product */}{' '}
          <div>
            {' '}
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-900">
              {' '}
              Product{' '}
            </h3>{' '}
            <ul className="mt-5 space-y-3 text-xs text-slate-500">
              {' '}
              <li>
                {' '}
                <a href="#home" className="transition hover:text-rose-500">
                  {' '}
                  Home{' '}
                </a>{' '}
              </li>{' '}
              <li>
                {' '}
                <a
                  href="#technologies"
                  className="transition hover:text-rose-500"
                >
                  {' '}
                  Technologies{' '}
                </a>{' '}
              </li>{' '}
              <li>
                {' '}
                <a href="#projects" className="transition hover:text-rose-500">
                  {' '}
                  Projects{' '}
                </a>{' '}
              </li>{' '}
            </ul>{' '}
          </div>{' '}
          {/* Company */}{' '}
          <div>
            {' '}
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-900">
              {' '}
              Company{' '}
            </h3>{' '}
            <ul className="mt-5 space-y-3 text-xs text-slate-500">
              {' '}
              <li>
                {' '}
                <a href="#about" className="transition hover:text-rose-500">
                  {' '}
                  About{' '}
                </a>{' '}
              </li>{' '}
              <li>
                {' '}
                <a href="#contact" className="transition hover:text-rose-500">
                  {' '}
                  Contact{' '}
                </a>{' '}
              </li>{' '}
              <li>
                {' '}
                <a href="#home" className="transition hover:text-rose-500">
                  {' '}
                  Careers{' '}
                </a>{' '}
              </li>{' '}
            </ul>{' '}
          </div>{' '}
          {/* Legal */}{' '}
          <div>
            {' '}
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-900">
              {' '}
              Legal{' '}
            </h3>{' '}
            <ul className="mt-5 space-y-3 text-xs text-slate-500">
              {' '}
              <li>
                {' '}
                <a href="#privacy" className="transition hover:text-rose-500">
                  {' '}
                  Privacy Policy{' '}
                </a>{' '}
              </li>{' '}
              <li>
                {' '}
                <a href="#terms" className="transition hover:text-rose-500">
                  {' '}
                  Terms of Service{' '}
                </a>{' '}
              </li>{' '}
            </ul>{' '}
          </div>{' '}
        </div>{' '}
        {/* Bottom */}{' '}
        <div className="mt-14 flex flex-col gap-3 border-t border-slate-100 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          {' '}
          <p>© 2024 DevStack. All rights reserved.</p>{' '}
          <div className="flex gap-5">
            {' '}
            <a href="#privacy" className="transition hover:text-rose-500">
              {' '}
              Privacy{' '}
            </a>{' '}
            <a href="#terms" className="transition hover:text-rose-500">
              {' '}
              Terms{' '}
            </a>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </footer>
  );
}
export default Footer;
