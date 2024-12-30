"use client";
import { FaHeart, FaTrash } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import Footer from "_components/Footer";
import DesktopHeader from "_components/HeaderDesktop/DesktopHeader";
import MobileHeader from "_components/HeaderPhone/MobileHeader";
import RecommendedSection from "_components/WishlistPage/RecommendedSection";
import { WhisListRemover } from "../Redux/services/CartSlice";
import { toast, ToastContainer } from "react-toastify";

export default function WhishListWrapper() {
  // @ts-ignore
  const { WishListProducts } = useSelector((state) => state.carttt);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (product) => {
    dispatch(WhisListRemover(product));
    toast.success("Product removed from wishlist");
  };

  return (
    <div>
      <ToastContainer />
      <DesktopHeader />
      <MobileHeader />
      <div className="min-h-screen bg-gray-50 max-md:pt-28 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">My Wishlist</h1>
            <div className="flex items-center space-x-2">
              <FaHeart className="w-5 h-5 text-red-500" />
              <span className="text-lg font-semibold">
                {WishListProducts.length} items
              </span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            {WishListProducts.length === 0 ? (
              <div className="text-center py-12">
                <FaHeart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-gray-600">
                  Your wishlist is empty
                </h2>
                <p className="text-gray-500 mt-2">
                  Start adding items you love!
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {WishListProducts?.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col md:flex-row items-center gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow bg-white"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg shadow-sm"
                    />
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-green-500 font-semibold text-base mt-1">
                        ${item.price}
                      </p>
                      <p
                        className={`text-sm mt-1 font-medium ${
                          item.stock ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {item.stock ? "In Stock" : "Out of Stock"}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <button
                        className={`px-4 py-2 rounded-lg flex items-center gap-2 font-medium shadow-sm transition ${
                          item.stock
                            ? "bg-green-600 text-white hover:bg-green-700"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                        disabled={!item.stock}
                      >
                        <CiShoppingCart className="w-5 h-5" />
                        <span>Add to Cart</span>
                      </button>
                      <button
                        onClick={() => {
                          handleRemoveFromWishlist(item);
                        }}
                        className="p-2 text-red-500 hover:bg-red-100 rounded-lg transition"
                      >
                        <FaTrash className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {WishListProducts.length > 0 && (
            <div className="mt-6 flex justify-between items-center bg-white rounded-lg shadow-lg p-3">
              <div>
                <p className="text-gray-600">
                  Total Items: {WishListProducts.length}
                </p>
                <p className="text-lg font-semibold">
                  Total Value: $
                  {WishListProducts.reduce(
                    (sum, item) => sum + item.price,
                    0
                  ).toFixed(2)}
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
      <Footer />
    </div>
  );
}
