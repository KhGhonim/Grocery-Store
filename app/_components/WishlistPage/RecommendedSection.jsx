import React from 'react'
import { recommendations } from '../../db/db'
import { CiShoppingCart } from 'react-icons/ci'

export default function RecommendedSection() {
  return (
    <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
    <h2 className="text-2xl font-bold mb-6">Recommended for You</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {recommendations.map((item) => (
        <div key={item.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-green-600 font-semibold mb-4">${item.price}</p>
          <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center justify-center space-x-2">
            <CiShoppingCart className="w-5 h-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      ))}
    </div>
  </div>
  )
}
