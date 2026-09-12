import bannerStack from '../assets/banner-stack.png';

function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-20 lg:grid-cols-2 lg:py-24">
        {/* Hero Content */}
        <div>
          <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-xs font-semibold text-violet-700">
            Build • Explore • Grow
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Build Your
            <span className="gradient-text"> Developer Stack</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Discover modern technologies, compare your options, and create a
            personalized stack that fits the way you build software.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#technologies"
              className="gradient-primary rounded-full px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-violet-300 hover:text-violet-600"
            >
              Learn More
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">
            <div>
              <span className="font-bold text-slate-900">12</span> Technologies
            </div>

            <div>
              <span className="font-bold text-slate-900">6</span> Categories
            </div>

            <div>
              <span className="font-bold text-slate-900">1</span> Personal Stack
            </div>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-[3rem] bg-linear-to-r from-orange-100 via-pink-100 to-violet-100 blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-xl">
            <img
              src={bannerStack}
              alt="Dev Stack Builder technology stack"
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
