import Banner from "_components/Banners/Banner";
import Footer from "_components/Footer";
import DesktopHeader from "_components/HeaderDesktop/DesktopHeader";
import MobileHeader from "_components/HeaderPhone/MobileHeader";
import CartSection from "_components/Cart/CartSection";
import { Suspense } from "react";
import Loading from "app/loading";

export default function page() {
  return (
    <div>
      <DesktopHeader />
      <MobileHeader />
      <Suspense fallback={<Loading />}>
        <CartSection />
      </Suspense>
      <Banner />
      <Footer />
    </div>
  );
}
