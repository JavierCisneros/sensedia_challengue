import Footer from "@/components/Footer";
import FormUsers from "@/components/FormUsers";
import Header from "@/components/Header";
import Image from "next/image";

export default function page() {
  return (
    <>
      <Header />
      <h1 className="text-2xl font-bold text-black pb-4 w-3/4 mx-auto">
        Registry
      </h1>
      <div className="flex flex-wrap justify-between h-auto text-white w-3/4 mx-auto">
        <article className=" w-1/3">
          <h1 className="text-purple_sensedia  pt-4 font-semibold">
            {" "}
            Need help?
          </h1>
          <div className="flex flex-row my-6">
            <Image
              src="/life-ring.svg"
              alt="Type of team icon"
              className="pr-6 py-6 mr-6"
              width="0"
              height="0"
              style={{ width: "auto", height: "auto" }}
            />
            <p className="text-gray-500 font-semibold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
              sed sit unde optio eos dicta, officia ipsa architecto fugit aut.
            </p>
          </div>
        </article>
        <article className="w-1/3">
          <h1 className="text-purple_sensedia  pl-6 pt-4 font-semibold">
            {" "}
            Why to register?
          </h1>
          <div className="flex flex-row my-6">
            <Image
              src="/heartbeat.svg"
              alt="Type of team icon"
              className="p-6"
              width="0"
              height="0"
              style={{ width: "auto", height: "auto" }}
            />
            <p className="text-gray-500 font-semibold ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              eius exercitationem dolores numquam, itaque libero ad ea
              asperiores magnam delectus.
            </p>
          </div>
        </article>
        <article className=" w-1/3">
          <h1 className="text-purple_sensedia pl-6 pt-4 font-semibold">
            What is happening?...
          </h1>
          <div className="flex flex-row my-6">
            <Image
              src="/smile.svg"
              alt="Type of team icon"
              className="p-6"
              width="0"
              height="0"
              style={{ width: "auto", height: "auto" }}
            />
            <p className="text-gray-500 font-semibold">
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
      <Footer />
    </>
  );
}
