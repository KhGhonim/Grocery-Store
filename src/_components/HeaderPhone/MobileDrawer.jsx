"use client";

import { useState, useRef, useEffect } from "react";
import AccordionMenu from "./AccordionMenu";
import { DrawerCategories, DrawerHome } from "../../DB/db";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function MobileDrawer({ isOpen, onClose, isHidden }) {
  const [activeTab, setActiveTab] = useState("menu");
  const [IsSearchOpened, setIsSearchOpened] = useState(false);
  const ref = useRef(null);
  const handleClickOutside = (event) => {
    // If the click is outside the modal, close it
    if (ref.current && !ref.current.contains(event.target)) {
      onClose();
      setIsSearchOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [query, setquery] = useState(null);
  const { status } = useSession();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={handleClickOutside}
        />
      )}

      {/* Drawer */}
      <div
        ref={ref}
        className={`
      fixed top-0 left-0 h-full w-[300px] bg-[--background-color] text-[--text-color] z-40 p-2  transform transition-transform duration-300 lg:hidden
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
      
    `}
      >
        {IsSearchOpened && (
          <div
            onClick={() => {
              setIsSearchOpened(false);
            }}
            className="fixed inset-0  bg-black bg-opacity-50 z-50 lg:hidden"
          />
        )}
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
        <div onClick={() => setIsSearchOpened(true)} className="p-4 ">
          <input
            type="text"
            onChange={(e) => setquery(e.target.value)}
            placeholder="Search..."
            className={`${
              IsSearchOpened
                ? "absolute top-1/2 left-1/2 transform  -translate-y-1/2 z-50 w-full p-4  border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                : "absolute w-10/12 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            } transition-all duration-300 ease-in-out ${
              IsSearchOpened ? "-translate-x-1/4" : "translate-x-0"
            }`}
          />
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-2 mt-10">
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
              title="Menu"
              items={DrawerHome.map((item) => ({
                label: item.label,
                items: item.items?.map((subItem) => ({
                  label: subItem.label,
                  link: subItem.link,
                })),
              }))}
            />
          ) : (
            <AccordionMenu
              title="Categories"
              items={Object.entries(DrawerCategories).map(
                ([category, items]) => ({
                  label: category,
                  items: items.map(({ name, link }) => ({
                    label: name,
                    link,
                  })),
                })
              )}
            />
          )}
        </div>

        {/* Footer */}
        {status === "unauthenticated" ? (
          <div
            className={`absolute ${
              isHidden ? "bottom-2" : "bottom-14"
            } left-0 right-0 border-t bg-[--background-color] p-4 space-y-3 transition-all duration-150 ease-in-out`}
          >
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
        ) : (
          <div
            className={`absolute ${
              isHidden ? "bottom-2" : "bottom-14"
            } left-0 right-0 border-t bg-[--background-color] p-4 flex justify-center space-y-3 transition-all duration-150 ease-in-out`}
          >
            <button
              onClick={() => signOut()}
              className="bg-green-500 text-center font-semibold text-white py-2 px-6 rounded-lg hover:bg-green-600 transition-colors"
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </>
  );
}
