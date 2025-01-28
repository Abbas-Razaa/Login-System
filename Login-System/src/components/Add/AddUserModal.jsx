import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddUserModal = ({ closeModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleAddUser = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_USER",
      payload: {
        id: Date.now(),
        name,
        email,
        isActive: true,
        date: new Date().toLocaleDateString(),
        role: "user",
      },
    });
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <form
        onSubmit={handleAddUser}
        className="bg-white p-6 rounded-lg shadow-lg w-1/3"
      >
        <h2 className="text-2xl font-bold mb-4">Add New User</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Add User
        </button>
        <button
          type="button"
          onClick={closeModal}
          className="ml-4 bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddUserModal;
