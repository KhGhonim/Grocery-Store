import Banner from "../_components/Banners/Banner";
import Catagory from "../../src/_components/Catagory";
import DailyBestSells from "../../src/_components/Client/DailyBestSells/DailyBestSells";
import DealsOfTheDay from "../../src/_components/Client/DealsOfTheDay/DealsOfTheDay";
import FixedCards from "../../src/_components/Client/FixedCards/FixedCards";
import HearoSeaction from "../../src/_components/Client/HearoSeaction/HearoSeaction";
import ProductGrid from "../../src/_components/Client/ProductGrid/ProductGrid";
import Footer from "../../src/_components/Footer";
import DesktopHeader from "../../src/_components/HeaderDesktop/DesktopHeader";
import MobileHeader from "../../src/_components/HeaderPhone/MobileHeader";
import PhoneAd from "../../src/_components/HeaderPhone/PhoneAd";
import Products from "../../src/_components/Products";
import WelcomeModal from "../../src/_components/WelcomeModal/WelcomeModal";
import ProductToast from "_components/ProductToast/ProductToast";


export const metadata = {
  title: "KG Grocery App",
  description: "Generated by create next app",
  icons: {
    icon: "/images/KGlogo.png",
  },
};

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-[--bg-color] relative text-[--text-color]">
      <PhoneAd />
      <MobileHeader />
      <DesktopHeader />
      <HearoSeaction />
      <div className="px-5 bg-[--bg-color]">
        <DealsOfTheDay />
        <Catagory />
        <Products />
        <FixedCards />
      </div>
      <DailyBestSells />
      <ProductGrid />
      <Banner />
      <Footer />
      <WelcomeModal />
      <ProductToast />
    </div>
  );
}
