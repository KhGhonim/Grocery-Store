"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { CatagoryData } from "../db/db";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function navbar() {
  const { data: session, status } = useSession();
  const [isArrowClicked, setIsArrowClicked] = useState(false);
  const [IsCatagoryClicked, setIsCatagoryClicked] = useState(false);
  const [Menu, setMenu] = useState(false);
  const [query, setquery] = useState(null);
  const MyCatagoryRef = useRef(null);
  const MyMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const router = useRouter();

  const handleArrow = () => {
    setIsArrowClicked((prev) => !prev);
    setIsCatagoryClicked((prev) => !prev);
  };
  const HandleMenu = () => {
    setMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (eo) => {
      if (
        MyCatagoryRef.current &&
        !MyCatagoryRef.current.contains(eo.target) &&
        MyMenuRef.current &&
        !MyMenuRef.current.contains(eo.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(eo.target)
      ) {
        setIsCatagoryClicked(false);
        setIsArrowClicked(false);
        setMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // @ts-ignore
  const { SelectedProducts } = useSelector((state) => state.carttt);

  const handleSearch = (e) => {
    e.preventDefault();
    router.replace(`/Search?q=${query}`);
  };

  return (
    <>
      <header className="bg-white">
        <div className=" flex h-16 max-w-screen items-center gap-8 px-4 sm:px-6 lg:px-8 shadow-sm my-3">
          {/* Logo photo */}
          <Link className=" flex items-center gap-2 p-1" href="/">
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
              <h1 className=" font-bold text-orange-400 text-sm md:text-lg">
                Grocery
              </h1>
              <h1 className=" font-bold text-green-700 text-sm md:text-lg">
                Store
              </h1>
            </div>
          </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            {/* Dropdown Catagory */}
            <nav aria-label="Global" className="hidden md:block">
              <div className="relative flex justify-around items-center gap-7 group cursor-pointer">
                <div
                  ref={MyCatagoryRef}
                  onClick={handleArrow}
                  className="inline-flex items-center overflow-hidden rounded-full border bg-white"
                >
                  <div className="flex justify-between items-center gap-4 border-e px-4 py-2  hover:bg-gray-50 hover:text-gray-700">
                    <Image
                      src={"/images/menu.png"}
                      alt={"Catagory Menu"}
                      width={25}
                      height={25}
                    />
                    <span className="text-sm/none text-gray-600">Catagory</span>
                  </div>

                  <button className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700 ">
                    {isArrowClicked ? (
                      <MdKeyboardArrowDown />
                    ) : (
                      <MdOutlineKeyboardArrowUp />
                    )}
                  </button>
                </div>

                {/* Begin of the Dropdown menu */}

                {IsCatagoryClicked ? (
                  <div
                    className="absolute start-0 z-10 top-12  rounded-md border border-gray-100 bg-white shadow-lg"
                    role="menu"
                  >
                    <div className="p-2 rounded-xl md:block cursor-pointer">
                      {CatagoryData.map((item) => {
                        return (
                          <div
                            key={item.name}
                            className="text-gray-500 hover:text-white hover:!bg-green-600 rounded-full p-2"
                          >
                            <Link
                              href={`/ProductCatagory/${item.link}`}
                              className="flex justify-evenly items-center gap-5 w-max cursor-pointer"
                            >
                              <span>{item.icon}</span>
                              <span>{item.name}</span>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : null}

                {/* Begin of the Search  */}

                <form
                  onSubmit={handleSearch}
                  className=" w-85 border border-solid py-2 rounded-3xl flex items-center bg-white shadow-sm"
                >
                  <button
                    type="submit"
                    className="px-3 border-r-2 border-gray-300 text-gray-500"
                  >
                    <CiSearch />
                  </button>
                  <input
                    type="search"
                    name="Search"
                    id="Search"
                    placeholder="Search your product"
                    className="w-full px-3 text-gray-700 bg-transparent border-none focus:outline-none focus:ring-0"
                    onChange={(eo) => {
                      setquery(eo.target.value);
                    }}
                  />
                </form>
              </div>
            </nav>

            {/* Begin of the Basket */}

            <div className="flex items-center gap-4 max-sm:gap-2 cursor-pointer ">
              <Link
                href="/Cart"
                className="flex justify-center items-center gap-1 rounded-md bg-green-400 transition-all duration-100 hover:bg-green-600 px-3 py-2 "
              >
                <Image
                  src={"/images/shopping-basket.png"}
                  alt={"shopping-basket"}
                  width={20}
                  height={20}
                  priority={true}
                  quality={100}
                />
                <span>{SelectedProducts.length}</span>
              </Link>

              {/* Begin of the Authentication */}
              {status === "loading" ? (
                <div className="sm:flex sm:gap-4 animate-pulse">
                  <div className="hidden rounded-md bg-gray-200 px-5 py-2.5 sm:block"></div>
                  <div className="hidden rounded-md bg-gray-200 px-5 py-2.5 sm:block mt-2 sm:mt-0"></div>
                </div>
              ) : status === "unauthenticated" ? (
                <div className="sm:flex sm:gap-4">
                  <Link
                    className="hidden rounded-md bg-green-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-green-700 sm:block"
                    href="/signin"
                  >
                    Login
                  </Link>
                </div>
              ) : (
                <div className="sm:flex sm:gap-4">
                  {status === "authenticated" &&
                    session.user.email === "admin@admin.com" && (
                      <Link
                        className="hidden rounded-md bg-green-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-green-700 sm:block"
                        href="/AddProduct"
                      >
                        Add Product
                      </Link>
                    )}

                  <button
                    className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-green-600 transition hover:text-green-600/75 sm:block"
                    onClick={() => signOut()}
                  >
                    LogOut
                  </button>
                </div>
              )}

              {/* Begin of the Sm screens menu */}

              <button
                ref={toggleButtonRef}
                onClick={HandleMenu}
                className="block rounded-full bg-gray-100 transition-all duration-150  p-2.5 text-gray-600  hover:text-gray-600/75 md:hidden"
              >
                <CiMenuBurger />
              </button>
            </div>
          </div>
        </div>
        {/* Begin of the Sm Drawer */}

        <div
          ref={MyMenuRef}
          className={`fixed right-0  h-screen w-72 transform transition-transform duration-300 ease-in-out ${
            Menu ? "translate-x-0" : "translate-x-full"
          } flex flex-col justify-between border bg-green-600 z-50 rounded-2xl`}
        >
          <div className="px-4 py-2">
            <ul className="mt-6 space-y-1">
              <li>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                    <span className="text-sm font-medium"> Account </span>

                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  {status === "authenticated" ? (
                    <ul className="mt-2 space-y-1 px-4">
                      <li>
                        <Link
                          href="/Profile"
                          className="block w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                        >
                          Account Details
                        </Link>
                      </li>

                      <li>
                        <button
                          type="submit"
                          className="block w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 [text-align:_inherit] hover:bg-gray-100"
                          onClick={() => signOut()}
                        >
                          Logout
                        </button>
                      </li>
                      <li>
                        <Link
                          href="/AddProduct"
                          className="block w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 [text-align:_inherit] hover:bg-gray-100"
                        >
                          Add Product
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    <ul className="mt-2 space-y-1 px-4">
                      <li className=" w-full">
                        <Link
                          href="/signin"
                          className="block w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900  hover:bg-gray-100"
                        >
                          LogIn
                        </Link>
                      </li>
                    </ul>
                  )}
                </details>
              </li>
            </ul>
          </div>

          {session && (
            <div className="sticky inset-x-0 bottom-0 border-t border-gray-300 ">
              <Link
                href="#"
                className="flex items-center gap-2  bg-green-600 p-4 hover:bg-gray-50"
              >
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="size-10 rounded-full object-cover"
                />

                <div>
                  <p className="text-xs">
                    <strong className="block font-medium">
                      {session.user.name}
                    </strong>

                    <span> {session.user.email} </span>
                  </p>
                </div>
              </Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
