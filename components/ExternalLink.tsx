import classNames from "classnames";

export function ExternalLink({
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={classNames(
        "text-blue-800 hover:text-blue-700",
        "dark:text-blue-600 dark:hover:text-blue-500",
        className,
      )}
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    />
  );
}
