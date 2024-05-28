import React from "react";
import Navbar from "../component/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-2xl mb-4 font-poetsen">
            About TaskTracker
          </h1>
          <p className="text-lg mb-4 indent-10 sm:indent-16">
            Welcome to TaskTracker, your go-to solution for managing tasks
            efficiently and never missing a deadline. We understand how
            important it is to stay on top of your tasks, whether for work,
            school, or personal projects.
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 font-poetsen">
            Our Mission
          </h2>
          <p className="text-lg mb-4  indent-10 sm:indent-16">
            Our mission is to help you stay organized and productive.
            TaskTracker is designed to provide you with timely reminders and
            keep you aware of tasks that are pending or overdue. With our
            intuitive interface and powerful features, you can focus on what
            matters most.
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 font-poetsen">
            Key Features
          </h2>
          <ul className="list-disc list-inside mb-4  indent-10 sm:indent-16">
            <li className="text-lg mb-2">
              Easy Task Management: Quickly add, edit, and delete tasks with a
              user-friendly interface.
            </li>
            <li className="text-lg mb-2">
              Reminders: Set reminders for your tasks and receive notifications
              to ensure nothing falls through the cracks.
            </li>
            <li className="text-lg mb-2">
              Organize by Categories: Categorize tasks by project, priority, or
              due date to stay organized.
            </li>
            <li className="text-lg mb-2">
              Progress Tracking: Track the progress of your tasks and stay
              motivated to complete them.
            </li>
            <li className="text-lg mb-2">
              Collaboration: Share tasks and projects with team members to
              enhance productivity and teamwork.
            </li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 font-poetsen">
            Why Choose TaskTracker?
          </h2>
          <p className="text-lg mb-4  indent-10 sm:indent-16">
            At TaskTracker, we are committed to helping you achieve your goals.
            Our platform is constantly evolving based on user feedback and the
            latest productivity trends. We believe that with the right tools,
            you can accomplish anything you set your mind to.
          </p>
          <p className="text-lg mb-4  indent-10 sm:indent-16">
            Join the TaskTracker community today and take the first step towards
            a more organized and productive life. Don't let your tasks control
            you – take control of your tasks!
          </p>
          <p className="text-lg font-semibold text-center">
            Unlock your potential with effective task management!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
