import Link from "next/link";
import { CatagoryData } from "../DB/db";

export default function Catagory() {
  return (
    <div className=" text-green-600 bg-[--background-color] font-extrabold text-center w-full py-8 flex flex-col flex-wrap  ">
      <h1 className="">Shop by Catagory</h1>
      <div className="flex flex-wrap justify-between gap-2 items-center p-2">
        {CatagoryData.map((item) => {
          return (
            <Link
              href={`ProductCatagory/${item.link.toLowerCase()}`}
              key={item.icon}
              className=" bg-gray-200 flex flex-col justify-center items-center gap-3 mt-3 p-4 w-36 rounded-xl shadow-md hover:bg-green-600 hover:text-gray-100 transition-transform duration-300"
            >
              <span className=" hover:scale-125 text-3xl transition-transform duration-300 ">
                {item.icon}
              </span>
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
