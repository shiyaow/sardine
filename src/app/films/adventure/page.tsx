import FilmCard from "../../../elements/FilmCard";
import { adventureFilms } from "../../../data/mockFilms";

export default function AdventureFilmsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Adventure Films</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {adventureFilms.map((film) => (
          <FilmCard
            key={film.id}
            title={film.title}
            imageUrl={film.imageUrl}
            rating={film.rating}
            year={film.year}
          />
        ))}
      </div>
    </div>
  );
}
