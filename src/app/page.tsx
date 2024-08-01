import MenuDropDownMenu from "@/components/MenuDropDownMenu";
import Image from "next/image";
import TableUsers from "../components/TableUsers";
import BreadCrumb from "@/components/BreadCrumb";
import FormUsers from "../components/FormUsers";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 w-full">
        <div className="bg-first_header h-18 w-full flex items-center justify-center md:justify-start">
          <Image
            src="/sensedia_train.svg"
            alt="Treinador De Futebol"
            className="p-6"
            width="0"
            height="0"
            priority={true}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="bg-white h-16 flex items-center justify-between px-4">
          <div className="flex items-center">
            <Image
              src="/sensedia.svg"
              alt="sensedia logo"
              className="py-6 pl-6"
              width="0"
              height="0"
              style={{ width: "auto", height: "auto" }}
            />
            <BreadCrumb />
          </div>
          <div className="flex items-center">
            <button className="m-2">
              <img src="question.svg" alt="help" loading="lazy" />
            </button>
            <button className="m-2 pr-6">
              <img src="menu.svg" alt="menu" loading="lazy" />
            </button>
            <div className="h-auto w-px bg-gray-500 mx-1"></div>
            <MenuDropDownMenu />
          </div>
        </div>
      </header>
      <main className="bg-white h-full w-full">
        <div className="flex flex-wrap justify-start h-auto bg-purple_sensedia w-full px-4 md:px-36 py-4 text-white">
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
        <div className="flex justify-center pb-8">
          <FormUsers />
        </div>
      </main>
    </>
  );
}
