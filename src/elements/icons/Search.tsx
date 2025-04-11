import { FC } from "react";

interface SearchIconProps {
  className?: string;
}

const SearchIcon: FC<SearchIconProps> = ({ className = "" }) => {
  return (
    <svg
      className={`h-4 w-4 ${className}`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 3.5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm-6 5a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 2.5 8.5z"
        fill="currentColor"
      />
    </svg>
  );
};

SearchIcon.displayName = "SearchIcon";

export default SearchIcon;
