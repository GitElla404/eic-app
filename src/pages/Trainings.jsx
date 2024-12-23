import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'motion/react';
import Email2 from '../components/Email2';
import b4nafterimg from '../images/beforeandafterimg.jpg';

const Trainings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedTopic, setSelectedTopic] = useState({
    topic: "Top Talent Management Bootcamp",
    description: "This is a comprehensive bootcamp designed for managers and HR professionals to enhance their leadership skills and manage top talent.",
    b4nafter: "https://plus.unsplash.com/premium_photo-1661376745450-08db5346075b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhaW5pbmd8ZW58MHx8MHx8fDA%3D",
    cta: "Start Your Journey"
  });

  const toggleModalEmail = () => {
    setIsModalOpen(!isModalOpen);
  };

  const training_list = [
    {
      topic: "Top Talent Management Bootcamp",
      description: "This is a comprehensive bootcamp designed for managers and HR professionals to enhance their leadership skills and manage top talent.",
      b4nafter: "https://plus.unsplash.com/premium_photo-1661376745450-08db5346075b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhaW5pbmd8ZW58MHx8MHx8fDA%3D",
      cta: "Start Your Journey"
    },
    {
      topic: "AI Literacy",
      description: "This course will help you understand the basics of Artificial Intelligence and its impact on modern businesses.",
      b4nafter: "https://images.unsplash.com/photo-1516481265257-97e5f4bc50d5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      cta: "Book a Demo"
    },
    {
      topic: "The Global Coach",
      description: "Learn to become a certified global coach, improving your coaching skills to support individuals and teams at an international level.",
      b4nafter: "https://images.unsplash.com/photo-1578048421563-9aa187e12baf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRyYWluaW5nfGVufDB8fDB8fHww", 
      cta: "Join Our Webinar"
    },
    {
      topic: "Beyond Suite Leadership",
      description: "This leadership course is focused on developing your skills to lead at the highest level and drive organizational growth.",
      b4nafter: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHRyYWluaW5nfGVufDB8fDB8fHww",
      cta: "Get Started Now"
    },
  ];

  return (
    <section className="bg-[#f7f9fe] animate-fadeIn" id="trainings">
      <div className="container mx-auto p-4 md:px-12 bg-[#e0e7ff] md:p-6">
        <h1 className="text-3xl md:text-4xl font-[Metrophobic] font-bold text-center mb-12 text-[#020511] animate-slideInUp">
          Training - Our Coaching Universe
        </h1>

        <div className="flex flex-col md:flex-row px-6 md:px-16">
          <div className="md:w-1/3 flex flex-col items-center md:items-start space-y-6 md:space-y-8 mb-10 md:mb-0">
            {training_list.map((training, index) => (
              <div
                key={index}
                onClick={() => setSelectedTopic(training)}
                className={`w-full p-4 cursor-pointer rounded-lg text-center transition-all duration-300 transform 
                  ${selectedTopic.topic === training.topic ? 'bg-[#254ce5] text-white shadow-xl' : 'bg-white hover:bg-[#254ce5]/10'} 
                  hover:scale-105 hover:shadow-lg`}
              >
                <h3 className="font-semibold text-sm md:text-xl text-[#020511]">{training.topic}</h3>
              </div>
            ))}
          </div>

          <div className="md:w-2/3 md:ml-12 flex flex-col items-center md:items-start animate-slideInRight">
            {selectedTopic ? (
              <div className="bg-white shadow-lg rounded-lg px-8 py-3 w-full max-w-xl max-h-[360px] overflow-y-auto">
              <h2 className="text-xl md:text-3xl font-[Metrophobic] font-semibold text-[#020511] mb-4">
                {selectedTopic.topic}
              </h2>
            
              <p className="text-sm md:text-lg text-[#020511] mb-6">{selectedTopic.description}</p>
            
              <div className="mb-6 flex items-center justify-center">
                <img
                  src={b4nafterimg}
                  alt={`${selectedTopic.topic} before and after`}
                  className="w-[80%] h-[30%] md:w-[60%] md:h-[50%] rounded-lg shadow-md transition-all duration-500 transform hover:scale-105"
                />
              </div>
            
              <div className="flex justify-center mt-4">
                <motion.div initial={{scale: 0.5}} animate={{scale: 1}}>
                  <a
                    onClick={toggleModalEmail}
                    className="bg-[#254ce5] cursor-pointer text-white p-3 md:py-3 md:px-8 rounded-lg text-sm md:text-lg font-[Metrophobic] font-semibold transition-all duration-300 hover:bg-[#254ce5]/80 transform hover:scale-105"
                  >
                    {selectedTopic.cta}
                  </a>
                </motion.div>
              </div>
            </div>
            
            ) : (
              <p className="text-lg text-gray-500">Please select a training topic to view details.</p>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] sm:w-[400px] relative mt-2">
            <button
              onClick={toggleModalEmail} 
              className="absolute top-2 right-2 text-2xl text-[#254ce5]"
            >
              <IoMdClose />
            </button>
            <h2 className="text-lg md:text-2xl font-semibold text-[#020511] my-4">Get Exclusive Training Insights!</h2>
            <p className="text-sm md:text-lg text-[#020511] mb-4">
              Sign up for our newsletter and get insider access to our latest courses, tips, and expert insights!
            </p>
            <ol className="list-decimal list-inside pl-4 text-[#020511] mb-4 text-sm md:text-base">
              <li>Receive updates on upcoming bootcamps and trainings.</li>
              <li>Get exclusive content to boost your professional development.</li>
            </ol>

            <Email2 />
          </div>
        </div>
      )}
    </section>
  );
};

export default Trainings;
