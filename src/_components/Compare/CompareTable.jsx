export default function CompareTable({ items }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-[--background-color-2] text-[--text-color] rounded-lg overflow-hidden shadow-lg">
        <thead className="bg-[--text-color]">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-[--background-color-2] uppercase tracking-wider">
              Features
            </th>
            {items.map((item) => (
              <th
                key={item.id}
                className="px-6 py-3 text-left text-xs text-[--background-color-2] font-medium uppercase tracking-wider"
              >
                {item.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-[--background-color-2] text-sm font-medium">
              Image
            </td>
            {items.map((item) => (
              <td
                key={item.id}
                className="px-6 py-4 whitespace-nowrap text-sm"
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
            <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
              Description
            </td>
            {items.map((item) => (
              <td key={item.id} className="px-6 py-4 text-sm">
                {item.description}
              </td>
            ))}
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
              Price
            </td>
            {items.map((item) => (
              <td
                key={item.id}
                className="px-6 py-4 whitespace-nowrap  text-sm"
              >
                ${item.price.toFixed(2)}
              </td>
            ))}
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
              Stock
            </td>
            {items.map((item) => (
              <td
                key={item.id}
                className="px-6 py-4 whitespace-nowrap  text-sm"
              >
                {item.stock} units
              </td>
            ))}
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
              Category
            </td>
            {items.map((item) => (
              <td
                key={item.id}
                className="px-6 py-4 whitespace-nowrap  text-sm"
              >
                {item.category}
              </td>
            ))}
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
              Rating
            </td>
            {items.map((item) => (
              <td
                key={item.id}
                className="px-6 py-4 whitespace-nowrap  text-sm"
              >
                {item.rating}
              </td>
            ))}
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
              Qantity
            </td>
            {items.map((item) => (
              <td
                key={item.id}
                className="px-6 py-4 whitespace-nowrap  text-sm"
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
