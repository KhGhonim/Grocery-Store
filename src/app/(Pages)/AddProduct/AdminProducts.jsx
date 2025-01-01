import { CgTrash } from "react-icons/cg";
import { FaPencil } from "react-icons/fa6";

export default function AdminProducts({
  onEdit,
  products,
  setSelectedItemToDelete,
  setIsModeLOpened,
}) {
  const HandleDelete = (product) => {
    setIsModeLOpened(true);
    setSelectedItemToDelete(product);
  };
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Products Dashboard
        </h1>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="w-full table-auto responsive-table max-md:p-5">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((product, index) => (
                <tr
                  key={`${product.name}-${index}`}
                  className="hover:bg-gray-50 transition duration-300"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img
                        className="h-12 w-12 rounded-lg object-cover"
                        src={product.image}
                        alt={product.name}
                      />
                      <div className="ml-4">
                        <p className="text-gray-800 font-medium">
                          {product.name}
                        </p>
                        <p className="text-sm text-gray-500">{product.type}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-700">{product.category}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <span className="text-gray-800 font-semibold">
                        ${product.price}
                      </span>
                      {product.discount > 0 && (
                        <div className="text-sm text-gray-500">
                          <span className="line-through">
                            ${product.Fakeprice}
                          </span>
                          <span className="ml-2 text-green-500 font-medium">
                            -{product.discount}%
                          </span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${
                        product.stock > 10
                          ? "bg-green-100 text-green-800"
                          : product.stock > 0
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {product.stock > 0
                        ? `${product.stock} units`
                        : "Out of Stock"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => onEdit(product)}
                        className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                      >
                        <FaPencil />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => {
                          HandleDelete(product);
                        }
                        }
                        className="text-red-600 hover:text-red-800 flex items-center gap-1"
                      >
                        <CgTrash />
                        <span>Delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
