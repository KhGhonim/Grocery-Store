"use client";
import Footer from "_components/Footer";
import DesktopHeader from "_components/HeaderDesktop/DesktopHeader";
import MobileHeader from "_components/HeaderPhone/MobileHeader";
import DeliveryFeedbackSection from "_components/OrderTracking/DeliveryFeedbackSection";
import DeliveryInstructionsSection from "_components/OrderTracking/DeliveryInstructionsSection";
import DeliveryMapSection from "_components/OrderTracking/DeliveryMapSection";
import OrderItems from "_components/OrderTracking/OrderItems";
import ProgressTimeline from "_components/OrderTracking/ProgressTimeline";
import { orderStatus } from "../DB/db";
import { useState } from "react";
import { CiMapPin } from "react-icons/ci";

export default function OrderTrackingWrapper() {
  const [orderNumber, setOrderNumber] = useState("");
  const [isTracking, setIsTracking] = useState(true);
  return (
    <div>
    <DesktopHeader />
    <MobileHeader />
    <div className="min-h-screen bg-[--background-color] text-[--text-color] max-md:pt-24 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[--background-color] text-[--text-color] rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-2xl font-bold mb-6">Track Your Order</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter your order number"
              className="flex-1 px-4 py-2 text-black outline-none border rounded-lg focus:ring-2 focus:ring-green-500"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
            />
            <button
              className="bg-green-600 text-[--text-color] px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              onClick={() => setIsTracking(true)}
            >
              Track Order
            </button>
          </div>
        </div>

        {isTracking && (
          <div className="space-y-8">
            {/* Order Summary */}
            <div className="bg-bg-[--background-color] text-[--text-color] rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-semibold">
                    {orderStatus.orderId}
                  </h2>
                  <p className="text-[--text-color]">
                    Estimated Delivery: {orderStatus.estimatedDelivery}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-[--text-color]">Current Location</p>
                  <p className="font-semibold flex items-center">
                    <CiMapPin className="w-4 h-4 mr-1" />
                    {orderStatus.currentLocation}
                  </p>
                </div>
              </div>

              {/* Progress Timeline */}
              <ProgressTimeline />
            </div>

            {/* Order Items */}
            <OrderItems />
          </div>
        )}
        <div className="grid md:grid-cols-2 gap-8">
          <DeliveryFeedbackSection />
          <DeliveryInstructionsSection />
        </div>
        <DeliveryMapSection />
      </div>
    </div>
    <Footer />
  </div>
  )
}
