import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MovieGrid } from "@/components/kollywood/MovieGrid";
import { allGenres, byGenre } from "@/data/movies";

export const Route = createFileRoute("/genres")({
  head: () => ({
    meta: [
      { title: "Tamil Movie Genres — KOLLYWOOD" },
      {
        name: "description",
        content:
          "Explore Tamil cinema by genre: action, thriller, crime, romance, comedy, horror, drama and biography picks.",
      },
      { property: "og:title", content: "Tamil Movie Genres — KOLLYWOOD" },
      {
        property: "og:description",
        content: "Action, romance, comedy, horror and more — browse Kollywood by genre.",
      },
    ],
  }),
  component: GenresPage,
});

function GenresPage() {
  const [active, setActive] = useState(allGenres[0]!);

  return (
    <div className="mx-auto max-w-[1600px] px-4 pt-28 pb-10 sm:px-6 lg:px-10">
      <header className="animate-fade-up">
        <h1 className="text-display text-5xl sm:text-6xl">
          Explore by <span className="text-primary">Genre</span>
        </h1>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground">
          Every mood of Tamil cinema, from harbour gang wars to terrace-top romances.
        </p>
      </header>

      <div className="no-scrollbar mt-8 flex gap-2.5 overflow-x-auto pb-2">
        {allGenres.map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => setActive(g)}
            aria-pressed={active === g}
            className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold tracking-[0.12em] uppercase transition-all duration-300 ${
              active === g
                ? "bg-primary text-primary-foreground shadow-glow"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      <h2 className="text-display mt-10 mb-5 text-3xl">
        {active} <span className="text-muted-foreground">({byGenre(active).length})</span>
      </h2>
      <MovieGrid movies={byGenre(active)} />
    </div>
  );
}
