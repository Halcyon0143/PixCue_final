
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="material-container">
        <div className="material-grid">
          <div className="col-span-4 md:col-span-4">
            <div className="mb-8">
              <h4 className="text-2xl font-bold mb-4">PixCue</h4>
              <p className="text-gray-300 mb-4">
                Elevating brands through strategic social media management and premium content creation.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-span-4 md:col-span-2">
            <div className="mb-8">
              <h6 className="text-lg font-medium mb-4">Services</h6>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Social Media Management</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Content Creation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Influencer Marketing</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Brand Strategy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Analytics & Reporting</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Paid Social Advertising</a></li>
              </ul>
            </div>
          </div>
          
          <div className="col-span-4 md:col-span-2">
            <div className="mb-8">
              <h6 className="text-lg font-medium mb-4">Company</h6>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="col-span-4 md:col-span-4">
            <div className="mb-8">
              <h6 className="text-lg font-medium mb-4">Subscribe to Our Newsletter</h6>
              <p className="text-gray-300 mb-4">
                Get the latest trends and updates in social media marketing straight to your inbox.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 rounded-l focus:outline-none text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-r font-medium transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} PixCue. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
