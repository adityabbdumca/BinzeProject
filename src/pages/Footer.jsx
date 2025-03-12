
import React from 'react';

import facebook from '../assets/image/facebook.png';
import youtube from '../assets/image/youtube.png';
import linkedin from '../assets/image/linkedin.png';
import instagram from '../assets/image/instagram.png';
import playStore from '../assets/image/playStore.png';
import appStore from '../assets/image/image.png';


const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="font-bold mb-4">Popular Courses</h2>
            <ul>
              <li className="mb-2">Python for Data Science</li>
              <li className="mb-2">Digital Marketing Masterclass</li>
              <li className="mb-2">Project Management Professional (PMP)</li>
              <li className="mb-2">Graphic Design for Beginners</li>
              <li className="mb-2">Full-Stack Web Development</li>
              <li className="mb-2">Advanced Excel Techniques</li>
              <li className="mb-2">Microsoft Power BI Data Analyst Professional Certificate</li>
              <li className="mb-2">Google UX Design Certificate</li>
              <li className="mb-2">All Courses</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-4">Popular Categories</h2>
            <ul>
              <li className="mb-2">Technology</li>
              <li className="mb-2">IT & Software</li>
              <li className="mb-2">Art & Design</li>
              <li className="mb-2">Marketing</li>
              <li className="mb-2">Health & Fitness</li>
              <li className="mb-2">Personal Development</li>
              <li className="mb-2">Math & Logic</li>
              <li className="mb-2">Language Learning</li>
              <li className="mb-2">All Categories</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-4">About Company</h2>
            <ul>
              <li className="mb-2">About us</li>
              <li className="mb-2">What We Offer</li>
              <li className="mb-2">Careers</li>
              <li className="mb-2">Leadership</li>
              <li className="mb-2">For Enterprise</li>
              <li className="mb-2">Become a Partner</li>
              <li className="mb-2">Press & Media</li>
              <li className="mb-2">Contact Us</li>
              <li className="mb-2">Catalog</li>
              <li className="mb-2">Help & Support</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-4">Community</h2>
            <ul>
              <li className="mb-2">Instructor Community</li>
              <li className="mb-2">Learner Stories</li>
              <li className="mb-2">Forums & Discussions</li>
              <li className="mb-2">Events & Webinars</li>
              <li className="mb-2">Partnerships</li>
              <li className="mb-2">Affiliate Program</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>
            Terms & Conditions Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,...
            <a href="#" className="text-blue-500">Read more</a>
          </p>
        </div>
        <div className="mt-8 flex  space-x-4">
          <a href="#" className="text-blue-500"><i className="fab fa-facebook-f"><img src={facebook} alt="sorry" /></i></a>
          <a href="#" className="text-blue-500"><i className="fab fa-twitter"><img src={youtube} alt="" /></i></a>
          <a href="#" className="text-blue-500"><i className="fab fa-linkedin-in"><img src={linkedin} alt="" /></i></a>
          <a href="#" className="text-pink-500"><i className="fab fa-instagram"><img src={instagram} alt="" /></i></a>
        </div>
        <div className="mt-4 flex space-x-4">
        <a href="#" className="text-blue-500 "><i className="fab fa-playstore"><img src={playStore} alt="" /></i></a>
        <a href="#" className="text-pink-500 "><i className="fab fa-appstore"><img src={appStore} alt="" /></i></a>
          <a href="#" className="flex  space-x-2 text-blue-500">
            <i className="fab fa-google-play"></i>
            <span>Download Our App</span>
          </a>
        </div>
        <div className="mt-4  text-gray-400">
          <p>© 2025 College Drishti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
