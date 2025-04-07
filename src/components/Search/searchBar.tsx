import { useState } from "react";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy search function
    console.log("Searching for:", searchQuery);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="relative mx-4 hidden w-full max-w-md items-center md:flex"
    >
      <input
        type="text"
        placeholder="Search documentation..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full rounded-lg bg-gray-100 px-4 py-2 pl-10 text-sm transition-all duration-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:placeholder:text-gray-500"
      />
      <span className="absolute left-3 text-gray-400">
        <svg
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.5 3.5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm-6 5a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 2.5 8.5z"
            fill="currentColor"
          />
        </svg>
      </span>
    </form>
  );
};
