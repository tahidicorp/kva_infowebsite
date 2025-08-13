"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
<<<<<<< HEAD
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
=======
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
>>>>>>> 7f30101 (made changes)

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      user_email: email,
      message: message,
    };

    try {
      const result = await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_PUBLIC_KEY"
      );
      console.log(result.text);
<<<<<<< HEAD
      setStatus("✅ Message sent successfully!");
      setEmail("");
      setMessage("");
=======
      setStatus('✅ Message sent successfully!');
      setEmail('');
      setMessage('');
>>>>>>> 7f30101 (made changes)
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message.");
    }
  };

  return (
    <div className="min-h-screen bg-white mt-10 py-16 px-6 text-gray-800">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">Contact Us</h1>
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
            className="w-full bg-green-700 text-white py-3 rounded hover:bg-green-800 transition"
          >
            Send
          </button>

          {status && <p className="text-center text-sm text-gray-700 mt-2">{status}</p>}
        </form>
      </div>
    </div>
  );
}
