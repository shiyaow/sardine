import Image from "next/image";
import StarIcon from "./StarIcon";

interface FilmCardProps {
  title: string;
  imageUrl: string;
  rating: number;
  year: number;
}

const FilmCard = ({ title, imageUrl, rating, year }: FilmCardProps) => {
  return (
    <div
      data-testid="film-card-container"
      className="group relative h-[450px] w-[300px] overflow-hidden rounded-lg"
    >
      <div className="relative h-full w-full">
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={450}
          priority
          className="h-full w-full cursor-pointer object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div
            data-testid="film-card-info"
            className="absolute bottom-0 left-0 right-0 w-full p-4 text-white"
          >
            <h3 className="line-clamp-2 text-lg font-semibold">{title}</h3>
            <div className="mt-1 flex items-center justify-between text-sm text-gray-300">
              <span>{year}</span>
              <div className="flex items-center">
                <StarIcon />
                <span>{rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FilmCard.displayName = "FilmCard";

export default FilmCard;
