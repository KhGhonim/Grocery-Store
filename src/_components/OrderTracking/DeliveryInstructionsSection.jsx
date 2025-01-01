import { FaHome, FaPhone } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";

export default function DeliveryInstructionsSection() {
  return (
    <div className="bg-[--background-color] text-[--text-color] rounded-lg shadow-lg p-6 mt-8">
      <h2 className="text-xl font-semibold mb-4">Delivery Instructions</h2>
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <FaHome className="w-5 h-5 text-gray-500 mt-1" />
          <div>
            <p className="font-medium">Delivery Address</p>
            <p className="text-gray-500">123 Market Street, Apt 4B</p>
            <p className="text-gray-500">New York, NY 10001</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <FiMessageSquare className="w-5 h-5 text-gray-500 mt-1" />
          <div>
            <p className="font-medium">Special Instructions</p>
            <p className="text-gray-500">
              Please leave at front door. Ring doorbell upon delivery.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <FaPhone className="w-5 h-5 text-gray-500 mt-1" />
          <div>
            <p className="font-medium">Contact</p>
            <p className="text-gray-500">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  );
}
