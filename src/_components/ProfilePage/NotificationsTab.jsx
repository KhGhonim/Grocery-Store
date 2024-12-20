import React from "react";
import { notifications } from "../../DB/db";

export default function NotificationsTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Notifications</h2>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-gray-50"
          >
            <div
              className={`p-2 rounded-full ${
                notification.type === "order"
                  ? "bg-blue-100 text-blue-600"
                  : notification.type === "promo"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {notification.icon}
            </div>
            <div className="flex-1">
              <p className="font-medium">{notification.message}</p>
              <p className="text-sm text-gray-500">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
