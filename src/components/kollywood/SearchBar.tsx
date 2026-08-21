import { Search, X } from "lucide-react";

type Props = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
};

export function SearchBar({ value, onChange, placeholder = "Search Tamil movies...", autoFocus }: Props) {
  return (
    <div className="group relative">
      <div className="pointer-events-none absolute -inset-px rounded-full bg-linear-to-r from-primary/50 via-primary/10 to-transparent opacity-0 blur-md transition-opacity duration-500 group-focus-within:opacity-100" />
      <div className="relative flex items-center gap-3 rounded-full glass px-5 py-3 transition-colors duration-300 group-focus-within:border-primary/60">
        <Search className="size-5 shrink-0 text-primary" aria-hidden />
        <input
          type="search"
          value={value}
          autoFocus={autoFocus}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          aria-label="Search Tamil movies by name, actor, director, genre or year"
          className="min-w-0 flex-1 bg-transparent text-base text-foreground outline-hidden placeholder:text-muted-foreground"
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            aria-label="Clear search"
            className="grid size-7 shrink-0 place-items-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <X className="size-4" />
          </button>
        )}
      </div>
    </div>
  );
}
