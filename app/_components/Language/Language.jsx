"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaGlobe } from "react-icons/fa";

export default function Language() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState("en");
  const router = useRouter();

  const dropdownRef = useRef(null);
  const handleLanguageChange = (lang) => {
    setActiveLanguage(lang);
    localStorage.setItem("language", lang);
    router.replace(`/${lang}`);
    setIsMenuVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuVisible(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative ">
      {/* Globe Icon */}
      <button
        className="flex items-center  px-4 py-2  rounded-md "
        onClick={() => setIsMenuVisible(!isMenuVisible)}
      >
        <FaGlobe className="text-xl text-green-400 hover:text-green-500 transition-all duration-300 ease-out" />
      </button>

      {/* Dropdown Menu */}
      {isMenuVisible && (
        <div className="absolute !z-50 right-0 mt-2 w-40 text-black bg-white border rounded-md shadow-md">
          <div
            className="flex items-center justify-between px-4 py-2 cursor-pointer "
            onClick={() => handleLanguageChange("en")}
          >
            <span>English</span>
            {activeLanguage === "en" && <span>✔️</span>}
          </div>
          <div
            className="flex items-center justify-between px-4 py-2 cursor-pointer "
            onClick={() => handleLanguageChange("ar")}
          >
            <span>العربية</span>
            {activeLanguage === "ar" && <span>✔️</span>}
          </div>
        </div>
      )}
    </div>
  );
}
