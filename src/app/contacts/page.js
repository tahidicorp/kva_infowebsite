"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const templateParams = {
      user_email: email,
      message: message,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus("✅ Message sent successfully!");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white mt-10 py-16 px-6 text-gray-800">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Have a question or message? We&apos;d love to hear from you.
        </p>

        <form onSubmit={handleSend} className="space-y-6">
          <div>
            <label className="block font-medium mb-1">Your Email</label>
            <input
              type="email"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-green-700"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              required
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-green-700 h-40"
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-700 text-white py-3 rounded hover:bg-green-800 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {status && (
            <p className="text-center text-sm mt-2">
              {status.includes("✅") ? (
                <span className="text-green-700">{status}</span>
              ) : (
                <span className="text-red-600">{status}</span>
              )}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
