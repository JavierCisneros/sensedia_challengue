import { notFound } from "next/navigation";
import { Suspense } from "react";
import { z } from "zod";
import UserView from "../UserView";
//Page that receibe the user id and render the user view component with the user data
//if the user id is invalid, the page will return a 404 error
//if the user id is valid, the page will render the user view component
export default function UserPage({ params }: { params: { id: string } }) {
  try {
    z.string().uuid().parse(params.id);
  } catch (e) {
    notFound();
  }

  return (
    <Suspense
      fallback={
        <div className="flex h-auto items-center justify-center pt-20 text-xl text-black">
          <img src="loader.svg" alt="loader" loading="lazy" />
        </div>
      }
    >
      <UserView id={params.id} />
    </Suspense>
  );
}
