"use client";

import { useEffect, useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import MobileDrawer from "./MobileDrawer";
import Image from "next/image";
import Link from "next/link";
import PhoneNavbar from "./PhoneNavbar";

export default function MobileHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsHidden(false);
      } else {
        setIsHidden(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHidden]);

  return (
    <>
      <div className="lg:hidden absolute p-2 top-0 left-0 right-0 bg-white z-50 shadow-md">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo photo */}
          <Link className=" flex items-center gap-2 " href="/">
            <Image
              src={"/images/logo.png"}
              alt={""}
              width={50}
              height={50}
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

          <div className="flex items-center gap-4">
            <button className="relative">
              <FaShoppingBasket size={24} className="text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="text-gray-700"
            >
              <IoIosMenu size={24} />
            </button>
          </div>
        </div>
      </div>

      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        isHidden={isHidden}
      />
      <PhoneNavbar isHidden={isHidden} />
    </>
  );
}
