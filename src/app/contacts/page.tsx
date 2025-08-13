"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      user_name: form.name,
      user_email: form.email,
      user_phone: form.phone,
      meeting_date: form.date,
      meeting_time: form.time,
      message: form.message,
    };

    try {
      const result = await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_PUBLIC_KEY"
      );
      console.log(result.text);
      setStatus("✅ Message sent successfully!");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16 px-6 text-gray-800">
      <div className="max-w-2xl mx-auto bg-white shadow-2xl rounded-2xl p-10 border border-green-100">
        <h1 className="text-4xl font-extrabold text-green-700 mb-4 text-center">Contact Us</h1>
        <p className="text-center text-gray-600 mb-10">
          Have a question or message? We&apos;d love to hear from you.
        </p>

        <form onSubmit={handleSend} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-green-700"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-green-700"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-green-700"
              placeholder="+254 700 000 000"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Preferred Meeting Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-green-700"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Preferred Time</label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-green-700"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-green-700 h-40"
              placeholder="Write your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition transform hover:scale-[1.02] shadow-lg"
          >
            Send Request
          </button>

          {status && (
            <p className="text-center text-sm text-gray-700 mt-4 animate-fadeIn">{status}</p>
          )}
        </form>
      </div>
    </div>
  );
}
