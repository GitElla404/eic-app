import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";

const Brand_Design = () => {
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

        <h1 className="text-2xl md:text-3xl font-semibold text-[#3B0B59] my-4 leading-tight">
          Make Your Brand Unforgettable
        </h1>

        <p className="text-md text-[#333] mb-4 leading-relaxed">
          Think about the brands you love. What makes them stand out? It’s not just their logo or colors—it’s the feeling they give you. Now, imagine your brand doing the same for your customers. Imagine them feeling connected to you, trusting you, and remembering you every time they see your brand. That’s the power of great design.
        </p>

        <p className="text-md text-[#333] mb-8 leading-relaxed">
          When you choose to invest in expert Brand Design, you’re not just getting a new look—you’re unlocking a whole new future for your business. A brand that speaks to your customers, builds trust, and leaves a lasting impression. It's the difference between being just another business and being the business people can’t forget.
        </p>

        <div className="flex justify-center mb-8">
          <img 
            src="https://images.pexels.com/photos/3727457/pexels-photo-3727457.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Brand Design" 
            className="w-[60%] rounded-lg shadow-2xl" 
          />
        </div>

        <h2 className="text-xl md:text-2xl font-semibold text-[#3B0B59] mb-4 underline">Why Brand Design Matters</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text:lg md:text-xl font-medium text-[#3B0B59]">The First Impression Is Everything</h3>
            <p className="text-md text-[#333] leading-relaxed">
              Your brand is the first thing people notice. A strong design grabs attention and tells your story without saying a word. If your brand doesn’t stand out, it’s easy to be overlooked in a sea of competition.
            </p>
          </div>

          <div>
            <h3 className="text:lg md:text-xl font-medium text-[#3B0B59]">Trust Is Built on Design</h3>
            <p className="text-md text-[#333] leading-relaxed">
              When your brand looks professional, it builds trust. People want to do business with companies they feel are credible and reliable. A polished design tells them you’re serious about what you do and care about how they see you.
            </p>
          </div>

          <div>
            <h3 className="text:lg md:text-xl font-medium text-[#3B0B59]">People Remember How You Make Them Feel</h3>
            <p className="text-md text-[#333] leading-relaxed">
              Great design doesn’t just look good—it makes people feel something. Whether it’s excitement, comfort, or confidence, a powerful brand connects with your audience on a deeper level and makes them want to come back.
            </p>
          </div>

          <div>
            <h3 className="text:lg md:text-xl font-medium text-[#3B0B59]">Consistency Builds Loyalty</h3>
            <p className="text-md text-[#333] leading-relaxed">
              When your brand is consistent everywhere—on your website, social media, packaging—it creates a feeling of unity and reliability. Consistency makes it easier for people to recognize and trust your brand every time they see it.
            </p>
          </div>

          <div>
            <h3 className="text:lg md:text-xl font-medium text-[#3B0B59]">Prepare for the Future</h3>
            <p className="text-md text-[#333] leading-relaxed">
              Your business is going places, and your brand should grow with you. A well-designed brand is flexible and can evolve as your business does. It’s an investment that continues to work for you, year after year.
            </p>
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-semibold text-[#3B0B59] mt-8 mb-4">Brand Design Services Offered</h2>
        <p className="text-md text-[#333] mb-4 leading-relaxed">
          Here’s how expert Brand Design can help your business thrive:
        </p>

        <ul className="list-disc pl-6 space-y-4 text-md text-[#333] mb-8">
          <li><strong>Logo Design:</strong> A unique, custom logo that captures your brand’s personality and speaks to your audience in a way that sticks with them.</li>
          <li><strong>Brand Identity Creation:</strong> A complete visual language for your brand, including color schemes, fonts, and image styles that create a cohesive and memorable identity.</li>
          <li><strong>Packaging Design:</strong> Thoughtful packaging design that reflects your brand’s story and stands out on shelves, making an impact every time your product is seen.</li>
          <li><strong>Website & Digital Design:</strong> A responsive, user-friendly website and digital assets that align with your brand and create a seamless experience for your customers.</li>
          <li><strong>Brand Guidelines:</strong> Comprehensive guidelines that ensure your brand remains consistent across all platforms and touchpoints, from social media to print materials.</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold underline text-[#3B0B59] mt-8 mb-4">What You Gain from Expert Brand Design</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text:lg md:text-xl font-medium text-[#3B0B59]">Greater Recognition</h3>
            <p className="text-md text-[#333] leading-relaxed">
              A unique and memorable brand will make people instantly recognize you. You'll stay top of mind for potential customers.
            </p>
          </div>

          <div>
            <h3 className="text:lg md:text-xl font-medium text-[#3B0B59]">Stronger Emotional Connections</h3>
            <p className="text-md text-[#333] leading-relaxed">
              Great design doesn’t just make people see you—it makes them feel something, building trust and loyalty with every interaction.
            </p>
          </div>

          <div>
            <h3 className="text:lg md:text-xl font-medium text-[#3B0B59]">Stand Out from the Noise</h3>
            <p className="text-md text-[#333] leading-relaxed">
              In a crowded market, your brand can be the one that rises above the rest, making an unforgettable impact.
            </p>
          </div>

          <div>
            <h3 className="text:lg md:text-xl font-medium text-[#3B0B59]">Long-Term Impact</h3>
            <p className="text-md text-[#333] leading-relaxed">
              A well-crafted brand endures. It works for you, creating opportunities for growth and evolution as your business expands.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <h2 className="text-xl md:text-2xl font-semibold text-[#3B0B59] mt-8 mb-4">Your Future Begins with Your Brand</h2>
        <p className="text-md text-[#333] mb-4 leading-relaxed">
          Investing in expert brand design is more than just an aesthetic decision. It’s a powerful step towards creating lasting connections with your audience and leaving a meaningful impact in your industry.
        </p>

        <p className="text-md text-[#333] mb-8 leading-relaxed">
          The right design can transform everything. It's time for your brand to shine.
        </p>

        <div className="text-center mt-8">
                          <button
                            onClick={() => alert("Let’s build a stronger, more aligned team together!")}
                            className="bg-[#4169e1] text-white flex items-center gap-2 p-3 rounded-lg text-md font-medium border-2 border-[#4169e1] hover:bg-transparent hover:text-[#4169e1] transition duration-300 transform hover:scale-105"
                          >
                            <p>Get started</p>
                            <FaArrowCircleRight/>
                          </button>
                        </div>
      </div>
    </div>
  );
}

export default Brand_Design;
