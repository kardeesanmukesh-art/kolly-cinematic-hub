import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden border-t border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[70%] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl animate-pulse-glow"
      />
      <div className="relative mx-auto grid max-w-[1600px] gap-8 px-4 py-14 sm:px-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:px-10">
        <div className="min-w-0">
          <span className="text-display text-4xl tracking-[0.16em]">
            Kolly<span className="text-primary">wood</span>
          </span>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            A cinematic home for Tamil cinema — from the harbour gangs of North Chennai to the sugarcane
            fields of Thoothukudi. Curated posters, ratings and watchlists for the Kollywood faithful.
          </p>
        </div>
        <nav aria-label="Footer" className="flex min-w-0 flex-wrap gap-x-8 gap-y-2 md:justify-end">
          {[
            { to: "/movies", label: "All Movies" },
            { to: "/genres", label: "Genres" },
            { to: "/top-rated", label: "Top Rated" },
            { to: "/watchlist", label: "Watchlist" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="relative border-t border-border px-4 py-5 text-center text-xs text-muted-foreground sm:px-6 lg:px-10">
        © {new Date().getFullYear()} Kollywood. Sample catalogue for demonstration — artwork is illustrative.
      </div>
    </footer>
  );
}
