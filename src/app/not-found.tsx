import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-[100svh] flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-purple_sensedia">404</h1>
      <h2 className="text-xl font-bold">Page not found!</h2>
      <p>The page you are looking for is not here.</p>
      <Link
        className={
          "rounde-full mt-8 w-40 rounded-full border-2 border-solid bg-purple_sensedia text-lg font-semibold text-white"
        }
        href="/"
      >
        Go back
      </Link>
    </main>
  );
}
