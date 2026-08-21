import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Movie } from "@/data/movies";
import { MovieCard, MovieCardSkeleton } from "./MovieCard";

type Props = {
  title: string;
  emoji?: string;
  movies: Movie[];
  loading?: boolean;
};

export function MovieCarousel({ title, emoji, movies, loading = false }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(el.clientWidth * 0.8, 240), behavior: "smooth" });
  };

  return (
    <section className="animate-fade-up py-7">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <div className="min-w-0">
            <h2 className="text-display flex min-w-0 items-baseline gap-2.5 text-3xl sm:text-4xl">
              {emoji && (
                <span aria-hidden className="text-2xl sm:text-3xl">
                  {emoji}
                </span>
              )}
              <span className="truncate">{title}</span>
            </h2>
            <div className="mt-2 h-px w-24 bg-linear-to-r from-primary to-transparent" />
          </div>
          <div className="hidden shrink-0 gap-2 sm:flex">
            {([-1, 1] as const).map((dir) => (
              <button
                key={dir}
                type="button"
                onClick={() => scrollBy(dir)}
                aria-label={dir === -1 ? `Scroll ${title} left` : `Scroll ${title} right`}
                className="grid size-10 place-items-center rounded-full glass text-foreground/80 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-glow"
              >
                {dir === -1 ? <ChevronLeft className="size-5" /> : <ChevronRight className="size-5" />}
              </button>
            ))}
          </div>
        </div>

        <div
          ref={trackRef}
          className="no-scrollbar mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4"
        >
          {(loading ? Array.from({ length: 6 }) : movies).map((item, i) => (
            <div
              key={loading ? i : (item as Movie).id}
              className="w-[150px] shrink-0 snap-start sm:w-[180px] lg:w-[210px]"
            >
              {loading ? <MovieCardSkeleton /> : <MovieCard movie={item as Movie} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
