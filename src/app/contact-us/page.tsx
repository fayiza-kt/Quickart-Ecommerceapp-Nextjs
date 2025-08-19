import type { Metadata } from "next";
import React from 'react'

export const metadata: Metadata = {
  title: "Quickart - Contact Us",
  description: "Get in touch with Quickart for any inquiries.",
};

function contactUs() {
  return (
    <div className="container mt-4">
        <h3> Contact Us </h3>
        <p>Email: support@quickart.com</p>
        <p>Phone: +971 123 456 789</p>
        <p>Address: 123 E-Shop Street, Dubai, UAE</p>
        <p>Business Hours: Sunday to Thursday - 9 AM to 6 PM</p>
    </div>
  )
}

export default contactUs
