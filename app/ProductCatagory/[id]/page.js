"use client";
import { notFound } from "next/navigation";
import Navbar from "../../_components/Navbar";
import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { MdAddShoppingCart } from "react-icons/md";
import SharedCard from "../../_components/SharedCard";
import Banner from "../../_components/Banner";
import Footer from "../../_components/Footer";
import Loading from "../../loading";

async function getData() {
  const res = await fetch("http://localhost:4000/PopProducts");
  if (!res.ok) {
    notFound();
  }
  return res.json();
}

export default function page({ params }) {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const DataFetch = async () => {
      try {
        const data = await getData();

        const fillteredData = data.filter((item) => {
          return item.Catagory === params.id;
        });

        setFilteredData(fillteredData);
      } catch (error) {
        console.log(error.message, "Fetch is not happened");
      }
    };
    DataFetch();
  }, [params.id]);

  return (
    <div className="min-h-screen flex flex-col">
    <Navbar />

    <div className="bg-green-500 text-center py-4">
        <h1 className="text-white text-2xl">{params.id}</h1>
    </div>

    <div className="flex-grow">
      <Suspense fallback={<Loading/>}>
      <SharedCard result={filteredData} />
      </Suspense>
    </div>

    <div className="flex-shrink-0">
        <Banner />
        <Footer />
    </div>
</div>
  );
}
