import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";

const Coaching_Management = () => {
  return (
    <div className="bg-[#f7f9fe] md:p-12">
      <div className="md:max-w-screen-lg mx-auto bg-white py-5 px-8 md:py-10 md:px-24 rounded-lg shadow-lg">
        <div className="mt-8 flex justify-between">
                  <Link
                    to={'/eic-app'}
                    className="bg-[#8b0c5a] shadow-md gap-1 flex items-center text-white p-2 rounded-lg text-md font-medium transition duration-300 transform hover:bg-[#3B0B59] hover:scale-105"
                  >
                    <MdKeyboardArrowLeft className='text-lg font-semibold rounded-lg'/>
                    <p>Go Back</p>
                  </Link>
                </div>

        <h1 className="text-2xl md:text-3xl font-semibold text-[#3B0B59] mt-4 mb-4 leading-tight">
          Unlock the Full Potential of Your Team with Expert Coaching
        </h1>

        <p className="text-md text-[#333] mb-4 leading-relaxed">
          Your team is your greatest strength, but even the best talent needs guidance to truly shine. Imagine a workplace where everyone is motivated, confident, and working together smoothly. A place where each person knows their strengths, understands their goals, and feels supported to do their best work.
        </p>

        <p className="text-md text-[#333] mb-6 leading-relaxed">
          That’s the power of talent coaching management—and it can transform everything.
        </p>

        <div className="flex justify-center mb-6">
          <img
            src="https://images.pexels.com/photos/8123843/pexels-photo-8123843.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Coaching Management"
            className="w-[60%] rounded-lg shadow-2xl"
          />
        </div>

        <h2 className="text-xl md:text-2xl font-semibold text-[#3B0B59] mb-4">Why You Need Expert Coaching</h2>

        <p className="text-md text-[#333] mb-6 leading-relaxed">
          Great people need more than just a job—they need guidance. They need someone who understands how to help them grow, overcome challenges, and reach their full potential. This is where expert coaches come in. With the right coaching, individuals and teams don’t just improve—they thrive.
        </p>

        <p className="text-md text-[#333] mb-6 leading-relaxed">
          Investing in coaching means creating a workplace where everyone feels valued, engaged, and ready to succeed. It’s not just about better performance today; it’s about building a foundation for long-term growth and success.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-[#3B0B59] mt-8 mb-4">The Changes You Can Expect</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg md:text-xl font-medium text-[#3B0B59]">More Focus and Productivity</h3>
            <p className="text-md text-[#333] leading-relaxed">
              Coaching helps people manage their time, stay focused, and set clear goals. When people know what they’re working toward and feel supported, they perform at their best.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-medium text-[#3B0B59]">Stronger Teamwork</h3>
            <p className="text-md text-[#333] leading-relaxed">
              Coaching builds trust and better communication. Teams learn how to work together more effectively, leading to better collaboration and fewer conflicts.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-medium text-[#3B0B59]">Growing Leaders</h3>
            <p className="text-md text-[#333] leading-relaxed">
              Coaching helps identify and develop leaders within your team. With the right support, they can step up, make decisions, and guide others.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-medium text-[#3B0B59]">Increased Confidence</h3>
            <p className="text-md text-[#333] leading-relaxed">
              Coaching isn’t just about work—it’s about people. It helps individuals overcome self-doubt, build confidence, and see their own potential.
            </p>
          </div>
        </div>


        <h2 className="text-xl md:text-2xl font-semibold text-[#3B0B59] mt-8 mb-4">Coaching Management Services</h2>
        <p className="text-md text-[#333] mb-4 leading-relaxed">
          Here’s how expert coaching can transform your team and organization:
        </p>

        <ul className="list-disc pl-6 space-y-4 text-md text-[#333] mb-6">
          <li><strong>Individual Coaching:</strong> Personalized one-on-one coaching sessions to address specific goals, challenges, and growth opportunities for each team member.</li>
          <li><strong>Team Coaching:</strong> Focused group coaching that enhances team dynamics, improves communication, and strengthens collaboration.</li>
          <li><strong>Leadership Coaching:</strong> Develop the leadership skills within your team to identify and nurture future leaders who can guide the organization forward.</li>
          <li><strong>Performance Coaching:</strong> Targeted coaching to improve individual and team performance, setting clear objectives and helping teams achieve their full potential.</li>
          <li><strong>Conflict Resolution Coaching:</strong> Coaching that helps teams and individuals navigate and resolve conflicts, fostering a healthier work environment and stronger relationships.</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold text-[#3B0B59] mt-8 mb-4">Why Investing in Coaching is Worth It</h2>

        <p className="text-md text-[#333] mb-6 leading-relaxed">
          Coaching is an investment in your team—and your future. When you invest in their growth, they become more engaged, more loyal, and more productive. You create a culture of success, where everyone is motivated to do their best work.
        </p>

        <p className="text-md text-[#333] mb-6 leading-relaxed">
          And the best part? Coaching doesn’t just change things in the short term. It sets the stage for long-term growth, helping your team stay ahead of challenges and succeed in the future.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-[#3B0B59] mt-8 mb-4">Make the Investment Today</h2>

        <p className="text-md text-[#333] mb-6 leading-relaxed">
          Your team deserves the best. They deserve the support to grow, to feel confident, and to achieve their dreams. Expert coaching isn’t just about improving performance—it’s about creating a workplace where people feel empowered to be their best selves.
        </p>

        <p className="text-md text-[#333] mb-6 leading-relaxed">
          When you invest in coaching, you’re investing in the future success of your team—and your business.
        </p>

        <div className="text-center mt-8">
                  <button
                    onClick={() => alert("Let’s build a stronger, more aligned team together!")}
                    className="bg-[#4169e1] text-white flex items-center gap-2 p-3 rounded-lg text-md font-medium border-2 border-[#4169e1] hover:bg-transparent hover:text-[#4169e1] transition duration-300 transform hover:scale-105"
                  >
                    <p>Begin Coaching</p>
                    <FaArrowCircleRight/>
                  </button>
                </div>
      </div>
    </div>
  );
}

export default Coaching_Management;
