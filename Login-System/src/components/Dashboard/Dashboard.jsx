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

      <aside className="w-1/5 bg-white flex flex-col">
        <div className="p-6 text-blue-600 font-bold text-lg">Sales.</div>
        <ul className="mt-4">
          <li className="p-4 flex items-center text-gray-700 hover:bg-gray-100 cursor-pointer">
            <Home className="w-5 h-5 mr-4" />
            Dashboard
          </li>
          <li className="p-4 flex items-center text-gray-700 hover:bg-gray-100 cursor-pointer">
            <Package className="w-5 h-5 mr-4" />
            Lab Test
          </li>
          <li className="p-4 flex items-center text-gray-700 hover:bg-gray-100 cursor-pointer">
            <Calendar className="w-5 h-5 mr-4" />
            Appointment
          </li>
          <li className="p-4 flex items-center text-gray-700 hover:bg-gray-100 cursor-pointer">
            <Package className="w-5 h-5 mr-4" />
            Medicine Order
          </li>
          <li className="p-4 flex items-center text-gray-700 hover:bg-gray-100 cursor-pointer">
            <Mail className="w-5 h-5 mr-4" />
            Message
          </li>
          <li className="p-4 flex items-center text-gray-700 hover:bg-gray-100 cursor-pointer">
            <CreditCard className="w-5 h-5 mr-4" />
            Payment
          </li>
          <li className="p-4 flex items-center text-gray-700 hover:bg-gray-100 cursor-pointer">
            <Settings className="w-5 h-5 mr-4" />
            Settings
          </li>
        </ul>
        <div className="p-4 mt-auto text-gray-500 flex items-center cursor-pointer">
          <HelpCircle className="w-5 h-5 mr-4" />
          Help
        </div>
      </aside>


      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Sales Information</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute top-3 left-3 text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
            <img
              src={profileImageUrl}
              alt="Profile"
              className="w-10 h-10 rounded-full border border-gray-300 object-cover"
            />
          </div>
        </div>

        <div className="flex justify-end mb-4">
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Add User
          </button>
        </div>


        <table className="w-full bg-white rounded-lg">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-4 text-left">Invoice ID</th>
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
                className={`hover:bg-gray-100 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
              >
                <td className="p-4 text-blue-600">#{user.id}</td>
                <td className="p-4">{user.date}</td>
                <td className="p-4">{user.name}</td>
                <td className="p-4">$100</td>
                <td className="p-4">$0</td>
                <td className="p-4">$100</td>
                <td className="p-4">{user.isActive ? "Active" : "Inactive"}</td>
                <td className="p-4 flex space-x-2">
                  <button
                    onClick={() => toggleUserStatus(user.id)}
                    className={`px-4 py-2 rounded-lg text-white ${user.isActive
                        ? "bg-gray-500 hover:bg-gray-600"
                        : "bg-green-500 hover:bg-green-600"
                      }`}
                  >
                    {user.isActive ? "Deactivate" : "Activate"}
                  </button>
                  <button
                    onClick={() => navigate(`/dashboard/edit-user/${user.id}`)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => navigate(`/dashboard/delete-user/${user.id}`)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      {showAddModal && (
        <AddUserModal closeModal={() => setShowAddModal(false)} />
      )}
    </div>
  );
};

export default Dashboard;
