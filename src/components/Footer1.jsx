import React from "react";
import footer from "../assets/images/footer.svg";
import { useState, useEffect } from "react";
const Footer1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    setErrors({});
  }, [formData]);
  const validate = () => {
    let tempErrors = {};
    if (!formData.name) {
      tempErrors.name = "Name is required.";
    }
    if (!formData.email) {
      tempErrors.email = "Email is required.";
    } else if (
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)
    ) {
      tempErrors.email = "Invalid email format.";
    }
    if (!formData.password) {
      tempErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      tempErrors.password = "Password must be at least 8 characters.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      //console data here
      console.log("Final Form Data Sent:", formData);
      alert("Details Sent console data..sent");
    }
  };
  return (
    // <section className="bg-hero-pattern">
    <div>
      <section
        style={{ backgroundImage: `url(${footer})` }}
        className="text-white relative h-[520px] w-auto"
      >
        <div className="container relative px-6 py-4 mx-auto lg:py-5">
          <div className="mt-5 lg:flex">
            <div className="ml-10 lg:w-1/2">
              <h1 className="mt-4 text-[#626262] mt-10 md:ml-10 ml-4 md:text-2xl font-work-sans">
                Newslleter
              </h1>
              <h4 className=" text-md font-medium md:ml-10 ml-4 text-[#626262] capitalize lg:text-lg font-work-sans ">
                Get news about articles and updates <br /> in your inbox.
              </h4>
            </div>
            <div className="mt-8 lg:w-1/2 lg:mt-0 ">
              <form
                className="flex flex-col items-center justify-center w-full pt-5 pr-10 lg:max-w-xl"
                onSubmit={handleSubmit}
              >
                <div className="flex items-center border-b border-gray-300 w-88p">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full px-2 py-3 text-gray-700 uppercase bg-transparent border-none  focus:outline-none"
                    placeholder="NAME"
                    required
                  />
                  {errors.name && (
                    <div style={{ color: "red" }}>{errors.name}</div>
                  )}
                </div>
                <div className="flex items-center border-b border-gray-300 w-88p">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full px-2 py-3 text-gray-700 uppercase bg-transparent border-none  focus:outline-none"
                    placeholder="EMAIL"
                    required
                  />
                  {errors.email && (
                    <div style={{ color: "red" }}>{errors.email}</div>
                  )}
                </div>
                <div className="flex items-center border-b border-gray-300 w-88p">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full px-2 py-3 text-gray-700 uppercase bg-transparent border-none  focus:outline-none"
                    placeholder="PASSWORD"
                    required
                    minLength="8"
                  />
                  {errors.password && (
                    <div style={{ color: "red" }}>{errors.password}</div>
                  )}
                </div>
                <div className="mt-8 md:flex md:items-center absolute md:right-[55px] md:bottom-[100px] bottom-10 right-20 z-50">
                  <button className="md:w-40 md:h-40 w-20 h-20 rounded-full border-2 text-xl uppercase text-[#F07E15] border-[#F07E15]">
                    send
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="pt-10 mt-5 ml-8 font-extrabold sm:flex sm:items-center  font-Syne">
            <h1 className="text-5xl md:text-9xl flex-start">
              GET <br />
              IN <br className="md:hidden" />
              TOUCH
            </h1>
          </div>
        </div>
      </section>
      <div className="w-auto h-[50px] bg-[#1A1A1A] text-white text-center pt-3 font-Poppins ">
        @Copyright 2022 All Right Reserved By SG
      </div>
    </div>
  );
};

export default Footer1;
