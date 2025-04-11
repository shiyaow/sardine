import { useState } from "react";
import SearchIcon from "../../elements/SearchIcon";

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
        <SearchIcon />
      </span>
    </form>
  );
};
