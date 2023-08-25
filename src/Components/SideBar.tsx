import React from "react";
import { Link } from "react-router-dom";
import contact from "../utils/contact-book.png";
import bar from "../utils/bar-chart.png";

const Sidebar: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <div className="w-64 bg-indigo-600">
        <div className="p-5">
          <h2 className="text-2xl font-bold text-white">Dashboard</h2>
        </div>
        <nav className="mt-5">
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="flex items-center px-4 py-2 space-x-2 text-gray-200 hover:bg-indigo-700"
              >
                <img src={contact} alt="Contact Icon" className="w-6 h-6" />
                <span>Contacts</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="flex items-center px-4 py-2 space-x-2 text-gray-200 hover:bg-indigo-700"
              >
                <img src={bar} alt="Chart Icon" className="w-6 h-6" />
                <span>Charts and Maps</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
