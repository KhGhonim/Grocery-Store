"use client";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { mockCategories } from "../../../DB/db";
import { RiCustomerService2Fill } from "react-icons/ri";

export default function HeaderThree() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [IsNabarFixed, setIsNabarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 800) {
        setIsNabarFixed(false);
      } else {
        setIsNabarFixed(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [IsNabarFixed]);

  return (
    <div
      className={`${
        IsNabarFixed ? "fixed top-0 bg-white z-50 right-0 left-0 p-3" : "-top-full"
      }  transition-[top] duration-500 ease-out border-t hidden lg:block border-b`}
    >
      <div className="w-full  px-10">
        <div className="flex items-center gap-8">
          {Object.keys(mockCategories).map((category) => (
            <div
              key={category}
              className="relative group py-3 px-4 cursor-pointer"
              onMouseEnter={() => setActiveCategory(category)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="flex items-center capitalize text-xs gap-1 text-gray-700 hover:text-green-600">
                {category}
                <FaChevronDown size={10} />
              </div>

              {activeCategory === category && (
                <div className="absolute top-full left-0 w-[500px] bg-white shadow-lg rounded-lg p-6 z-50">
                  <div className="grid grid-cols-3 gap-6">
                    {mockCategories[category].map((section, index) => (
                      <div key={index} className="space-y-4">
                        <img
                          src={section?.image}
                          alt={section?.name}
                          className="w-full h-40 object-cover rounded-lg"
                        />
                        <h3 className="font-semibold text-lg">
                          {section?.name}
                        </h3>
                        <ul className="space-y-2">
                          {section?.items?.map((item, idx) => (
                            <li
                              key={idx}
                              className="hover:text-green-600 text-sm cursor-pointer"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="ml-auto flex items-center gap-2 text-green-600">
            <RiCustomerService2Fill  size={20} />
            <span className="font-semibold">1900888123</span>
            <span className="text-sm text-gray-500">24/7 Support Center</span>
          </div>
        </div>
      </div>
    </div>
  );
}