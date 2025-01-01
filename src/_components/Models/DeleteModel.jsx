export default function DeleteModel({
  onClose,
  item,
  onDelete,
  IsModeLOpened,
  Isloading
}) {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ${
        IsModeLOpened ? "flex" : "hidden"
      }`}
    >
      <div className="bg-white p-4 rounded-lg w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4">Delete {item?.name}</h2>
        <p className="text-gray-600">
          Are you sure you want to delete {item?.name}?
        </p>
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={Isloading}
            onClick={() => onDelete(item.id)}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
