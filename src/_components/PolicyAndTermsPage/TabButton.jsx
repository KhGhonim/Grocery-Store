import React from "react";

export default function TabButton({ active, onClick, icon, text }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 flex items-center justify-center px-6 py-4 font-medium text-sm transition-colors duration-200 ${
        active
          ? "bg-white text-green-600 border-b-2 border-green-600"
          : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      }`}
    >
      <span className="mr-2">{icon}</span>
      {text}
    </button>
  );
}
