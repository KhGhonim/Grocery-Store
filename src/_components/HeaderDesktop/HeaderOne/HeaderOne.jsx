"use client";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Language from "../../Language/Language";
import DarkAndLightMode from "../../DarkAndLightMode/DarkAndLightMode";
import { useSession } from "next-auth/react";

export default function HeaderOne() {
  const { data: session, status } = useSession();

  return (
    <div className="hidden lg:flex bg-gray-100 py-2  items-center justify-between px-4 relative">
      <div className=" px-4 w-full flex justify-between items-center text-xs">
        <div className="flex gap-4">
          <Link href="/AboutUs" className="hover:text-green-600">
            About Us
          </Link>
          {status === "unauthenticated" && (
            <Link href="/Privacy" className="hover:text-green-600">
              Privacy & Terms Policy
            </Link>
          )}
          {status === "authenticated" && (
            <div className="flex gap-4">
              <Link href="/Profile" className="hover:text-green-600">
                My Account
              </Link>
              <Link href="/Wishlist" className="hover:text-green-600">
                Wishlist
              </Link>
              <Link href="/OrderTracking" className="hover:text-green-600">
                Order Tracking
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="flex mx-6 gap-4 flex-1 w-1/2  ">
        <Marquee
          loop={0}
          gradient={false}
          className="text-green-600 font-bold"
          pauseOnHover={true}
          speed={50}
          direction="left"
        >
          <div className="mr-10 px-4 font-mono">
            Fresh Produce Arrived Daily!
          </div>
          <div className="mr-10 px-4 font-mono">
            Weekly Specials Inside - Don't Miss Out!
          </div>
          <div className="mr-10 px-4 font-mono">
            Local & Organic Options Available!
          </div>
          <div className="mr-96 px-4 font-mono">
            Your Neighborhood Market - We're Here for You!
          </div>
        </Marquee>
      </div>

      <div className="flex flex-row w-full items-center gap-2">
        <div className="flex w-full  flex-row items-center gap-2 text-xs text-gray-400 ">
          <div className="flex flex-row items-center gap-2 text-center justify-center">
            {" "}
            <span className="">Need help? Call Us:</span>
            <span className="text-green-600">1800900122</span>
          </div>
        </div>
        <Language />
        <DarkAndLightMode />
      </div>
    </div>
  );
}
