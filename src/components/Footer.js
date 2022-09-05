import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { MdLocalPhone } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-full py-5 px-[24px] md:px-[5%] mt-40 md:mt-20 text-white bg-secondary"
    >
      <div className="flex flex-col justify-between gap-6 md:gap-4 md:flex-row">
        <div className="w-full md:w-1/3">
          <h2 className="mb-3 text-3xl ">Contact Us</h2>
          <p className="flex items-center gap-2 mb-1 text-white">
            <MdLocationPin className="text-current" /> 234a Sheridan Ave, Perth Amboy NJ. 08861.
          </p>
          <a href="tel:+23412289102" className="flex items-center gap-2 mb-1">
            <MdLocalPhone /> 6095158824
          </a>
          <a href="tel:+23412289102" className="flex items-center gap-2 mb-3">
            <MdLocalPhone /> 6096720668
          </a>
          <form className="w-full">
            <input type="text" placeholder="Enter your name" className="w-full px-1 py-3 mb-3" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-1 py-3 mb-3"
            />
            <textarea placeholder="Message" className="w-full px-1 py-3 mb-3" />
            <input
              type="button"
              value="Send Message"
              className="px-8 py-4 transition-all duration-300 rounded cursor-pointer bg-primary hover:bg-secondary hover:border hover:border-white"
            />
          </form>
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="mb-3 text-3xl">View on Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.4153077676883!2d-74.28389558535265!3d40.510310657868004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ca71e4ecef59%3A0xc99f5b550f383f30!2s234%20Sheridan%20St%2C%20Perth%20Amboy%2C%20NJ%2008861%2C%20USA!5e0!3m2!1sen!2sng!4v1662307689713!5m2!1sen!2sng"
            className="inline-block w-full h-[350px]"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="pt-3 mt-6 text-center border-t border-white">
        <p>Copyright &copy; 2022. All Rights Reserved - Church Name.</p>
      </div>
    </footer>
  );
}
