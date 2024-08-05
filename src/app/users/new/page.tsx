import Footer from "@/components/Footer";
import FormUsers from "@/components/FormUsers";
import Header from "@/components/Header";
import Image from "next/image";
//A help component with some basic information about the registry form
export default function Page() {
  return (
    <>
      <Header />
      <main className="sticky h-full w-full bg-white pb-20">
        <h1 className="mx-auto w-full pb-4 pl-6 text-2xl font-bold text-black md:w-3/4 md:pl-0">
          Registry
        </h1>
        <div className="mx-auto flex h-auto w-full flex-col flex-wrap justify-between text-white md:w-3/4 md:flex-row">
          <article className="mb-6 w-full md:mb-0 md:w-1/3">
            <h1 className="pl-6 pt-4 font-semibold text-purple_sensedia md:pl-0">
              Need help?
            </h1>
            <div className="my-6 flex flex-col items-center md:flex-row">
              <Image
                src="/life-ring.svg"
                alt="Type of team icon"
                className="mb-4 h-16 w-16 md:mb-0 md:mr-6"
                width="64"
                height="64"
                style={{ width: "auto", height: "auto" }}
              />
              <p className="px-6 text-center font-semibold text-gray-500 md:pl-0 md:text-left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
                sed sit unde optio eos dicta, officia ipsa architecto fugit aut.
              </p>
            </div>
          </article>
          <article className="mb-6 w-full md:mb-0 md:w-1/3">
            <h1 className="pl-6 pt-4 font-semibold text-purple_sensedia">
              Why register?
            </h1>
            <div className="my-6 flex flex-col items-center md:flex-row">
              <Image
                src="/heartbeat.svg"
                alt="Type of team icon"
                className="mb-4 h-16 w-16 md:mb-0 md:mr-6"
                width="64"
                height="64"
                style={{ width: "auto", height: "auto" }}
              />
              <p className="px-6 text-center font-semibold text-gray-500 md:pl-0 md:text-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt eius exercitationem dolores numquam, itaque libero ad
                ea asperiores magnam delectus.
              </p>
            </div>
          </article>
          <article className="mb-6 w-full md:mb-0 md:w-1/3">
            <h1 className="pl-6 pt-4 font-semibold text-purple_sensedia">
              What is happening?
            </h1>
            <div className="my-6 flex flex-col items-center md:flex-row">
              <Image
                src="/smile.svg"
                alt="Type of team icon"
                className="mb-4 h-16 w-16 md:mb-0 md:mr-6"
                width="64"
                height="64"
                style={{ width: "auto", height: "auto" }}
              />
              <p className="px-6 text-center font-semibold text-gray-500 md:pl-0 md:text-left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequuntur delectus voluptatem facilis porro libero ut dolorum
                repellat eligendi amet qui.
              </p>
            </div>
          </article>
        </div>

        <div className="flex justify-center pb-8 pt-10">
          <FormUsers />
        </div>
      </main>
      <Footer />
    </>
  );
}
