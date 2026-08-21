import { Link } from "@tanstack/react-router";
import { Play, Star, Plus, Check, Clock } from "lucide-react";
import type { Movie } from "@/data/movies";
import backdrop from "@/assets/hero-backdrop.jpg";
import { useCollections } from "@/lib/collections";

export function HeroBanner({ movie }: { movie: Movie }) {
  const { inWatchlist, toggleWatchlist } = useCollections();
  const saved = inWatchlist(movie.id);

  return (
    <section className="film-grain relative min-h-[88vh] w-full overflow-hidden">
      <img
        src={backdrop}
        alt=""
        width={1920}
        height={1088}
        className="absolute inset-0 size-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/75 to-background/40" />
      <div className="absolute inset-0 bg-linear-to-r from-background via-background/60 to-transparent" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-[1600px] items-end px-4 pt-28 pb-16 sm:px-6 lg:px-10">
        <div className="grid w-full gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="min-w-0 max-w-2xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-bold tracking-[0.22em] text-primary uppercase">
              Now Trending
            </span>

            <h1 className="text-display mt-5 text-6xl sm:text-7xl lg:text-8xl">
              {movie.title}
            </h1>
            <p className="mt-2 text-xl text-muted-foreground">{movie.tamilTitle}</p>

            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
              <span className="flex items-center gap-1.5 font-bold text-gold">
                <Star className="size-4 fill-current" aria-hidden /> {movie.rating.toFixed(1)}
              </span>
              <span className="text-muted-foreground">{movie.year}</span>
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <Clock className="size-4" aria-hidden /> {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
              </span>
              <span className="flex flex-wrap gap-2">
                {movie.genres.map((g) => (
                  <span
                    key={g}
                    className="rounded-full border border-primary/40 px-2.5 py-0.5 text-xs font-semibold tracking-wide text-foreground/90"
                  >
                    {g}
                  </span>
                ))}
              </span>
            </div>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/80">{movie.overview}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/movie/$movieId"
                params={{ movieId: movie.id }}
                className="inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-bold tracking-[0.14em] text-primary-foreground uppercase shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:brightness-115"
              >
                <Play className="size-4 fill-current" aria-hidden /> Watch Trailer
              </Link>
              <button
                type="button"
                onClick={() => toggleWatchlist(movie.id)}
                className="inline-flex items-center gap-2.5 rounded-full glass px-7 py-3.5 text-sm font-bold tracking-[0.14em] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/70"
              >
                {saved ? <Check className="size-4 text-primary" /> : <Plus className="size-4" />}
                {saved ? "In Watchlist" : "Add to Watchlist"}
              </button>
            </div>
          </div>

          <div className="hidden w-[240px] shrink-0 animate-fade-in lg:block">
            <img
              src={movie.poster}
              alt={`${movie.title} poster`}
              width={512}
              height={768}
              className="w-full rounded-2xl object-cover ring-1 ring-primary/40 shadow-glow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
