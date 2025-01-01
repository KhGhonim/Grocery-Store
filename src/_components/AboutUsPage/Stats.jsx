import { stats } from '../../DB/db'

export default function Stats() {
  return (
        <div className="bg-[--background-color-2] text-[--text-color] py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">
              Your Trusted Market Partner
            </h1>
  
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-[--background-color] text-[--text-color] hover:bg-green-200 transition-all ease-linear duration-300 p-6 rounded-lg shadow-xl"
                >
                  <div className="text-green-600 mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold mb-2">{stat.value}</div>
                  <div className="text-[--text-color]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
  )
}
