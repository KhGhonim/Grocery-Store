import Image from "next/image";
import Navbar from "./_components/Navbar";
import HearoSeaction from "./_components/HearoSeaction/HearoSeaction";
import Catagory from "./_components/Catagory";
import Products from "./_components/Products";
import Banner from "./_components/Banner";
import Footer from "./_components/Footer";

export default function Home() {
  return <>
    <Navbar/>
    <HearoSeaction/>
    <Catagory/>
    <Products/>
    <Banner/>
    <Footer/>
  </>;
}
