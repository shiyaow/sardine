type Props = {
  children: React.ReactNode;
  mobileOnly?: boolean;
  desktopOnly?: boolean;
  className?: string;
};

const Box = ({
  children,
  className,
  mobileOnly = false,
  desktopOnly = false,
}: Props) => {
  return (
    <div
      className={
        mobileOnly
          ? "md:hidden"
          : desktopOnly
            ? "hidden md:block"
            : "" + className
      }
    >
      {children}
    </div>
  );
};

Box.displayName = "Box";

export default Box;
