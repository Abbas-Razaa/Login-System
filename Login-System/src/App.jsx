import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Dashboard from "./components/Dashboard/Dashboard";
import EditUser from "./components/Edit/EditUser";
import DeleteUser from "./components/Delete/DeleteUser";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/edit-user/:id" element={<EditUser />} />
        <Route path="/dashboard/delete-user/:id" element={<DeleteUser />} />
      </Routes>
    </Router>
  );
}

export default App;
