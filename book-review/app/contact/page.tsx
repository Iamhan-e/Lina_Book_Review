"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    setSubmitted(true);
  };

  return (
    <main className="flex min-h-screen">
      {/* Left side: Image */}

      <div className="w-1/2 p-12 flex flex-col justify-center text-[#1a535c]">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <p className="text-[#0a5e75] mb-6">
          Have a question or a book recommendation? I'd love to hear from you!
        </p>

        {submitted ? (
          <p className="text-green-600 font-semibold">Thank you! Your message has been sent.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="p-3 border border-[#181919] rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-3 border border-[#2c2c2c] rounded"
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={6}
              className="p-3 border border-[#222323] rounded resize-none"
            />
            <button
              type="submit"
              className="bg-[#ff3636] text-white font-bold py-3 px-4 rounded hover:bg-[#ff0000] hover:text-[#0a0a0a] transition-colors"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
      <div className="w-1/2 relative">
        <Image
          src="/bookshelf.jpg" // replace with your image
          alt="Lina writing"
          fill
          className="object-cover opacity-80"
        />
      </div>

      {/* Right side: Form */}
      
    </main>
  );
}
