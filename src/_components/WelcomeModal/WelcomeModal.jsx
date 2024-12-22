"use client";
import CountdownTimer from "_components/Client/DealsOfTheDay/CountdownTimer";
import { useModal } from "Hooks/useModal";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import { CgClose, CgShoppingCart } from "react-icons/cg";

export default function WelcomeModal() {
  const { isOpen, closeModal } = useModal("welcome");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();

      setTimeLeft({
        days: Math.floor(now / (100000000 * 60 * 60 * 24)),
        hours: Math.floor((now % (1000 * 60 * 60 * 24)) / (10000 * 60 * 60)),
        minutes: Math.floor((now % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((now % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={closeModal}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-xl max-w-4xl w-full min-h-[80vh] lg:max-h-[80vh] animate-fadeIn">
        <button
          onClick={closeModal}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer z-30"
        >
          <CgClose size={24} />
        </button>

        <div className="p-7 lg:p-14 relative overflow-visible">
          <span className="text-orange-500 text-xl font-medium">
            Deal of the Day
          </span>

          <div className="grid grid-cols-1 mt-4">
            <div className="relative w-full lg:w-3/5 z-30">
              <h2 className="text-3xl lg:text-6xl font-medium text-gray-800 mb-4">
                Gorton's Beer Battered Fish Fillets
              </h2>

              <div className="flex items-center lg:pl-5 gap-2 mb-6">
                <span className="text-4xl font-bold text-green-500">
                  $23.85
                </span>
                <span className="text-3xl text-gray-400 line-through">
                  $25.80
                </span>
              </div>

              <div className="space-y-4 flex flex-col justify-between">
                <p className="text-gray-600">Hurry Up! Offer End In:</p>

                <div className="flex items-center gap-3 transition-all duration-700 ease-in-out">
                  <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-2 w-20 border border-green-600">
                    <div className="text-lg font-bold text-green-600">
                      {timeLeft.days.toString().padStart(2, "0")}
                    </div>
                    <div className="text-xs text-gray-600">Days</div>
                  </div>
                  <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-2 w-20 border border-green-600">
                    <div className="text-lg font-bold text-green-600">
                      {timeLeft.hours.toString().padStart(2, "0")}
                    </div>
                    <div className="text-xs text-gray-600">Hours</div>
                  </div>
                  <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-2 w-20 border border-green-600">
                    <div className="text-lg font-bold text-green-600">
                      {timeLeft.minutes.toString().padStart(2, "0")}
                    </div>
                    <div className="text-xs text-gray-600">Mins</div>
                  </div>
                  <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-2 w-20 border border-green-600">
                    <div className="text-lg font-bold text-green-600">
                      {timeLeft.seconds.toString().padStart(2, "0")}
                    </div>
                    <div className="text-xs text-gray-600">Secs</div>
                  </div>
                </div>

                <button className="flex items-center justify-center gap-2 bg-green-500 text-white w-44 lg:w-52 px-6 py-3 rounded-full hover:bg-green-600 transition-colors">
                  <CgShoppingCart size={20} />
                  Add to cart
                </button>
              </div>
            </div>

            <div className="block absolute max-lg:right-5 max-lg:-bottom-28 max-lg:w-full max-lg:h-96  lg:top-0 lg:right-0 lg:w-4/5 lg:h-full ">
              <Image
                width={900}
                height={900}
                quality={100}
                src="/products/popup-1.png"
                alt="Pineapple"
                className="absolute  top-0 bottom-0 -right-4 w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
