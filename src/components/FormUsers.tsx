"use client";

import { newUser } from "../lib/actions/userActions";
import { userSchema } from "../lib/actions/validations/userValidations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
// Define the form data type based on the schema
type FormData = z.infer<typeof userSchema>;

export default function FormUsers() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  // Initialize the form with react-hook-form
  const form = useForm<FormData>({
    resolver: zodResolver(userSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  // Handle form submission
  const onSubmit = (data: FormData) => {
    startTransition(async () => {
      try {
        await newUser(data);
        form.reset();
        router.push("/users");
      } catch (error) {
        console.error(error);
        const confirmDialog = document.getElementById("dialogUserExists");
        if (confirmDialog) {
          confirmDialog.classList.remove("hidden");
        }
      }
    });
  };

  return (
    <div className="flex w-full flex-col items-center">
      <div
        className="confirm-dialog fixed inset-0 z-50 hidden items-center justify-center backdrop-blur-sm"
        id="dialogUserExists"
      >
        <div className="relative min-h-screen px-4 md:flex md:items-center md:justify-center">
          <div className="absolute inset-0 z-10 h-full w-full opacity-25"></div>
          <div className="fixed inset-x-0 bottom-0 z-50 mx-4 mb-4 rounded-lg bg-white p-4 shadow-lg md:relative md:mx-auto md:max-w-md">
            <div className="items-center md:flex">
              <div className="mt-4 text-center md:ml-6 md:mt-0 md:text-left">
                <p className="font-bold">Warning!</p>
                <p className="mt-1 text-sm text-gray-700">
                  User already exists
                </p>
              </div>
            </div>
            <div className="mt-4 text-center md:flex md:justify-end md:text-right">
              <button
                onClick={() => {
                  console.log("cancel");
                  const dialogUserExists =
                    document.getElementById("dialogUserExists");
                  if (dialogUserExists) {
                    dialogUserExists.classList.toggle("hidden");
                  }
                }}
                id="cancel-btn"
                className="mt-4 block w-full rounded-lg bg-purple_sensedia px-4 py-3 text-sm font-semibold md:order-1 md:mt-0 md:inline-block md:w-auto md:py-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen/2 flex w-3/4 flex-col items-start rounded-lg border-2 pb-8">
        <h2 className="ml-10 w-full pt-10 text-left text-xl text-gray-500">
          Registry
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="flex w-full flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="ml-10">
                <input
                  type="name"
                  {...register("name")}
                  className="my-6 w-10/12 rounded-t-lg border-b-2 border-gray-300 bg-gray-100 pl-2"
                  placeholder="Name *"
                />
                {errors.name && (
                  <p className="ml-10 text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="ml-10">
                <input
                  type="email"
                  {...register("email")}
                  className="my-6 w-10/12 rounded-t-lg border-b-2 border-gray-300 bg-gray-100 pl-2"
                  placeholder="Email *"
                />
                {errors.email && (
                  <p className="ml-10 text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="ml-10">
                <input
                  type="text"
                  {...register("fullName")}
                  className="my-6 w-10/12 rounded-t-lg border-b-2 border-gray-300 bg-gray-100 pl-2"
                  placeholder="Full Name"
                />
                {errors.fullName && (
                  <p className="ml-10 text-red-500">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="ml-10">
                <input
                  type="text"
                  {...register("city")}
                  className="my-6 w-10/12 rounded-t-lg border-b-2 border-gray-300 bg-gray-100 pl-2"
                  placeholder="City"
                />
                {errors.city && (
                  <p className="ml-10 text-red-500">{errors.city.message}</p>
                )}
              </div>
              <div className="mx-10 my-6 flex flex-wrap gap-4 pr-10">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div key={day} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={day}
                        value={day}
                        {...register("days")}
                        className="h-5 w-5 accent-purple_sensedia"
                      />
                      <label htmlFor={day} className="ml-2">
                        {day}
                      </label>
                    </div>
                  ),
                )}
                {errors.days && (
                  <p className="ml-10 text-red-500">{errors.days.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="s ml-10 flex">
            <button
              type="submit"
              className="my-6 rounded-full bg-purple_sensedia px-4 py-2 text-white"
            >
              {isPending ? "Submitting..." : "Submit"}
            </button>{" "}
            <button
              type="submit"
              className="my-6 ml-8 rounded-full px-4 py-2 text-purple_sensedia"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
