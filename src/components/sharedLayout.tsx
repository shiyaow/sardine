import NavLink from "../elements/NavLink";

export type MenuLink = {
  label: string;
  href: string;
  text: string;
};
type Props = {
  children: React.ReactNode;
  navLinks: MenuLink[];
  testName?: string;
};

const SharedLayout = ({ children, navLinks, testName }: Props) => {
  return (
    <div data-testid={testName}>
      {/* Main layout grid */}
      <div className="grid min-h-screen grid-cols-1 gap-4 p-4 lg:grid-cols-[minmax(150px,20%)_1fr]">
        {/* Left Sidebar */}
        <aside className="sticky top-[4.5rem] h-[calc(100vh-5.5rem)] rounded-lg border-r border-black/10 bg-background p-4 transition-all duration-300 hover:translate-x-0.5 hover:shadow-md lg:block">
          <div className="flex h-full flex-col justify-between gap-2">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink key={link.href} {...link}>
                  {link.text}
                </NavLink>
              ))}
            </div>
          </div>
        </aside>
        {/* Main Content */}
        <main className="mx-auto w-full max-w-7xl rounded-lg bg-background p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
          {children}
        </main>
      </div>
    </div>
  );
};

SharedLayout.displayName = "SharedLayout";

export default SharedLayout;
