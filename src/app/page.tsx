import Link from "next/link";
import Header from "../components/Header";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white h-96 w-2/3 sticky flex items-center justify-center  mx-auto flex-col md:flex-row pt-6">
        <Link
          href="/users"
          className=" flex items-center justify-center flex-col w-2/6 rounded-lg border-solid border-2 border-gray-300 h-full mx-8 my-4  hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="text-purple_sensedia w-12 h-12 mb-6"
          >
            <path d="M15 3v18" />
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M21 9H3" />
            <path d="M21 15H3" />
          </svg>
          <h2 className="text-xl">Users</h2>
          <p className="px-10 flex text-justify">
            Here you can find the users list, search for any user by one of
            their fields, click on them and it will take you to the user
            profile, also you can delete any user.
          </p>
        </Link>
        <Link
          href="/users/new"
          className="flex items-center justify-center flex-col w-2/6 rounded-lg border-solid border-2 border-gray-300 h-full mx-8 my-4  hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="text-purple_sensedia w-12 h-12 mb-6"
          >
            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
          </svg>
          <h2 className="text-xl">Registry</h2>
          <p className="px-10 flex text-justify">
            Here you can add a new user to the list, just fill the fields after
            clicking on the submit button it will take you to the users table.
          </p>
        </Link>
      </main>
      <Footer />
    </>
  );
}
