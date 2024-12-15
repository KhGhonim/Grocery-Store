"use client";
import { useState } from "react";
import { CiMapPin } from "react-icons/ci";

import { orderStatus } from "../db/db";
import DeliveryFeedbackSection from "../_components/OrderTracking/DeliveryFeedbackSection";
import DeliveryInstructionsSection from "../_components/OrderTracking/DeliveryInstructionsSection";
import DeliveryMapSection from "../_components/OrderTracking/DeliveryMapSection";
import OrderItems from "../_components/OrderTracking/OrderItems";
import ProgressTimeline from "../_components/OrderTracking/ProgressTimeline";

export default function OrderTracking() {
  const [orderNumber, setOrderNumber] = useState("");
  const [isTracking, setIsTracking] = useState(true);
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-2xl font-bold mb-6">Track Your Order</h1>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter your order number"
              className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
            />
            <button
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              onClick={() => setIsTracking(true)}
            >
              Track Order
            </button>
          </div>
        </div>

        {isTracking && (
          <div className="space-y-8">
            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-semibold">
                    {orderStatus.orderId}
                  </h2>
                  <p className="text-gray-600">
                    Estimated Delivery: {orderStatus.estimatedDelivery}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Current Location</p>
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
        <DeliveryFeedbackSection />
        <DeliveryInstructionsSection />
        <DeliveryMapSection />
      </div>
    </div>
  );
}
