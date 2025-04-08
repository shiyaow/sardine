type Props = {
  children: React.ReactNode;
  mobileOnly?: boolean;
  desktopOnly?: boolean;
  className?: string;
  testName?: string;
};

const Box = ({
  children,
  className,
  mobileOnly = false,
  desktopOnly = false,
  testName,
}: Props) => {
  return (
    <div
      data-testid={testName}
      className={
        (mobileOnly ? "md:hidden" : desktopOnly ? "hidden md:block" : "") +
        (className ? " " + className : "")
      }
    >
      {children}
    </div>
  );
};

Box.displayName = "Box";

export default Box;
