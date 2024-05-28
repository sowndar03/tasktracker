import React from "react";
import Navbar from "../component/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-4xl mb-4 font-poetsen text-center">Contact Us</h1>
          <p className="text-lg mb-8 text-center">
            We'd love to hear from you! Whether you have a question about
            features, or anything else, our team is ready to answer all
            your questions.
          </p>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full p-3 border outline-none border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full p-3 outline-none border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full p-3 border outline-none border-gray-300 rounded-md shadow-smfocus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm  bg-indigo-600 text-white  focus:outline-none focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
