import Header from "@/components/Header";
import TableUsers from "@/components/TableUsers";
import Image from "next/image";
export default function page() {
  return (
    <>
      <Header />
      <main className="bg-white h-full w-full sticky pb-20">
        <div className="flex flex-wrap justify-start h-auto bg-purple_sensedia w-full px-4 md:px-36 pt-4 text-white">
          <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
            <Image
              src="/type.svg"
              alt="Type of team icon"
              className="p-6"
              width="0"
              height="0"
              style={{ width: "auto", height: "auto" }}
            />
            <div>
              <p className="font-bold">Type of team</p>
              <p>Society</p>
            </div>
          </div>
          <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
            <Image
              src="/level.svg"
              alt="Level icon"
              className="p-6"
              width="0"
              height="0"
              style={{ width: "auto", height: "auto" }}
            />
            <div>
              <p className="font-bold">Level</p>
              <p>Semi-Professional</p>
            </div>
          </div>
          <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
            <Image
              src="/trophy.svg"
              alt="Trophy icon"
              className="p-6"
              width="0"
              height="0"
              style={{ width: "auto", height: "auto" }}
            />
            <div>
              <p className="font-bold">Victories</p>
              <p>345</p>
            </div>
          </div>
        </div>
        <TableUsers />
      </main>
    </>
  );
}
