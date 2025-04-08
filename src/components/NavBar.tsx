"use client";
import Image from "next/image";
import Link from "next/link";
import NavLink from "../elements/NavLink";
import Box from "../elements/Box";
import { SearchBar } from "../components/Search";
import Stack from "../elements/Stack";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/75 backdrop-blur-sm dark:bg-gray-900/75">
      <Box className="mx-auto px-4">
        <Stack className="h-16 items-center justify-between">
          <Stack className="items-center gap-4 text-xl font-bold">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-6 w-6">
                <Image src="/logo.svg" alt="logo" width={20} height={20} />
              </div>
              <span>Sardine</span>
            </Link>
            <Stack className="items-center gap-4">
              <NavLink href="/series">Series</NavLink>
              <NavLink href="/films">Films</NavLink>
              <NavLink href="/my-list">My list</NavLink>
              <NavLink href="/recommended">Recommended for me</NavLink>
            </Stack>
          </Stack>

          <SearchBar />

          <Box desktopOnly className="flex items-center gap-4">
            <a
              href="#"
              className="px-4 py-2 text-sm text-gray-600 transition-colors duration-200 hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              Feedback
            </a>
            <a
              href="#"
              className="rounded-lg bg-black px-4 py-2 text-sm text-white transition-colors duration-200 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Login
            </a>
          </Box>
        </Stack>
      </Box>
    </nav>
  );
};

NavBar.displayName = "NavBar";

export default NavBar;
