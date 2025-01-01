import { orderStatus } from '../../DB/db'

export default function OrderItems() {
  return (
    <div className="bg-[--background-color] text-[--text-color] rounded-lg shadow-lg p-6">
    <h2 className="text-xl font-semibold mb-4">Order Items</h2>
    <div className="space-y-4">
      {orderStatus.items.map((item) => (
        <div
          key={item.id}
          className="flex items-center space-x-4 p-4 border rounded-lg"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 object-cover rounded-lg"
          />
          <div className="flex-1">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-gray-600">Quantity: {item.quantity}</p>
            <p className="text-green-600">${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}
