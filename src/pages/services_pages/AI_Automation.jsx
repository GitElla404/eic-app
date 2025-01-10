import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";

const AI_Automation = () => {
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
        
        <h1 className="text-3xl font-semibold text-[#3B0B59] my-6">
          Transform Your Business with AI Automation
        </h1>

        <p className="text-md text-[#333] mb-4 leading-relaxed">
          Every business wants to grow, save time, and make life easier for its people. But with so many tasks piling up, it can feel impossible to keep up. This is where AI automation comes in — and it could be the key to unlocking a whole new future for your business.
        </p>

        <p className="text-md text-[#333] mb-4 leading-relaxed">
          Picture this: Your team no longer bogged down by repetitive tasks. Decisions made faster. Work that used to take hours now finished in minutes. And all this without adding extra stress or hiring more people.
        </p>

        <p className="text-md text-[#333] mb-8 leading-relaxed">
          This isn’t a dream. With AI automation, it can be your reality.
        </p>

        <h2 className="text-2xl font-semibold text-[#3B0B59] mb-4">Why Hiring Experts Matters</h2>
        <p className="text-md text-[#333] mb-4 leading-relaxed">
          AI can do wonders, but only when it's done right. It’s not just about using technology—it’s about using it the right way for your business.
        </p>

        <ul className="list-disc pl-6 space-y-4 text-md text-[#333] mb-8">
          <li><strong>Personalized Solutions:</strong> Experts understand that every business is unique. They will design AI systems that fit your company’s needs, making sure it works smoothly from day one.</li>
          <li><strong>Quick Results:</strong> With the right experts, you won’t be waiting forever to see change. They’ll get you up and running fast, so you can start feeling the benefits right away.</li>
          <li><strong>Less Risk, More Confidence:</strong> Trying to set up AI on your own can be tricky and costly if things go wrong. Experts know exactly what they’re doing, so you can avoid mistakes and focus on growing your business.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#3B0B59] mb-4">How AI Automation Transforms Your Business</h2>
        <p className="text-md text-[#333] mb-4 leading-relaxed">
          Think about how much time your team spends on repetitive tasks—data entry, scheduling, answering the same questions over and over. With AI, all of that can be automated. What does this mean for you?
        </p>

        <ul className="list-disc pl-6 space-y-4 text-md text-[#333] mb-8">
          <li><strong>More Time:</strong> Time is your most precious resource. AI handles the routine stuff, giving your team more time to focus on important work that drives your business forward.</li>
          <li><strong>Smarter Decisions:</strong> AI helps you understand your data better and faster. You can make better decisions in less time—whether it’s for strategy, customer service, or forecasting the future.</li>
          <li><strong>Saving Money:</strong> Fewer mistakes and less manual work means fewer costs. AI helps your business run more efficiently, saving you money over time.</li>
          <li><strong>Grow Without Extra Stress:</strong> As your business grows, AI grows with you. No need to hire more people to keep up with the extra work—AI handles it.</li>
        </ul>

        <div className="flex justify-center mb-8">
          <img 
            src="https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="AI Automtion" 
            className="w-[60%] rounded-lg shadow-2xl" 
          />
        </div>

        <h2 className="text-2xl font-semibold text-[#3B0B59] mb-4">Why Investing in AI Automation is the Smart Choice</h2>
        <p className="text-md text-[#333] mb-4 leading-relaxed">
          In today’s world, businesses that don’t use AI risk falling behind. It’s not just a tech trend—it’s the future. And the sooner you bring AI into your business, the sooner you’ll see the rewards.
        </p>

        <p className="text-md text-[#333] mb-6 leading-relaxed">
          Think of AI automation as a team member that never sleeps. It works around the clock, making things easier for your people and allowing your business to move faster and smarter.
        </p>

        <p className="text-md text-[#333] mb-12 leading-relaxed">
          The best part? It’s an investment that will pay off—big time.
        </p>

        <h2 className="text-2xl font-semibold text-[#3B0B59] mb-4">AI Subservices to Elevate Your Business</h2>
        <p className="text-md text-[#333] mb-4 leading-relaxed">
          AI offers many tools to help streamline operations and boost productivity. Here are some subservices that can take your business to the next level:
        </p>
        
        <ul className="list-disc pl-6 space-y-4 text-md text-[#333] mb-8">
          <li><strong>Automated Customer Support:</strong> Let AI chatbots and virtual assistants provide 24/7 support, answering questions and resolving issues without burdening your team.</li>
          <li><strong>Data Analytics and Reporting:</strong> AI-powered tools analyze data, generate reports, and offer actionable insights to help you make smarter business decisions.</li>
          <li><strong>Sales Automation:</strong> Automate lead generation, follow-ups, and customer segmentation to improve sales processes and increase conversion rates.</li>
          <li><strong>Marketing Campaign Optimization:</strong> AI can help create personalized marketing strategies based on data, ensuring you target the right audience with the right message.</li>
        </ul>

        <p className="text-md text-[#333] mb-4 leading-relaxed">
          <b className='text-3xl font-mono'>T</b>he business world is moving fast. AI automation can help you stay ahead, save time, and make smarter decisions. It’s not just about technology; it’s about making life easier for your people and your customers.
        </p>

        <p className="text-md text-[#333] mb-2 leading-relaxed">
          Don’t wait for the future to come to you. Take action today and let AI automation bring a new kind of success to your business.
        </p>

        <div className="text-center mt-8">
                          <button
                            onClick={() => alert("Let’s build a stronger, more aligned team together!")}
                            className="bg-[#4169e1] text-white flex items-center gap-2 p-3 rounded-lg text-md font-medium border-2 border-[#4169e1] hover:bg-transparent hover:text-[#4169e1] transition duration-300 transform hover:scale-105"
                          >
                            <p>Get Started</p>
                            <FaArrowCircleRight/>
                          </button>
                        </div>
      </div>
    </div>
  )
}

export default AI_Automation;
