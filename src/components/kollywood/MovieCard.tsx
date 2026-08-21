import { Link } from "@tanstack/react-router";
import { Star, Bookmark, BookmarkCheck } from "lucide-react";
import type { Movie } from "@/data/movies";
import { useCollections } from "@/lib/collections";

export function MovieCard({ movie, className = "" }: { movie: Movie; className?: string }) {
  const { inWatchlist, toggleWatchlist } = useCollections();
  const saved = inWatchlist(movie.id);

  return (
    <div className={`group relative ${className}`}>
      <Link
        to="/movie/$movieId"
        params={{ movieId: movie.id }}
        className="block overflow-hidden rounded-2xl bg-surface ring-1 ring-border transition-all duration-500 group-hover:-translate-y-2 group-hover:ring-primary/70 group-hover:shadow-glow"
      >
        <div className="relative aspect-2/3 overflow-hidden">
          <img
            src={movie.poster}
            alt={`${movie.title} (${movie.year}) poster`}
            loading="lazy"
            width={512}
            height={768}
            className="size-full object-cover transition-transform duration-700 group-hover:scale-108"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/25 to-transparent opacity-85" />
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-linear-to-t from-primary/45 via-transparent to-transparent" />

          <span className="absolute top-2.5 left-2.5 flex items-center gap-1 rounded-full glass px-2 py-0.5 text-xs font-semibold text-gold">
            <Star className="size-3 fill-current" aria-hidden />
            {movie.rating.toFixed(1)}
          </span>

          <div className="absolute inset-x-0 bottom-0 p-3">
            <h3 className="text-display truncate text-xl text-foreground">{movie.title}</h3>
            <p className="mt-0.5 truncate text-xs tracking-wide text-muted-foreground">
              {movie.year} · {movie.genres.slice(0, 2).join(" / ")}
            </p>
          </div>
        </div>
      </Link>

      <button
        type="button"
        onClick={() => toggleWatchlist(movie.id)}
        aria-label={saved ? `Remove ${movie.title} from watchlist` : `Add ${movie.title} to watchlist`}
        className={`absolute top-2 right-2 grid size-9 place-items-center rounded-full glass transition-all duration-300 hover:bg-primary hover:text-primary-foreground ${
          saved ? "text-primary" : "text-foreground/80 opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
        }`}
      >
        {saved ? <BookmarkCheck className="size-4" /> : <Bookmark className="size-4" />}
      </button>
    </div>
  );
}

export function MovieCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl ring-1 ring-border">
      <div className="skeleton aspect-2/3 w-full" />
    </div>
  );
}
