import { FaAward, FaLeaf } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
export default function OurValues() {
  return (
    <div className="py-20 bg-slate-50 ">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-16">Our Values</h2>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaAward className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Quality First</h3>
          <p className="text-gray-600">
            We never compromise on the quality of our products
          </p>
        </div>
        <div className="text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaUsers className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Community Focus</h3>
          <p className="text-gray-600">
            Supporting local farmers and producers
          </p>
        </div>
        <div className="text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaLeaf className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
          <p className="text-gray-600">
            Committed to environmental responsibility
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}
