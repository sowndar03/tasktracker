import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Signinsignup from "./Signinsignup";


const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    console.log("Modal button is clicked");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col-reverse lg:flex-row min-h-screen">
        <div className="flex-1 flex justify-center flex-col items-center gap-2 p-8">
          <h1 className="font-poetsen text-center text-4xl mb-4">
            Welcome to TaskTracker!
          </h1>
          <p className="text-lg mb-8 text-center">
            TaskTracker is your ultimate solution for managing tasks efficiently
            and ensuring you never miss a deadline. Stay organized, stay
            productive, and achieve your goals with our intuitive and powerful
            task management platform.
          </p>
          <div className="flex justify-center lg:justify-start mt-8">
            <button
              onClick={openModal}
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="flex-1 mt-10 lg:mt-0 lg:ml-8 p-8">
          <img
            src="home-2.jpg"
            alt="TaskTracker illustration"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
      {isModalOpen && <Signinsignup onClose = {closeModal} />}
    </div>
  );
};

export default Home;
