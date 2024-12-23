import { CgClose } from "react-icons/cg";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import RelatedProducts from "./RelatedProducts";

export default function ProductDetailsModal({ product, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50  overflow-y-auto">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal Container */}
      <div className="flex items-center justify-center min-h-full p-4">
        {/* Modal */}
        <div className="relative bg-white rounded-3xl shadow-xl w-full max-w-6xl my-8 animate-fadeIn ">
          <button
            onClick={onClose}
            className="absolute right-0 top-0 z-10 bg-green-500 text-white p-4 rounded-bl-xl rounded-tr-3xl hover:bg-green-600 transition-colors"
          >
            <CgClose size={20} />
          </button>

          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <ProductGallery product={product} />
              <ProductInfo product={product} />
            </div>

            <ProductTabs product={product} />

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Related Products
              </h3>
              <RelatedProducts
                category={product.category}
                currentProductId={product._id}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
