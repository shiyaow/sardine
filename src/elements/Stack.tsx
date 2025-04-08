type Props = {
  children: React.ReactNode;
  mobileOnly?: boolean;
  desktopOnly?: boolean;
  className?: string;
  testName?: string;
};

const Stack = ({
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
        (mobileOnly ? "md:hidden" : desktopOnly ? "hidden md:flex" : "flex") +
        (className ? " " + className : "")
      }
    >
      {children}
    </div>
  );
};

Stack.displayName = "Stack";

export default Stack;
