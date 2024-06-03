import Navbar from "../../_components/Navbar";
import { Suspense } from "react";
import Banner from "../../_components/Banner";
import Footer from "../../_components/Footer";
import Loading from "../../loading";
import ProductByCatagoryCard from "./ProductByCatagoryCard";

export default function page({ params }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="bg-green-500 text-center py-4">
        <h1 className="text-white text-2xl">{params.id.toUpperCase()}</h1>
      </div>

      <div className="flex-grow">
        <Suspense fallback={<Loading />}>
          <ProductByCatagoryCard params={params.id} />
        </Suspense>
      </div>

      <div className="flex-shrink-0">
        <Banner />
        <Footer />
      </div>
    </div>
  );
}
