"use client";
import React, { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function TableUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchedVal, setSearchedVal] = useState("");
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/v1/users");
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        console.log(response);
        const json = await response.json();
        if (json.users && Array.isArray(json.users)) {
          setUsers(json.users);
        } else {
          throw new Error("Invalid data structure");
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Calculate total pages
  const totalPages = Math.ceil(users.length / usersPerPage);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Loading...</div>;
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
      <div className="flex justify-center text-sm h-full pt-8 flex-col items-center bg-white pb-4 top-10">
        <h1 className="text-2xl font-bold text-black pb-4 w-3/4">Users</h1>
        <input
          type="text"
          className="h-8 rounded-md text-black border-black border-2 mb-4 w-3/4"
          onChange={(e) => setSearchedVal(e.target.value)}
        />
        <div className="w-3/4 h-96 overscroll-y-none overflow-y-auto ">
          <table className="w-full table-fixed">
            <div className="h-px border-gray-300 border-solid " />
            <thead className="sticky top-0 bg-white z-10">
              <tr className="text-gray-500">
                <th className="px-2.5 py-4">USER</th>
                <th className="px-2.5 py-4">NAME</th>
                <th className="px-2.5 py-4">E-MAIL</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className=" border-b-2 border-b-gray-300 ">
                  <td className="px-2.5 py-2 text-black">{user.id}</td>
                  <td className="px-2.5 py-2 text-gray-500">{user.name}</td>
                  <td className="px-2.5 py-2 text-gray-500">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex space-x-2 mt-4">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={
                index + 1 === currentPage ? "active text-black" : "text-black"
              }
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
