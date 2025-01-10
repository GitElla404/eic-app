import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";

const Sales_Intelligence = () => {
  return (
    <div className="bg-[#f7f9fe] md:p-12">
      <div className="md:max-w-screen-lg mx-auto bg-white py-5 px-8 md:py-10 md:px-24 rounded-lg shadow-lg">
      <div className="mt-8 flex justify-between">
                          <Link
                            to={'/eic-app'}
                            className="bg-[#8b0c5a] shadow-md gap-1 flex items-center text-white p-2 rounded-lg text-sm font-medium transition duration-300 transform hover:bg-[#3B0B59] hover:scale-105"
                          >
                            <MdKeyboardArrowLeft className='text-md font-semibold rounded-lg'/>
                            <p>Go Back</p>
                          </Link>
                        </div>

        <h1 className="text-3xl font-semibold text-[#3B0B59] mt-4 mb-4 leading-tight">
        Ignite Your Business with Sales Intelligence
        </h1>

        <p className="text-md text-[#333] mb-4 leading-relaxed">
          Every day, your business faces tough decisions. Who to reach out to? Where to focus your energy? What to prioritize? It can feel overwhelming, especially when you don’t have all the right information to make those decisions with confidence.
        </p>

        <p className="text-md text-[#333] mb-4 leading-relaxed">
          Now, imagine if you had someone by your side – an expert – who could show you exactly where the best opportunities are, who your ideal customers are, and how to connect with them in the most meaningful way. What if you didn’t have to guess anymore?
        </p>

        <div className="flex justify-center mb-6">
          <img
            src="https://images.pexels.com/photos/7414035/pexels-photo-7414035.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Sales Intelligence"
            className="w-[60%] rounded-lg shadow-2xl"
          />
        </div>

        <h2 className="text-2xl font-semibold text-[#3B0B59] mt-8 mb-4">
        Sales Intelligence Features
        </h2>

        <p className="text-md text-[#333] mb-4 leading-relaxed">
          Sales Intelligence offers a wide array of services to ensure your business targets the right customers and grows efficiently. Here’s what expert Sales Intelligence services include:
        </p>

        <ul className="list-disc pl-6 text-md text-[#333] mb-4 leading-relaxed">
          <li><b>Customer Profiling:</b> Understanding your ideal customers for targeted outreach.</li>
          <li><b>Lead Scoring:</b> Prioritizing leads based on potential for conversion.</li>
          <li><b>Market Segmentation:</b> Identifying and focusing on the most profitable customer segments.</li>
          <li><b>Competitive Analysis:</b> Gaining insights into your competitors to stay ahead in the market.</li>
          <li><b>Sales Funnel Optimization:</b> Streamlining your sales process to close deals faster.</li>
          <li><b>Sales Data Insights:</b> Using data-driven insights to inform sales strategy and decisions.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#3B0B59] mt-8 mb-4">Why Keep Struggling Alone?</h2>
        
        <p className="text-md text-[#333] mb-4 leading-relaxed">
          Without the right insights, it’s easy to waste time on leads that go nowhere, or miss out on the best opportunities because you don’t have the right information. But when you bring in the right experts, everything changes.
        </p>

        <p className="text-md text-[#333] mb-4 leading-relaxed">
          With expert Sales Intelligence, you can:
        </p>

        <div className="space-y-2">
          <div className="flex items-start space-x-2">
            <div className="text-md text-[#4169e1]">✔️</div>
            <div className="text-md text-[#333]">
              <strong className="font-semibold text-[#3B0B59]">Focus on the right customers:</strong>
              <p>No more wasting time on leads that won’t convert. You’ll know who’s ready to buy.</p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <div className="text-md text-[#4169e1]">✔️</div>
            <div className="text-md text-[#333]">
              <strong className="font-semibold text-[#3B0B59]">Understand your customers’ needs:</strong>
              <p>When you really understand your customers, you build trust. And trust leads to loyalty.</p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <div className="text-md text-[#4169e1]">✔️</div>
            <div className="text-md text-[#333]">
              <strong className="font-semibold text-[#3B0B59]">Close deals faster:</strong>
              <p>The right information at the right time means no more second-guessing. Just clear, confident decisions that move you forward.</p>
            </div>
          </div>
        </div>

        <p className="text-md text-[#333] mt-4 mb-4 leading-relaxed">
          <b className='text-3xl font-mono'>T</b>hink about what your business could look like if you had a clear path ahead.
        </p>

        <div className="space-y-4">
          <div className="flex items-start space-x-2">
            <div className="text-md text-[#4169e1]">🔑</div>
            <div className="text-md text-[#333]">
              <strong className="font-semibold text-[#3B0B59]">You could spend your time on the opportunities that matter most.</strong>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <div className="text-md text-[#4169e1]">🔑</div>
            <div className="text-md text-[#333]">
              <strong className="font-semibold text-[#3B0B59]">You could stop chasing dead ends and start building lasting relationships with customers who really value what you offer.</strong>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <div className="text-md text-[#4169e1]">🔑</div>
            <div className="text-md text-[#333]">
              <strong className="font-semibold text-[#3B0B59]">You could watch your sales grow because you’re always one step ahead.</strong>
            </div>
          </div>
        </div>

        <p className="text-md text-[#333] my-4 leading-relaxed">
          This isn’t a far-off dream. This is what happens when you invest in the right Sales Intelligence.
        </p>

        <p className="text-md text-[#333] mt-4 mb-4 leading-relaxed">
          <b className='text-3xl font-mono'>H</b>iring experts to guide you with Sales Intelligence isn’t just about getting a few more leads. It’s about changing the way you do business for the better. Here’s what that change brings:
        </p>

        <div className="space-y-4">
          <div className="flex items-start space-x-2">
            <div className="text-md text-[#4169e1]">🚀</div>
            <div className="text-md text-[#333]">
              <strong className="font-semibold text-[#3B0B59]">More growth:</strong>
              <p>With the right insights, your business can grow in ways you never imagined.</p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <div className="text-md text-[#4169e1]">💰</div>
            <div className="text-md text-[#333]">
              <strong className="font-semibold text-[#3B0B59]">Better returns:</strong>
              <p>The right strategy means more sales and more profit with less wasted effort.</p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <div className="text-md text-[#4169e1]">🤝</div>
            <div className="text-md text-[#333]">
              <strong className="font-semibold text-[#3B0B59]">Stronger relationships:</strong>
              <p>When you understand your customers deeply, you can serve them better and keep them coming back.</p>
            </div>
          </div>
        </div>

        <p className="text-md text-[#333] mb-4 mt-4 leading-relaxed">
          <b className='text-3xl font-mono'>Y</b>ou deserve to have the confidence to know exactly where to focus your efforts. You deserve to make smarter decisions that move your business forward. Investing in expert Sales Intelligence is investing in your success, your growth, and your future.
        </p>

        <p className="text-md text-[#333] mb-4 leading-relaxed">
          The right insights are waiting for you. Let them guide you to your next big opportunity.
        </p>

        <div className="text-center mt-8">
                          <button
                            onClick={() => alert("Let’s build a stronger, more aligned team together!")}
                            className="bg-[#4169e1] text-white flex items-center gap-2 p-3 rounded-lg text-md font-medium border-2 border-[#4169e1] hover:bg-transparent hover:text-[#4169e1] transition duration-300 transform hover:scale-105"
                          >
                            <p>Start Today</p>
                            <FaArrowCircleRight/>
                          </button>
                        </div>
      </div>
    </div>
  );
}

export default Sales_Intelligence;
