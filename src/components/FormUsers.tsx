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
    <div className="flex flex-col w-full items-center">
      <div
        className="fixed inset-0 items-center justify-center z-50 backdrop-blur-sm confirm-dialog hidden"
        id="dialogUserExists"
      >
        <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
          <div className=" opacity-25 w-full h-full absolute z-10 inset-0"></div>
          <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative shadow-lg">
            <div className="md:flex items-center">
              <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                <p className="font-bold">Warning!</p>
                <p className="text-sm text-gray-700 mt-1">
                  User already exists
                </p>
              </div>
            </div>
            <div className="text-center md:text-right mt-4 md:flex md:justify-end">
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
                className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-purple_sensedia rounded-lg font-semibold text-sm mt-4 md:mt-0 md:order-1"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex border-2 w-3/4 rounded-lg pb-8 h-screen/2 flex-col items-start">
        <h2 className="text-xl text-gray-500 ml-10 w-full text-left pt-10 ">
          Registry
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="w-full flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="ml-10">
                <input
                  type="name"
                  {...register("name")}
                  className="rounded-t-lg w-10/12 my-6 border-gray-300 border-b-2 bg-gray-100 pl-2"
                  placeholder="Name *"
                />
                {errors.name && (
                  <p className="text-red-500 ml-10">{errors.name.message}</p>
                )}
              </div>
              <div className="ml-10">
                <input
                  type="email"
                  {...register("email")}
                  className="rounded-t-lg w-10/12 my-6 border-gray-300 border-b-2 bg-gray-100 pl-2"
                  placeholder="Email *"
                />
                {errors.email && (
                  <p className="text-red-500 ml-10">{errors.email.message}</p>
                )}
              </div>
              <div className="ml-10">
                <input
                  type="text"
                  {...register("fullName")}
                  className="rounded-t-lg w-10/12 my-6 border-gray-300 border-b-2 bg-gray-100 pl-2"
                  placeholder="Full Name"
                />
                {errors.fullName && (
                  <p className="text-red-500 ml-10">
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
                  className="rounded-t-lg w-10/12 my-6 border-gray-300 border-b-2 bg-gray-100 pl-2"
                  placeholder="City"
                />
                {errors.city && (
                  <p className="text-red-500 ml-10">{errors.city.message}</p>
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
                        className=" accent-purple_sensedia h-5 w-5"
                      />
                      <label htmlFor={day} className="ml-2">
                        {day}
                      </label>
                    </div>
                  )
                )}
                {errors.days && (
                  <p className="text-red-500 ml-10">{errors.days.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="ml-10 flex s">
            <button
              type="submit"
              className="bg-purple_sensedia text-white px-4 py-2 rounded-full my-6"
            >
              {isPending ? "Submitting..." : "Submit"}
            </button>{" "}
            <button
              type="submit"
              className="text-purple_sensedia ml-8 px-4 py-2 rounded-full my-6"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
