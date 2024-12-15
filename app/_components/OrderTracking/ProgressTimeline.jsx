import React from "react";
import { orderStatus } from "../../db/db";
import { CiLock } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
export default function ProgressTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-200"></div>
      <div className="space-y-8">
        {orderStatus.steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center ${
                step.completed ? "bg-green-100" : "bg-gray-100"
              }`}
            >
              {step.completed ? (
                <FaCheckCircle className="w-8 h-8 text-green-600" />
              ) : (
                <CiLock className="w-8 h-8 text-gray-400" />
              )}
            </div>
            <div className="ml-4 flex-1">
              <h3 className="font-semibold">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
