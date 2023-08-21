import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./about.css";
import {links} from "../../helpers/links.helpers"

const About = () => {
  return (
    <div>
      <Navbar links={links} />
      <div className="about-container">
        <h2>About Us</h2>
        <p>
          At Mill-Autos, we believe that buying a car should be a fun and
          hassle-free experience. That's why we've made it our mission to
          provide you with a wide selection of high-quality vehicles, affordable
          prices, and exceptional customer service.
        </p>
        <p>
          Whether you're looking for a family SUV, a sporty coupe, or a reliable
          sedan, we've got you covered. Our inventory includes vehicles from all
          the top brands, including Ford, Toyota, Honda, and Chevrolet.
        </p>
        <p>
          But we don't just sell cars - we're here to help you every step of the
          way. Our friendly and knowledgeable sales team is always ready to
          answer your questions and help you find the perfect vehicle for your
          needs and budget. And our finance department can work with you to find
          the right financing options, no matter what your credit score.
        </p>
        <p>
          So why wait? Come visit us today and see for yourself why CarMart is
          the best place to buy a car.
        </p>
      </div>
    </div>
  );
};
export default About;
