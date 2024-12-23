import React, { useState } from 'react';
import { motion } from 'motion/react';

const Services = () => {
  const [selectedTab, setSelectedTab] = useState('services');

  // Services List
  const services = [
    {
      id:1,
      icon: '👥', 
      title: 'Talent/HR Management',
      description: 'We optimize recruitment and employee development to build a high-performing team.',
    },
    {
      id:2,
      icon: '🎓', 
      title: 'Coaching Management',
      description: 'Our coaching solutions enhance leadership and team performance for business growth.',
    },
    {
      id:3,
      icon: '✏️', 
      title: 'Corporate Brand Design',
      description: 'We create strong, memorable brand identities that resonate with your audience.',
    },
    {id:4,
      icon: '⚙️', 
      title: 'Tech/ AI Automation',
      description: 'We streamline operations and boost efficiency using cutting-edge AI and automation.',
    },
    {id:5,
      icon: '💻',
      title: 'Digital Media Advertising',
      description: 'We design targeted digital ad campaigns to increase brand visibility and drive conversions.',
    },
    {id:6,
      icon: '📊', 
      title: 'Sales Intelligence',
      description: 'Our sales intelligence solutions provide insights to optimize lead generation and sales strategies.',
    },
    {id:7,
      icon: '📈',
      title: 'Data Analysis',
      description: 'We turn your business data into actionable insights for smarter decision-making.',
    },
    {id:8,
      icon: '🔍',
      title: 'Internal Auditing',
      description: 'We conduct audits to ensure compliance, identify risks, and improve operational efficiency.',
    },
  ];

  // Products List
  const products = [
    {id:1,
      icon: '📚',
      title: 'School ERP Deployment',
      description: 'Streamline school management with our efficient ERP system for student and administrative tasks.',
    },
    {id:2,
      icon: '🖱️',
      title: 'Clicker.cc',
      description: 'Track user engagement and optimize campaigns with Clicker.cc’s click tracking tool.',
    },
    {id:3,
      icon: '📋',
      title: 'Orza',
      description: 'Simplify business operations with Orza’s project management and collaboration tools.',
    },
    {id:4,
      icon: '🐝',
      title: 'Your Hive',
      description: 'Boost team productivity and collaboration with Your Hive’s intuitive platform.',
    },
  ];


const renderItems = () => {
  const items = selectedTab === 'services' ? services : products;

  return items.map((item) => (
    <motion.li
      key={item.id}
      layoutId={item.id}  
      className="transition-all list-none"
    >
      <div className="bg-white shadow-lg border cursor-pointer border-gray-200 p-6 rounded-lg transform transition-all hover:scale-105 hover:shadow-xl">
        <div className="text-2xl mb-4 text-center md:text-4xl">{item.icon}</div>
        <h3 className="text-md font-semibold text-center md:text-xl">{item.title}</h3>
        <p className="mt-2 text-[#020511] text-center text-sm md:text-base">{item.description}</p>
      </div>
    </motion.li>
  ));
};


  return (
    <div className="bg-[#f7f9fe]" id='services'>

      <section className="py-8 bg-gradient-to-r from-[#254ce5] via-[#d57eef] to-[#ea53e8] text-center">
        <h1 className="text-4xl font-[Metrophobic] text-white mb-8 animate-slideInUp">Our Offerings</h1>
        <div className="inline-flex bg-white rounded-lg overflow-hidden shadow-lg">
          <button
            onClick={() => setSelectedTab('services')}
            className={`px-6 py-3 text-lg font-semibold transition-all duration-300 transform ${
              selectedTab === 'services' ? 'bg-[#254ce5] text-white' : 'text-[#254ce5]'
            } hover:bg-[#3b4d96] hover:text-white hover:scale-110`}
          >
            Services
          </button>
          <button
            onClick={() => setSelectedTab('products')}
            className={`px-6 py-3 text-lg font-semibold transition-all duration-300 transform ${
              selectedTab === 'products' ? 'bg-[#254ce5] text-white' : 'text-[#254ce5]'
            } hover:bg-[#3b4d96] hover:text-white hover:scale-110`}
          >
            Products
          </button>
        </div>
      </section>

      <section className="p-9 bg-[#f7f9fe] md:py-16 md:px-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {renderItems()}
        </div>
      </section>
    </div>
  );
};

export default Services;
