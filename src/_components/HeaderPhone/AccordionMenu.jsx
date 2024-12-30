"use client";
import Link from "next/link";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function AccordionMenu({ items }) {
  const [activeItems, setActiveItems] = useState([]);
  const toggleItem = (label) => {
    setActiveItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <div className="divide-y divide-gray-100">
      {items.map((item) => (
        <div key={item.label} className="border-gray-100">
          <button
            className="flex items-center justify-between w-full p-4 text-left hover:bg-gray-50"
            onClick={() => toggleItem(item.label)}
          >
            <span className="font-medium text-gray-700 capitalize">
              {item.label}
            </span>
            {item.items.length > 0 && (
              <FiChevronDown
                size={20}
                className={`transform transition-transform duration-200 ${
                  activeItems.includes(item.label) ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          {item.items.length > 0 && activeItems.includes(item.label) && (
            <div className="bg-gray-50 px-4 py-2">
              <div className="space-y-2">
                {item.items.map((subItem, index) => {
                  console.log(item);
                  return (
                    <Link
                      key={index}
                      href={`/Search?q=${item.label.toLowerCase()}`}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-green-500 transition-colors"
                    >
                      {subItem}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
