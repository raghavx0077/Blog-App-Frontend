import { useState, useEffect } from "react";
import axios from "axios";

function UserTable() {
  const [User, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/users")
      .then(function (response) {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <tr className="uppercase text-sm tracking-wider">
            <th className="px-6 py-3 text-left font-medium">First Name</th>
            <th className="px-6 py-3 text-left font-medium">Last Name</th>
            <th className="px-6 py-3 text-left font-medium">Email</th>
            <th className="px-6 py-3 text-left font-medium">Phone Number</th>
            <th className="px-6 py-3 text-left font-medium">Designation</th>
            <th className="px-6 py-3 text-left font-medium">Time</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm">
          {User.map((user) => (
            <tr
              key={user.id}
              className="border-b hover:bg-gray-100 transition duration-300 ease-in-out"
            >
              <td className="px-6 py-4 whitespace-nowrap">{user.firstName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.lastName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {user.phoneNumber}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{user.designation}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
