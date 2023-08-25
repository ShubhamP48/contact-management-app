import React from "react";

interface ContactDetails {
  id: string;
  first_name: string;
  last_name: string;
  mob: string;
  status: string;
}

interface PopupProps {
  close: () => void;
  el: ContactDetails;
}

const Popup: React.FC<PopupProps> = ({ close, el }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-opacity-75 bg-gray-900 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-4 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Contact Details
          </h2>
          <button
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={() => close()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div key={el.id} className="bg-gray-100 p-4 rounded-lg text-gray-800">
          <div className="w-32 h-32 mx-auto">
            <img
              className="w-full h-full object-cover rounded-full"
              src="data:image/png;base64,..."
              alt=""
            />
          </div>
          <div className="mt-4">
            <p className="text-lg font-semibold">
              {el.first_name} {el.last_name}
            </p>
            <p className="text-gray-600 text-sm mt-1">Mobile: {el.mob}</p>
            <p className="text-gray-600 text-sm mt-1">
              Status: {el.status === "active" ? "Active" : "Inactive"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
