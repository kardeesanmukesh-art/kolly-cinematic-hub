import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { movies } from "@/data/movies";

export const Route = createFileRoute("/top-rated")({
  head: () => ({
    meta: [
      { title: "Top Rated Tamil Movies — KOLLYWOOD" },
      {
        name: "description",
        content:
          "The highest rated Tamil films in the Kollywood catalogue, ranked by audience score — from Jai Bhim to Vikram.",
      },
      { property: "og:title", content: "Top Rated Tamil Movies — KOLLYWOOD" },
      {
        property: "og:description",
        content: "A ranked countdown of the best rated Kollywood films.",
      },
    ],
  }),
  component: TopRatedPage,
});

function TopRatedPage() {
  const ranked = [...movies].sort((a, b) => b.rating - a.rating);

  return (
    <div className="mx-auto max-w-[1600px] px-4 pt-28 pb-10 sm:px-6 lg:px-10">
      <header className="animate-fade-up">
        <h1 className="text-display text-5xl sm:text-6xl">
          Top <span className="text-primary">Rated</span>
        </h1>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground">
          Ranked by audience score. The definitive Kollywood countdown.
        </p>
      </header>

      <ol className="mt-10 space-y-4">
        {ranked.map((m, i) => (
          <li key={m.id} className="animate-fade-up">
            <Link
              to="/movie/$movieId"
              params={{ movieId: m.id }}
              className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-2xl glass p-3 transition-all duration-400 hover:border-primary/60 hover:shadow-glow sm:gap-6 sm:p-4"
            >
              <span className="text-display w-10 shrink-0 text-center text-4xl text-primary/70 transition-colors group-hover:text-primary sm:w-16 sm:text-5xl">
                {i + 1}
              </span>
              <div className="flex min-w-0 items-center gap-4">
                <img
                  src={m.poster}
                  alt={`${m.title} poster`}
                  loading="lazy"
                  width={512}
                  height={768}
                  className="h-20 w-14 shrink-0 rounded-lg object-cover sm:h-24 sm:w-16"
                />
                <div className="min-w-0">
                  <h2 className="text-display truncate text-2xl sm:text-3xl">{m.title}</h2>
                  <p className="truncate text-sm text-muted-foreground">
                    {m.year} · {m.genres.join(" / ")} · Dir. {m.director}
                  </p>
                </div>
              </div>
              <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-surface-2 px-3 py-1.5 text-sm font-bold text-gold">
                <Star className="size-4 fill-current" aria-hidden /> {m.rating.toFixed(1)}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
