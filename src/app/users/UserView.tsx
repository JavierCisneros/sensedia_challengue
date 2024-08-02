"use client";
import { User } from "@/lib/actions/userActions";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { getUser } from "@/lib/actions/userActions";
import { Icons } from "@/components/Icons";
import Footer from "@/components/Footer";

export default function UserView({ id }: { id: string }) {
  //get user data with getUserData function
  const [users, setUsers] = useState<User>();
  const [loading, setLoading] = useState<boolean>(true);
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
  if (loading) {
    return (
      <>
        <Header />
        <div className="text-black text-xl flex justify-center items-center pt-20 h-96">
          <Icons.loader />
        </div>
      </>
    );
  }
  return (
    <>
      <Header />

      <div className="text-black text-xl mt-10 flex justify-center pb-20 ">
        <div className="flex flex-col w-2/4 rounded-xl border-solid border-2 border-gray-400 p-10">
          <div className="flex items-center justify-center rounded-full w-20 h-20 bg-purple_sensedia text-white text-4xl mb-5 self-center">
            UN
          </div>
          <h1 className="text-3xl font-bold pb-4 self-center">User</h1>
          <p className="text-lg">User ID: {id}</p>
          <p className="text-lg ">Name: {users?.name}</p>
          <p className="text-lg ">Email: {users?.email}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
