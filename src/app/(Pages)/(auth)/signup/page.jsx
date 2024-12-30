"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function page() {
  const [fristname, setfristname] = useState(null);
  const [lastname, setlastname] = useState(null);
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [loading, setloading] = useState(false);
  const router = useRouter();
  const Handlesubmit = async (eo) => {
    eo.preventDefault();
    setloading(true);

    const IsUserExists = await fetch("api/userExist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const DataFromMongoDB = await IsUserExists.json();
    console.log(DataFromMongoDB);

    if (DataFromMongoDB.user) {
      toast.warning("User already exists");
      setloading(false);
      eo.target.reset();
      return;
    }

    const response = await fetch("api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fristname, lastname, email, password }), // body data type must match "Content-Type" header
    });

    if (response.ok) {
      toast.success("Account created");
      setloading(false);
      router.replace("/signin");
    } else {
      toast.warning("Account is not created, try again later");
      setloading(false);
    }

    setloading(false);
  };
  return (
    <>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <Image
              src={"/slider/PhoneSlider1.jpeg"}
              alt={"Logo"}
              quality={100}
              priority
              width={200}
              height={100}
              className="absolute inset-0 h-full w-full object-cover opacity-70"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <a className="block text-white" href="#">
                <span className="sr-only">Home</span>
                <Image
                  src={"/images/logo.png"}
                  alt={"Logo"}
                  quality={100}
                  priority
                  width={200}
                  height={100}
                />
              </a>

              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to Our Gorcery Store
              </h2>

              <p className="mt-4 leading-relaxed text-white/90">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <a
                  className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                  href="#"
                >
                  <Image
                    src={"/images/logo.png"}
                    alt={"Logo"}
                    quality={100}
                    priority
                    width={200}
                    height={100}
                  />
                </a>

                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Welcome to Our Gorcery Store
                </h1>
              </div>

              <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    required
                    id="FirstName"
                    name="first_name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm focus:outline-none "
                    placeholder="John"
                    onChange={(eo) => {
                      setfristname(eo.target.value);
                    }}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-700 "
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    required
                    id="LastName"
                    name="last_name"
                    placeholder="Doe"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm focus:outline-none"
                    onChange={(eo) => {
                      setlastname(eo.target.value);
                    }}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Email{" "}
                  </label>

                  <input
                    type="email"
                    required
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
                    className="block text-sm font-medium text-gray-700 "
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

                <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    By creating an account, you agree to our
                    <a href="#" className="text-gray-700 underline">
                      {" "}
                      terms and conditions{" "}
                    </a>
                    and
                    <a href="#" className="text-gray-700 underline ml-1">
                      privacy policy
                    </a>
                    .
                  </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    onClick={Handlesubmit}
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                    {loading ? (
                      <div className="flex w-full h-full items-center justify-center">
                        <FaSpinner className="animate-spin" />
                      </div>
                    ) : (
                      "Create an account"
                    )}
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <a href="/signin" className="text-gray-700 underline ml-1">
                      Log in
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
