import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
//Home page with links to the users list and the user registry
export default function Home() {
  return (
    <>
      <Header />
      <main className="sticky mx-auto flex h-full w-full flex-col items-center justify-center bg-white pb-12 pt-6 md:w-3/4 md:flex-row lg:w-2/3">
        <Link
          href="/users"
          className="mx-4 my-4 flex h-80 w-2/3 transform flex-col items-center justify-center rounded-lg border-2 border-solid border-gray-300 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl md:w-1/2 lg:w-2/6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mb-6 mt-6 h-12 w-12 text-purple_sensedia"
          >
            <path d="M15 3v18" />
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M21 9H3" />
            <path d="M21 15H3" />
          </svg>
          <h2 className="text-xl">Users</h2>
          <p className="sm:h-38 px-6 text-justify sm:py-8 md:px-10 md:text-sm">
            Here you can find the users list, search for any user by one of
            their fields, click on them and it will take you to the user
            profile, also you can delete any user.
          </p>
        </Link>
        <Link
          href="/users/new"
          className="mx-4 my-4 flex h-80 w-2/3 transform flex-col items-center justify-center rounded-lg border-2 border-solid border-gray-300 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl md:w-1/2 lg:w-2/6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mb-6 mt-6 h-12 w-12 text-purple_sensedia"
          >
            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
          </svg>
          <h2 className="text-xl">Registry</h2>
          <p className="sm:h-38 px-6 text-justify sm:py-8 md:px-10 md:text-sm">
            Here you can add a new user to the list, just fill the fields after
            clicking on the submit button it will take you to the users table.
          </p>
        </Link>
      </main>
      <Footer />
    </>
  );
}
