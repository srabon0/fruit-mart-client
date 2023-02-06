import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import loadFruitData from "../../../redux/thunk/fetchFruits";
import Product from "../Product/Product";
import picture from "../../../assests/nodata.jpg";

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const [sortfactor, setSortFactor] = useState("");
  useEffect(() => {
    dispatch(loadFruitData());
  }, [dispatch]);
  const fruitState = useSelector((state) => state); //only frut state
  console.log("Sort factor", sortfactor);
  const fruits = fruitState.fruitState.fruits;

  let content;
  if (keyword) {
    content = fruits
      ?.filter((v) => {
        if (v.name.includes(keyword)) {
          return v.name.includes(keyword);
        }
      })
      ?.map((f) => <Product key={f._id} fruit={f}></Product>);
  } else {
    if (!keyword && sortfactor === "desc") {
      content = fruits
        .map((f) => <Product key={f._id} fruit={f}></Product>)
        .reverse();
    } else {
      content = fruits?.map((fruit) => (
        <Product key={fruit._id} fruit={fruit}></Product>
      ));
    }
  }

  return (
    <section>
      <div className="max-w-max px-2 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Fruit <span className="text-orange-400"> Products</span>
          </h2>

          <p className="max-w-md mt-4 text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>

        <div className="block mt-8 lg:hidden">
          <button className="flex items-center gap-2 pb-1 text-gray-900 transition border-b border-gray-400 cursor-pointer hover:border-gray-600">
            <span className="text-sm font-medium"> Filters & Sorting </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
          <div className="hidden space-y-4 lg:block">
            <div>
              <label
                for="SortBy"
                className="block text-xs font-medium text-gray-700"
              >
                Sort By
              </label>

              <select
                onChange={(e) => setSortFactor(e.target.value)}
                id="SortBy"
                className="mt-1 text-sm border-gray-300 rounded"
              >
                <option selected disabled>
                  Sort By
                </option>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
              </select>
            </div>

            <div>
              <p className="block text-xs font-medium text-gray-700">Filters</p>

              <div className="mt-1 space-y-2">
                <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer">
                    <span className="text-sm font-medium"> Availability </span>

                    <span className="transition group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="bg-white border-t border-gray-200">
                    <header className="flex items-center justify-between p-4">
                      <span className="text-sm text-gray-700"> 0 Selected </span>

                      <button
                        type="button"
                        className="text-sm text-gray-900 underline underline-offset-4"
                      >
                        Reset
                      </button>
                    </header>

                    <ul className="p-4 space-y-1 border-t border-gray-200">
                      <li>
                        <label
                          for="FilterInStock"
                          className="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="FilterInStock"
                            className="w-5 h-5 border-gray-300 rounded"
                          />

                          <span className="text-sm font-medium text-gray-700">
                            In Stock (5+)
                          </span>
                        </label>
                      </li>

                      {/* <li>
                        <label
                          for="FilterPreOrder"
                          className="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="FilterPreOrder"
                            className="w-5 h-5 border-gray-300 rounded"
                          />

                          <span className="text-sm font-medium text-gray-700">
                            Pre Order (3+)
                          </span>
                        </label>
                      </li> */}

                      {/* <li>
                        <label
                          for="FilterOutOfStock"
                          className="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="FilterOutOfStock"
                            className="w-5 h-5 border-gray-300 rounded"
                          />

                          <span className="text-sm font-medium text-gray-700">
                            Out of Stock (10+)
                          </span>
                        </label>
                      </li> */}
                    </ul>
                  </div>
                </details>

                <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer">
                    <span className="text-sm font-medium"> Price </span>

                    <span className="transition group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="bg-white border-t border-gray-200">
                    <header className="flex items-center justify-between p-4">
                      <span className="text-sm text-gray-700">
                        The highest price is $600
                      </span>

                      <button
                        type="button"
                        className="text-sm text-gray-900 underline underline-offset-4"
                      >
                        Reset
                      </button>
                    </header>

                    <div className="p-4 border-t border-gray-200">
                      <div className="flex justify-between gap-4">
                        <label
                          for="FilterPriceFrom"
                          className="flex items-center gap-2"
                        >
                          <span className="text-sm text-gray-600">$</span>

                          <input
                            type="number"
                            id="FilterPriceFrom"
                            placeholder="From"
                            className="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
                          />
                        </label>

                        <label
                          for="FilterPriceTo"
                          className="flex items-center gap-2"
                        >
                          <span className="text-sm text-gray-600">$</span>

                          <input
                            type="number"
                            id="FilterPriceTo"
                            placeholder="To"
                            className="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </details>
                <div className="bg-white border-t border-gray-200">
                  <div className="border border-gray-200">
                    <input
                      className="form-control p-4 space-y-1 w-full"
                      placeholder="search here"
                      type="text"
                      onKeyUp={(e) => setKeyword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {content.length ? (
            <div className="lg:col-span-3">
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {/* {fruits.map((fruit) => (
                <Product key={fruit._id} fruit={fruit}></Product>
              ))} */}
                {content}
              </ul>
            </div>
          ) : (
            <div className="min-w-max">
              <div className="h-[30vh] w-full">
                <img src={picture} className="max-w-md object-cover" alt="" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
