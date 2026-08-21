import { SlidersHorizontal, RotateCcw } from "lucide-react";

export type Filters = {
  genre: string;
  year: string;
  rating: string;
  actor: string;
  director: string;
};

export const emptyFilters: Filters = { genre: "", year: "", rating: "", actor: "", director: "" };

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-300 ${
        active
          ? "bg-primary text-primary-foreground shadow-glow"
          : "bg-surface text-muted-foreground ring-1 ring-border hover:text-foreground hover:ring-primary/50"
      }`}
    >
      {label}
    </button>
  );
}

function Select({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <label className="block min-w-0">
      <span className="mb-1.5 block text-xs tracking-[0.18em] text-muted-foreground uppercase">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-xl border px-3 py-2.5 text-sm outline-hidden transition-colors ${
          value
            ? "border-primary/70 bg-primary/15 text-foreground"
            : "border-border bg-surface text-muted-foreground hover:border-primary/40"
        }`}
      >
        <option value="">All {label.toLowerCase()}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

type Props = {
  filters: Filters;
  onChange: (f: Filters) => void;
  genres: string[];
  years: number[];
  actors: string[];
  directors: string[];
};

export function FilterPanel({ filters, onChange, genres, years, actors, directors }: Props) {
  const set = (patch: Partial<Filters>) => onChange({ ...filters, ...patch });
  const dirty = Object.values(filters).some(Boolean);

  return (
    <div className="rounded-3xl glass p-5 sm:p-6">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <div className="flex min-w-0 items-center gap-2.5">
          <SlidersHorizontal className="size-4 shrink-0 text-primary" aria-hidden />
          <h2 className="text-display truncate text-xl">Filters</h2>
        </div>
        {dirty && (
          <button
            type="button"
            onClick={() => onChange(emptyFilters)}
            className="flex shrink-0 items-center gap-1.5 text-xs font-semibold tracking-wide text-primary uppercase transition-opacity hover:opacity-70"
          >
            <RotateCcw className="size-3.5" /> Reset
          </button>
        )}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {genres.map((g) => (
          <Chip
            key={g}
            label={g}
            active={filters.genre === g}
            onClick={() => set({ genre: filters.genre === g ? "" : g })}
          />
        ))}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Select label="Year" value={filters.year} options={years.map(String)} onChange={(year) => set({ year })} />
        <Select
          label="Rating"
          value={filters.rating}
          options={["9+", "8.5+", "8+", "7.5+", "7+"]}
          onChange={(rating) => set({ rating })}
        />
        <Select label="Actor" value={filters.actor} options={actors} onChange={(actor) => set({ actor })} />
        <Select
          label="Director"
          value={filters.director}
          options={directors}
          onChange={(director) => set({ director })}
        />
      </div>
    </div>
  );
}

export function applyFilters<T extends { genres: string[]; year: number; rating: number; cast: string[]; director: string }>(
  list: T[],
  f: Filters,
): T[] {
  const min = f.rating ? Number.parseFloat(f.rating) : 0;
  return list.filter(
    (m) =>
      (!f.genre || m.genres.includes(f.genre)) &&
      (!f.year || m.year === Number(f.year)) &&
      (!f.rating || m.rating >= min) &&
      (!f.actor || m.cast.includes(f.actor)) &&
      (!f.director || m.director === f.director),
  );
}
