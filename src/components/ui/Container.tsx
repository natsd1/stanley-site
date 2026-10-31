import clsx from "clsx";

export function Container({
  className,
  children,
  as: Tag = "div",
}: {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}) {
  return <Tag className={clsx("mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12", className)}>{children}</Tag>;
}
