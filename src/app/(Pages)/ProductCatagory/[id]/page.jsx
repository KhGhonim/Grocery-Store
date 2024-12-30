import { Suspense } from "react";

import ProductByCatagoryCard from "./ProductByCatagoryCard";
import Banner from "_components/Banners/Banner";
import Footer from "_components/Footer";
import Loading from "app/loading";
import DesktopHeader from "_components/HeaderDesktop/DesktopHeader";
import MobileHeader from "_components/HeaderPhone/MobileHeader";

export default function page({ params }) {
  return (
    <div className="min-h-screen flex flex-col">
      <DesktopHeader />
      <MobileHeader />
      <div className="bg-green-500 text-center max-lg:mt-24 py-4">
        <h1 className="text-white text-2xl capitalize">{params.id}</h1>
      </div>

      <div className="flex-grow p-">
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
