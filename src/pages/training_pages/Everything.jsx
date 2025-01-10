import React from 'react';
import { FaArrowRight, FaArrowLeft, FaUserTie, FaRobot, FaChalkboardTeacher, FaGlobeAmericas } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Everything = () => {
  return (
    <div className="bg-[#f7f9fe] text-[#3B0B59] p-6 md:p-12">
      <div className="container mx-auto space-y-12">
        
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Link
            to="/eic-app"
            className="inline-flex items-center text-[#3B0B59] font-semibold text-sm md:text-base mb-6 hover:text-[#8b0c5a]"
          >
            <FaArrowLeft className="mr-2" /> Go Back
          </Link>
        </motion.div>

        
          {/* Hero Image Section */}
          <section className="relative m-2">
            <motion.img 
              src="https://images.pexels.com/photos/8761552/pexels-photo-8761552.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Coaching Image"
              className="rounded-lg shadow-lg w-full h-[200px] object-cover"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <motion.h1 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-5xl font-bold text-white text-center z-10"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.6 }}
            >
              Our Coaching Universe
            </motion.h1>
          </section>
          <div className="px-28">
          {/* Introduction Section */}
          <section>
            <motion.p 
              className="text-base md:text-lg text-center text-[#3B0B59] mt-6"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.7 }}
            >
              Unlock your potential and redefine your future. Our coaching universe offers a variety of transformative experiences tailored to push you beyond your limits. These courses are not just about learning—they are gateways to self-discovery, empowerment, and mastery.
            </motion.p>

            <motion.p 
              className="text-base md:text-lg text-center text-[#3B0B59] mt-4"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.8 }}
            >
              Whether you want to accelerate your career, gain mastery in leadership, or make an impact in the world, we’ve got you covered. Start your journey today!
            </motion.p>
          </section>

          {/* What You Will Learn */}
          <section className="bg-[#e0e7ff] p-8 rounded-lg shadow-lg mt-12">
            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-[#3B0B59] text-center mb-6"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.8 }}
            >
              Transformative Courses to Empower Your Leadership Journey
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Top Talent Management Bootcamp */}
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md text-[#3B0B59]"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <h3 className="text-xl font-bold text-[#8b0c5a] flex items-center">
                  <FaUserTie className="mr-3 text-[#4169e1]" /> Top Talent Management Bootcamp
                </h3>
                <p className="mt-4 text-sm md:text-base">
                  Transform into a visionary leader capable of attracting, nurturing, and retaining top-tier talent. Our bootcamp equips you with the tools needed to build high-performing teams and foster collaboration within your organization.
                </p>
                <motion.img 
                  src="https://images.pexels.com/photos/8382223/pexels-photo-8382223.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Talent Management Transformation"
                  className="rounded-lg shadow-lg mt-6 w-full"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                <motion.p
    className="text-sm md:text-base text-[#3B0B59] mt-4"
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    In this course, you will dive deep into strategies that enable you to create sustainable success by attracting and developing the best talent for your organization. Learn how to create a culture of innovation and growth that empowers teams to achieve their full potential.
  </motion.p>
                <motion.a
                  href="#"
                  className="inline-flex items-center justify-center text-[#4169e1] py-2 px-6 rounded-lg mt-4 text-sm font-semibold transition-all duration-300 hover:bg-[#4169e1] hover:text-white hover:scale-105"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Start Your Leadership Journey
                  <FaArrowRight className="ml-2" />
                </motion.a>
              </motion.div>

              {/* AI Domination */}
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md text-[#3B0B59]"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-[#8b0c5a] flex items-center">
                  <FaRobot className="mr-3 text-[#4169e1]" /> AI Domination
                </h3>
                <p className="mt-4 text-sm md:text-base">
                  Explore the future of leadership by mastering the integration of Artificial Intelligence into your decision-making process. Become a forward-thinking leader who stays ahead of the curve and drives business transformation.
                </p>
                <motion.img 
                  src="https://images.pexels.com/photos/7562358/pexels-photo-7562358.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="AI Domination Transformation"
                  className="rounded-lg shadow-lg mt-6 w-full"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
                  <motion.p
    className="text-sm md:text-base text-[#3B0B59] mt-4"
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 0.8, delay: 0.5 }}
  >
    AI is shaping the future of leadership. In this course, you will learn to leverage cutting-edge AI technologies to optimize operations, improve decision-making, and lead your organization with data-driven insights. Join now and become an AI-powered leader.
  </motion.p>
                <motion.a
                  href="#"
                  className="inline-flex items-center justify-center text-[#4169e1] py-2 px-6 rounded-lg mt-4 text-sm font-semibold transition-all duration-300 hover:bg-[#4169e1] hover:text-white hover:scale-105"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Master AI for Success
                  <FaArrowRight className="ml-2" />
                </motion.a>
              </motion.div>

              {/* The Global Coach */}
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md text-[#3B0B59]"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h3 className="text-xl font-bold text-[#8b0c5a] flex items-center">
                  <FaGlobeAmericas className="mr-3 text-[#4169e1]" /> The Global Coach
                </h3>
                <p className="mt-4 text-sm md:text-base">
                  Expand your coaching career internationally by becoming a certified global coach. Learn to work with diverse clients and lead change across borders, bringing your expertise to every corner of the world.
                </p>
                <motion.img 
                  src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Global Coaching Transformation"
                  className="rounded-lg shadow-lg mt-6 w-full"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
                <motion.p
    className="text-sm md:text-base text-[#3B0B59] mt-4"
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 0.8, delay: 0.6 }}
  >
    This course will equip you with the skills to work across cultures, understand global challenges, and deliver impactful coaching sessions to diverse groups. Learn how to address global organizational needs and inspire change in a multicultural environment. Unlock the global stage and create lasting international impact with your coaching expertise.
  </motion.p>
                <motion.a
                  href="#"
                  className="inline-flex items-center justify-center text-[#4169e1] py-2 px-6 rounded-lg mt-4 text-sm font-semibold transition-all duration-300 hover:bg-[#4169e1] hover:text-white hover:scale-105"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Start Your Global Coaching Journey
                  <FaArrowRight className="ml-2" />
                </motion.a>
              </motion.div>

              {/* Beyond Suite Leadership */}
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md text-[#3B0B59]"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-xl font-bold text-[#8b0c5a] flex items-center">
                  <FaChalkboardTeacher className="mr-3 text-[#4169e1]" /> Beyond Suite Leadership
                </h3>
                <p className="mt-4 text-sm md:text-base">
                  Step into the world of transformative leadership. This course will elevate your influence, sharpen your strategic thinking, and position you as the leader who guides organizations to greatness.
                </p>
                <motion.img 
                  src="https://images.pexels.com/photos/30111688/pexels-photo-30111688/free-photo-of-portrait-of-person-in-sunglasses-with-curly-hair-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Leadership Transformation"
                  className="rounded-lg shadow-lg mt-6 w-full"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
                <motion.p
    className="text-sm md:text-base text-[#3B0B59] mt-4"
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 0.8, delay: 0.7 }}
  >
    In this course, you’ll explore advanced leadership strategies designed to build influence and foster organizational growth. Gain a deeper understanding of change management, create visionary roadmaps, and hone your skills to lead teams through times of transformation. Become the leader who takes your organization to new heights and inspires a legacy of excellence.
  </motion.p>
                <motion.a
                  href="#"
                  className="inline-flex items-center justify-center text-[#4169e1] py-2 px-6 rounded-lg mt-4 text-sm font-semibold transition-all duration-300 hover:bg-[#4169e1] hover:text-white hover:scale-105"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Join the Leadership Revolution
                  <FaArrowRight className="ml-2" />
                </motion.a>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Everything;
