"use client";

export default function MenuDropDownMenu() {
  return (
    <div className="relative pr-8 w-48" id="dropdownButton">
      <button
        type="button"
        onClick={() => {
          const dropdown = document.getElementById("dropdown");
          if (dropdown) {
            dropdown.classList.toggle("hidden");
          }
        }}
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        UserName
        <svg
          className="-mr-1 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div
        className="absolute bg-first_header border-[1px] hidden  mt-2 origin-top-right w-auto"
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
