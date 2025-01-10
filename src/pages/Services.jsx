import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Services = () => {

  const [selectedTab, setSelectedTab] = useState('services');

  // Services List
  const services = [
    {
      id:1,
      icon: '👥', 
      title: 'Talent/HR Management',
      description: 'Optimize recruitment and employee development to create a high-performing, engaged team.',
      link: 'service/talent_management',
      cta: 'Discover How'
    },
    {
      id:2,
      icon: '🎓', 
      title: 'Coaching Management',
      description: 'Enhance leadership and team performance to drive business growth and success.',
      link: 'service/coaching_management',
      cta: 'Explore Further'
    },
    {
      id:3,
      icon: '✏️', 
      title: 'Corporate Brand Design',
      description: 'Create a brand that stands out and builds a meaningful connection with your audience.',
      link: 'service/brand_design',
      cta: 'Learn More'
    },
    {id:4,
      icon: '⚙️', 
      title: 'AI Automation',
      description: 'Boost efficiency and streamline your operations, saving time and reducing costs with smart automation.',
      link: 'service/ai_automation',
      cta: 'Get Started'
    },
    {id:5,
      icon: '💻',
      title: 'Digital Media Advertising',
      description: 'Amplify your brand’s presence and drive real conversions with targeted digital advertising.',
      link: 'service/digital_media',
      cta: 'Find Out More'
    },
    {id:6,
      icon: '📊', 
      title: 'Sales Intelligence',
      description: 'Gain valuable insights to refine your sales strategy and turn leads into loyal customers.',
      link: 'service/sales_intelligence',
      cta: 'See How It Works'
    },
    {id:7,
      icon: '📈',
      title: 'Data Analysis',
      description: 'Transform your data into powerful insights that guide smarter, more informed decisions.',
      link: 'service/data_analysis',
      cta: 'Learn More'
    },
    {id:8,
      icon: '🔍',
      title: 'Internal Auditing',
      description: 'Ensure your business stays compliant, reduces risks, and operates more efficiently with thorough audits.',
      link: 'service/internal_auditing',
      cta: 'Discover the Benefits'
    },
  ];

  // Products List
  const products = [
    {id:1,
      icon: '📚',
      title: 'School ERP Deployment',
      description: `Imagine a school where everything is organized, efficient, and seamless. By deploying an effective ERP system, you can simplify every aspect of school management—from tracking student progress to managing attendance, grades, and administrative tasks. The result? Less time spent on paperwork, fewer errors, and a smoother experience for both staff and students. <br/><br/> You can create an environment that fosters learning and growth, while improving the overall efficiency of your school operations.<br/><br/>Focus more on education and less on the logistics.`,
      cta: 'Get Started'
    },
    {id:2,
      icon: '🖱️',
      title: 'Clicker.cc',
      description: 'Engagement is key to building lasting relationships with your audience, but understanding what truly captures their attention can be tricky. With Clicker.cc, you get a powerful click tracking tool that lets you track exactly how users interact with your campaigns. <br/><br/> It empowers you to understand what works, optimize your content in real time, and make data-driven decisions that increase engagement, boost conversions, and ultimately help you create stronger, more meaningful connections with your audience.<br/><br/> Every click tells a story—now, you can read it and act on it.',
    cta: 'Book a Session'
    },
    {id:3,
      icon: '📋',
      title: 'Orza',
      description: "Running a business means juggling multiple tasks and keeping everything in sync. Orza simplifies this by bringing all your project management and team collaboration into one easy-to-use platform. <br/><br/> Whether you're tracking deadlines, assigning tasks, or communicating with your team, Orza helps you streamline operations, reduce confusion, and make sure everyone is on the same page. It empowers your team to work more effectively, ensuring projects are completed on time and to the highest standard.<br/><br/>The result is a more productive, happier team and a more successful business.",
    cta: 'Discover More'
    },
    {id:4,
      icon: '🐝',
      title: 'Your Hive',
      description: "Imagine a workplace where collaboration flows effortlessly, and every team member is empowered to contribute their best work. With Your Hive, you create that environment. <br/><br/> This intuitive platform enhances communication, simplifies workflow management, and boosts overall productivity. By breaking down silos and bringing everyone together in one unified space, Your Hive transforms the way your team works, making it easier to collaborate, solve problems, and innovate.<br/><br/>The result? A motivated, efficient team that moves the business forward with confidence and creativity.",
    cta: 'Find Out More'
    },
  ];

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };


  const renderItems = () => {
    const items = selectedTab === 'services' ? services : products;
  
    return items.map((item) => (
      <motion.li
        key={item.id}
        layoutId={item.id}
        className="transition-all list-none"
      >
        <div
          className="bg-white shadow-lg border cursor-pointer border-gray-200 px-4 pt-4 pb-2 rounded-lg transform transition-all hover:scale-105 hover:shadow-xl"
          style={{ height: '100%', minWidth: '100%', maxWidth: '100%' }}
        >
          <div className="text-4xl mb-4 text-center">{item.icon}</div>
          <h3 className="text-md font-semibold text-center text-[#020511] md:text-xl">{item.title}</h3>
          <p
            className="mt-2 text-[#020511] text-sm md:text-sm"
            dangerouslySetInnerHTML={{ __html: item.description }} 
          ></p>
          {selectedTab === 'services' && (
            <div className="flex justify-center mt-5">
              <Link
                to={item.link ? item.link : '#'} // add a fallback route
                className="mt-2 bg-white text-[#3B0B59] border-2 border-[#3B0B59] font-semibold p-1 text-sm rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-[#3B0B59] hover:text-white hover:border-[#8b0c5a] focus:outline-none focus:ring-2"
                aria-label="Start now"
              >
                {item.cta}
              </Link>
            </div>
          )}

{selectedTab === 'products' && (
            <div className="mt-3 flex justify-center">
            <Link
              to={'#'}
              className="mt-2 text-[#3B0B59] font-semibold text-sm border-b-2 border-[#3B0B59] flex items-center space-x-2 transition duration-300 ease-in-out transform hover:border-[#8b0c5a]"
              aria-label="Start now"
            >
              <span>{item.cta}</span>
              <FaArrowRight className="text-[#3B0B59] transition-transform transform hover:translate-x-1" /> 
            </Link>
          </div>
          )}
        </div>
      </motion.li>
    ));
  };
  
  return (
    <div className="bg-[#f7f9fe]">
      <section className="py-8 bg-gradient-to-r from-[#3B0B59] via-[#8b0c5a] to-[#4169e1] text-center">
    <h1 className="text-2xl md:text-4xl font-[Poppins, sans-serif] text-white mb-4 md:mb-8 animate-slideInUp">Our Offerings</h1>
    <div className="inline-flex bg-white rounded-lg overflow-hidden shadow-lg">
        <button
            onClick={() => handleTabChange('services')}
            className={`p-3 text-sm md:px-6 md:py-3 md:text-lg font-semibold transition-all duration-300 transform ${
              selectedTab === 'services' ? 'bg-[#3B0B59] text-white' : 'text-[#3B0B59]'
            } hover:bg-[#8b0c5a] hover:text-white hover:scale-110`}
            id="services"
        >
            Services
        </button>
        <button
            onClick={() => handleTabChange('products')}
            className={`p-3 text-sm md:px-6 md:py-3 md:text-lg font-semibold transition-all duration-300 transform ${
              selectedTab === 'products' ? 'bg-[#3B0B59] text-white' : 'text-[#3B0B59]'
            } hover:bg-[#8b0c5a] hover:text-white hover:scale-110`}
            id="products"
        >
            Products
        </button>
    </div>
</section>

      <section className="p-9 bg-[#f7f9fe] md:py-16 md:px-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {renderItems()}
        </div>
      </section>
    </div>
  );
};

export default Services;
