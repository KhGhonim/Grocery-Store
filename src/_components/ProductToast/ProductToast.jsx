"use client";
import { AnimatePresence, motion } from "framer-motion";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";

export default function ProductToast() {
  const [currentProduct, setCurrentProduct] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [DidTheUserRefusedProductToast, setDidTheUserRefusedProductToast] =
    useState(
      typeof window !== "undefined" && localStorage.getItem("isVisible")
        ? JSON.parse(localStorage.getItem("isVisible"))
        : true
    );
  const [arrData, setstate] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("api/getProducts", {
        cache: "no-cache",
        next: { revalidate: 0 },
      });

      if (!res.ok) {
        notFound();
      }

      const data = await res.json();
      setstate(data);
      if (data.length > 0) {
        setCurrentProduct(data[0]);
        setIsVisible(true);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    if (arrData.length === 0) return;

    let currentIndex = 0;

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % arrData.length;
        setCurrentProduct(arrData[currentIndex]);
        setIsVisible(true);
      }, 1000); // Matches the exit animation duration
    }, 7000);

    return () => clearInterval(interval);
  }, [arrData]);

  const handleClick = () => {
    setDidTheUserRefusedProductToast(false);
    localStorage.setItem("isVisible", JSON.stringify(false));
  };

  return (
    <AnimatePresence>
      {isVisible && currentProduct && DidTheUserRefusedProductToast && (
        <motion.div
          key={currentProduct?.id || currentProduct?.name}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="hidden lg:flex fixed bottom-4 left-4 bg-[--background-color] text-[--text-color] rounded-lg z-40 shadow-lg py-4 w-96 h-28"
        >
          <div className="flex items-center gap-4">
            <img
              src={currentProduct?.image}
              alt={currentProduct?.name}
              className="w-40 h-28 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h4 className="font-semibold text-[--text-color]">
                {currentProduct?.name}
              </h4>
              <p className="text-green-600 font-medium">
                ${currentProduct?.price}
              </p>
              <p className="text-sm text-gray-500">New arrival!</p>
            </div>
            <button
              onClick={handleClick}
              className="text-gray-400 hover:text-gray-600"
            >
              <CgClose size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
