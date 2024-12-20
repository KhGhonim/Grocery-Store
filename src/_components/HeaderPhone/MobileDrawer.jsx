"use client";

import { useState, useRef, useEffect } from "react";
import AccordionMenu from "./AccordionMenu";
import { mockCategories } from "../../DB/db";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MobileDrawer({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("menu");

  const ref = useRef(null);
  const handleClickOutside = (event) => {
    // If the click is outside the modal, close it
    if (ref.current && !ref.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [query, setquery] = useState(null);

  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    router.replace(`/Search?q=${query}`);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        ref={ref}
        className={`
      fixed top-0 left-0 h-full w-[300px] bg-white z-50 p-2 transform transition-transform duration-300 lg:hidden
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
    `}
      >
        {/* Logo photo */}
        <div className="flex items-center justify-between p-4 border-b">
          <Link className=" flex items-center gap-2" href="/">
            <Image
              src={"/images/logo.png"}
              alt={""}
              width={100}
              height={100}
              priority={true}
              quality={100}
              className=""
            />

            {/* Logo's brand */}

            <div>
              <h1 className=" font-bold text-orange-400 text-sm">Grocery</h1>
              <h1 className=" font-bold text-green-700 text-sm">Store</h1>
            </div>
          </Link>
        </div>

        {/* Search */}
        <div className="p-4">
          <input
            type="text"
            onChange={(e) => setquery(e.target.value)}
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-2 border-b">
          <button
            className={`py-2  text-center font-medium transition-all rounded-lg mx-2
            ${
              activeTab === "menu"
                ? "text-white bg-green-600 rounded-full p-2"
                : "bg-gray-50 text-gray-500 hover:bg-green-400 transition-all duration-300 ease-in-out hover:text-white"
            }`}
            onClick={() => setActiveTab("menu")}
          >
            Menu
          </button>
          <button
            className={`py-2  text-center font-medium transition-all rounded-lg mx-2
            ${
              activeTab === "categories"
                ? "text-white bg-green-600 rounded-full p-"
                : "bg-gray-50 text-gray-500 hover:bg-green-400 transition-all duration-300 ease-in-out hover:text-white"
            }`}
            onClick={() => setActiveTab("categories")}
          >
            Categories
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto h-[calc(100%-200px)]">
          {activeTab === "menu" ? (
            <AccordionMenu
              items={[
                {
                  label: "Home",
                  items: [],
                },
                {
                  label: "Shop",
                  items: ["Shop Grid", "Shop List", "Shop Single"],
                },
                {
                  label: "Vendors",
                  items: [
                    "Dashboard",
                    "Store Listing",
                    "Store Details",
                    "My Orders",
                  ],
                },
                {
                  label: "Blog",
                  items: ["Blog Grid", "Blog List", "Blog Single"],
                },
                {
                  label: "Pages",
                  items: [
                    "About Us",
                    "Contact",
                    "Login",
                    "Register",
                    "Forgot Password",
                  ],
                },
              ]}
            />
          ) : (
            <AccordionMenu
              items={Object.entries(mockCategories).map(
                ([category, sections]) => ({
                  label: category,
                  items: sections.flatMap((section) => section.items),
                })
              )}
            />
          )}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 border-t bg-white p-4 space-y-3">
          <div className="grid grid-cols-2 gap-2 mt-1">
            <Link
              href="/signup"
              className="bg-orange-500 text-center font-semibold text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Sign Up
            </Link>
            <Link
              href="/signin"
              className="bg-green-500 text-center font-semibold text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
