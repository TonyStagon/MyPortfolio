import React from "react";

const Home = () => {
  return (
    <section className="relative bg-blue-600 min-h-screen flex flex-col justify-center items-center text-center text-white">
      {/* Profile Image and Name */}
      <div className="absolute top-10 left-10 flex items-center space-x-3">
        <img
          src="https://via.placeholder.com/50" 
          alt="Profile"
          className="w-12 h-12 rounded-full border-2 border-white"
        />
        <span className="text-lg font-bold">Trainee Name</span>
      </div>

      {/* Navigation */}
      <nav className="absolute top-5 right-10 flex space-x-8 text-lg">
        <a href="#" className="hover:text-gray-300">HOME</a>
        <a href="#" className="hover:text-gray-300">ABOUT</a>
        <a href="#" className="hover:text-gray-300">PROJECTS</a>
        <a href="#" className="hover:text-gray-300">CONTACT</a>
      </nav>

      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold">HEY, MY NAME IS TRAINEE NAME</h1>
      <p className="mt-4 max-w-2xl text-lg">
        Welcome to my portfolio. I am a passionate developer with experience in React.js, Tailwind CSS, and modern web technologies.
      </p>

      {/* Projects Button */}
      <button className="mt-6 bg-white text-black px-6 py-3 font-bold rounded-lg shadow-lg hover:bg-gray-300">
        PROJECTS
      </button>

      {/* Social Icons */}
      <div className="absolute left-10 top-1/2 transform -translate-y-1/2 space-y-4">
        <a href="#" className="block p-2 bg-white rounded-lg">
          <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" className="w-6 h-6" />
        </a>
        <a href="#" className="block p-2 bg-white rounded-lg">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="w-6 h-6" />
        </a>
        <a href="#" className="block p-2 bg-white rounded-lg">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-6 h-6" />
        </a>
        <a href="#" className="block p-2 bg-white rounded-lg">
          <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" className="w-6 h-6" />
        </a>
        <a href="#" className="block p-2 bg-white rounded-lg">
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Home;
