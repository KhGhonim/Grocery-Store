import { useState } from "react";
import { toast } from "react-toastify";

const useSubmitUpdatingProduct = (SelectItemToEdit) => {
  const [form, setform] = useState({
    name: "",
    price: "",
    description: "",
  });
  const [IsLoading, setIsLoading] = useState(false);
  const [IsEditModelOpened, setIsEditModelOpened] = useState(false);

  const SubmitUpdatingProduct = async (eo) => {
    eo.preventDefault();
    if (!form.name || !form.price || !form.description) {
      toast.error("Please fill all the fields");
      return

    }
    try {

      const QueryParms = new URLSearchParams();
      QueryParms.append("id", SelectItemToEdit._id);
      QueryParms.append("name", form.name);
      QueryParms.append("description", form.description);
      QueryParms.append("price", form.price);

      setIsLoading(true);
      const res = await fetch(`api/updateProduct?${QueryParms}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        setIsLoading(false);
        toast.error("Product not updated");
        setIsEditModelOpened(false);
        return;
      }
      setIsLoading(false);
      toast.success("Product updated successfully");
      setIsEditModelOpened(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }

  }
  return { SubmitUpdatingProduct, setform, form, IsLoading, IsEditModelOpened, setIsEditModelOpened };
}

export default useSubmitUpdatingProduct