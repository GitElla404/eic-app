import Email from '../components/Email.jsx'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {

  return (
    <footer className="text-[#f7f9fe] bg-[#020511] py-16 px-6 animate-fadeIn" id='contact'>
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="md:text-3xl text-2xl font-[Metrophobic] font-semibold mb-4 text-[#254ce5] animate-slideInUp">Join Our Newsletter</h2>
        <p className="md:text-lg text-sm mb-6 text-[#f7f9fe] animate-slideInUp">Be the first to know when we launch. Enter your email below.</p>

<div>
        <Email/>
        </div>
        <div className="flex justify-center space-x-6 m-7 animate-fadeInUp md:mb-8">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#254ce5] hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12">
            <FaFacebook className="text-2xl md:text-3xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:white transition-all duration-300 transform hover:scale-110 hover:rotate-12">
            <FaTwitter className="text-2xl md:text-3xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#ea53e8] hover:white transition-all duration-300 transform hover:scale-110 hover:rotate-12">
            <FaInstagram className="text-2xl md:text-3xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#254ce5] hover:white transition-all duration-300 transform hover:scale-110 hover:rotate-12">
            <FaLinkedin className="text-2xl md:text-3xl" />
          </a>
        </div>

        <p className="text-lg text-[#020511]">© 2024 EdenisConsulting. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Contact;
