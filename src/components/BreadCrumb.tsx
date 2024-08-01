"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function BreadCrumb() {
  const pathname = usePathname();

  // Split pathname into segments and filter out empty segments
  const segments = pathname.split("/").filter((segment) => segment);

  // Determine if we're on the home page
  const isHomePage = pathname === "/";

  return (
    <nav aria-label="Breadcrumb" className="px-4">
      <ol className="flex items-center space-x-2">
        {isHomePage ? (
          <>
            <li>
              <span className="text-purple_sensedia">WELCOME</span>
            </li>
            <img
              src="polygon.svg"
              alt="polygon"
              className="px-2 hidden md:block"
            />
            <li>
              <span className="text-gray-500">Registry</span>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/" className="text-blue-600 hover:text-blue-800">
                Home
              </Link>
            </li>
            {segments.map((segment, index) => {
              // Build the path for each breadcrumb link
              const href = `/${segments.slice(0, index + 1).join("/")}`;
              const isLast = index === segments.length - 1;

              return (
                <li key={href} className="flex items-center space-x-2">
                  <img
                    src="polygon.svg"
                    alt="polygon"
                    className="px-2 hidden md:block"
                  />
                  {isLast ? (
                    <span className="text-gray-500">{segment}</span>
                  ) : (
                    <Link
                      href={href}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {segment}
                    </Link>
                  )}
                </li>
              );
            })}
          </>
        )}
      </ol>
    </nav>
  );
}
