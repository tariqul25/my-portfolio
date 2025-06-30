import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function ContactSection() {
  return (
    <section id="contact" className="py-6 text-gray-900">
        <h1 className="text-center mb-12 text-3xl font-bold">Contact Me</h1>
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 md:divide-x px-6">
        {/* Contact Info */}
        <div className="mb-6 md:mb-0 md:px-6">
          <h1 className="text-3xl font-bold mb-2">Get in touch</h1>
          <p className="mb-4">Fill in the form to start a conversation</p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="mr-2"><IoLocationSharp /></span>
              Kishoreganj,Dhaka,Bangladesh
            </li>
            <li className="flex items-center">
              <span className="mr-2"><FaPhone /></span>
              +8801703301137
            </li>
            <li className="flex items-center">
              <span className="mr-2"><MdEmail /></span>
              imtariqul21@gmail.com
            </li>
          </ul>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4 md:px-6">
          <input
            type="text"
            placeholder="John Doe"
            className="p-3 rounded bg-white border"
          />
          <input
            type="email"
            placeholder="John@Doe.com"
            className="p-3 rounded bg-white border"
          />
          <textarea
            rows="4"
            placeholder="Your message..."
            className="p-3 rounded bg-white border"
          ></textarea>
          <button
            type="button"
            className="w-fit px-6 py-2 bg-accent text-white rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}