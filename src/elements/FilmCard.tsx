interface FilmCardProps {
  title: string;
  imageUrl: string;
  rating: number;
  year: number;
}

const FilmCard = ({ title, imageUrl, rating, year }: FilmCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <div className="aspect-[2/3] w-full">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <div className="mt-1 flex items-center justify-between text-sm text-gray-300">
            <span>{year}</span>
            <span className="flex items-center">
              <svg
                className="mr-1 h-4 w-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {rating.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
