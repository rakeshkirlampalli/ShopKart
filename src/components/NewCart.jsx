import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/apiProductSlice";
const NewCart = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (event) => {
    const { checked, value } = event.target;
    setSelectedCategories(prevState => 
      checked 
      ? [...prevState, value]
      : prevState.filter(category => category !== value)
    );
  };

  const displayedProducts = data?.filter(product => 
    selectedCategories.length === 0 || selectedCategories.includes(product.category)
  ) || [];

 

  

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Product Collection
          </h2>

          <p className="mt-4 max-w-md text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>

   

        <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
          <div className=" space-y-4 block">
            <div>
              <p className="block text-xs font-medium text-gray-700">Filters</p>

              <div className="mt-1 space-y-2">
                <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                    <span className="text-sm font-medium"> CATEGORIES </span>

                    <span className="transition group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="border-t border-gray-200 bg-white">
                    <header className="flex items-center justify-between p-4">
                      <span className="text-sm text-gray-700">
                        {" "}
                        {0 || selectedCategories.length} Selected
                      </span>

                    
                    </header>

                    <ul className="space-y-1 border-t border-gray-200 p-4">
                      <li>
                        <label
                          htmlFor="FilterInStock"
                          className="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="FilterInStock"
                            value="electronics" 
                            onChange={handleCategoryChange} 
                            className="h-5 w-5 rounded border-gray-300"
                          />

                          <span className="text-sm font-medium capitalize text-gray-700">
                            electronics
                          </span>
                        </label>
                      </li>

                      <li>
                        <label
                          htmlFor="FilterPreOrder"
                          className="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="FilterPreOrder"
                            value="women's clothing" 
            onChange={handleCategoryChange} 
                            className="h-5 w-5 rounded border-gray-300"
                          />

                          <span className="text-sm font-medium text-gray-700">
                            Women's clothing
                          </span>
                        </label>
                      </li>
                      <li>
                        <label
                          htmlFor="FilterPreOrder"
                          className="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="FilterPreOrder"
                            value="men's clothing" 
                            onChange={handleCategoryChange} 
                            
                            className="h-5 w-5 rounded border-gray-300"
                          />

                          <span className="text-sm font-medium text-gray-700">
                            men's clothing
                          </span>
                        </label>
                      </li>

                      <li>
                        <label
                          htmlFor="FilterOutOfStock"
                          className="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="FilterOutOfStock"
                            value="jewelery" 
                            onChange={handleCategoryChange} 
                            
                            className="h-5 w-5 rounded border-gray-300"
                          />

                          <span className="text-sm capitalize font-medium text-gray-700">
                            jewelery
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <ul className="grid gap-4 grid-cols-1  lg:grid-cols-3 ">
              {displayedProducts?.map((product) => {
                const { id, image, title, price, category } = product;
                return (
                  <li key={id} className=" max-h-[350px] m-a">
                    <a href="#" className="border group block overflow-hidden">
                      <img
                        src={image}
                        alt={title}
                        className="h-[350px] max-h-[250px] max-w-fit m-auto w-full p-3 object-center object-contain transition duration-500 group-hover:scale-105 sm:h-[450px]"
                      />

                      <div className="relative bg-white pt-3 ">
                        <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4 overflow-hidden px-1 text-ellipsis whitespace-nowrap">
                          {title}
                        </h3>

                        <p className="mt-2">
                          <span className="sr-only"> Regular Price </span>

                          <span className="tracking-wider text-gray-900">
                           $ {price}
                          </span>
                        </p>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewCart;
