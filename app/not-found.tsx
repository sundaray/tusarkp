import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="mx-auto max-w-xl px-4 text-center">
        <p className="text-muted-foreground mb-2 font-mono text-sm font-medium">
          404
        </p>
        <h2 className="text-secondary-foreground mb-2 text-2xl font-semibold tracking-tight">
          Page not found
        </h2>
        <p className="text-muted-foreground mb-4 text-sm text-pretty">
          Sorry, we couldn&apos;t find the page you&apos;re looking for
        </p>
        <Link
          href="/"
          className="bg-accent rounded-md p-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-500"
        >
          Return home
        </Link>
      </div>
    </>
  );
}
