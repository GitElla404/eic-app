import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";

const Data_Analysis = () => {
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
        Transform Your Data Into Business Success
        </h1>

        <p className="text-md text-[#333] mb-4 leading-relaxed">
          In today’s world, your business is surrounded by data. But without the right people to make sense of it, that data can feel overwhelming, even useless. Imagine how different it could be if you could unlock the true potential hidden in all that information.
        </p>

        <p className="text-md text-[#333] mb-4 leading-relaxed">
          Hiring experts to analyze your data isn’t just about numbers. It’s about finding answers that will guide your business to success. When the right talent digs into your data, they see things you might miss—patterns, trends, and opportunities that can change everything for your business.
        </p>

        <p className="text-md text-[#333] mb-4 leading-relaxed">
          Think about it: What if you could make better decisions, faster? What if you could understand your customers, predict future trends, and make your business more efficient, all at once? That’s the power of data analysis.
        </p>

        <div className="flex justify-center mb-6">
          <img
            src="https://images.pexels.com/photos/9301843/pexels-photo-9301843.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Data Analyst"
            className="w-[60%] rounded-lg shadow-2xl"
          />
        </div>

        <h2 className="text-xl md:text-2xl font-semibold text-[#3B0B59] mt-8 mb-4">
          Data Analysis Services
        </h2>

        <p className="text-md text-[#333] mb-4 leading-relaxed">
          Data analysis isn’t just one thing. It’s a collection of services that can transform your business in multiple ways. Here are a few key areas where experts can make a huge impact:
        </p>

        <ul className="list-disc pl-6 text-md text-[#333] mb-4 leading-relaxed">
          <li><b>Data Cleaning & Preparation:</b> Ensure your data is accurate, complete, and ready to be analyzed.</li>
          <li><b>Trend Analysis:</b> Understand how trends impact your business and use them to predict future growth.</li>
          <li><b>Customer Insights:</b> Learn more about your customers’ behaviors and preferences to refine your strategies.</li>
          <li><b>Predictive Analytics:</b> Use historical data to forecast future trends and make better decisions today.</li>
          <li><b>Business Intelligence Dashboards:</b> Visualize key metrics in a way that helps you make informed decisions quickly.</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold text-[#3B0B59] mt-8 mb-4">Why Investing in Data Analysis Matters</h2>

        <p className="text-md text-[#333] mb-4 leading-relaxed">
          Investing in experts means you’re giving your business the best chance to grow and thrive. You’re not just spending on a service; you’re investing in the future of your company. With the right insights, you can make smarter decisions, reduce risks, and find new ways to succeed—things that can transform your business and set you apart from the competition.
        </p>

        <p className="text-md text-[#333] mb-4 leading-relaxed">
          The world moves fast, and the decisions you make today could shape your tomorrow. Don’t let your data go to waste. Let experts show you how to turn it into a powerful tool for growth and success. The right analysis can unlock opportunities, guide your strategy, and help you build the future you’ve always dreamed of.
        </p>

        <p className="text-md text-[#333] mb-4 leading-relaxed">
          <b className='text-3xl font-mono'>T</b>he question is: Are you ready to unlock that potential? The right data analysis can provide you with actionable insights, helping your business grow and stay ahead of the curve. Let’s make your data work for you.
        </p>


        <div className="text-center mt-8">
                          <button
                            onClick={() => alert("Let’s build a stronger, more aligned team together!")}
                            className="bg-[#4169e1] text-white flex items-center gap-2 p-3 rounded-lg text-md font-medium border-2 border-[#4169e1] hover:bg-transparent hover:text-[#4169e1] transition duration-300 transform hover:scale-105"
                          >
                            <p>Learn More</p>
                            <FaArrowCircleRight/>
                          </button>
                        </div>
      </div>
    </div>
  );
}

export default Data_Analysis;
