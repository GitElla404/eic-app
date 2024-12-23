import React, { useState } from 'react';
import Logo from '../images/logo.png';
import { motion } from 'framer-motion';  
import { IoIosMenu, IoMdClose } from 'react-icons/io';

const Navbarr = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav className="bg-[#f7f9fe] text-[#020511] px-6 py-4 sticky top-0 z-50 shadow-lg">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="text-2xl font-semibold font-[Metrophobic] w-[50%] md:w-auto">
        <a href="#home-section" className="text-lg font-medium font-[Metrophobic] hover:text-[#254ce5] transition duration-300 transform hover:scale-105">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
          </a>
        </div>

        <div className="hidden md:flex space-x-10">
          <a href="#home-section" className="text-lg font-medium font-[Metrophobic] hover:text-[#254ce5] transition duration-300 transform hover:scale-105">Home</a>
          <a href="#journey-section" className="text-lg font-medium font-[Metrophobic] hover:text-[#254ce5] transition duration-300 transform hover:scale-105">About</a>
          <a href="#services-section" className="text-lg font-medium font-[Metrophobic] hover:text-[#254ce5] transition duration-300 transform hover:scale-105">Services</a>
          <a href="#trainings-section" className="text-lg font-medium font-[Metrophobic] hover:text-[#254ce5] transition duration-300 transform hover:scale-105">Training</a>
          <a href="#team-section" className="text-lg font-medium font-[Metrophobic] hover:text-[#254ce5] transition duration-300 transform hover:scale-105">Team</a>
          <a href="#contact-section" className="text-lg font-medium font-[Metrophobic] hover:text-[#254ce5] transition duration-300 transform hover:scale-105">Contact Us</a>
        </div>

        <div>
        <motion.div
            animate={{
              scale: [0.9, 1, 0.9], 
              transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
              }
            }}
          >
          <a
            href="#book-demo"
            onClick={toggleModal} 
            className="bg-[#254ce5] text-white p-2 rounded-full font-semibold font-[Metrophobic] hover:bg-[#254ce5] hover:scale-105 text-[10px] transition duration-300 ease-in-out md:text-base md:px-8 py-3"
          >
            Book a Free Call
          </a>
          </motion.div>
        </div>

        <div className="md:hidden flex items-center">
          
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#020511] text-2xl focus:outline-none transition-transform transform hover:scale-110"
            >
              <IoIosMenu />
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all ease-in-out duration-300 ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <div className="bg-[#f7f9fe] text-[#020511] space-y-6 px-6 py-6">
          <a href="#home-section" className="block text-lg font-medium font-[Metrophobic] hover:text-[#254ce5] transition duration-300 transform hover:scale-105">Home</a>
          <a href="#journey-section" className="block text-lg font-medium font-[Metrophobic] hover:text-[#254ce5] transition duration-300 transform hover:scale-105">About</a>
          <a href="#services-section" className="block text-lg font-medium font-[Metrophobic] hover:text-[#254ce5] transition duration-300 transform hover:scale-105">Services</a>
          <a href="#trainings-section" className="block text-lg font-medium font-[Metrophobic] hover:text-[#254ce5] transition duration-300 transform hover:scale-105">Training</a>
          <a href="#team-section" className="block text-lg font-medium font-[Metrophobic] hover:text-[#254ce5] transition duration-300 transform hover:scale-105">Team</a>
          <a href="#contact-section" className="block text-lg font-medium font-[Metrophobic] hover:text-[#254ce5] transition duration-300 transform hover:scale-105">Contact Us</a>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] sm:w-[400px] relative">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-xl text-[#254ce5]"
            >
              <IoMdClose />
            </button>
            <h2 className="text-2xl font-semibold text-[#020511] mb-4">How to Book a Free Call</h2>
            <p className="text-lg text-[#020511] mb-4">
              To schedule a free call, please follow these steps:
              <ol className="list-decimal list-inside pl-4">
                <li>Click the "Book a Free Call" button below.</li>
                <li>Fill out the booking form with your preferred date and time.</li>
                <li>Click the "Submit" button to confirm your appointment.</li>
              </ol>
            </p>
            <p className="text-lg text-[#020511]">
              You will receive a confirmation email shortly after booking.
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbarr;
