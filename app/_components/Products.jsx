import { Suspense } from "react";
import { PopProducts } from "../../db/db";
import SharedCard from "./SharedCard";
import Loading from "../loading";
export default function Products() {
  return (
    <div className="px-4 text-green-600 font-extrabold text-center  my-8  ">
      <h1 className=" text-2xl ">Our Poplar Products</h1>
      <Suspense fallback={<Loading />}>
        <SharedCard result={PopProducts} />
      </Suspense>
    </div>
  );
}
