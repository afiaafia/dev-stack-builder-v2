import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import type { Technology } from './types/technology';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnologyCard from './components/TechnologyCard';
import Footer from './components/Footer';

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch('/data/technologies.json');

        if (!response.ok) {
          throw new Error('Failed to load technologies');
        }

        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.error('Technology loading error:', error);
        toast.error('Failed to load technologies.');
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  const addToStack = (technology: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((currentStack) => [...currentStack, technology]);

    toast.success(`${technology.name} added to your stack.`);
  };

  const removeFromStack = (technologyId: string) => {
    const technologyToRemove = stack.find((item) => item.id === technologyId);

    if (technologyToRemove) {
      toast.info(`${technologyToRemove.name} removed from your stack.`);
    }

    setStack((currentStack) =>
      currentStack.filter((item) => item.id !== technologyId)
    );
  };

  const removeAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.info('All technologies removed from your stack.');
  };

  if (loading) {
    return (
      <>
        <div className="flex min-h-screen items-center justify-center bg-slate-50">
          <div className="text-center">
            <span className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-violet-600" />

            <p className="mt-4 text-sm font-medium text-slate-600">
              Loading technologies...
            </p>
          </div>
        </div>

        <ToastContainer position="top-right" autoClose={2500} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <Hero />

      <main className="mx-auto max-w-7xl px-6 py-16">
        {/* Technologies Header */}
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-slate-500">
            Dev Stack Builder
          </p>

          <h2 className="gradient-text text-4xl font-bold sm:text-5xl">
            Explore Technologies
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Choose the technologies that fit your development workflow and build
            your personalized stack.
          </p>
        </div>

        {/* Technologies + Stack */}
        <div
          id="technologies"
          className="mt-12 grid gap-8 lg:grid-cols-[1fr_320px]"
        >
          <section>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Technologies</h2>

                <p className="mt-1 text-sm text-slate-500">
                  Explore available technologies and add them to your stack.
                </p>
              </div>

              <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-600">
                {technologies.length} Technologies
              </span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {technologies.map((technology) => {
                const isAdded = stack.some((item) => item.id === technology.id);

                return (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    isAdded={isAdded}
                    onAdd={addToStack}
                  />
                );
              })}
            </div>
          </section>

          {/* Your Stack */}
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold">Your Stack</h2>

                <p className="mt-1 text-sm text-slate-500">
                  {stack.length} selected
                </p>
              </div>

              {stack.length > 0 && (
                <button
                  type="button"
                  onClick={removeAll}
                  className="text-sm font-semibold text-red-500 transition hover:text-red-600 hover:underline"
                >
                  Remove All
                </button>
              )}
            </div>

            {stack.length === 0 ? (
              <div className="mt-6 rounded-xl bg-slate-50 p-6 text-center">
                <p className="text-sm leading-6 text-slate-500">
                  Your stack is empty. Add technologies to get started.
                </p>
              </div>
            ) : (
              <div className="mt-6 space-y-3">
                {stack.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 p-3"
                  >
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-9 w-9 object-contain"
                    />

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold">
                        {technology.name}
                      </p>

                      <p className="text-xs text-slate-500">
                        {technology.category}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromStack(technology.id)}
                      aria-label={`Remove ${technology.name}`}
                      className="flex h-7 w-7 items-center justify-center rounded-full text-lg font-bold text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>

        {/* About */}
        <section
          id="about"
          className="mt-24 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              About Dev Stack
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Build your stack with confidence.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Dev Stack Builder helps developers explore popular technologies,
              understand where they fit, and create a personalized technology
              stack. Select the tools you want to work with and keep your
              development choices organized in one place.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-24">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Projects
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Build with your stack
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-slate-600">
              Choose technologies that match your project requirements and
              development goals.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: 'Frontend Applications',
                description:
                  'Create responsive and interactive user interfaces with modern frontend technologies.',
              },
              {
                title: 'Backend Services',
                description:
                  'Build scalable APIs and server-side applications with reliable backend tools.',
              },
              {
                title: 'Full-Stack Products',
                description:
                  'Combine frontend, backend, databases, and DevOps tools into complete applications.',
              },
            ].map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold">{project.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </div>
  );
}

export default App;
