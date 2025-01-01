import { Suspense } from "react";
import SharedCard from "./SharedCard";
import Loading from "../app/loading";
export default function Products() {
  return (
    <div className=" text-green-600 font-extrabold text-center bg-[--background-color]  py-8  ">
      <h1 className=" text-2xl ">Our Poplar Products</h1>
      <Suspense fallback={<Loading />}>
        <SharedCard />
      </Suspense>
    </div>
  );
}
