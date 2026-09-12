
import type { Technology } from '../types/technology';

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

const badgeStyles: Record<string, string> = {
  Popular: 'bg-sky-100 text-sky-600',
  Flexible: 'bg-green-100 text-green-600',
  Modern: 'bg-teal-100 text-teal-600',
  'Full Stack': 'bg-violet-100 text-violet-600',
  Fast: 'bg-orange-100 text-orange-600',
  'Top SQL': 'bg-sky-100 text-sky-700',
  'Fast Data': 'bg-red-100 text-red-600',
  Essential: 'bg-yellow-100 text-yellow-600',
  'Type Safe': 'bg-blue-100 text-blue-600',
  Versatile: 'bg-sky-100 text-sky-600',
  Containers: 'bg-sky-100 text-sky-600',
};

function TechnologyCard({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) {
  const badgeClass =
    badgeStyles[technology.badge] ?? 'bg-slate-100 text-slate-600';

  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Icon + Badge */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-50 p-2">
          <img
            src={technology.icon}
            alt={`${technology.name} icon`}
            className="h-full w-full object-contain"
          />
        </div>

        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${badgeClass}`}
        >
          {technology.badge}
        </span>
      </div>

      {/* Content */}
      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="text-base font-bold text-slate-900">
          {technology.name}
        </h3>

        <p className="mt-2 line-clamp-3 text-xs leading-5 text-slate-500">
          {technology.description}
        </p>

        {/* Meta */}
        <div className="mt-4 flex items-center justify-between gap-2 border-t border-slate-100 pt-3 text-[11px]">
          <span className="rounded-full bg-slate-50 px-2.5 py-1 font-medium text-slate-500">
            {technology.category}
          </span>

          <span className="font-medium text-slate-500">
            {technology.difficulty}
          </span>

          <span className="font-semibold text-slate-600">
            <span className="text-amber-500">★</span> {technology.rating}
          </span>
        </div>

        {/* Add Button */}
        <button
          type="button"
          onClick={() => onAdd(technology)}
          disabled={isAdded}
          className={`mt-4 w-full rounded-lg py-2 text-xs font-semibold transition ${
            isAdded
              ? 'cursor-not-allowed bg-slate-200 text-slate-500'
              : 'bg-slate-900 text-white hover:bg-slate-800'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </article>
  );
}

export default TechnologyCard;

