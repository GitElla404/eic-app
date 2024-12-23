import { useEffect, useState } from 'react';
import HomeImg from '../images/homeimg.png';
import Email from '../components/Email';

const Homee = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInView(true);
    }, 100); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-500 py-20 px-8 md:px-24 transition-opacity duration-10 ease-in-out">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div className="text-center md:text-left text-white">
          <h1
            className={`text-4xl md:text-6xl font-serif font-bold leading-tight mb-6 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            Transforming Talents into Assets
          </h1>
          <p
            className={`text-lg md:text-xl text-gray-200 mb-8 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Empowering you with AI-powered systems to train, earn, and automate for success.
          </p>

          <p
            className={`text-[12px] text-gray-300 italic ml-10 w-[80%] text-center transition-all duration-700 md:text-base ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Join our newsletter and stay updated with the latest insights, tips, and exclusive offers!
          </p>

          <div
            className={`mt-6 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <Email />
          </div>
        </div>

        <div
          className={`flex justify-center md:justify-end transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <img
            src={HomeImg}
            alt="Business consulting and AI-powered systems"
            className="w-[80%] max-w-sm rounded-lg shadow-xl object-cover transition-transform transform hover:scale-105 md:w-full md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Homee;
