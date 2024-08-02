import Link from "next/link";

export default function NotFound() {
  return (
    <main className="h-[100svh] flex flex-col items-center text-center justify-center">
      <h1 className="text-5xl font-bold text-purple_sensedia">404</h1>
      <h2 className="text-xl font-bold">Page not found!</h2>
      <p>The page you are looking for is not here.</p>
      <Link
        className={
          "text-white mt-8 w-40 rounded-full text-lg font-semibold border-solid border-2 rounde-full bg-purple_sensedia "
        }
        href="/"
      >
        Go back
      </Link>
    </main>
  );
}
