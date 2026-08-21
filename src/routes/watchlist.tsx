import { createFileRoute, Link } from "@tanstack/react-router";
import { Bookmark, Heart, Trash2 } from "lucide-react";
import { MovieGrid } from "@/components/kollywood/MovieGrid";
import { MovieCardSkeleton } from "@/components/kollywood/MovieCard";
import { getMovie } from "@/data/movies";
import { useCollections } from "@/lib/collections";

export const Route = createFileRoute("/watchlist")({
  head: () => ({
    meta: [
      { title: "My Watchlist — KOLLYWOOD" },
      {
        name: "description",
        content: "Your saved Tamil movies and favourites, stored right in your browser and ready when you are.",
      },
      { property: "og:title", content: "My Watchlist — KOLLYWOOD" },
      { property: "og:description", content: "Saved Tamil movies and favourites in one cinematic place." },
    ],
  }),
  component: WatchlistPage,
});

function WatchlistPage() {
  const { watchlist, favorites, hydrated, removeFromWatchlist } = useCollections();
  const saved = watchlist.map(getMovie).filter((m): m is NonNullable<typeof m> => Boolean(m));
  const loved = favorites.map(getMovie).filter((m): m is NonNullable<typeof m> => Boolean(m));

  return (
    <div className="mx-auto max-w-[1600px] px-4 pt-28 pb-10 sm:px-6 lg:px-10">
      <header className="animate-fade-up">
        <h1 className="text-display text-5xl sm:text-6xl">
          My <span className="text-primary">Watchlist</span>
        </h1>
        <p className="mt-3 text-base text-muted-foreground">
          Saved on this device — {saved.length} to watch, {loved.length} favourited.
        </p>
      </header>

      {!hydrated ? (
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <MovieCardSkeleton key={i} />
          ))}
        </div>
      ) : saved.length === 0 ? (
        <div className="mt-12 animate-fade-up overflow-hidden rounded-3xl glass px-6 py-20 text-center">
          <div className="relative mx-auto grid size-20 place-items-center rounded-full bg-primary/15">
            <div
              aria-hidden
              className="absolute inset-0 rounded-full bg-primary/25 blur-2xl animate-pulse-glow"
            />
            <Bookmark className="relative size-9 text-primary" />
          </div>
          <h2 className="text-display mt-7 text-4xl">Your reel is empty</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Tap the bookmark on any poster to line it up here. Start with the trending Kollywood hits or the
            all-time top rated countdown.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/movies"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-bold tracking-[0.14em] text-primary-foreground uppercase shadow-glow transition-all hover:-translate-y-0.5 hover:brightness-115"
            >
              Browse Movies
            </Link>
            <Link
              to="/top-rated"
              className="rounded-full glass px-7 py-3.5 text-sm font-bold tracking-[0.14em] uppercase transition-all hover:-translate-y-0.5 hover:border-primary/70"
            >
              Top Rated
            </Link>
          </div>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
          {saved.map((m) => (
            <div key={m.id} className="animate-fade-up">
              <Link
                to="/movie/$movieId"
                params={{ movieId: m.id }}
                className="group block overflow-hidden rounded-2xl ring-1 ring-border transition-all duration-500 hover:ring-primary/70 hover:shadow-glow"
              >
                <div className="relative aspect-2/3">
                  <img
                    src={m.poster}
                    alt={`${m.title} poster`}
                    loading="lazy"
                    width={512}
                    height={768}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3">
                    <h2 className="text-display truncate text-xl">{m.title}</h2>
                    <p className="truncate text-xs text-muted-foreground">
                      {m.year} · {m.genres[0]}
                    </p>
                  </div>
                </div>
              </Link>
              <button
                type="button"
                onClick={() => removeFromWatchlist(m.id)}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-surface py-2 text-xs font-bold tracking-[0.14em] text-muted-foreground uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Trash2 className="size-3.5" /> Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {hydrated && loved.length > 0 && (
        <section className="mt-16">
          <h2 className="text-display flex items-center gap-2.5 text-3xl">
            <Heart className="size-6 fill-current text-primary" aria-hidden /> Favourites
          </h2>
          <div className="mt-6">
            <MovieGrid movies={loved} />
          </div>
        </section>
      )}
    </div>
  );
}
