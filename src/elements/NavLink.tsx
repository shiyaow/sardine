import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
  className?: string;
  onClick?: () => void;
};

const NavLink = ({ children, href, className, onClick }: Props) => (
  <Link
    href={href}
    onClick={onClick}
    className={`text-nowrap px-2 py-2 text-sm text-gray-600 transition-colors duration-200 hover:text-black dark:text-gray-300 dark:hover:text-white ${className ? " " + className : ""}`}
  >
    {children}
  </Link>
);

NavLink.displayName = "NavLink";

export default NavLink;
