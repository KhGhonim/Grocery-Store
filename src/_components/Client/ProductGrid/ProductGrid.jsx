"use client";

import { products } from "DB/db";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
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
    };

    getData();
  }, []);

  const sections = [
    {
      title: "Top Selling",
      products: arrData.slice(0, 3),
    },
    {
      title: "Trending Products",
      products: arrData.slice(4, 7),
    },
    {
      title: "Recently Added",
      products: arrData.slice(8, 11),
    },
    {
      title: "Top Rated",
      products: arrData.slice(12, 15),
    },
  ];
  return (
    <section className="p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {sections.map((section, index) => (
          <div key={index} className="space-y-6">
            <div className="flex flex-col">
              <h2 className="text-xl font-bold text-gray-800 pb-2 border-b flex">
                {section.title}
              </h2>
              <span className="w-14 h-0.5 bg-green-800 inline-block"></span>
            </div>
            <div className="space-y-4">
              {section.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
