"use client";
import { User } from "@/lib/actions/userActions";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { getUser } from "@/lib/actions/userActions";
import { Icons } from "@/components/Icons";
import Footer from "@/components/Footer";
//A basic component that render the user data
export default function UserView({ id }: { id: string }) {
  //get user data with getUserData function
  const [users, setUsers] = useState<User>();
  const [loading, setLoading] = useState<boolean>(true);
  //get user data with getUserData function when the component is mounted
  useEffect(() => {
    const userData = async () => {
      setLoading(true);
      try {
        const data = await getUser(id);
        setUsers(data);
      } catch (error) {
        console.error(`Error fetching data for user ${id}:`, error);
      } finally {
        setLoading(false);
      }
    };
    userData();
  }, [id]);
  //If the data is loading, the component will render a loader
  if (loading) {
    return (
      <>
        <Header />
        <div className="flex h-96 items-center justify-center pt-20 text-xl text-black">
          <Icons.loader />
        </div>
      </>
    );
  }
  //Basic component that render the user data
  return (
    <>
      <Header />
      <div className="mt-10 flex justify-center pb-20 text-xl text-black">
        <div className="flex w-2/4 flex-col rounded-xl border-2 border-solid border-gray-400 p-10">
          <div className="mb-5 flex h-20 w-20 items-center justify-center self-center rounded-full bg-purple_sensedia text-4xl text-white">
            UN
          </div>
          <h1 className="self-center pb-4 text-3xl font-bold">User</h1>
          <p className="text-lg">User ID: {id}</p>
          <p className="text-lg">Name: {users?.name}</p>
          <p className="truncate text-lg">Email: {users?.email}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
