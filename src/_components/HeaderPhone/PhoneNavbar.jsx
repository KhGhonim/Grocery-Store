import { CiHome } from "react-icons/ci";
import { FaGift } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { CgTrack } from "react-icons/cg";
import Link from "next/link";

export default function PhoneNavbar({isHidden}) {

  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 py-2 bg-white shadow-lg transition-all duration-500 ease-in-out ${
        isHidden ? "opacity-0 translate-y-full" : "opacity-100 translate-y-0"
      }`}
    >
      <div className="flex items-center justify-around">
        {[
          { href: "/", label: "Home", icon: <CiHome /> },
          { href: "/Profile", label: "My Account", icon: <VscAccount /> },
          { href: "/Wishlist", label: "Wishlist", icon: <FaGift /> },
          {
            href: "/OrderTracking",
            label: "Order Tracking",
            icon: <CgTrack />,
          },
        ].map((item, index) => (
          <Link
            key={index}
            className="flex flex-col items-center group"
            href={item.href}
          >
            <span className="group-hover:animate-bounce text-xl transition-transform duration-300">
              {item.icon}
            </span>
            <span className="text-xs">{item.label}</span>

          </Link>
        ))}
      </div>
    </div>
  );
}
