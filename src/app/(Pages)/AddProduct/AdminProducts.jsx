import { CgTrash } from "react-icons/cg";
import { FaPencil } from "react-icons/fa6";

export default function AdminProducts({ onDelete, onEdit, products }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
              Product
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
              Category
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
              Price
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
              Stock
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src={product.image}
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">
                      {product.name}
                    </div>
                    <div className="text-gray-500">{product.type}</div>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                {product.category}
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="text-sm text-gray-900">${product.price}</div>
                {product.discount > 0 && (
                  <div className="text-sm text-gray-500">
                    <span className="line-through">${product.Fakeprice}</span>
                    <span className="ml-2 text-green-600">
                      -{product.discount}%
                    </span>
                  </div>
                )}
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <span
                  className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                    product.stock > 10
                      ? "bg-green-100 text-green-800"
                      : product.stock > 0
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {product.stock} units
                </span>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                <div className="flex space-x-2">
                  <button
                    onClick={() => onEdit(product)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    <FaPencil className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => onDelete(product.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <CgTrash className="h-5 w-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
