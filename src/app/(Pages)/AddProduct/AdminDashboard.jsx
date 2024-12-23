"use client";
import { navigation } from "DB/db";
import { notFound, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminProducts from "./AdminProducts";
import AddProduct from "./AddProduct";
import { FaSpinner } from "react-icons/fa";

export default function AdminDashboard() {
  const [name, setname] = useState(null);
  const [price, setprice] = useState(null);
  const [Fakeprice, setFakeprice] = useState(null);
  const [catagory, setcatagory] = useState(null);
  const [image, setimage] = useState(null);
  const [loading, setloading] = useState(false);
  const [activeTab, setactiveTab] = useState("Products");
  const HandleSubmit = async (eo) => {
    eo.preventDefault();
    setloading(true);

    if (!name || !price || !Fakeprice || !image || !catagory) {
      setloading(false);
      return;
    }

    const formData = new FormData();
    formData.set("name", name);
    formData.set("price", price);
    formData.set("Fakeprice", Fakeprice);
    formData.set("image", image);
    formData.set("catagory", catagory);

    console.log(formData);

    const response = await fetch("api/productsuploader", {
      method: "POST",
      body: formData,
    });
    console.log(response);

    if (!response.ok) {
      toast.warning("Prdoucts did not add product");
    } else {
      toast.success("Prdoucts added successfully");
    }
    eo.target.reset();
    setloading(false);
  };

  const handleEdit = (product) => {
    console.log("Edit product:", product);
    // Implement edit functionality
  };

  const handleDelete = (productId) => {
    console.log("Delete product:", productId);
    // Implement delete functionality
  };

  const [arrData, setstate] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setloading(true);
      const res = await fetch("api/getProducts", {
        cache: "no-cache",
        next: { revalidate: 0 },
      });

      if (!res.ok) {
        notFound();
      }

      const data = await res.json();
      setstate(data);
    };

    getData();
    setloading(false);
  }, []);

  return (
    <nav className="bg-white shadow-sm">
      <ToastContainer />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <span className="text-xl font-bold text-gray-900">
                Admin Dashboard
              </span>
            </div>
            <div className="ml-6 flex space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium ${
                      activeTab === item.name
                        ? "border-indigo-500 text-gray-900"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    }`}
                    onClick={() => setactiveTab(item.name)}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <main >
          {activeTab === "Products" ? (
            loading ? (
              <div className="flex w-full h-full items-center justify-center">
                <FaSpinner className="animate-spin" />
              </div>
            ) : (
              <AdminProducts
                onEdit={handleEdit}
                onDelete={handleDelete}
                products={arrData}
              />
            )
          ) : null}
          {activeTab === "Add Product" && <AddProduct />}
      </main>
    </nav>
  );
}
