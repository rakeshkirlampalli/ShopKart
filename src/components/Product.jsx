import React, { useEffect, useRef  } from "react";

import star from "../assets/images/Star.svg";
import Group19 from "../assets/images/Group 19.png";
import Arrow1 from "../assets/images/Arrow 1.png";
import Arrow2 from "../assets/images/Arrow 2.png";
import Loading from "./Loading";
import statusCode from "../utils/statusCode";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/apiProductSlice";
const Product = () => {

  const scrollContainerRef = useRef(null);


  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollLeft -= 350;
    }
  }
  
  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollLeft += 350;
    }
  }
  


const dispatch=useDispatch()
const {data,status}=useSelector((state)=>state.products)

console.log(data)

  useEffect(()=>{
dispatch(getProducts())
  },[])


if(status ===statusCode.LOADING){
return <Loading/>
}
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
            <div className="flex items-center gap-3  py-3 ml-1 md:flex-col md:space-y-4">
              <h1 className=" hover:text-2xl cursor-pointer ">Apparel</h1>
              <h1 className="font-Syne hover:text-2xl cursor-pointer">Accessories</h1>
              <h1 className=" hover:text-2xl cursor-pointer">Best sellers</h1>
              <h1 className=" hover:text-2xl cursor-pointer">50% off</h1>
            </div>

            <div className="lg:col-span-3 w-100p h-50p ">
              <div className="absolute md:top-[90px] md:right-[100px] right-[120px] bottom-[8px] ">
                <button className="p-4 border border-none prev" onClick={scrollLeft}>
                  <img src={Arrow2} alt="pre" />
                </button>
                <button className="p-4 border border-none next  " onClick={scrollRight}>
                  <img src={Arrow1} alt="Next" />
                </button>
              </div>
<ul className="flex gap-5  whitespace-nowrap overflow-x-auto scroll" ref={scrollContainerRef} >
  {
    data.map(({ id, description, image, title, price }) => (
      <li key={id} className="md:w-1/3 w-72 ">
        <a href="#" className="relative block overflow-hidden group">
          <img src={image} alt={title} className="md:h-[200px] h-[200px] w-[200px] object-contain ml-15  transition duration-500 group-hover:scale-105" />
          <img src={Group19} className="z-50 absolute md:top-[165px] top-[170px] md:right-[10px] right-[20px]" alt="Group19" />
          <div className="relative pt-3 bg-white ml-5">
            <h2 className="text-2xl font-Syne group-hover:underline group-hover:underline-offset-4">
              {title.slice(0,20)}...
            </h2>
            <p className="mt-2 text-gray-500 break-words whitespace-break-spaces  ">
              {description.slice(0,60)}...
            </p>
            <span className="flex text-xl tracking-wider">${price}</span>
          </div>
        </a>
      </li>
    ))
  }
</ul>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
