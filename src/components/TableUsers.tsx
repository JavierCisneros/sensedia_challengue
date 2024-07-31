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

  ///function to delete user
  const deleteUser = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/users/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`Failed to delete user: ${response.statusText}`);
      }
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
    } catch (error: any) {
      setError(error.message);
    }
  };

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  // Calculate total pages
  const totalPages = Math.ceil(users.length / usersPerPage);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="text-black text-xl flex justify-center items-center pt-20">
        Loading...
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
      <div className="flex justify-center text-sm h-full pt-8 flex-col items-center bg-white pb-2 top-10">
        <h1 className="text-2xl font-bold text-black pb-4 w-3/4">Users</h1>
        <input
          type="text"
          className="h-8 rounded-t-sm text-black border-gray-300 border-b-2 mb-4 w-3/4 bg-gray-200 p-2 focus: outline-none"
          onChange={(e) => setSearchedVal(e.target.value)}
          placeholder="Search"
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
                  <button
                    className="cursor-trash"
                    //onclick show confirm dialog
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
                          deleteUser(user.id);
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
                    <td className="px-2.5 py-2 text-black">{user.id}</td>
                  </button>
                  <td className="px-2.5 py-2 text-gray-500">{user.name}</td>
                  <td className="px-2.5 py-2 text-gray-500">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-black text-sm flex  items-center pt-20 justify-start w-3/4">
          Total {users.length}
        </div>
        <div className="flex space-x-2 mt-2 text-xl pb-4">
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
