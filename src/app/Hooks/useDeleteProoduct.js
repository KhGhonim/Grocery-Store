import { useState } from "react";
import { toast } from "react-toastify";

const useDeleteProoduct = () => {
  const [Isloading, setIsloading] = useState(false);

  const DeleteProoduct = async (product) => {

    if (!product) {
      return toast.error("Product not found");

    }

    try {

      setIsloading(true);
      const res = await fetch(`api/deleteProduct?id=${product._id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        toast.error("Product not deleted");
        return;
      }

      setIsloading(false);
      toast.success("Product deleted successfully");

    } catch (error) {
      console.log(error);
    }

  }
  return { DeleteProoduct, Isloading }
}

export default useDeleteProoduct