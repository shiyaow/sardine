import SharedLayout from "../../components/sharedLayout";
import type { MenuLink } from "../../components/sharedLayout";
import { DeviceGroup } from "../../types/meta";
import { getDeviceGroup } from "../../utils/device";

const navLinks: MenuLink[] = [
  { label: "popular", href: "/films/popular", text: "Popular" },
  { label: "upcoming", href: "/films/upcoming", text: "Upcoming" },
  { label: "horror", href: "/films/horror", text: "Horror" },
  { label: "comedy", href: "/films/comedy", text: "Comedy" },
  { label: "action", href: "/films/action", text: "Action" },
  { label: "drama", href: "/films/drama", text: "Drama" },
  { label: "animation", href: "/films/animation", text: "Animation" },
  { label: "adventure", href: "/films/adventure", text: "Adventure" },
  { label: "fantasy", href: "/films/fantasy", text: "Fantasy" },
  { label: "crime", href: "/films/crime", text: "Crime" },
  { label: "documentary", href: "/films/documentary", text: "Documentary" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = getDeviceGroup() === DeviceGroup.mobile;

  return isMobile ? (
    <SharedLayout navLinks={navLinks}>{children}</SharedLayout>
  ) : (
    <div data-testid="film-desktop-layout">{children}</div>
  );
};

Layout.displayName = "Layout";

export default Layout;
