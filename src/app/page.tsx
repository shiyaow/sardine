import { Suspense } from "react";
import { getTrendingFilms, getTopRatedFilms } from "../TMDB/film/services";
import { getTrendingTV, getTopRatedTV } from "../TMDB/tv/services";
import CategorySection from "./CategorySection";
import FilmCardPlaceholder from "../elements/FilmCardPlaceholder";

export const dynamic = "force-dynamic";

async function FilmContent() {
  const [trendingFilms, topRatedFilms, trendingTV, topRatedTV] =
    await Promise.all([
      getTrendingFilms(),
      getTopRatedFilms(),
      getTrendingTV(),
      getTopRatedTV(),
    ]);

  const categories = [
    {
      title: "Trending Films",
      items: trendingFilms,
      type: "movie",
    },
    {
      title: "Top Rated Films",
      items: topRatedFilms,
      type: "movie",
    },
    {
      title: "Trending TV Series",
      items: trendingTV,
      type: "tv",
    },
    {
      title: "Top Rated TV Series",
      items: topRatedTV,
      type: "tv",
    },
  ] as const;

  return (
    <div className="space-y-12">
      {categories.map((category) => (
        <CategorySection
          key={category.title}
          title={category.title}
          items={category.items}
          type={category.type}
        />
      ))}
    </div>
  );
}

export default function FilmsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">Popular Movies & TV Series</h1>

      <Suspense
        fallback={
          <div
            data-testid="film-card-placeholder"
            className="space-y-8 border-2 border-red-500"
          >
            {[...Array(4)].map((_, index) => (
              <div key={index} className="space-y-4">
                <div className="h-8 w-48 animate-pulse rounded bg-gray-200" />
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                  {[...Array(5)].map((_, i) => (
                    <FilmCardPlaceholder key={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        }
      >
        <FilmContent />
      </Suspense>
    </main>
  );
}

FilmsPage.displayName = "FilmsPage";
