import bannerStack from '../assets/banner-stack.png';

function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:px-8 md:py-20 lg:grid-cols-2 lg:py-24">
        {/* Hero Content */}
        <div>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Build Your Ideal
            <br />
            <span className="gradient-text">Development Stack</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-7 text-slate-500">
            Discover modern technologies, compare your options, and create a
            personalized stack that fits the way you build software.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#technologies"
              className="gradient-primary rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute inset-8 rounded-full bg-cyan-100/40 blur-3xl" />

          <img
            src={bannerStack}
            alt="Dev Stack Builder technology stack"
            className="relative h-auto w-full max-w-xl object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
