"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React, { useRef, useState } from "react";
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function BackgroundBeamsDemo() {
  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");


  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });
console.log("response from server", res);
    if (!res.ok) throw new Error("Failed");

    setName("");
    setEmail("");
    setMessage("");

    toast("Message Sent Successfully", {
      position: "top-right",
      autoClose: 3000,
      theme: "dark",
      type: "success",
    });
  } catch (error) {
    toast("Unable to send message. Please try again!", {
      position: "top-right",
      autoClose: 3000,
      theme: "dark",
      type: "error",
    });
  }
};


  return (
    <div className="py-24 w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-2 lg:p-4 flex flex-col gap-2">
        <h1 className="relative text-4xl md:text-7xl bg-clip-text text-white text-center font-sans font-bold">
          Contact me
        </h1>
        <p className="text-white max-w-4lg mx-auto mb-10 mt-2 text-base lg:text-2xl text-center relative">
        I’m always open to new opportunities and collaborations. Let’s make something great!
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 z-40"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Name"
              name="from_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-10 w-full rounded-md bg-black shadow-lg border px-3"
            />
            <input
              type="email"
              placeholder="Email"
              name="from_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-10 w-full rounded-md bg-black shadow-lg border px-3"
            />
          </div>
          <div>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-48 w-full rounded-md bg-black shadow-lg border px-3 py-2"
              placeholder="Message"
            ></textarea>
          </div>
          <button type="submit" className="bg-gradient-to-r from-[#090997] to-[#0077b6] rounded-md h-10 flex items-center justify-center">
            Submit
          </button>
        </form>
      </div>
      <BackgroundBeams />
      <ToastContainer transition={Slide} />
    </div>
  );
}