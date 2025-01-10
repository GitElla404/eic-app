import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";

const Digital_Media = () => {
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

        <h1 className="text-3xl font-semibold text-[#3B0B59] mt-4 mb-4 leading-tight">
          Let Us Make Your Business Shine
        </h1>

        <p className="text-md text-[#333] mb-8 leading-relaxed">
  Your business needs visibility to succeed. In today’s world, people are always online—whether it's on social media, searching for solutions, or engaging with content. But with so much noise in the digital space, how do you ensure that your brand is noticed? The answer lies in having the right team behind you. 
  </p>


        <div className="flex justify-center mb-6">
          <img
            src="https://images.pexels.com/photos/2057856/pexels-photo-2057856.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Digital Media"
            className="w-[60%] rounded-lg shadow-2xl"
          />
        </div>

        <h2 className="text-2xl font-semibold text-[#3B0B59] mt-8 mb-4">
          Our Services
        </h2>

        <ul className="list-disc pl-6 text-md text-[#333] mb-6 leading-relaxed">
          <li><b>Social Media Ads:</b> Reach your audience on Facebook, Tiktok, Instagram, LinkedIn.</li>
          <li><b>Search Ads:</b> Get to the top of search results.</li>
          <li><b>Display Ads:</b> Eye-catching banners.</li>
          <li><b>Video Ads:</b> Engage on YouTube and social media.</li>
          <li><b>Retargeting:</b> Bring back visitors.</li>
          <li><b>Influencer Marketing:</b> Promote through trusted voices.</li>
          <li><b>Content Creation:</b> High-quality content that resonates with your audience.</li>
          <li><b>SEO Optimization:</b> Improve your website's visibility on search engines.</li>
          <li><b>Email Marketing:</b> Personalized email campaigns to engage your subscribers.</li>
          <li><b>Analytics and Reporting:</b> Detailed insights to track your performance.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#3B0B59] mt-8 mb-4">Why It Matters</h2>

        <div className="space-y-4 ml-4">
          <div className="flex items-start space-x-2">
            <div className="text-xl text-[#4169e1]">1.</div>
            <div className="text-md text-[#333]">
              <strong className="font-semibold text-[#3B0B59]">First Impressions:</strong>
              <p>Your online presence is the first thing people see. Make it count.</p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <div className="text-xl text-[#4169e1]">2.</div>
            <div className="text-md text-[#333]">
              <strong className="font-semibold text-[#3B0B59]">Save Time:</strong>
              <p>Focus on your business. Let us handle the digital side.</p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <div className="text-xl text-[#4169e1]">3.</div>
            <div className="text-md text-[#333]">
              <strong className="font-semibold text-[#3B0B59]">Reach the Right People:</strong>
              <p>Target the audience that matters most.</p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <div className="text-xl text-[#4169e1]">4.</div>
            <div className="text-md text-[#333]">
              <strong className="font-semibold text-[#3B0B59]">See Results:</strong>
              <p>Grow your business and build trust with real results.</p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <div className="text-xl text-[#4169e1]">5.</div>
            <div className="text-md text-[#333]">
              <strong className="font-semibold text-[#3B0B59]">Stay Ahead:</strong>
              <p>Keep up with the latest trends and stand out.</p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <div className="text-xl text-[#4169e1]">6.</div>
            <div className="text-md text-[#333]">
              <strong className="font-semibold text-[#3B0B59]">Get More Value:</strong>
              <p>Make every dollar count with expert strategies.</p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <div className="text-xl text-[#4169e1]">7.</div>
            <div className="text-md text-[#333]">
              <strong className="font-semibold text-[#3B0B59]">Build Relationships:</strong>
              <p>Engage with your audience and build lasting relationships.</p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <div className="text-xl text-[#4169e1]">8.</div>
            <div className="text-md text-[#333]">
              <strong className="font-semibold text-[#3B0B59]">Innovate:</strong>
              <p>Stay ahead of the competition with innovative strategies.</p>
            </div>
          </div>
        </div>

        <p className="text-md text-[#333] mt-4 mb-6 leading-relaxed">
  <b className='text-3xl font-mono'>D</b>igital media has the power to completely transform your business. By embracing online platforms, you can reach a larger and more diverse audience, build trust with potential customers, and elevate your brand above the competition. It's an opportunity to showcase your products or services in new, creative ways that resonate with your target market. Don't wait for the future to catch up with you—take action today and invest in strategies that will propel your business forward.
</p>


        <div className="text-center mt-8">
          <button
            onClick={() => alert("Let’s build a stronger, more aligned team together!")}
            className="bg-[#4169e1] text-white flex items-center gap-2 p-3 rounded-lg text-md font-medium border-2 border-[#4169e1] hover:bg-transparent hover:text-[#4169e1] transition duration-300 transform hover:scale-105"
          >
            <p>Contact Us Today</p>
            <FaArrowCircleRight/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Digital_Media;
