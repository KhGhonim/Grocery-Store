import React from "react";
import { wishlistItems } from "../db/db";
import { FaHeart, FaTrash } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import RecommendedSection from "../_components/WishlistPage/RecommendedSection";

export default function Wishlist() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">My Wishlist</h1>
          <div className="flex items-center space-x-2">
            <FaHeart className="w-5 h-5 text-red-500" />
            <span className="text-lg font-semibold">
              {wishlistItems.length} items
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          {wishlistItems.length === 0 ? (
            <div className="text-center py-12">
              <FaHeart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-600">
                Your wishlist is empty
              </h2>
              <p className="text-gray-500 mt-2">Start adding items you love!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-4 p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-green-600 font-semibold">
                      ${item.price}
                    </p>
                    <p
                      className={`text-sm ${
                        item.inStock ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {item.inStock ? "In Stock" : "Out of Stock"}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                        item.inStock
                          ? "bg-green-600 text-white hover:bg-green-700"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                      disabled={!item.inStock}
                    >
                      <CiShoppingCart className="w-5 h-5" />
                      <span>Add to Cart</span>
                    </button>
                    <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                      <FaTrash className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {wishlistItems.length > 0 && (
          <div className="mt-6 flex justify-between items-center bg-white rounded-lg shadow-lg p-6">
            <div>
              <p className="text-gray-600">
                Total Items: {wishlistItems.length}
              </p>
              <p className="text-lg font-semibold">
                Total Value: $
                {wishlistItems
                  .reduce((sum, item) => sum + item.price, 0)
                  .toFixed(2)}
              </p>
            </div>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Add All to Cart
            </button>
          </div>
        )}
        <RecommendedSection />
      </div>
    </div>
  );
}
