import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";

const Internal_Auditing = () => {
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

        <h1 className="text-3xl font-semibold text-[#3B0B59] mt-4 mb-4 leading-tight">
          Why You Need Internal Auditing
        </h1>

        <p className="text-md text-[#333] mb-4 leading-relaxed">
          Running a business is hard. There are so many things to think about. But what if you had someone who could help you see things clearly and make better decisions?
        </p>

        <p className="text-md text-[#333] mb-6 leading-relaxed">
          That's what Internal Auditing does. It's not just about checking boxes. It's about giving you peace of mind and a clearer path forward.
        </p>

        <div className="flex justify-center mb-6">
          <img
            src="https://images.pexels.com/photos/4559598/pexels-photo-4559598.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Internal Auditing"
            className="w-[60%] rounded-lg shadow-2xl"
          />
        </div>

        <h2 className="text-2xl font-semibold text-[#3B0B59] mt-8 mb-4">
          Our Services
        </h2>

        <p className="text-md text-[#333] mb-6 leading-relaxed">
          We offer a range of services to help your business:
        </p>

        <ul className="list-disc pl-6 text-md text-[#333] mb-6 leading-relaxed">
          <li><b>Operational Audits:</b> Check how well your operations are running.</li>
          <li><b>Financial Audits:</b> Ensure your financial processes are accurate and compliant.</li>
          <li><b>Compliance Audits:</b> Make sure you meet industry regulations.</li>
          <li><b>Risk Management:</b> Identify and mitigate potential risks.</li>
          <li><b>Fraud Detection:</b> Protect your business from fraud.</li>
          <li><b>IT Audits:</b> Evaluate your technology and data systems.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#3B0B59] mt-8 mb-4">
          Why It Matters
        </h2>

        <p className="text-md text-[#333] mb-4 leading-relaxed">
          Every decision impacts your business. With expert Internal Auditing, you get:
        </p>

        <div className="space-y-4">
          <div className="flex items-start space-x-2">
            <div className="text-xl text-[#4169e1]">✔️</div>
            <div className="text-md text-[#333]">
              <strong className="font-semibold text-[#3B0B59]">Confidence:</strong>
              <p className="mt-1">Know your processes are in the best shape possible.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-xl text-[#4169e1]">✔️</div>
            <div className="text-md text-[#333]">
              <strong className="font-semibold text-[#3B0B59]">Savings:</strong>
              <p className="mt-1">Find wasteful spending and save money.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-xl text-[#4169e1]">✔️</div>
            <div className="text-md text-[#333]">
              <strong className="font-semibold text-[#3B0B59]">Protection:</strong>
              <p className="mt-1">Stay compliant and avoid penalties.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-xl text-[#4169e1]">✔️</div>
            <div className="text-md text-[#333]">
              <strong className="font-semibold text-[#3B0B59]">Better Decisions:</strong>
              <p className="mt-1">Make smarter, more informed decisions.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#3B0B59] mt-8 mb-4">
          Transform Your Business
        </h2>

        <p className="text-md text-[#333] mb-4 leading-relaxed">
          Hiring an expert for Internal Auditing isn’t just about getting a report; it’s about transforming your business. It’s about having a trusted guide who helps you see where improvements can be made and what opportunities you might be missing.
        </p>

        <div className="space-y-6">
          <div className="flex items-start space-x-2">
            <div className="text-xl text-[#4169e1]">🔧</div>
            <div className="text-md text-[#333]">
              <strong className="font-semibold text-[#3B0B59]">Streamlined Operations:</strong>
              <p className="mt-2">Processes will run more smoothly, saving time, money, and stress.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-xl text-[#4169e1]">🔐</div>
            <div className="text-md text-[#333]">
              <strong className="font-semibold text-[#3B0B59]">Stronger Protections:</strong>
              <p className="mt-2">Fewer risks to worry about.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-xl text-[#4169e1]">📈</div>
            <div className="text-md text-[#333]">
              <strong className="font-semibold text-[#3B0B59]">Growth:</strong>
              <p className="mt-2">Focus on what matters and grow your business.</p>
            </div>
          </div>
        </div>

        <p className="text-md text-[#333] mt-4 mb-4 leading-relaxed">
          Ignoring auditing can be risky. Without the right help, you might miss important issues that could hurt your business in the future.
        </p>

        <p className="text-md text-[#333] mb-4 leading-relaxed">
          Choosing to hire experts for Internal Auditing is choosing to invest in the future of your business. It’s about taking control of your destiny.
        </p>

        <p className="text-md text-[#333] mb-6 leading-relaxed">
          You deserve the peace of mind that comes from knowing your organization is in good hands. Make the decision today to protect and grow your business with the help of expert Internal Auditing services.
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

export default Internal_Auditing;
