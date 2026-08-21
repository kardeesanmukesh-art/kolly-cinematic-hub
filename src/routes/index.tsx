import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { HeroBanner } from "@/components/kollywood/HeroBanner";
import { MovieCarousel } from "@/components/kollywood/MovieCarousel";
import { byGenre, classics, getMovie, heroMovieId, latest, topRated, trending } from "@/data/movies";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KOLLYWOOD — Premium Tamil Movie Discovery" },
      {
        name: "description",
        content:
          "Discover Tamil cinema in style: trending Kollywood hits, top rated classics, latest releases, genre carousels and your own watchlist.",
      },
      { property: "og:title", content: "KOLLYWOOD — Premium Tamil Movie Discovery" },
      {
        property: "og:description",
        content: "Trending Tamil movies, top rated Kollywood classics and a watchlist that remembers you.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const hero = getMovie(heroMovieId)!;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 550);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <HeroBanner movie={hero} />
      <div className="relative z-10 -mt-8">
        <MovieCarousel title="Trending Tamil Movies" emoji="🔥" movies={trending} loading={loading} />
        <MovieCarousel title="Top Rated" emoji="⭐" movies={topRated} loading={loading} />
        <MovieCarousel title="Latest Releases" emoji="🆕" movies={latest} loading={loading} />
        <MovieCarousel title="Action Movies" emoji="🎭" movies={byGenre("Action")} loading={loading} />
        <MovieCarousel title="Romance Movies" emoji="❤️" movies={byGenre("Romance")} loading={loading} />
        <MovieCarousel title="Comedy Movies" emoji="😂" movies={byGenre("Comedy")} loading={loading} />
        <MovieCarousel title="Horror Movies" emoji="👻" movies={byGenre("Horror")} loading={loading} />
        <MovieCarousel title="Classic Tamil Movies" emoji="🎬" movies={classics} loading={loading} />
      </div>
    </>
  );
}
