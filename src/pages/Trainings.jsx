import React from 'react';
import { motion } from 'motion/react';
import { FaArrowRight, FaUserTie, FaRobot, FaGlobeAmericas, FaChalkboardTeacher } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Trainings = () => {
  return (
    <section className="bg-[#f7f9fe] animate-fadeIn" id="trainings">
      <div className="container mx-auto p-4 md:px-12 bg-[#e0e7ff] md:p-6">
        <motion.h1 
          className="text-2xl md:text-3xl font-semibold text-center mb-8 text-[#3B0B59]" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8 }}
        >
          Our Coaching Universe
        </motion.h1>

        <div className="flex flex-col md:flex-row px-6 md:px-16">
          {/* Left Section: Text content */}
          <motion.div 
            className="md:w-2/3 flex flex-col items-center md:items-start space-y-6 mb-10 md:mb-0" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-base md:text-lg text-[#3B0B59]">
              Are you ready to ignite change? To step forward and become the kind of leader who doesn’t just follow the trends but sets them? 
              <span className="font-semibold text-[#8b0c5a]">
                This is your chance to evolve—transform the way you lead, think, and make an impact.
              </span>
            </p>
            <ul className="space-y-4 text-[#3B0B59] text-base md:text-lg list-inside">
              <motion.li 
                className="flex items-center space-x-2"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1, delay: 0.4 }}
              >
                <FaUserTie className="text-[#4169e1]" />
                <span>
                  <strong className="text-[#8b0c5a]">Top Talent Management Bootcamp</strong>: Unlock the secrets to attracting top-tier talent and becoming the leader that people follow.
                </span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-2"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1, delay: 0.6 }}
              >
                <FaRobot className="text-[#4169e1]" />
                <span>
                  <strong className="text-[#8b0c5a]">AI Domination</strong>: Discover the power of artificial intelligence and integrate it seamlessly into your career.
                </span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-2"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1, delay: 0.8 }}
              >
                <FaGlobeAmericas className="text-[#4169e1]" />
                <span>
                  <strong className="text-[#8b0c5a]">The Global Coach</strong>: Become a globally certified coach and guide teams across the world toward their greatest achievements.
                </span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-2"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1, delay: 1 }}
              >
                <FaChalkboardTeacher className="text-[#4169e1]" />
                <span>
                  <strong className="text-[#8b0c5a]">Beyond Suite Leadership</strong>: Lead with clarity, inspire growth, and create lasting impact in your organization.
                </span>
              </motion.li>
            </ul>

            <p className="text-base md:text-lg text-[#3B0B59] mt-4">
              These aren’t just courses—they’re transformative experiences that will revolutionize the way you work, lead, and live. The time for change is now.
            </p>

            <motion.div 
              className="mt-8"
              initial={{ scale: 0.8 }} 
              animate={{ scale: 1 }} 
              transition={{ duration: 0.6 }}
            >
              <Link
                to={'trainings/our_coaching_universe'} 
                className="flex items-center justify-center bg-[#3B0B59] text-white py-2 px-6 rounded-lg font-semibold shadow-md transition-all duration-300 ease-in-out transform hover:bg-[#8b0c5a] hover:scale-105"
                aria-label="Start now"
              >
                Ready to begin your transformation?
                <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Section: Image */}
          <motion.div 
            className="md:w-96 flex justify-center items-center mt-8 md:mt-0 md:ml-20"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1.2 }}
          >
            <img 
              src="https://images.pexels.com/photos/8276629/pexels-photo-8276629.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Coaching Image" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trainings;
