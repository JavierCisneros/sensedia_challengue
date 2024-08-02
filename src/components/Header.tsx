import Image from "next/image";
import BreadCrumb from "./BreadCrumb";
import MenuDropDownMenu from "./MenuDropDownMenu";
export default function Header() {
  return (
    <header>
      <div className="bg-first_header h-18 flex items-center justify-center md:justify-start fixed top-0 z-20 w-full">
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
      <div className="bg-white h-auto flex items-center justify-between px-4 sticky top-40 mt-20 z-10 ">
        <div className="flex items-center">
          <Image
            src="/sensedia.svg"
            alt="sensedia logo"
            className="py-6 pl-6 "
            width="0"
            height="0"
            style={{ width: "auto", height: "auto" }}
          />
          <div className="hidden md:block ">
            <BreadCrumb />
          </div>
        </div>
        <div className="flex items-center ">
          <button className="m-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 16H11V14H9V16ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 4C7.79 4 6 5.79 6 8H8C8 6.9 8.9 6 10 6C11.1 6 12 6.9 12 8C12 10 9 9.75 9 13H11C11 10.75 14 10.5 14 8C14 5.79 12.21 4 10 4Z"
                fill="#6A6A6A"
              />
            </svg>
          </button>
          <button className="m-2 pr-6">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 4H4V0H0V4ZM6 16H10V12H6V16ZM0 16H4V12H0V16ZM0 10H4V6H0V10ZM6 10H10V6H6V10ZM12 0V4H16V0H12ZM6 4H10V0H6V4ZM12 10H16V6H12V10ZM12 16H16V12H12V16Z"
                fill="#6A6A6A"
              />
            </svg>
          </button>
          <div className="h-auto w-px bg-gray-500 mx-1"></div>
          <MenuDropDownMenu />
        </div>
      </div>
    </header>
  );
}
