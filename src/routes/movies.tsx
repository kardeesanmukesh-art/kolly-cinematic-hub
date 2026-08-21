import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SearchBar } from "@/components/kollywood/SearchBar";
import { FilterPanel, applyFilters, emptyFilters, type Filters } from "@/components/kollywood/FilterPanel";
import { MovieGrid } from "@/components/kollywood/MovieGrid";
import { allActors, allDirectors, allGenres, allYears, movies, searchMovies } from "@/data/movies";

export const Route = createFileRoute("/movies")({
  head: () => ({
    meta: [
      { title: "Browse Tamil Movies — KOLLYWOOD" },
      {
        name: "description",
        content:
          "Search the Kollywood catalogue by movie name, actor, director, genre or year, and filter instantly by rating.",
      },
      { property: "og:title", content: "Browse Tamil Movies — KOLLYWOOD" },
      {
        property: "og:description",
        content: "Instant Tamil movie search with genre, year, rating, actor and director filters.",
      },
    ],
  }),
  component: MoviesPage,
});

function MoviesPage() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<Filters>(emptyFilters);

  const results = useMemo(() => {
    const base = query.trim() ? searchMovies(query) : movies;
    return applyFilters(base, filters);
  }, [query, filters]);

  return (
    <div className="mx-auto max-w-[1600px] px-4 pt-28 pb-10 sm:px-6 lg:px-10">
      <header className="max-w-3xl animate-fade-up">
        <h1 className="text-display text-5xl sm:text-6xl">
          Browse <span className="text-primary">Tamil</span> Cinema
        </h1>
        <p className="mt-3 text-base text-muted-foreground">
          Search by movie name, actor, director, genre or year — results update as you type.
        </p>
      </header>

      <div className="mt-7 max-w-2xl">
        <SearchBar value={query} onChange={setQuery} />
      </div>

      <div className="mt-6">
        <FilterPanel
          filters={filters}
          onChange={setFilters}
          genres={allGenres}
          years={allYears}
          actors={allActors}
          directors={allDirectors}
        />
      </div>

      <p className="mt-8 mb-5 text-sm tracking-[0.18em] text-muted-foreground uppercase">
        {results.length} {results.length === 1 ? "title" : "titles"}
      </p>
      <MovieGrid movies={results} />
    </div>
  );
}
