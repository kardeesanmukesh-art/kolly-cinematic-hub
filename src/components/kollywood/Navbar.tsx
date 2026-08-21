import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Search, Heart, Menu, X, UserRound } from "lucide-react";
import { useCollections } from "@/lib/collections";

const links = [
  { to: "/", label: "Home" },
  { to: "/movies", label: "Movies" },
  { to: "/genres", label: "Genres" },
  { to: "/top-rated", label: "Top Rated" },
  { to: "/watchlist", label: "Watchlist" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { favorites } = useCollections();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "glass shadow-card" : "bg-linear-to-b from-background/90 to-transparent"
      }`}
    >
      <nav className="mx-auto grid max-w-[1600px] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-4 py-3.5 sm:px-6 lg:px-10">
        <Link to="/" className="group flex shrink-0 items-center gap-2">
          <span className="grid size-9 place-items-center rounded-lg bg-primary text-display text-xl leading-none text-primary-foreground shadow-glow">
            K
          </span>
          <span className="text-display text-2xl tracking-[0.16em] sm:text-3xl">
            Kolly<span className="text-primary">wood</span>
          </span>
        </Link>

        <ul className="hidden min-w-0 items-center justify-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="relative text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase transition-colors hover:text-foreground data-[status=active]:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full data-[status=active]:after:w-full"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-1.5">
          <Link
            to="/movies"
            aria-label="Search movies"
            className="grid size-10 place-items-center rounded-full text-foreground/80 transition-colors hover:bg-primary/15 hover:text-primary"
          >
            <Search className="size-5" />
          </Link>
          <Link
            to="/watchlist"
            aria-label="Favorites"
            className="relative grid size-10 place-items-center rounded-full text-foreground/80 transition-colors hover:bg-primary/15 hover:text-primary"
          >
            <Heart className="size-5" />
            {favorites.length > 0 && (
              <span className="absolute top-1.5 right-1.5 grid size-4 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {favorites.length}
              </span>
            )}
          </Link>
          <button
            type="button"
            aria-label="User profile"
            className="hidden size-10 place-items-center rounded-full ring-1 ring-border transition-colors hover:ring-primary sm:grid"
          >
            <UserRound className="size-5 text-foreground/80" />
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-11 place-items-center rounded-full text-foreground lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="animate-fade-in border-t border-border px-4 pb-5 lg:hidden">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="block border-b border-border/60 py-4 text-display text-2xl text-muted-foreground data-[status=active]:text-primary"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
