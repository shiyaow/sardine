const FilmCardPlaceholder = () => {
  return (
    <div
      data-testid="film-card-placeholder"
      className="space-y-2 border-2 border-red-500"
    >
      <div className="aspect-[2/3] w-full animate-pulse rounded-lg bg-gray-200" />
      <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
      <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200" />
    </div>
  );
};

FilmCardPlaceholder.displayName = "FilmCardPlaceholder";

export default FilmCardPlaceholder;
