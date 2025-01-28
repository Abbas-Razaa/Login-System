import React, { useState } from "react";
import {
  Home,
  Calendar,
  Package,
  Mail,
  CreditCard,
  Settings,
  HelpCircle,
  Search,
  Bell,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AddUserModal from "../Add/AddUserModal";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);
  const [showAddModal, setShowAddModal] = useState(false);

  const profileImageUrl = "https://img.freepik.com/free-photo/3d-icon-travel-with-man_23-2151037420.jpg?t=st=1738059616~exp=1738063216~hmac=4e2ba67ecb116507a6750035d5c0ee143da4612e6495e675d603ee0095344c7d&w=1380";

  const toggleUserStatus = (id) => {
    dispatch({ type: "TOGGLE_USER_STATUS", payload: id });
  };

  return (
    <div className="flex min-h-screen w-full font-sans bg-gray-100">
      <aside className="w-64 bg-white shadow-lg flex flex-col">
        <div className="p-6 text-blue-600 font-bold text-xl">Sales.</div>
        <ul className="mt-4">
          {[
            { name: "Dashboard", icon: Home },
            { name: "Lab Test", icon: Package },
            { name: "Appointment", icon: Calendar },
            { name: "Medicine Order", icon: Package },
            { name: "Message", icon: Mail },
            { name: "Payment", icon: CreditCard },
            { name: "Settings", icon: Settings },
          ].map((item, index) => (
            <li
              key={index}
              className="p-4 flex items-center text-gray-700 hover:bg-gray-200 cursor-pointer"
            >
              <item.icon className="w-5 h-5 mr-4" />
              {item.name}
            </li>
          ))}
        </ul>
        <div className="p-4 mt-auto text-gray-500 flex items-center cursor-pointer">
          <HelpCircle className="w-5 h-5 mr-4" />
          Help
        </div>
      </aside>

      <main className="flex-1 p-6">
        <div className="mb-6">
          <div className="mb-6 flex justify-between items-start">
            <div className="relative w-full max-w-xl">
              <Search className="absolute top-3 left-3 text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
              <img
                src={profileImageUrl}
                alt="Profile"
                className="w-10 h-10 rounded-full border border-gray-300 object-cover"
              />
            </div>
          </div>

          <div className="mt-6">
            <h1 className="text-3xl font-bold">Sales Information</h1>
          </div>

        </div>

        <div className="grid grid-cols-4 gap-4 mb-4">
          <input type="text" placeholder="Enter Customer Name" className="border p-2 rounded-lg w-full" />
          <input type="text" placeholder="Enter Invoice ID" className="border p-2 rounded-lg w-full" />
          <input type="date" className="border p-2 rounded-lg w-full" />
          <input type="date" className="border p-2 rounded-lg w-full" />
        </div>

        <div className="flex justify-end mb-4">
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Add User
          </button>
        </div>

        <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gray-50 text-black">
            <tr>
              <th className="p-4 text-left"><input type="checkbox" className="mr-4" />Invoice ID</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Payable Amount</th>
              <th className="p-4 text-left">Paid Amount</th>
              <th className="p-4 text-left">Due</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100`}
              >
                <td className="p-4 text-blue-600"><input type="checkbox" className="mr-4" />#{user.id}</td>
                <td className="p-4">{user.date}</td>
                <td className="p-4">{user.name}</td>
                <td className="p-4">$100</td>
                <td className="p-4">$0</td>
                <td className="p-4">$100</td>
                <td className="p-4">{user.isActive ? "Active" : "Inactive"}</td>
                <td className="p-4 flex space-x-2">
                  <button onClick={() => toggleUserStatus(user.id)} className={`${user.isActive ? "bg-gray-500 hover:bg-gray-600" : "bg-green-500 hover:bg-green-600"} text-white px-4 py-2 rounded-lg`}> {user.isActive ? "Deactivate" : "Activate"} </button>
                  <button onClick={() => navigate(`/dashboard/edit-user/${user.id}`)} className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"> Edit </button>
                  <button onClick={() => navigate(`/dashboard/delete-user/${user.id}`)} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"> Delete </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      {showAddModal && <AddUserModal closeModal={() => setShowAddModal(false)} />}
    </div>
  );
};

export default Dashboard;
