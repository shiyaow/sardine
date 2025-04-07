"use client";
import Image from "next/image";
import Link from "next/link";
import Box from "../elements/Box";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/75 backdrop-blur-sm dark:bg-gray-900/75">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-bold">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-6 w-6">
                <Image src="/logo.svg" alt="logo" width={20} height={20} />
              </div>
              <span>Sardine</span>
            </Link>
          </div>

          <Box mobileOnly>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              aria-label="Open menu"
            >
              <Image src="/burger.svg" alt="Menu" width={24} height={24} />
            </button>
            <MobileMenu
              isOpen={isMenuOpen}
              onClose={() => {
                setIsMenuOpen(false);
              }}
            />
          </Box>
        </div>
      </div>
    </nav>
  );
};

NavBar.displayName = "NavBar-mobile";

export default NavBar;
