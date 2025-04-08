const AnchorLink = ({
  children,
  href,
  className,
  ...rest
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  target?: string;
  rel?: string;
}) => (
  <a
    href={href}
    className={`flex items-center gap-2 hover:underline hover:underline-offset-4${className ? " " + className : ""}`}
    {...rest}
  >
    {children}
  </a>
);

AnchorLink.displayName = "AnchorLink";

export default AnchorLink;
