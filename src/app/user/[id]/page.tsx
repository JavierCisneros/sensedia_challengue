import { notFound } from "next/navigation";
import { Suspense } from "react";
import { z } from "zod";
import UserView from "../UserView";

export default function UserPage({ params }: { params: { id: string } }) {
  try {
    z.string().uuid().parse(params.id);
  } catch (e) {
    notFound();
  }

  return (
    <Suspense
      fallback={
        <div className="text-black text-xl flex justify-center items-center pt-20 h-auto">
          <img src="loader.svg" alt="loader" loading="lazy" />
        </div>
      }
    >
      <UserView id={params.id} />
    </Suspense>
  );
}
