import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaUserPlus, FaHandshake, FaChartLine, FaUsers } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi'; 
import { FaArrowCircleRight } from "react-icons/fa";


const Talent_Management = () => {
  return (
    <div className="bg-[#f7f9fe] md:p-12">
      <div className="md:max-w-screen-lg mx-auto bg-white py-5 px-8 md:py-10 md:px-24 rounded-lg shadow-lg">
      <div className="mt-8 flex justify-between">
                          <Link
                            to={'/eic-app'}
                            className="bg-[#8b0c5a] shadow-md gap-1 flex items-center text-white p-2 rounded-lg text-sm font-medium transition duration-300 transform hover:bg-[#3B0B59] hover:scale-105"
                          >
                            <MdKeyboardArrowLeft className='text-lg font-semibold rounded-lg'/>
                            <p>Go Back</p>
                          </Link>
                        </div>

        <h1 className="text-2xl md:text-3xl md:text-4xl font-semibold text-[#3B0B59] mt-4 mb-4 leading-tight">
        How the Right Team Can Transform Your Business
        </h1>

        <p className="text-sm md:text-md text-[#333] mb-4 leading-relaxed">
          <b className='font-mono text-2xl md:text-3xl'>Y</b>our business deserves a team that believes in your vision, works with passion, and drives your growth. But finding the right people, keeping them motivated, and aligning their efforts with your goals? That’s where experts come in.
        </p>

        <p className="text-sm md:text-md text-[#333] mb-4 leading-relaxed">
          It’s not just about filling roles, it’s about creating a team that will make your business thrive and succeed. This is where the right Talent and HR management steps in.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        
        
          <div className='shadow-md p-2'>
          <div className="flex items-center">
            <FaUserPlus className="text-lg md:text-xl text-[#3B0B59] mr-2" />
            <h2 className="text-lg md:text-xl font-semibold text-[#3B0B59] mb-2">Talent Acquisition</h2>
            
            </div>
            <p className="text-sm md:text-md text-[#333] leading-relaxed">
              Bringing in the right people is key. Expert talent acquisition ensures you find individuals who not only have the skills but also align with your company’s culture and vision.
            </p>
          
          
          </div>
          <div className='shadow-md p-2'>
          <div className="flex items-center">
          <FaHandshake className="text-lg md:text-xl text-[#3B0B59] mr-2" />
            <h2 className="text-lg md:text-xl font-semibold text-[#3B0B59] mb-2">Employee Retention</h2>
            </div>
            <p className="text-sm md:text-md text-[#333] leading-relaxed">
              Keep the people who are truly invested in your success. HR management strategies create an environment where employees feel valued, supported, and excited to stay long-term.
            </p>
          </div>
          <div className='shadow-md p-2'>
          <div className="flex items-center">
          <FaChartLine className="text-lg md:text-xl text-[#3B0B59] mr-2" />
            <h2 className="text-lg md:text-xl font-semibold text-[#3B0B59] mb-2">Performance Management</h2>
            </div>
            <p className="text-sm md:text-md text-[#333] leading-relaxed">
              Make sure your team is always growing and excelling. Experts know how to set clear goals, provide feedback, and help your people reach their full potential.
            </p>
          </div>
          <div className='shadow-md p-2'>
          <div className="flex items-center">
          <HiUsers className="text-lg md:text-xl text-[#3B0B59] mr-2" />
            <h2 className="text-lg md:text-xl font-semibold text-[#3B0B59] mb-2">Workplace Culture</h2>
            </div>
            <p className="text-sm md:text-md text-[#333] leading-relaxed">
              A positive workplace is essential for success. With expert HR strategies, a culture of trust, respect, and collaboration will thrive, leading to happier, more productive employees.
            </p>
          </div>
        </div>

        
        <p className="text-sm md:text-md text-[#333] mt-5 mb-4 leading-relaxed">
          <b className='text-3xl font-mono'>T</b>hink of the possibilities when every person on your team is aligned with your mission. With experts in Talent and HR management, your business will run smoothly, your team will be motivated, and growth will happen naturally.
        </p>

        

        <h2 className="text-xl md:text-2xl font-semibold text-[#3B0B59] mt-8 mb-4">Why It Matters</h2>

        <p className="text-sm md:text-md text-[#333] mb-4 leading-relaxed">
          <b>- The Right Fit:</b> Hire people who not only fit the role but also share your vision. A strong team drives success together.
        </p>

        <p className="text-sm md:text-md text-[#333] mb-4 leading-relaxed">
          <b>- Happy Employees, Happy Business:</b> Retaining loyal employees is crucial. When people feel supported, they become more invested in the company's success.
        </p>

        <p className="text-sm md:text-md text-[#333] mb-4 leading-relaxed">
          <b>- A Thriving Culture:</b> A workplace built on trust and respect leads to better collaboration, increased productivity, and a happier environment for all.
        </p>

        <p className="text-sm md:text-md text-[#333] mb-4 leading-relaxed">
          <b>- Focus on What Matters:</b> When experts manage HR, you can focus on what you do best, growing your business and leading your team to success.
        </p>

        <p className="text-sm md:text-md text-[#333] mb-4 leading-relaxed">
          Imagine how much easier your journey would be if your team was strong, motivated, and aligned with your vision. With our expert Talent and HR management, this transformation becomes a reality.
        </p>

        <div className="flex justify-center mb-6">
          <img
            src="https://images.pexels.com/photos/5699479/pexels-photo-5699479.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Talent Management"
            className="w-[60%] rounded-lg shadow-2xl"
          />
        </div>
        <p className="text-sm md:text-md text-[#333] mb-4 leading-relaxed">
          <b className='text-2xl md:text-3xl font-mono'>I</b>nvesting in our HR and Talent management is not just about filling positions, it’s about strengthening your business, creating an environment where everyone can grow, and building a foundation for lasting success.
        </p>

        <p className="text-sm md:text-md text-[#333] mb-4 leading-relaxed">
          You’ve worked hard to get to where you are. Now let experts help you build the team that will take your business even further.
        </p>

        <div className="text-center mt-8">
          <button
            onClick={() => alert("Let’s build a stronger, more aligned team together!")}
            className="bg-[#4169e1] text-white flex items-center gap-2 p-3 rounded-lg text-md font-medium border-2 border-[#4169e1] hover:bg-transparent hover:text-[#4169e1] transition duration-300 transform hover:scale-105"
          >
            <p>Start Now</p>
            <FaArrowCircleRight/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Talent_Management;
