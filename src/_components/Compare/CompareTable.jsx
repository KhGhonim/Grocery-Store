export default function CompareTable({ items }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Features
            </th>
            {items.map((item) => (
              <th
                key={item.id}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {item.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Image
            </td>
            {items.map((item) => (
              <td
                key={item.id}
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
              </td>
            ))}
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Description
            </td>
            {items.map((item) => (
              <td key={item.id} className="px-6 py-4 text-sm text-gray-500">
                {item.description}
              </td>
            ))}
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Price
            </td>
            {items.map((item) => (
              <td
                key={item.id}
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
              >
                ${item.price.toFixed(2)}
              </td>
            ))}
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Stock
            </td>
            {items.map((item) => (
              <td
                key={item.id}
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
              >
                {item.stock} units
              </td>
            ))}
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Category
            </td>
            {items.map((item) => (
              <td
                key={item.id}
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
              >
                {item.category}
              </td>
            ))}
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Rating
            </td>
            {items.map((item) => (
              <td
                key={item.id}
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
              >
                {item.rating}
              </td>
            ))}
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Qantity
            </td>
            {items.map((item) => (
              <td
                key={item.id}
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
              >
                {item?.quantity}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
