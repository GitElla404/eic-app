import React, { useState } from 'react';
import Logo from '../images/logo.png';
import { motion } from 'framer-motion';
import { IoIosMenu, IoMdClose } from 'react-icons/io';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Navbarr = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  const handleServicesClick = () => {
    const serviceButton = document.getElementById('services');
    if (serviceButton) {
      serviceButton.click();
    }
  };

  const handleProductsClick = () => {
    const productsButton = document.getElementById('products');
    if (productsButton) {
      productsButton.click();
    }
  };




  return (
    <nav className="bg-background text-[#020511] px-10 py-4 sticky top-0 z-50 shadow-lg">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="text-2xl font-semibold font-[Metrophobic] w-[50%] md:w-auto">
          <a href="/eic-app" className="text-lg font-medium focus:border-none font-[Metrophobic] hover:text-[#254ce5] transition duration-300 transform hover:scale-105 active:border-none">
            <img src={Logo} alt="Logo" className="h-8 w-auto focus:outline-none" />
          </a>
        </div>

        <div className="hidden md:flex space-x-6">
          <a href="/eic-app" className="text-md font-medium font-[Metrophobic] hover:text-primary transition duration-300 transform hover:scale-105">Home</a>
          <a href="#journey-section" className="text-md font-medium font-[Metrophobic] hover:text-primary transition duration-300 transform hover:scale-105">About</a>
          <a
            href="#services"
            onClick={handleServicesClick}
            className="text-md font-medium font-[Metrophobic] hover:text-primary transition duration-300 transform hover:scale-105"
          >
            Services
          </a>
          <a
            href="#products"
            onClick={() => {
              handleProductsClick();
              document.getElementById('products-section').click();
            }}
            className="text-md font-medium font-[Metrophobic] hover:text-primary transition duration-300 transform hover:scale-105"
          >
            Products
          </a>
          <a href="#trainings" className="text-md font-medium font-[Metrophobic] hover:text-primary transition duration-300 transform hover:scale-105">Trainings</a>
          <a href="#team" className="text-md font-medium font-[Metrophobic] hover:text-primary transition duration-300 transform hover:scale-105">Team</a>
          <a href="#contact" className="text-md font-medium font-[Metrophobic] hover:text-primary transition duration-300 transform hover:scale-105">Contact Us</a>
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
                onClick={toggleModal} className='flex items-center bg-secondary text-white p-1.5 rounded-full font-semibold font-[Metrophobic] hover:bg-slate-50 hover:text-secondary hover:border-black hover:border-2 hover:scale-105 text-[9px] transition duration-300 ease-in-out md:text-sm md:px-6 md:py-3'>
              <div
              >
                Book a Free Call

              </div>
              <MdOutlineKeyboardArrowRight className='text-white text-lg md:text-xl font-semibold hover:text-secondary' />
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
        <div className="bg-[#f7f9fe] text-[#020511] text-sm space-y-3 px-6 py-3">
          <a href="/eic-app" className="block font-medium font-[Metrophobic] hover:text-[#254ce5] transition duration-300 transform hover:scale-105">Home</a>
          <a href="#journey-section" className="block font-medium font-[Metrophobic] hover:text-[#254ce5] transition duration-300 transform hover:scale-105">About</a>
          <a
            href="#services"
            onClick={handleServicesClick}
            className="block font-medium font-[Metrophobic] hover:text-[#254ce5] transition duration-300 transform hover:scale-105"
          >
            Services
          </a>
          <a
            href="#products"
            onClick={handleProductsClick}
            className="block font-medium font-[Metrophobic] hover:text-[#254ce5] transition duration-300 transform hover:scale-105"
          >
            Products
          </a>
          <a href="#trainings" className="block font-medium font-[Metrophobic] hover:text-[#254ce5] transition duration-300 transform hover:scale-105">Training</a>
          <a href="#team" className="block font-medium font-[Metrophobic] hover:text-[#254ce5] transition duration-300 transform hover:scale-105">Team</a>
          <a href="#contact" className="block font-medium font-[Metrophobic] hover:text-[#254ce5] transition duration-300 transform hover:scale-105">Contact Us</a>
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
