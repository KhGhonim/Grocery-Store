"use client";
import ProductCard from "../../_components/Client/ProductGrid/ProductCard";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";

export default function RelatedProducts({ category, currentProductId }) {
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

  const relatedProducts = arrData
    .filter((p) => p.category === category && p._id !== currentProductId)
    .slice(0, 3);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {relatedProducts.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
