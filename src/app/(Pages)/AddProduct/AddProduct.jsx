"use client";
import { useRef, useState } from "react";
import { FaSpinner, FaUpload } from "react-icons/fa";
import { toast } from "react-toastify";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    Fakeprice: 0,
    price: 0,
    category: "",
    rating: 5,
    discount: 0,
    description: "",
    stock: 0,
    type: "",
  });
  const [loading, setLoading] = useState(false);
  const [mainImage, setMainImage] = useState(null);
  const [mainImagePreview, setMainImagePreview] = useState("");
  const [additionalImages, setAdditionalImages] = useState([]);
  const [additionalImagePreviews, setAdditionalImagePreviews] = useState([]);
  const ref = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: ["price", "Fakeprice", "stock", "rating", "discount"].includes(
        name
      )
        ? Number(value)
        : value,
    }));
  };

  const handleMainImageChange = (files) => {
    const file = files[0];
    if (file) {
      setMainImage(file);
      const preview = URL.createObjectURL(file);
      setMainImagePreview(preview);
    }
  };

  const handleAdditionalImagesChange = (files) => {
    const newFiles = Array.from(files);
    setAdditionalImages((prev) => [...prev, ...newFiles]);

    const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
    setAdditionalImagePreviews((prev) => [...prev, ...newPreviews]);
  };

  const removeAdditionalImage = (index) => {
    setAdditionalImages((prev) => prev.filter((_, i) => i !== index));
    setAdditionalImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Here you would typically create a FormData object and send it to your backend
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value.toString());
    });

    if (mainImage) {
      formDataToSend.append("image", mainImage);
    }

    additionalImages.forEach((file, index) => {
      formDataToSend.append("additionalImages", file);
    });

    try {
      const response = await fetch("api/productsuploader", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        toast.error("Failed to add product");
        return;
      }

      const data = await response.json();

      toast.success(data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
      e.target.reset();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-lg px-10 py-8 border border-green-300">
        <h2 className="text-3xl font-bold text-green-700 mb-6">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm outline-none"
                placeholder="E.g., Fresh Apples"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Fake Price
              </label>
              <input
                type="number"
                name="Fakeprice"
                defaultValue={formData.Fakeprice}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm outline-none"
                placeholder="E.g., 20.00"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                name="price"
                defaultValue={formData.price}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm outline-none"
                placeholder="E.g., 15.00"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="my-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm outline-none"
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="Fruits">Fruits</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Dairy">Dairy</option>
                <option value="Beverages">Beverages</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Rating
              </label>
              <input
                type="number"
                name="rating"
                defaultValue={formData.rating}
                onChange={handleChange}
                min={0}
                className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm outline-none"
                placeholder="E.g., 4.5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Discount (%)
              </label>
              <input
                type="number"
                min={0}
                name="discount"
                defaultValue={formData.discount}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm outline-none"
                placeholder="E.g., 10"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm outline-none"
                placeholder="Describe the product in detail"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Stock
              </label>
              <input
                type="number"
                min={0}
                name="stock"
                defaultValue={formData.stock}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm outline-none"
                placeholder="E.g., 100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Type
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="my-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm outline-none"
              >
                <option value="" disabled>
                  Select a type
                </option>
                <option value="Organic">Organic</option>
                <option value="Conventional">Conventional</option>
                <option value="Imported">Imported</option>
                <option value="Local">Local</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[--text-color]">
                Main Image
              </label>
              <div className="flex items-center justify-center w-full">
                <div
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-[--bg-color] hover:bg-[--rightSide-bg-color]"
                  onClick={() => ref.current && ref.current.click()}
                >
                  {mainImagePreview ? (
                    <img
                      src={mainImagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <FaUpload className="w-8 h-8 mb-4 text-gray-500" />
                      <p className="mb-2 text-sm text-gray-500">
                        Drag and drop your image here, or click to select a file
                      </p>
                    </div>
                  )}
                  <input
                    ref={ref}
                    type="file"
                    name="screenshot"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleMainImageChange(e.target.files)}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-[--text-color]">
                Additional Images
              </label>
              <div className="flex flex-row items-center gap-4 justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer relative">
                {additionalImagePreviews.length > 0 ? (
                  additionalImagePreviews.map((preview, index) => (
                    <div key={index} className="relative">
                      <img
                        src={preview}
                        alt={`Preview ${index}`}
                        className="h-32 w-32 object-cover border rounded-md"
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          removeAdditionalImage(index);
                        }}
                        className="absolute z-10 top-0 right-0 bg-red-500 text-white rounded-full p-1"
                      >
                        ×
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <FaUpload className="w-8 h-8 mb-4 text-gray-500" />
                    <p className="mb-2 text-sm text-gray-500">
                      Drag and drop your image here, or click to select a file
                    </p>
                  </div>
                )}
                <input
                  type="file"
                  name="screenshot"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  accept="image/*"
                  onChange={(e) => handleAdditionalImagesChange(e.target.files)}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              {loading ? (
                <div className="flex w-full h-full items-center justify-center">
                  <FaSpinner className="animate-spin" />
                </div>
              ) : (
                "Add Product"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
