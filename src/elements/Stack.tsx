type Props = {
  children: React.ReactNode;
  mobileOnly?: boolean;
  desktopOnly?: boolean;
  className?: string;
};

const Stack = ({
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
            ? "hidden md:flex"
            : "flex " + className
      }
    >
      {children}
    </div>
  );
};

Stack.displayName = "Stack";

export default Stack;
