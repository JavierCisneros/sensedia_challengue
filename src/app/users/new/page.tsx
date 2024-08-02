import Footer from "@/components/Footer";
import FormUsers from "@/components/FormUsers";
import Header from "@/components/Header";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Header />
      <main className="bg-white h-full w-full sticky pb-20">
        <h1 className="text-2xl font-bold text-black pb-4 w-full md:w-3/4 mx-auto pl-6 md:pl-0">
          Registry
        </h1>
        <div className="flex flex-col md:flex-row flex-wrap justify-between h-auto text-white w-full md:w-3/4 mx-auto">
          <article className="w-full md:w-1/3 mb-6 md:mb-0">
            <h1 className="text-purple_sensedia pl-6 md:pl-0 pt-4 font-semibold">
              Need help?
            </h1>
            <div className="flex flex-col md:flex-row my-6 items-center">
              <Image
                src="/life-ring.svg"
                alt="Type of team icon"
                className="w-16 h-16 mb-4 md:mb-0 md:mr-6"
                width="64"
                height="64"
                style={{ width: "auto", height: "auto" }}
              />
              <p className="text-gray-500 font-semibold text-center md:text-left px-6 md:pl-0">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
                sed sit unde optio eos dicta, officia ipsa architecto fugit aut.
              </p>
            </div>
          </article>
          <article className="w-full md:w-1/3 mb-6 md:mb-0">
            <h1 className="text-purple_sensedia pl-6 pt-4 font-semibold">
              Why register?
            </h1>
            <div className="flex flex-col md:flex-row my-6 items-center">
              <Image
                src="/heartbeat.svg"
                alt="Type of team icon"
                className="w-16 h-16 mb-4 md:mb-0 md:mr-6"
                width="64"
                height="64"
                style={{ width: "auto", height: "auto" }}
              />
              <p className="text-gray-500 font-semibold text-center md:text-left px-6 md:pl-0">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt eius exercitationem dolores numquam, itaque libero ad
                ea asperiores magnam delectus.
              </p>
            </div>
          </article>
          <article className="w-full md:w-1/3 mb-6 md:mb-0">
            <h1 className="text-purple_sensedia pl-6 pt-4 font-semibold">
              What is happening?
            </h1>
            <div className="flex flex-col md:flex-row my-6 items-center">
              <Image
                src="/smile.svg"
                alt="Type of team icon"
                className="w-16 h-16 mb-4 md:mb-0 md:mr-6"
                width="64"
                height="64"
                style={{ width: "auto", height: "auto" }}
              />
              <p className="text-gray-500 font-semibold text-center md:text-left px-6 md:pl-0">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequuntur delectus voluptatem facilis porro libero ut dolorum
                repellat eligendi amet qui.
              </p>
            </div>
          </article>
        </div>

        <div className="flex justify-center pt-10 pb-8">
          <FormUsers />
        </div>
      </main>
      <Footer />
    </>
  );
}
