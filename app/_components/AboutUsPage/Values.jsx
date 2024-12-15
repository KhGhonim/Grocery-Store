import { FaAward, FaLeaf } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
export default function Values() {
  return (
        <div className="py-20 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <FaLeaf className="w-12 h-12 text-green-600" />,
                title: "Fresh & Organic",
                description:
                  "We prioritize fresh, organic produce sourced from local farmers",
              },
              {
                icon: <FaUsers className="w-12 h-12 text-blue-600" />,
                title: "Community First",
                description:
                  "Supporting local communities through sustainable practices",
              },
              {
                icon: <FaAward className="w-12 h-12 text-yellow-600" />,
                title: "Quality Guaranteed",
                description:
                  "Premium quality products with satisfaction guarantee",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
  )
}
