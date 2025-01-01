import { CiHome } from "react-icons/ci";
import { FaGift } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import Link from "next/link";
import { IoIosGitCompare } from "react-icons/io";

export default function PhoneNavbar({
  isHidden,
  WishListProducts,
  CompareProducts,
}) {
  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 py-2 bg-white shadow-lg transition-all duration-500 ease-in-out ${
        isHidden ? "opacity-0 translate-y-full" : "opacity-100 translate-y-0"
      }`}
    >
      <div className="flex items-center justify-around ">
        {[
          { href: "/", label: "Home", icon: <CiHome /> },
          { href: "/Profile", label: "My Account", icon: <VscAccount /> },
          { href: "/Wishlist", label: "Wishlist", icon: <FaGift /> },
          {
            href: "/Compare",
            label: "Compare",
            icon: <IoIosGitCompare />,
          },
        ].map((item, index) => (
          <Link
            key={index}
            className="flex flex-col items-center group relative"
            href={item.href}
          >
            <span className="group-hover:animate-bounce text-xl transition-transform duration-300">
              {item.icon}
            </span>
            {item.label === "Wishlist" && WishListProducts.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                {WishListProducts.length}
              </span>
            )}
            {item.label === "Compare" && CompareProducts.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                {CompareProducts.length}
              </span>
            )}
            <span className="text-xs">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
