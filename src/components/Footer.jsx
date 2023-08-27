import React from "react";
import footer from "../assets/images/footer.svg";
const Footer = () => {
  return (
    <section className="text-gray-600 body-font  w-auto relative">
      <div className="absolute inset-0 bg-gray-300">
        <img src={footer} alt="" />
      </div>
    </section>
  );
};

export default Footer;
