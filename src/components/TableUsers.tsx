"use client";

import React, { useState, useEffect } from "react";
import Paginator from "./Paginator";
import { User } from "../lib/actions/userActions";
import { deleteUser, fetchUsersData } from "../lib/actions/userActions";
import { useRouter } from "next/navigation";
import { Icons } from "./Icons";
export default function TableUsers() {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchedVal, setSearchedVal] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const usersData = await fetchUsersData();
        setUsers(usersData);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch users data " + error);
        setLoading(false);
      }
    };
    getUsers();
  }, []);
  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  // Calculate total pages
  const totalPages = Math.ceil(users.length / usersPerPage);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleDeleteUser = async (id: string) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      setError(`Failed to delete user`);
    }
  };

  if (loading) {
    return (
      <div className="text-black text-xl flex justify-center items-center pt-20 h-96">
        <Icons.loader />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredUsers = users
    .filter(
      (user) =>
        user.name.toLowerCase().includes(searchedVal.toLowerCase()) ||
        user.email.toLowerCase().includes(searchedVal.toLowerCase()) ||
        user.id.toString().includes(searchedVal)
    )
    .slice(indexOfFirstUser, indexOfLastUser);

  return (
    <>
      <div
        className="fixed inset-0 items-center justify-center z-50 backdrop-blur-sm confirm-dialog hidden"
        id="confirmDialog"
      >
        <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
          <div className=" opacity-25 w-full h-full absolute z-10 inset-0"></div>
          <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative shadow-lg">
            <div className="md:flex items-center">
              <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                <p className="font-bold">Warning!</p>
                <p className="text-sm text-gray-700 mt-1">
                  Are you sure you want to delete this user?
                </p>
              </div>
            </div>
            <div className="text-center md:text-right mt-4 md:flex md:justify-end">
              <button
                id="confirm-delete-btn"
                className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2"
              >
                Delete
              </button>
              <button
                onClick={() => {}}
                id="confirm-cancel-btn"
                className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4 md:mt-0 md:order-1"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="text-black text-xl flex justify-center items-center pt-20">
          Loading...
        </div>
      ) : users.length === 0 ? (
        <SkeletonTable />
      ) : (
        <div className="flex justify-center text-sm h-full pt-8 flex-col items-center bg-white pb-2 top-10">
          <h1 className="text-2xl font-bold text-black pb-4 w-3/4">Users</h1>
          <input
            type="text"
            className="h-8 rounded-t-sm text-black border-gray-300 border-b-2 mb-4 w-3/4 bg-gray-100 p-2 focus: outline-none"
            onChange={(e) => setSearchedVal(e.target.value)}
            placeholder="Search"
          />
          <div className="w-3/4 h-80 overscroll-y-none overflow-y-auto ">
            <table className="w-full ">
              <thead className="sticky top-0 bg-white z-10 ">
                <tr>
                  <th className="h-px bg-gray-300" colSpan={8}></th>
                </tr>
                <tr className="text-gray-500 ">
                  <th className="px-2.5 py-4 text-left">USER</th>
                  <th className="px-2.5 py-4 text-left">NAME</th>
                  <th className="px-2.5 py-4 text-left">E-MAIL</th>
                  <th className="px-2.5 py-4 text-left">CITY</th>
                  <th className="px-2.5 py-4 text-left">DAYS OF WEEK</th>
                  <th className="px-2.5 py-4 text-left">ALBUMS</th>
                  <th className="px-2.5 py-4 text-left">POSTS</th>
                  <th className="px-2.5 py-4 text-left"></th>
                </tr>
                <tr>
                  <th className="h-px bg-gray-300" colSpan={8}></th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className=" border-b-2 border-b-gray-300 items-center cursor-pointer"
                  >
                    <td className="px-2.5 py-2 text-black  text-left cursor-auto">
                      {user.id}
                    </td>
                    <td
                      className="px-2.5 py-2 text-gray-500 text-left"
                      onClick={() => {
                        router.push(`/users/${user.id}`);
                      }}
                    >
                      {user.name}
                    </td>
                    <td
                      className="px-2.5 py-2 text-gray-500 text-left"
                      onClick={() => {
                        router.push(`/users/${user.id}`);
                      }}
                    >
                      {user.email}
                    </td>
                    <td
                      className="px-2.5 py-2 text-gray-500 text-left"
                      onClick={() => {
                        router.push(`/users/${user.id}`);
                      }}
                    >
                      {user.city.name}
                    </td>
                    <td
                      className="px-2.5 py-2 text-gray-500 text-left"
                      onClick={() => {
                        router.push(`/users/${user.id}`);
                      }}
                    >
                      {user.days.map((day) => day.name).join(", ")}
                    </td>
                    <td
                      className="px-2.5 py-2 text-gray-500 text-center"
                      onClick={() => {
                        router.push(`/users/${user.id}`);
                      }}
                    >
                      {user.albumsCount}
                    </td>
                    <td
                      className="px-2.5 py-2 text-gray-500 text-center"
                      onClick={() => {
                        router.push(`/users/${user.id}`);
                      }}
                    >
                      {user.postsCount}
                    </td>
                    <td className="px-2.5 py-2 text-gray-500 justify-center pr-5">
                      <svg
                        fill="#000000"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 172.541 172.541"
                        className="w-6 h-6 cursor-pointer ml-2 self-center fill-gray-300 hover:fill-black "
                        onClick={() => {
                          const confirmDialog =
                            document.getElementById("confirmDialog");
                          if (confirmDialog) {
                            confirmDialog.classList.toggle("hidden");
                          }
                          const confirmDeleteBtn =
                            document.getElementById("confirm-delete-btn");
                          if (confirmDeleteBtn) {
                            confirmDeleteBtn.onclick = () => {
                              handleDeleteUser(user.id);
                              if (confirmDialog) {
                                confirmDialog.classList.toggle("hidden");
                              }
                            };
                          }
                          const confirmCancelBtn =
                            document.getElementById("confirm-cancel-btn");
                          if (confirmCancelBtn) {
                            confirmCancelBtn.onclick = () => {
                              if (confirmDialog) {
                                confirmDialog.classList.toggle("hidden");
                              }
                            };
                          }
                        }}
                      >
                        <g>
                          <path
                            d="M166.797,25.078h-13.672h-29.971V0H49.388v25.078H19.417H5.744v15h14.806l10,132.463h111.443l10-132.463h14.805V25.078z
		 M64.388,15h43.766v10.078H64.388V15z M128.083,157.541H44.46L35.592,40.078h13.796h73.766h13.796L128.083,157.541z"
                          />
                          <rect
                            x="80.271"
                            y="65.693"
                            width="12"
                            height="66.232"
                          />
                          <rect
                            x="57.271"
                            y="65.693"
                            width="12"
                            height="66.232"
                          />
                          <rect
                            x="103.271"
                            y="65.693"
                            width="12"
                            height="66.232"
                          />
                        </g>
                      </svg>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="w-3/4">
            <div className="text-gray-400 flex pt-10 justify-start w-1/4">
              Total {users.length} users
            </div>
            <Paginator
              currentPage={currentPage}
              totalPages={totalPages}
              paginate={paginate}
            />
          </div>
        </div>
      )}
    </>
  );
}

function SkeletonTable() {
  return (
    <div className="flex justify-center text-sm h-full pt-8 flex-col items-center bg-white pb-2 top-10">
      <h1 className="text-2xl font-bold text-black pb-4 w-3/4">Users</h1>
      <input
        type="text"
        className="h-8 rounded-t-sm text-black border-gray-300 border-b-2 mb-4 w-3/4 bg-gray-100 p-2 focus: outline-none"
        placeholder="Search"
      />
      <div className="w-3/4 h-96 overscroll-y-none overflow-y-auto ">
        <table className="w-full">
          <thead className="sticky top-0 bg-white z-10  ">
            <tr className="text-gray-500">
              <th className="px-2.5 py-4 text-left">USER</th>
              <th className="px-2.5 py-4 text-left">NAME</th>
              <th className="px-2.5 py-4 text-left">E-MAIL</th>
              <th className="px-2.5 py-4 text-left">CITY</th>
              <th className="px-2.5 py-4 text-left">DAYS OF WEEK</th>
              <th className="px-2.5 py-4 text-left">ALBUMS</th>
              <th className="px-2.5 py-4 text-left">POSTS</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b-2 border-b-gray-300 items-center ">
              <td className="px-2.5 py-2 text-black cursor-trash text-left">
                100
              </td>
              <td className="px-2.5 py-2 text-gray-500 text-left">
                Javier Cisneros
              </td>
              <td className="px-2.5 py-2 text-gray-500 text-left">
                fjca185@gmail.com
              </td>
              <td className="px-2.5 py-2 text-gray-500 text-left">
                Guadalajara
              </td>
              <td className="px-2.5 py-2 text-gray-500 text-left">Weekends</td>
              <td className="px-2.5 py-2 text-gray-500 text-center">10</td>
              <td className="px-2.5 py-2 text-gray-500 text-center">10</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-black text-sm flex  items-center pt-20 justify-start w-3/4">
        Total 100
      </div>
      <div className="flex space-x-2 mt-2 text-xl pb-4">
        <button className="active text-black"></button>
      </div>
    </div>
  );
}
