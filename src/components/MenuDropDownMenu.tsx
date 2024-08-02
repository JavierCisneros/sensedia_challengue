"use client";

import { useRef, useEffect, useState } from "react";
import { NAMES } from "./NamesConstants";
import { MENU } from "./MenuContants";
import Link from "next/link";

type User = {
  id: number;
  name: string;
};
type NamesType = {
  [key: string]: User;
};

export default function MenuDropDownMenu() {
  const dropdown = useRef<HTMLDivElement>(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  function getRandomName() {
    const names: NamesType = NAMES; // Ensure TypeScript understands NAMES is of type NamesType
    const keys = Object.keys(names);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return names[randomKey].name;
  }
  function getInitials(name: string) {
    const nameParts = name.split(" ");
    const initials = nameParts.map((part) => part[0]).join("");
    return initials;
  }

  function handleClickOutside(event: MouseEvent) {
    if (dropdown.current && !dropdown.current.contains(event.target as Node)) {
      setDropdownVisible(false);
    }
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      setDropdownVisible((prev) => !prev);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  useEffect(() => {
    const name = getRandomName();
    setUserName(name);
  }, []);
  return (
    <div
      className="relative w-48 border-l-2 border-gray-500 border-solid"
      id="dropdownButton"
    >
      <button
        type="button"
        onClick={() => setDropdownVisible((prev) => !prev)}
        className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
        id="menu-button"
        aria-expanded={isDropdownVisible}
        aria-haspopup="true"
      >
        <div className="flex items-center justify-center rounded-full w-10 h-10 bg-purple_sensedia text-white">
          {userName ? getInitials(userName) : ""}
        </div>
        {userName ? userName : "Loading..."}
        <svg
          className="-mr-1 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        ref={dropdown}
        className={`absolute bg-first_header border-[2px] mt-2 origin-top-right w-auto flex flex-col text-white ${
          isDropdownVisible ? "" : "hidden"
        }`}
        id="dropdown"
      >
        {Object.values(MENU).map((item) => (
          <Link
            href={`/${item.name}`}
            key={item.id}
            className="cursor-pointer hover:bg-gray-500 p-4 hover:border-l-2 hover:border-purple_sensedia hover:border-solid"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
