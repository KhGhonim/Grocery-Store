import { CiMapPin } from "react-icons/ci";
import { TbNavigationCog } from "react-icons/tb";

export default function DeliveryMapSection() {
  return (
    <div className="bg-[--background-color] text-[--text-color] rounded-lg shadow-lg p-6 mt-8">
      <h2 className="text-xl font-semibold mb-4">Delivery Route</h2>
      <div className="relative h-[300px] bg-gray-100 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385395.75105420925!2d28.682538151891237!3d41.005467681274695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9eb6f7cdb9f%3A0x44bbef8d97b0505d!2sEgyptian%20Bazaar!5e0!3m2!1sen!2str!4v1734275275481!5m2!1sen!2str"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            loading="lazy"
          ></iframe>
        </div>
        <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-2 mb-2">
            <CiMapPin className="w-5 h-5 text-gray-600" />
            <span className="text-sm">
              Current Location: Distribution Center
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <TbNavigationCog className="w-5 h-5 text-green-600" />
            <span className="text-sm">Estimated arrival in 45 minutes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
