"use client";
import ProductCard from "./ProductCard";
import useFetchProducts from "../../../app/Hooks/useFetchProducts";
import { FaSpinner } from "react-icons/fa";

export default function ProductGrid() {
  const { data, loading } = useFetchProducts();

  const sections = [
    {
      title: "Top Selling",
      products: data.slice(0, 3),
    },
    {
      title: "Trending Products",
      products: data.slice(4, 7),
    },
    {
      title: "Recently Added",
      products: data.slice(8, 11),
    },
    {
      title: "Top Rated",
      products: data.slice(12, 15),
    },
  ];
  return (
    <section className="p-12 bg-[--background-color] text-[--text-color]">
      {loading ? (
        <div className="flex w-full h-full items-center justify-center">
          <FaSpinner className="animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 bg-[--background-color] text-[--text-color]">
          {sections.map((section, index) => (
            <div key={index} className="space-y-6">
              <div className="flex flex-col">
                <h2 className="text-xl font-bold text-[--text-color] pb-2 border-b flex">
                  {section.title}
                </h2>
                <span className="w-14 h-0.5 bg-green-800 inline-block"></span>
              </div>
              <div className="space-y-4 ">
                {section.products.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
