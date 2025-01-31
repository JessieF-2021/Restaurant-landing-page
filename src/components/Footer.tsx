import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="container pt-40">
      <div className="grid md:grid-cols-3 gap-16">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">About Us</h2>
          <p className="leading-[1.8]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
            atque repudiandae consectur quibusdem eius dignissimos recusandae,
            tenetur maiores quos veniam deleniti esse.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">The Restaurant</h2>

          <ul className="space-y-2">
            <li>About Us</li>
            <li>Chefs</li>
            <li>Events</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <div className="flex gap-8 text-accent text-2xl pt-16">
          <FaFacebookF />
          <BsTwitterX />
          <FaPinterestP />
          <FaLinkedinIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
