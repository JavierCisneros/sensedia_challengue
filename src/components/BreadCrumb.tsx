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
              <span className="text-purple_sensedia">Home</span>
            </li>
            <svg
              width="5"
              height="6"
              viewBox="0 0 5 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.25115 2.27942C4.65999 2.67282 4.65999 3.32718 4.25115 3.72058L2.19338 5.70068C1.55807 6.312 0.5 5.86176 0.5 4.9801L0.5 1.0199C0.5 0.138242 1.55807 -0.311997 2.19338 0.299324L4.25115 2.27942Z"
                fill="#E2E2E2"
              />
            </svg>
          </>
        ) : (
          <>
            <li>
              <Link href="/" className="text-purple_sensedia">
                Home
              </Link>
            </li>
            {segments.map((segment, index) => {
              const href = `/${segments.slice(0, index + 1).join("/")}`;
              const isLast = index === segments.length - 1;

              return (
                <li key={href} className="flex items-center space-x-2">
                  <svg
                    width="5"
                    height="6"
                    viewBox="0 0 5 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.25115 2.27942C4.65999 2.67282 4.65999 3.32718 4.25115 3.72058L2.19338 5.70068C1.55807 6.312 0.5 5.86176 0.5 4.9801L0.5 1.0199C0.5 0.138242 1.55807 -0.311997 2.19338 0.299324L4.25115 2.27942Z"
                      fill="#E2E2E2"
                    />
                  </svg>

                  {isLast ? (
                    <span className="text-gray-500">{segment}</span>
                  ) : (
                    <Link href={href} className="text-purple_sensedia">
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
