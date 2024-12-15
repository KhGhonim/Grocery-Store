import React from "react";
import { orders } from "../../db/db";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function OrdersTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Order History</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{order.id}</h3>
                <p className="text-sm text-gray-600">{order.date}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">${order.total}</p>
                <p className="text-sm text-green-600">{order.status}</p>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <p className="text-gray-600">{order.items} items</p>
              <button className="text-green-600 hover:text-green-700 flex items-center">
                View Details{" "}
                <MdOutlineKeyboardArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
