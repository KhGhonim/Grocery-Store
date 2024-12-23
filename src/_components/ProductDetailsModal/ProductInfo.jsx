"use client";
import { useState } from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";

export default function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>

      <div className="flex items-center gap-4">
        {[...Array(5)].map((_, starIndex) => (
          <FaStar
            key={starIndex}
            className={`w-5 h-5 ${
              starIndex < Math.floor(product.rating)
                ? "text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
        <span className="text-gray-500">
          ({product.rating} customer review)
        </span>
      </div>

      <div className="flex items-baseline gap-2">
        <span className="text-4xl font-bold text-green-500">
          ${product.price}
        </span>
        {product.Fakeprice && (
          <span className="text-xl text-gray-400 line-through">
            ${product.Fakeprice}
          </span>
        )}
        {product.discount && (
          <span className="text-green-500 text-sm">
            {product.discount}% off
          </span>
        )}
      </div>

      <p className="text-gray-600">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem
        officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore
        impedit fuga eum eligendi.
      </p>

      <div className="flex items-center gap-4">
        <div className="flex border rounded-lg">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-4 py-2 border-r hover:bg-gray-50"
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.max(1, parseInt(e.target.value) || 1))
            }
            className="w-16 text-center focus:outline-none"
          />
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="px-4 py-2 border-l hover:bg-gray-50"
          >
            +
          </button>
        </div>
        <button className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors">
          <FaShoppingCart size={20} />
          Add to cart
        </button>
      </div>

      <div className="pt-6 border-t space-y-2 text-sm text-gray-600">
        <div className="flex gap-2">
          <span className="font-medium">Type:</span>
          <span className="text-green-500">Organic</span>
        </div>
        <div className="flex gap-2">
          <span className="font-medium">MFG:</span>
          <span>11 Jan 2021</span>
        </div>
        <div className="flex gap-2">
          <span className="font-medium">LIFE:</span>
          <span>3 Months</span>
        </div>
      </div>
    </div>
  );
}
