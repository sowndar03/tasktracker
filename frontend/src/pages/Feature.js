import React from 'react';
import Navbar from '../component/Navbar';

const Feature = () => {
  return (
    <>
    <Navbar />
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl  mb-4 font-poetsen">Features of TaskTracker</h1>
        <p className="text-lg mb-4 indent-10 sm:indent-16">
          TaskTracker is packed with features designed to help you stay organized and boost your productivity. Here are some of the key functionalities that make TaskTracker the ultimate task management tool:
        </p>

        <h2 className="text-2xl  mb-4 font-poetsen">1. Easy Task Management</h2>
        <p className="text-lg mb-4 indent-10 sm:indent-16">
          Add, edit, and delete tasks effortlessly with our intuitive interface. Organize your tasks by projects, priorities, and due dates to stay on top of your workload.
        </p>

        <h2 className="text-2xl  mb-4 font-poetsen">2. Smart Reminders</h2>
        <p className="text-lg mb-4 indent-10 sm:indent-16">
          Set reminders for your tasks and receive timely notifications, so you never miss a deadline. Customize your reminders to fit your schedule and preferences.
        </p>
        {/*
        <h2 className="text-2xl font-semibold mb-2">3. Categorization and Tagging</h2>
        <p className="text-lg mb-4">
          Use categories and tags to group your tasks by project, type, or priority. This helps you to quickly find and focus on what matters most.
        </p>

        <h2 className="text-2xl font-semibold mb-2">4. Progress Tracking</h2>
        <p className="text-lg mb-4">
          Monitor the progress of your tasks with visual indicators. Track completed tasks and see what still needs to be done to stay motivated and productive.
        </p>

        <h2 className="text-2xl font-semibold mb-2">5. Collaboration</h2>
        <p className="text-lg mb-4">
          Share tasks and projects with your team members. Collaborate in real-time, assign tasks, and track everyone's progress to ensure seamless teamwork.
        </p>

        <h2 className="text-2xl font-semibold mb-2">6. Customizable Dashboard</h2>
        <p className="text-lg mb-4">
          Personalize your dashboard to suit your workflow. Add widgets, rearrange elements, and create a workspace that enhances your productivity.
        </p>

        <h2 className="text-2xl font-semibold mb-2">7. Cross-Platform Access</h2>
        <p className="text-lg mb-4">
          Access TaskTracker from any device, whether it's a desktop, tablet, or smartphone. Your tasks stay synced across all your devices, so you can stay productive on the go.
        </p>

        <h2 className="text-2xl font-semibold mb-2">8. Secure and Reliable</h2>
        <p className="text-lg mb-4">
          Your data is securely stored and backed up regularly. We prioritize your privacy and ensure that your information is protected with the latest security measures.
        </p>
  */}
        <p className="text-lg font-semibold text-center">Experience these features and more by signing up for TaskTracker today. Take control of your tasks and boost your productivity!</p>
      </div>
    </div>
    </>
    
  );
};

export default Feature;
