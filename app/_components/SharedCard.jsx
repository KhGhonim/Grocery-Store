import Image from "next/image";
import { MdAddShoppingCart } from "react-icons/md";

export default function SharedCard({ result }) {
  return (
    <div className="flex justify-around flex-wrap max-sm:items-center gap-2 h-full mb-5">
      {result.map((item) => {
        return (
          <div
            key={item.name}
            className="flex flex-col items-center justify-between p-2 max-sm:w-[270px] md:w-[350px]  border border-s my-5 transition-transform duration-300 shadow-md hover:shadow-lg rounded-lg"
          >
            <Image
              src={item.image}
              alt={item.name}
              quality={100}
              width={100}
              height={100}
              className=" w-32 hover:scale-110 transition-transform duration-200"
            />
            <h1 className=" font-extrabold my-2">{item.name}</h1>
            <div className="flex justify-evenly items-center gap-4 flex-row text-center  w-full">
              <h1 className=" font-extrabold">{item.price}</h1>
              <h1 className=" font-bold ">{item.Fakeprice}</h1>
            </div>

            <button
              type="submit"
              className=" font-medium text-white  bg-green-600 hover:bg-green-700 transition-transform duration-200 p-3 rounded-full m-3 flex justify-center items-center gap-2"
            >
              Add To Cart{" "}
              <span>
                <MdAddShoppingCart />
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
