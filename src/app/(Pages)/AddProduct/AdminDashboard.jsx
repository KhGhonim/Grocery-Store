"use client";
import { navigation } from "DB/db";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminProducts from "./AdminProducts";
import AddProduct from "./AddProduct";
import { FaSpinner } from "react-icons/fa";
import useFetchProducts from "../../../app/Hooks/useFetchProducts";
import DeleteModel from "_components/Models/DeleteModel";
import useDeleteProoduct from "../../../app/Hooks/useDeleteProoduct";
import EditModel from "_components/Models/EditModel";
import useSubmitUpdatingProduct from "../../../Hooks/useSubmitUpdatingProduct";

export default function AdminDashboard() {
  const [activeTab, setactiveTab] = useState("Products");
  const { data, loading } = useFetchProducts();
  const [SelectedItemToDelete, setSelectedItemToDelete] = useState(null);
  const [SelectItemToEdit, setSelectItemToEdit] = useState(null);
  const [IsModeLOpened, setIsModeLOpened] = useState(false);
  const { DeleteProoduct, Isloading } = useDeleteProoduct();
  const {
    SubmitUpdatingProduct,
    IsLoading,
    setform,
    form,
    IsEditModelOpened,
    setIsEditModelOpened,
  } = useSubmitUpdatingProduct(SelectItemToEdit);

  const handleEdit = (product) => {
    setIsEditModelOpened(true);
    setSelectItemToEdit(product);
  };
  const onClose = (eo) => {
    eo.preventDefault();
    setIsEditModelOpened(false);
  };

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
              {navigation.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={`${item.name}-${index}`}
                    id={item.name}
                    className={`inline-flex cursor-pointer items-center border-b-2 px-1 pt-1 text-sm font-medium ${
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

      <main>
        {activeTab === "Products" ? (
          loading ? (
            <div className="flex w-full h-screen items-center justify-center">
              <FaSpinner className="animate-spin" />
            </div>
          ) : (
            <AdminProducts
              onEdit={handleEdit}
              products={data}
              setSelectedItemToDelete={setSelectedItemToDelete}
              setIsModeLOpened={setIsModeLOpened}
            />
          )
        ) : null}
        {activeTab === "Add Product" && <AddProduct />}
      </main>

      <DeleteModel
        onClose={() => {
          setIsModeLOpened(false);
        }}
        item={SelectedItemToDelete}
        onDelete={DeleteProoduct}
        IsModeLOpened={IsModeLOpened}
        Isloading={Isloading}
      />

      <EditModel
        IsEditModelOpened={IsEditModelOpened}
        item={SelectItemToEdit}
        onClose={onClose}
        SubmitUpdatingProduct={SubmitUpdatingProduct}
        setform={setform}
        form={form}
        IsLoading={IsLoading}
      />
    </nav>
  );
}
