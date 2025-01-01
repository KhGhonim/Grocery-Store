"use client";
import { useDispatch, useSelector } from "react-redux";
import { RemoveFromCompare } from "../../../Redux/services/CartSlice";
import DesktopHeader from "_components/HeaderDesktop/DesktopHeader";
import MobileHeader from "_components/HeaderPhone/MobileHeader";
import Banner from "_components/Banners/Banner";
import Footer from "_components/Footer";
import { Suspense, useEffect, useState } from "react";
import Loading from "app/loading";
import CompareTable from "_components/Compare/CompareTable";
import { toast } from "react-toastify";

export default function page() {
  const dispatch = useDispatch();
  const { CompareProducts: initialCompareProducts } = useSelector(
    // @ts-ignore
    (state) => state.carttt
  );
  const [CompareProducts, setCompareProducts] = useState([]);

  useEffect(() => {
    const savedProducts = localStorage.getItem("CompareProducts");
    setCompareProducts(
      savedProducts ? JSON.parse(savedProducts) : initialCompareProducts
    );
  }, []);

  const removeFromCompare = (product) => {
    dispatch(RemoveFromCompare(product));
    const updatedCompareProducts = CompareProducts.filter(
      (item) => item.id !== product.id
    );
    setCompareProducts(updatedCompareProducts);
    localStorage.setItem(
      "CompareProducts",
      JSON.stringify(updatedCompareProducts)
    );
    toast.success("Product removed from compare");
  };

  return (
    <div className="w-full h-full">
      <DesktopHeader />
      <MobileHeader />
      <div className="h-full bg-[--background-color] text-[--text-color] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">
              Compare Products
            </h1>
            {CompareProducts.length === 0 && (
              <p className="text-gray-600">
                Select up to 3 items to compare their features
              </p>
            )}
          </div>

          {CompareProducts.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {CompareProducts.map((item) => (
                <span
                  key={item.id}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[--background-color-2] text-[--text-color]"
                >
                  {item.name}
                  <button
                    onClick={() => removeFromCompare(item)}
                    className="ml-2 text-indigo-600 hover:text-indigo-900"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}

          <Suspense fallback={<Loading />}>
            <CompareTable items={CompareProducts} />
          </Suspense>
          {CompareProducts.length === 0 && (
            <div className="text-center text-gray-500 mt-8">
              Select items to start comparing
            </div>
          )}
        </div>
      </div>
      <Banner />
      <Footer />
    </div>
  );
}
