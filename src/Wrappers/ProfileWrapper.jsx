"use client";
import NotificationsTab from "_components/ProfilePage/NotificationsTab";
import OrdersTab from "_components/ProfilePage/OrdersTab";
import SettingsTab from "_components/ProfilePage/SettingsTab";
import { tabs } from "../DB/db";
import React, { useState } from "react";
import { LuLogOut } from "react-icons/lu";
import HeaderOne from "_components/HeaderDesktop/HeaderOne/HeaderOne";
import HeaderTwo from "_components/HeaderDesktop/HeaderTwo/HeaderTwo";
import MobileHeader from "_components/HeaderPhone/MobileHeader";
import { useSession } from "next-auth/react";

export default function ProfileWrapper() {
  const [activeTab, setActiveTab] = useState("profile");
  const { data: session } = useSession();
  return (
    <>
      <HeaderOne />
      <HeaderTwo />
      <MobileHeader />

      <div className="min-h-screen bg-[--background-color] text-[--text-color] flex max-md:pt-24">
        {/* Sidebar for large screens */}
        <div className="hidden lg:block w-64 bg-[--background-color] text-[--text-color] shadow-lg">
          <nav className="p-4">
            <ul className="space-y-2">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? "bg-green-50 text-green-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                </li>
              ))}
            </ul>
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg mt-8">
              <LuLogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </nav>
        </div>

        {/* Mobile Tabs */}
        <div className="lg:hidden bg-[--background-color] text-[--text-color] shadow-md fixed bottom-0 inset-x-0 z-50">
          <nav className="flex justify-around p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center space-y-1 text-sm ${
                  activeTab === tab.id
                    ? "text-green-600"
                    : "text-gray-600 hover:text-green-600"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeTab === "profile" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
              <div className="bg-[--background-color] text-[--text-color] rounded-lg shadow-md p-6">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[--text-color] outline-none mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={session.user.name}
                      className="w-full px-4 py-2 border capitalize rounded-lg focus:ring-2 outline-none text-black focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm  font-medium text-[--text-color] outline-none mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={session.user.email}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none text-black focus:ring-green-500"
                    />
                  </div>
                  <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}
          {activeTab === "orders" && <OrdersTab />}
          {activeTab === "notifications" && <NotificationsTab />}
          {activeTab === "settings" && <SettingsTab />}
        </div>
      </div>
    </>
  );
}
