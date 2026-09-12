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
        {' '}
        <div className="flex min-h-screen items-center justify-center bg-slate-50">
          {' '}
          <div className="text-center">
            {' '}
            <span className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-violet-600" />{' '}
            <p className="mt-4 text-sm font-medium text-slate-600">
              {' '}
              Loading technologies...{' '}
            </p>{' '}
          </div>{' '}
        </div>{' '}
        <ToastContainer position="top-right" autoClose={2500} />{' '}
      </>
    );
  }
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {' '}
      <Navbar /> <Hero />{' '}
      <main
        id="technologies"
        className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20"
      >
        {' '}
        {/* Technologies Header */}{' '}
        <div className="text-left">
          {' '}
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {' '}
            Explore the <span className="gradient-text">Technologies</span>{' '}
          </h2>{' '}
          <p className="mt-3 max-w-xl text-sm text-slate-500 sm:text-base">
            {' '}
            Pick one technology per category to build your ideal stack.{' '}
          </p>{' '}
        </div>{' '}
        {/* Technologies + Stack */}{' '}
        <div className="mt-10 grid gap-8 lg:grid-cols-4">
          {' '}
          {/* Technology Cards */}{' '}
          <section className="lg:col-span-3">
            {' '}
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {' '}
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
              })}{' '}
            </div>{' '}
          </section>{' '}
          {/* Your Stack */}{' '}
          <aside className="h-fit rounded-xl border border-slate-200 bg-slate-50 p-5 lg:sticky lg:top-24">
            {' '}
            <div className="flex items-center justify-between gap-3">
              {' '}
              <div>
                {' '}
                <h2 className="text-lg font-bold text-slate-900">
                  {' '}
                  Your Stack{' '}
                </h2>{' '}
                <p className="mt-1 text-xs text-slate-500">
                  {' '}
                  {stack.length} selected{' '}
                </p>{' '}
              </div>{' '}
              {stack.length > 0 && (
                <button
                  type="button"
                  onClick={removeAll}
                  className="rounded-md border border-red-200 bg-white px-3 py-1.5 text-xs font-semibold text-red-500 transition hover:bg-red-50"
                >
                  {' '}
                  Remove All{' '}
                </button>
              )}{' '}
            </div>{' '}
            {stack.length === 0 ? (
              <div className="flex min-h-40 items-center justify-center text-center">
                {' '}
                <p className="max-w-xs text-sm leading-6 text-slate-400">
                  {' '}
                  Your stack is empty. Add technologies to get started.{' '}
                </p>{' '}
              </div>
            ) : (
              <div className="mt-5 space-y-3">
                {' '}
                {stack.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3"
                  >
                    {' '}
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-9 w-9 object-contain"
                    />{' '}
                    <div className="min-w-0 flex-1">
                      {' '}
                      <p className="truncate text-sm font-semibold text-slate-900">
                        {' '}
                        {technology.name}{' '}
                      </p>{' '}
                      <p className="text-xs text-slate-500">
                        {' '}
                        {technology.category}{' '}
                      </p>{' '}
                    </div>{' '}
                    <button
                      type="button"
                      onClick={() => removeFromStack(technology.id)}
                      aria-label={`Remove ${technology.name}`}
                      className="flex h-7 w-7 items-center justify-center rounded-full text-lg font-bold text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                    >
                      {' '}
                      ×{' '}
                    </button>{' '}
                  </div>
                ))}{' '}
              </div>
            )}{' '}
          </aside>{' '}
        </div>{' '}
      </main>{' '}
      <Footer />{' '}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        newestOnTop
        closeOnClick
        pauseOnHover
      />{' '}
    </div>
  );
}
export default App;
