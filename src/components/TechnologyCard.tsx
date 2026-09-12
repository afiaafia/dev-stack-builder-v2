import type { Technology } from '../types/technology';

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

function TechnologyCard({ technology, isAdded, onAdd }: TechnologyCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <img
        src={technology.icon}
        alt={technology.name}
        className="h-12 w-12 object-contain"
      />

      <div className="mt-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-bold">{technology.name}</h3>

          <span className="badge badge-sm">{technology.badge}</span>
        </div>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          {technology.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="badge badge-outline">{technology.category}</span>

          <span className="badge badge-outline">{technology.difficulty}</span>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="text-sm font-semibold text-slate-700">
            ★ {technology.rating}
          </span>

          <button
            type="button"
            onClick={() => onAdd(technology)}
            disabled={isAdded}
            className="rounded-full px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 gradient-primary disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
          </button>
        </div>
      </div>
    </article>
  );
}

export default TechnologyCard;
