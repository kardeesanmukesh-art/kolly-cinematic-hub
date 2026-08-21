import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Play, Star, Plus, Check, Heart, Clock, ArrowLeft } from "lucide-react";
import { getMovie, similarTo } from "@/data/movies";
import { MovieCarousel } from "@/components/kollywood/MovieCarousel";
import { useCollections } from "@/lib/collections";

export const Route = createFileRoute("/movie/$movieId")({
  loader: ({ params }) => {
    const movie = getMovie(params.movieId);
    if (!movie) throw notFound();
    return { movie };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Movie unavailable — KOLLYWOOD" }, { name: "robots", content: "noindex" }] };
    }
    const { movie } = loaderData;
    const title = `${movie.title} (${movie.year}) — KOLLYWOOD`;
    const description = movie.overview.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: MovieDetails,
});

function MovieDetails() {
  const { movie } = Route.useLoaderData();
  const { inWatchlist, isFavorite, toggleWatchlist, toggleFavorite } = useCollections();
  const saved = inWatchlist(movie.id);
  const loved = isFavorite(movie.id);

  return (
    <article>
      <div className="film-grain relative min-h-[70vh] overflow-hidden">
        <img src={movie.poster} alt="" className="absolute inset-0 size-full scale-110 object-cover blur-xl" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/85 to-background/50" />
        <div className="absolute inset-0 bg-linear-to-r from-background/95 to-transparent" />

        <div className="relative mx-auto max-w-[1600px] px-4 pt-28 pb-14 sm:px-6 lg:px-10">
          <Link
            to="/movies"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" /> All movies
          </Link>

          <div className="mt-8 grid gap-8 md:grid-cols-[240px_minmax(0,1fr)] lg:gap-12">
            <img
              src={movie.poster}
              alt={`${movie.title} poster`}
              width={512}
              height={768}
              className="w-[180px] animate-fade-in rounded-2xl object-cover ring-1 ring-primary/40 shadow-glow-lg md:w-full"
            />

            <div className="min-w-0 animate-fade-up">
              <h1 className="text-display text-5xl sm:text-6xl lg:text-7xl">{movie.title}</h1>
              <p className="mt-2 text-xl text-muted-foreground">{movie.tamilTitle}</p>
              <p className="mt-3 text-sm tracking-[0.16em] text-primary uppercase">{movie.tagline}</p>

              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                <span className="flex items-center gap-1.5 font-bold text-gold">
                  <Star className="size-4 fill-current" aria-hidden /> {movie.rating.toFixed(1)}
                </span>
                <span className="text-muted-foreground">{movie.year}</span>
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <Clock className="size-4" aria-hidden /> {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
                </span>
                <span className="text-muted-foreground">{movie.language}</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {movie.genres.map((g) => (
                  <span
                    key={g}
                    className="rounded-full border border-primary/40 px-3 py-1 text-xs font-semibold tracking-wide"
                  >
                    {g}
                  </span>
                ))}
              </div>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/85">{movie.overview}</p>

              <dl className="mt-7 grid max-w-2xl gap-5 sm:grid-cols-2">
                <div className="min-w-0">
                  <dt className="text-xs tracking-[0.18em] text-muted-foreground uppercase">Director</dt>
                  <dd className="mt-1 text-base font-semibold">{movie.director}</dd>
                </div>
                <div className="min-w-0">
                  <dt className="text-xs tracking-[0.18em] text-muted-foreground uppercase">Main cast</dt>
                  <dd className="mt-1 text-base font-semibold">{movie.cast.join(", ")}</dd>
                </div>
              </dl>

              <div className="mt-9 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-bold tracking-[0.14em] text-primary-foreground uppercase shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:brightness-115"
                >
                  <Play className="size-4 fill-current" aria-hidden /> Watch Trailer
                </button>
                <button
                  type="button"
                  onClick={() => toggleWatchlist(movie.id)}
                  className="inline-flex items-center gap-2.5 rounded-full glass px-7 py-3.5 text-sm font-bold tracking-[0.14em] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/70"
                >
                  {saved ? <Check className="size-4 text-primary" /> : <Plus className="size-4" />}
                  {saved ? "In Watchlist" : "Add to Watchlist"}
                </button>
                <button
                  type="button"
                  onClick={() => toggleFavorite(movie.id)}
                  aria-label={loved ? "Remove from favourites" : "Add to favourites"}
                  aria-pressed={loved}
                  className={`grid size-13 place-items-center rounded-full glass transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/70 ${
                    loved ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  <Heart className={`size-5 ${loved ? "fill-current" : ""}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MovieCarousel title="Similar Movies" emoji="🎞️" movies={similarTo(movie)} />
    </article>
  );
}
