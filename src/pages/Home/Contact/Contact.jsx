import React from "react";

export default function ContactSection() {
  return (
    <section className="py-10 bg-gray-100 text-gray-900">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 md:divide-x px-6">
        {/* Contact Info */}
        <div className="mb-6 md:mb-0 md:px-6">
          <h1 className="text-3xl font-bold mb-2">Get in touch</h1>
          <p className="mb-4">Fill in the form to start a conversation</p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="mr-2">📍</span>
              Fake address, 9999 City
            </li>
            <li className="flex items-center">
              <span className="mr-2">📞</span>
              123456789
            </li>
            <li className="flex items-center">
              <span className="mr-2">✉️</span>
              contact@business.com
            </li>
          </ul>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4 md:px-6">
          <input
            type="text"
            placeholder="Full name"
            className="p-3 rounded bg-white border"
          />
          <input
            type="email"
            placeholder="Email address"
            className="p-3 rounded bg-white border"
          />
          <textarea
            rows="4"
            placeholder="Your message"
            className="p-3 rounded bg-white border"
          ></textarea>
          <button
            type="button"
            className="w-fit px-6 py-2 bg-violet-600 text-white rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}