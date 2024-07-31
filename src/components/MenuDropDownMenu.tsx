"use client";

import { useRef, useState, useEffect } from "react";

export default function MenuDropDownMenu() {
  const dropdown = useRef<HTMLDivElement>(null);

  function handleClickOutside(event: MouseEvent) {
    if (dropdown.current && !dropdown.current.contains(event.target as Node)) {
      dropdown.current.classList.add("hidden");
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative pr-8 w-48" id="dropdownButton">
      <button
        type="button"
        onClick={() => {
          const dropdownElement = document.getElementById("dropdown");
          if (dropdownElement) {
            dropdownElement.classList.toggle("hidden");
          }
        }}
        className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        <div className="flex items-center justify-center rounded-full w-10 h-10 bg-purple_sensedia text-white">
          UN
        </div>
        UserName
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
        className="absolute bg-first_header border-[1px] hidden mt-2 origin-top-right w-auto"
        id="dropdown"
      >
        <div className="cursor-pointer hover:bg-gray-300 p-4">Friends List</div>
        <div className="cursor-pointer hover:bg-gray-300 p-4">
          Saved Elements
        </div>
        <div className="cursor-pointer hover:bg-gray-300 p-4 ">
          Notifications
        </div>
        <div className="cursor-pointer hover:bg-gray-300 p-4 ">Preferences</div>
        <div className="cursor-pointer hover:bg-gray-300 p-4 ">Log Out</div>
      </div>
    </div>
  );
}
