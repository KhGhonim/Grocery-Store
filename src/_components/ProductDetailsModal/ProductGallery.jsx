"use client";
import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({ product }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
        {product.discount && (
          <span className="absolute top-4 left-4 bg-pink-100 text-pink-500 px-3 py-1 rounded-full text-sm">
            Sale!
          </span>
        )}
        <Image
          width={900}
          height={900}
          quality={100}
          src={selectedImage || product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-4 gap-4">
        {product.images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
              selectedImage === index ? "border-green-500" : "border-gray-200"
            }`}
          >
            <Image
              width={500}
              height={500}
              src={image}
              alt={`${product.name} thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
