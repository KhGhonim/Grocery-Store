import React from "react";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import AdminDashboard from "./AdminDashboard";

export default function page() {
  return (
    <div>
      <Navbar />
      <AdminDashboard />
    </div>
  );
}
