import { CatagoryData } from "../../db/db";

export default function Catagory() {
  return (
    <div className="px-6 text-green-600 font-extrabold text-center w-full my-8 flex flex-col flex-wrap  ">
      <h1 className="">Shop by Catagory</h1>
      <div className="flex justify-between items-center max-sm:flex-col sm:flex-wrap p-2">
        {CatagoryData.map((item) => {
          return (
            <a
              href={`ProductCatagory/${item.link}`}
              key={item.id}
              className=" bg-gray-200 flex flex-col justify-center items-center gap-3 mt-3 p-4 w-36 rounded-xl shadow-md hover:bg-green-600 hover:text-gray-100 transition-transform duration-300"
            >
              <span className=" hover:scale-125 text-3xl transition-transform duration-300 ">
                {item.icon}
              </span>
              <span>{item.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
