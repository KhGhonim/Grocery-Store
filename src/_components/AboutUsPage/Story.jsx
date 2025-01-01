import {  FaUser } from "react-icons/fa";
import { LuBuilding2 } from "react-icons/lu";
export default function Story() {
  return (
      <div className="bg-[--background-color-2] text-[--text-color] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-[--text-color] mb-4">
                Started as a small family store in 1970, we've grown into the
                community's trusted source for fresh groceries and quality
                products. Our commitment to excellence and customer satisfaction
                has remained unchanged for over five decades.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-center">
                  <LuBuilding2 className="w-8 h-8 text-green-600 mr-3" />
                  <div>
                    <h4 className="font-semibold">50+</h4>
                    <p className="text-sm text-[--text-color]">Store Locations</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaUser className="w-8 h-8 text-green-600 mr-3" />
                  <div>
                    <h4 className="font-semibold">1M+</h4>
                    <p className="text-sm text-[--text-color]">Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80"
                alt="Store History"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
  )
}
