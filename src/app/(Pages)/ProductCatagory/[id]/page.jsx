import { Suspense } from "react";

import ProductByCatagoryCard from "./ProductByCatagoryCard";
import Banner from "_components/Banner";
import Footer from "_components/Footer";
import Loading from "app/loading";

export default function page({ params }) {
  return (
    <div className="min-h-screen flex flex-col">
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
