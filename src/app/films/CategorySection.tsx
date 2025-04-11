"use client";

import FilmCard from "../../elements/FilmCard";
import { TMDBMovie, TMDBTVShow } from "../../TMDB/types";

type Props = {
  title: string;
  items: (TMDBMovie | TMDBTVShow)[];
  type: "movie" | "tv";
};

export default function CategorySection({ title, items, type }: Props) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {items.map((item) => (
          <FilmCard
            key={item.id}
            title={
              type === "movie"
                ? (item as TMDBMovie).title
                : (item as TMDBTVShow).name
            }
            imageUrl={
              item.poster_path
                ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                : "/placeholder-poster.jpg"
            }
            rating={item.vote_average}
            year={new Date(
              type === "movie"
                ? (item as TMDBMovie).release_date
                : (item as TMDBTVShow).first_air_date,
            ).getFullYear()}
          />
        ))}
      </div>
    </section>
  );
}

CategorySection.displayName = "CategorySection";
