"use client";
import { useState } from "react";
import PolicyContent from "./PolicyContent";
import TabButton from "./TabButton";
import TermsContent from "./TermsContent";
import { FiFileText } from "react-icons/fi";
import { LuScrollText } from "react-icons/lu";

export default function PolicyTabs() {
  const [activeTab, setActiveTab] = useState("policy");

  return (
    <div className="min-h-full bg-gradient-to-b max-lg:mt-20 from-green-50 to-blue-50 relative ">
      <div className="relative max-w-5xl mx-auto px-4 py-12 !overflow-hidden z-10">
        <div
          className="fixed inset-0 bg-cover bg-center opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80")',
          }}
        />
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy & Terms
          </h1>
          <p className="text-lg text-gray-600">
            Your trust is our top priority
          </p>
        </header>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <TabButton
              active={activeTab === "policy"}
              onClick={() => setActiveTab("policy")}
              icon={<LuScrollText className="w-4 h-4" />}
              text="Privacy Policy"
            />
            <TabButton
              active={activeTab === "terms"}
              onClick={() => setActiveTab("terms")}
              icon={<FiFileText className="w-4 h-4" />}
              text="Terms of Service"
            />
          </div>

          {/* Content */}
          <div className="p-8">
            {activeTab === "policy" ? <PolicyContent /> : <TermsContent />}
          </div>

          {/* Last Updated */}
          <div className="bg-gray-50 px-8 py-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              Last updated: March 14, 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
