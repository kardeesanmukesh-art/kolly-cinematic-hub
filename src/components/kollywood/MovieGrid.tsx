import type { Movie } from "@/data/movies";
import { MovieCard, MovieCardSkeleton } from "./MovieCard";

export function MovieGrid({ movies, loading = false }: { movies: Movie[]; loading?: boolean }) {
  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <MovieCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-border py-20 text-center">
        <p className="text-display text-3xl text-foreground/70">No movies found</p>
        <p className="mt-2 text-sm text-muted-foreground">Try a different search or clear your filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} className="animate-fade-up" />
      ))}
    </div>
  );
}
