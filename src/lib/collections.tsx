import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type Key = "kollywood:watchlist" | "kollywood:favorites";

function read(key: Key): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((v): v is string => typeof v === "string") : [];
  } catch {
    return [];
  }
}

type CollectionsValue = {
  watchlist: string[];
  favorites: string[];
  hydrated: boolean;
  inWatchlist: (id: string) => boolean;
  isFavorite: (id: string) => boolean;
  toggleWatchlist: (id: string) => void;
  toggleFavorite: (id: string) => void;
  removeFromWatchlist: (id: string) => void;
};

const CollectionsContext = createContext<CollectionsValue | null>(null);

export function CollectionsProvider({ children }: { children: ReactNode }) {
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setWatchlist(read("kollywood:watchlist"));
    setFavorites(read("kollywood:favorites"));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem("kollywood:watchlist", JSON.stringify(watchlist));
  }, [watchlist, hydrated]);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem("kollywood:favorites", JSON.stringify(favorites));
  }, [favorites, hydrated]);

  const toggle = useCallback(
    (setter: (fn: (prev: string[]) => string[]) => void) => (id: string) =>
      setter((prev) => (prev.includes(id) ? prev.filter((v) => v !== id) : [id, ...prev])),
    [],
  );

  const value = useMemo<CollectionsValue>(
    () => ({
      watchlist,
      favorites,
      hydrated,
      inWatchlist: (id) => watchlist.includes(id),
      isFavorite: (id) => favorites.includes(id),
      toggleWatchlist: toggle(setWatchlist),
      toggleFavorite: toggle(setFavorites),
      removeFromWatchlist: (id) => setWatchlist((prev) => prev.filter((v) => v !== id)),
    }),
    [watchlist, favorites, hydrated, toggle],
  );

  return <CollectionsContext.Provider value={value}>{children}</CollectionsContext.Provider>;
}

export function useCollections() {
  const ctx = useContext(CollectionsContext);
  if (!ctx) throw new Error("useCollections must be used inside CollectionsProvider");
  return ctx;
}
