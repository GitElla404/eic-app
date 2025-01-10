import Email from '../components/Email.jsx'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {

  return (
    <footer className="text-white bg-[#1c1f29] py-16 px-6 animate-fadeIn" id='contact'>
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="md:text-3xl text-2xl font-[Metrophobic] font-semibold mb-4 text-[#3b82f6] animate-slideInUp">Join Our Newsletter</h2>
        <p className="md:text-lg text-sm mb-6 text-[#d1d5db] animate-slideInUp">Be the first to know when we launch. Enter your email below.</p>

        <div>
          <Email />
        </div>
        <div className="flex justify-center space-x-6 m-7 animate-fadeInUp md:mb-8">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#3b82f6] hover:text-[#2563eb] transition-all duration-300 transform hover:scale-110 hover:rotate-12">
            <FaFacebook className="text-2xl md:text-3xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#1d9bf0] hover:text-[#0e76a8] transition-all duration-300 transform hover:scale-110 hover:rotate-12">
            <FaTwitter className="text-2xl md:text-3xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#d946ef] hover:text-[#9333ea] transition-all duration-300 transform hover:scale-110 hover:rotate-12">
            <FaInstagram className="text-2xl md:text-3xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#0a66c2] hover:text-[#004182] transition-all duration-300 transform hover:scale-110 hover:rotate-12">
            <FaLinkedin className="text-2xl md:text-3xl" />
          </a>
        </div>

        <p className="text-lg text-[#f1f5f9]">© 2024 EdenisConsulting. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Contact;
