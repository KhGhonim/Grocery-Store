import { stats } from '../../db/db'

export default function Stats() {
  return (
        <div className="bg-green-50 py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">
              Your Trusted Market Partner
            </h1>
  
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white hover:bg-green-200 transition-all ease-linear duration-300 p-6 rounded-lg shadow-md"
                >
                  <div className="text-green-600 mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
  )
}
