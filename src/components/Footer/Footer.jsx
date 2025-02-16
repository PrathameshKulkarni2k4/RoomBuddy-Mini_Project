import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">


          <div>
            <h1 className='text-2xl font-bold ml-3'><span className='text-red-500'>R</span>oom<span className='text-red-500'>B</span>uddy</h1>
          </div>


          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-blue-300"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-pink-400"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-blue-500"><FaLinkedin size={20} /></a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm mt-4 border-t border-gray-700 pt-2">
          &copy; {new Date().getFullYear()} RoomBuddy. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
