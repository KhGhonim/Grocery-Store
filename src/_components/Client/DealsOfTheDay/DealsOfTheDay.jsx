"use client";
import { deals } from "DB/db";
import DealCard from "./DealCard";

export default function DealsOfTheDay() {
  return (
    <section className="mb-20">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 my-8">
        Deals Of The Day
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-6">
        {deals.map((deal, index) => (
          <DealCard key={index} {...deal} />
        ))}
      </div>
    </section>
  );
}
