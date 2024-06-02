"use client";

import { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function page() {
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const router = useRouter();

  const HandleSubmit = async (eo) => {
    eo.preventDefault();
    setisLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!res.ok) {
      toast.warning("invalid email or password");
      setisLoading(false);
      return;
    } else {
      setisLoading(false);
      router.push("/");
    }
    setisLoading(false);
  };
  return (
    <>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <Image
              src={"/slider/PhoneSlider2.jpeg"}
              alt={"Logo"}
              quality={100}
              priority
              width={200}
              height={100}
              className="absolute inset-0 h-full w-full object-cover opacity-70"
            />
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <a className="block text-blue-600" href="#">
                <Image
                  src={"/images/logo.png"}
                  alt={"Logo"}
                  quality={100}
                  priority
                  width={100}
                  height={100}
                />
              </a>

              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Our Gorcery Store
              </h1>

              <h1 className="mt-6 text-base font-bold text-gray-900 ">
                If you want to try our Admin Panel try our Admin Email{" "}
                <p className=" text-red-400">Email: admin@admin.com</p>{" "}
                <p className=" text-red-400">Pw:123</p>
                or <p className="text-green-400">Make your own Account and be visitor</p>
              </h1>

              <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3 ">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Email{" "}
                  </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm focus:outline-none"
                    placeholder="123@example.com"
                    onChange={(eo) => {
                      setemail(eo.target.value);
                    }}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Password{" "}
                  </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm focus:outline-none"
                    placeholder="-------"
                    onChange={(eo) => {
                      setpassword(eo.target.value);
                    }}
                  />
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    onClick={HandleSubmit}
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                    {isLoading ? (
                      <div className="lds-default">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    ) : (
                      "    Sign In"
                    )}
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Don't have an account?
                    <a href="/signup" className="text-gray-700 underline ml-1">
                      Sign Up
                    </a>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
        <ToastContainer />
      </section>
    </>
  );
}
