"use client";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { FaRegSquareMinus, FaRegSquarePlus } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import Banner from "_components/Banners/Banner";
import Footer from "_components/Footer";
import { PopProducts } from "../../../DB/db";
import { decrement, increment, Remover } from "../../../Redux/services/CartSlice";
import DesktopHeader from "_components/HeaderDesktop/DesktopHeader";
import MobileHeader from "_components/HeaderPhone/MobileHeader";

export default function page() {
  // @ts-ignore
  const { SelectedProducts } = useSelector((state) => state.carttt);
  const dispatch = useDispatch();

  const totalPrice = SelectedProducts.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const SavingPrice = SelectedProducts.reduce((acc, item) => {
    return acc + item.Fakeprice * item.quantity;
  }, 0);

  const TexPrice = SelectedProducts.reduce((acc, item) => {
    return acc + item.quantity * 100;
  }, 0);

  const TotalPrice = totalPrice + TexPrice;

  return (
    <div>
      <DesktopHeader />
      <MobileHeader />
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-green-600 dark:text-white sm:text-2xl">
            Shopping Cart
          </h2>
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              {SelectedProducts.length > 0 ? (
                <div className="space-y-6">
                  {SelectedProducts.map((item) => {
                    return (
                      <div
                        key={item._id}
                        className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6"
                      >
                        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                          <Image
                            className=" w-28 h-28"
                            src={item.image}
                            alt={item.name}
                            width={112}
                            height={112}
                            quality={100}
                          />
                          <label htmlFor="counter-input" className="sr-only">
                            Choose quantity:
                          </label>
                          <div className="flex items-center justify-between md:order-3 md:justify-end">
                            <div className="flex items-center">
                              <button
                                onClick={() => {
                                  dispatch(decrement(item));
                                }}
                                type="button"
                                id="decrement-button"
                                data-input-counter-decrement="counter-input"
                                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                              >
                                <FaRegSquareMinus />
                              </button>
                              <span className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => {
                                  dispatch(increment(item));
                                }}
                                type="button"
                                id="increment-button"
                                data-input-counter-increment="counter-input"
                                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                              >
                                <FaRegSquarePlus />
                              </button>
                            </div>
                            <div className="text-end md:order-4 md:w-32">
                              <p className="text-base font-bold text-gray-900 dark:text-white">
                                ${item.price}
                              </p>
                            </div>
                          </div>
                          <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                            {item.name}
                            <div className="flex items-center gap-4 mt-3">
                              <button
                                type="button"
                                className="inline-flex gap-1 items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                              >
                                <MdFavoriteBorder />
                                Add to Favorites
                              </button>
                              <button
                                onClick={() => {
                                  dispatch(Remover(item));
                                }}
                                type="button"
                                className="inline-flex gap-1 items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                              >
                                <RiDeleteBinLine />
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="space-y-6">
                  <h1 className=" text-2xl  font-bold ">
                    {" "}
                    There's no Product in the Cart!
                  </h1>
                </div>
              )}
            </div>

            {SelectedProducts.length > 0 && (
              <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                  <p className="text-xl font-semibold text-green-600 dark:text-white">
                    Order summary
                  </p>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Original price
                        </dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                          ${totalPrice}
                        </dd>
                      </dl>
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Savings
                        </dt>
                        <dd className="text-base font-medium text-green-600">
                          -${SavingPrice}
                        </dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Tax
                        </dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                          ${TexPrice}
                        </dd>
                      </dl>
                    </div>
                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                      <dt className="text-base font-bold text-green-600 dark:text-white">
                        Total
                      </dt>
                      <dd className="text-base font-bold text-gray-900 dark:text-white">
                        ${TotalPrice}
                      </dd>
                    </dl>
                  </div>
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-green  hover:bg-green-700 hover:rounded-lg transition-all duration-700 "
                  >
                    Proceed to Checkout
                  </a>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      {" "}
                      or{" "}
                    </span>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                    >
                      Continue Shopping
                      <FaLongArrowAltRight />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className=" mt-8  ">
            <h3 className="text-2xl font-semibold text-green-600 dark:text-white">
              People also bought
            </h3>
            <div className="flex flex-wrap justify-between gap-10 max-sm:justify-center ">
              {PopProducts.map((item) => {
                return (
                  <div
                    key={item.name}
                    className="  mt-6  sm:mt-8 border border-solid border-gray-300 shadow-md p-6 rounded-lg text-center"
                  >
                    <Image
                      className="mx-auto h-44 w-44 dark:hidden"
                      src={item.image}
                      width={150}
                      height={150}
                      quality={100}
                      alt={item.name}
                    />

                    <div className="mt-2">
                      <h1 className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">
                        {item.name}
                      </h1>
                    </div>
                    <div className="mt-2">
                      <p className="text-lg font-bold text-gray-900 dark:text-white">
                        <span className="line-through">
                          {" "}
                          ${item.Fakeprice}{" "}
                        </span>
                      </p>
                      <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Banner />
      <Footer />
    </div>
  );
}
