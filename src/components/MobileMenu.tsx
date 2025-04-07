import Link from "next/link";
import Image from "next/image";
import NavLink from "../elements/NavLink";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div
      className={`fixed inset-0 z-50 h-screen bg-white transition-transform duration-300 ease-in-out dark:bg-gray-900 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-black/10 px-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold"
            onClick={onClose}
          >
            <span>Sardine</span>
          </Link>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            aria-label="Close menu"
          >
            <Image src="/close.svg" alt="Close menu" width={24} height={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-4 p-4">
          <NavLink href="/series" onClick={onClose}>
            Series
          </NavLink>
          <NavLink href="/films" onClick={onClose}>
            Films
          </NavLink>
          <NavLink href="/my-list" onClick={onClose}>
            My list
          </NavLink>
          <NavLink href="/recommended" onClick={onClose}>
            Recommended for me
          </NavLink>
        </nav>

        {/* Footer Links */}
        <div className="border-t border-black/10 p-4">
          <Link
            href="#"
            className="block rounded-lg bg-black px-4 py-2 text-center text-white transition-colors duration-200 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            onClick={() => console.log("login")}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

MobileMenu.displayName = "MobileMenu";

export default MobileMenu;
