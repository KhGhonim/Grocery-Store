"use client";
import Link from "next/link";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function AccordionMenu({ items, title }) {
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
      {items.map((item, i) => (
        <div key={`item-${i}+${item.label}`} className="border-gray-100">
          <button
            className="flex items-center justify-between w-full group p-4 text-left focus:outline-none"
            onClick={() => toggleItem(item.label)}
          >
            <span className="font-medium text-gray-700 capitalize group-hover:text-green-500">
              {item.label}
            </span>
            {item?.items?.length ? (
              <FiChevronDown
                size={20}
                className={`transform transition-transform duration-200 ${
                  activeItems.includes(item.label) ? "rotate-180" : ""
                }`}
              />
            ) : null}
          </button>

          {item?.items?.length > 0 && activeItems.includes(item.label) && (
            <div className="bg-[--background-color] px-4 py-2">
              <div className="space-y-2">
                {item?.items?.map((subItem, index) => {
                  return (
                    <Link
                      key={`${item.label}+item-${index}`}
                      href={`/${title === "Menu" ? subItem.link : "Search?q=" + subItem.link}`}
                      className="block px-4 py-2 text-sm capitalize text-gray-600 hover:text-green-500 transition-colors"
                    >
                      {subItem.label}
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
