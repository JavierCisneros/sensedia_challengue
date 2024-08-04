"use client";

import React, { useState, useEffect } from "react";
import Paginator from "./Paginator";
import { User } from "../lib/actions/userActions";
import { deleteUser, fetchUsersData } from "../lib/actions/userActions";
import { Icons } from "./Icons";
import Link from "next/link";
import type { Day } from "../lib/actions/userActions";
export default function TableUsers() {
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

  const getDisplayDays = (days: Day[]): string => {
    const dayNames = days.map((day) => day.name);

    if (dayNames.length === 7) {
      return "All";
    }

    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const weekends = ["Saturday", "Sunday"];

    const isWeekdays = weekdays.every((day) => dayNames.includes(day));
    const isWeekends = weekends.every((day) => dayNames.includes(day));

    if (isWeekdays && !dayNames.some((day) => weekends.includes(day))) {
      return "Workweek";
    }

    if (isWeekends && !dayNames.some((day) => weekdays.includes(day))) {
      return "Weekends";
    }

    return dayNames.join(", ");
  };

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
      <div className="flex h-96 items-center justify-center pt-20 text-xl text-black">
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
        user.id.toString().includes(searchedVal),
    )
    .slice(indexOfFirstUser, indexOfLastUser);

  return (
    <>
      <div
        className="confirm-dialog fixed inset-0 z-50 hidden items-center justify-center backdrop-blur-sm"
        id="confirmDialog"
      >
        <div className="relative min-h-screen px-4 md:flex md:items-center md:justify-center">
          <div className="absolute inset-0 z-10 h-full w-full opacity-25"></div>
          <div className="fixed inset-x-0 bottom-0 z-50 mx-4 mb-4 rounded-lg bg-white p-4 shadow-lg md:relative md:mx-auto md:max-w-md">
            <div className="items-center md:flex">
              <div className="mt-4 text-center md:ml-6 md:mt-0 md:text-left">
                <p className="font-bold">Warning!</p>
                <p className="mt-1 text-sm text-gray-700">
                  Are you sure you want to delete this user?
                </p>
              </div>
            </div>
            <div className="mt-4 text-center md:flex md:justify-end md:text-right">
              <button
                id="confirm-delete-btn"
                className="block w-full rounded-lg bg-red-200 px-4 py-3 text-sm font-semibold text-red-700 md:order-2 md:ml-2 md:inline-block md:w-auto md:py-2"
              >
                Delete
              </button>
              <button
                onClick={() => {}}
                id="confirm-cancel-btn"
                className="mt-4 block w-full rounded-lg bg-gray-200 px-4 py-3 text-sm font-semibold md:order-1 md:mt-0 md:inline-block md:w-auto md:py-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="flex items-center justify-center pt-20 text-xl text-black">
          Loading...
        </div>
      ) : users.length === 0 ? (
        <SkeletonTable />
      ) : (
        <div className="top-10 flex h-full flex-col items-center justify-center bg-white pb-2 pt-8 text-sm">
          <h1 className="w-3/4 pb-4 text-2xl font-bold text-black">Users</h1>
          <input
            type="text"
            className="focus: mb-4 h-8 w-3/4 rounded-t-sm border-b-2 border-gray-300 bg-gray-100 p-2 text-black outline-none"
            onChange={(e) => setSearchedVal(e.target.value)}
            placeholder="Search"
          />
          <div className="h-80 w-3/4 overflow-y-auto overscroll-y-none">
            <table className="w-full">
              <thead className="sticky top-0 z-10 bg-white">
                <tr>
                  <th className="h-px bg-gray-300" colSpan={8}></th>
                </tr>
                <tr className="text-gray-500">
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
                    className="cursor-pointer items-center border-b-2 border-b-gray-300"
                  >
                    <td className="cursor-auto px-2.5 py-2 text-left text-black">
                      {user.id}
                    </td>
                    <td className="px-2.5 py-2 text-left text-gray-500">
                      <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </td>
                    <td className="px-2.5 py-2 text-left text-gray-500">
                      <Link href={`/users/${user.id}`}>{user.email}</Link>
                    </td>
                    <td className="px-2.5 py-2 text-left text-gray-500">
                      <Link href={`/users/${user.id}`}>{user.city.name}</Link>
                    </td>
                    <td className="px-2.5 py-2 text-left text-gray-500">
                      <Link href={`/users/${user.id}`}>
                        {getDisplayDays(user.days)}
                      </Link>
                    </td>
                    <td className="px-2.5 py-2 text-center text-gray-500">
                      <Link href={`/users/${user.id}`}>{user.albumsCount}</Link>
                    </td>
                    <td className="px-2.5 py-2 text-center text-gray-500">
                      <Link href={`/users/${user.id}`}>{user.postsCount}</Link>
                    </td>
                    <td className="justify-center px-2.5 py-2 pr-5 text-gray-500">
                      <svg
                        fill="#000000"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 172.541 172.541"
                        className="ml-2 h-6 w-6 cursor-pointer self-center fill-gray-300 hover:fill-black"
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
            <div className="flex w-1/4 justify-start pt-10 text-gray-400">
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
    <div className="top-10 flex h-full flex-col items-center justify-center bg-white pb-2 pt-8 text-sm">
      <h1 className="w-3/4 pb-4 text-2xl font-bold text-black">Users</h1>
      <input
        type="text"
        className="focus: mb-4 h-8 w-3/4 rounded-t-sm border-b-2 border-gray-300 bg-gray-100 p-2 text-black outline-none"
        placeholder="Search"
      />
      <div className="h-96 w-3/4 overflow-y-auto overscroll-y-none">
        <table className="w-full">
          <thead className="sticky top-0 z-10 bg-white">
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
            <tr className="items-center border-b-2 border-b-gray-300">
              <td className="cursor-trash px-2.5 py-2 text-left text-black">
                100
              </td>
              <td className="px-2.5 py-2 text-left text-gray-500">
                Javier Cisneros
              </td>
              <td className="px-2.5 py-2 text-left text-gray-500">
                fjca185@gmail.com
              </td>
              <td className="px-2.5 py-2 text-left text-gray-500">
                Guadalajara
              </td>
              <td className="px-2.5 py-2 text-left text-gray-500">Weekends</td>
              <td className="px-2.5 py-2 text-center text-gray-500">10</td>
              <td className="px-2.5 py-2 text-center text-gray-500">10</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex w-3/4 items-center justify-start pt-20 text-sm text-black">
        Total 100
      </div>
      <div className="mt-2 flex space-x-2 pb-4 text-xl">
        <button className="active text-black"></button>
      </div>
    </div>
  );
}
