import React from "react";
import Product1 from "../assets/images/product1.svg";
import Product2 from "../assets/images/product2.svg";
import Product3 from "../assets/images/product3.svg";
import star from "../assets/images/Star.svg";
import Group19 from "../assets/images/Group 19.png";
import Arrow1 from "../assets/images/Arrow 1.png";
import Arrow2 from "../assets/images/Arrow 2.png";
const Product = () => {
  return (
    <div className="h-[680px] w-auto relative">
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header className="ml-2">
            <h2 className="text-4xl font-Syne text-[#000000] sm:text-8xl">
              New products
            </h2>
            <img
              src={star}
              alt=""
              className="absolute md:top-[149px] top-[78px] md:left-[54px] left-[16px] "
            />
            <hr className="md:w-[590px] w-[380px] mt-4 border-t border-[#161615]" />
          </header>

          <div className="mt-4 ml-1 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
            <div className="flex items-center gap-3 py-3 ml-1 md:flex-col md:space-y-4">
              <h1 className="font-work-sans">Apparel</h1>
              <h1 className="text-2xl font-Syne">Accessories</h1>
              <h1 className="font-work-sans">Best sellers</h1>
              <h1 className="font-work-sans">50% off</h1>
            </div>

            <div className="lg:col-span-3 w-100p h-50p">
              <div className="absolute md:top-[90px] md:right-[100px] right-[120px] bottom-[8px] ">
                <button className="p-4 border border-none prev">
                  <img src={Arrow2} alt="pre" />
                </button>
                <button className="p-4 border border-none next ">
                  <img src={Arrow1} alt="Next" />
                </button>
              </div>
              <ul className="grid gap-4 sm:grid-cols-1 lg:grid-cols-3 ml-1">
                <li>
                  <a href="#" className="relative block overflow-hidden group">
                    <img
                      src={Product2}
                      alt=""
                      className="md:h-200px md:w-full ml-10 object-cover transition duration-500 group-hover:scale-105 sm:h-[260px]"
                    />
                    <img
                      src={Group19}
                      className="z-50 absolute md:top-[216px] top-[278px] md:right-[0px] right-[20px] "
                      alt="Group19"
                    />
                    <div className="relative pt-3 bg-white ml-5">
                      <h2 className="text-2xl font-Syne group-hover:underline group-hover:underline-offset-4">
                        FLORIDA JACKET
                      </h2>
                      <p className="mt-2 text-gray-500 font-work-sans">
                        Suffered alteration in some form, bysuffalterattion
                        in some forme, byinjected humor, or randomised{" "}
                      </p>
                      <span className="flex text-xl tracking-wider">
                        {" "}
                        $ 100
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative hidden overflow-hidden md:block group"
                  >
                    <img
                      src={Product1}
                      alt=""
                      className="h-[200px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[260px]"
                    />
                    <img
                      src={Group19}
                      className="z-50 absolute top-[216px] right-[0px] "
                      alt="Group19"
                    />
                    <div className="relative pt-3 bg-white">
                      <h2 className="md:text-2xl font-Syne group-hover:underline group-hover:underline-offset-4">
                        FLORIDA JACKET
                      </h2>
                      <p className="mt-2 text-gray-500 font-work-sans">
                        Suffered alteration in some form, bysuffalterattion in
                        some forme, byinjected humor, or randomised{" "}
                      </p>
                      <span className="flex text-xl tracking-wider">
                        {" "}
                        $ 100
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative hidden overflow-hidden md:block group"
                  >
                    <img
                      src={Product3}
                      alt=""
                      className="h-[200px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[260px]"
                    />
                    <img
                      src={Group19}
                      className="z-50 absolute top-[216px] right-[0px] "
                      alt="Group19"
                    />
                    <div className="relative pt-3 bg-white">
                      <h2 className="text-2xl font-Syne group-hover:underline group-hover:underline-offset-4">
                        FLORIDA JACKET
                      </h2>
                      <p className="mt-2 text-gray-500 font-work-sans">
                        Suffered alteration in some form, bysuffalterattion in
                        some forme, byinjected humor, or randomised{" "}
                      </p>
                      <span className="flex text-xl tracking-wider">
                        {" "}
                        $ 100
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
