import MenuDropDownMenu from "@/components/MenuDropDownMenu";
import Image from "next/image";
import TableUsers from "../components/TableUsers";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 w-full">
        <div className="bg-first_header h-18 w-full">
          <Image
            src="/sensedia_train.svg"
            alt="Treinador De Futebol"
            className="p-6"
            width="0"
            height="0"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="bg-white h-16 flex items-center">
          <div className=" flex items-center">
            <Image
              src="/sensedia.svg"
              alt="sensedia logo"
              className="py-6 pl-6"
              width="0"
              height="0"
              style={{ width: "auto", height: "auto" }}
            />
            <p className="text-purple_sensedia pl-2">WELCOME</p>
            <img src="polygon.svg" alt="polygon" className="px-2" />
            <p className="text-gray-500">Registry</p>
          </div>
          <div className="flex ml-auto">
            <button className="m-2 ">
              <img src="question.svg" alt="help" />
            </button>
            <button className="m-2 pr-6  ">
              <img src="menu.svg" alt="help" />
            </button>
            <div className="h-auto w-px bg-gray-500 flex-1 mx-1"></div>
            <button className="rounded-full w-10 h-10 bg-purple_sensedia mr-4">
              UN
            </button>
            <MenuDropDownMenu />
          </div>
        </div>
      </header>
      <main className="bg-white h-full w-full ">
        <div className="flex justify-center h-auto w-full bg-purple_sensedia">
          <div className="flex items-center">
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
          <div className="flex items-center">
            <Image
              src="/level.svg"
              alt="Type of team icon"
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
          <div className="flex items-center">
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
