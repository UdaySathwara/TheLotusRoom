import React, { useState } from "react";
import { Link } from "react-router-dom";
import BackToTop from "../Components/Atoms/BacktoTop";
import { p, path } from "framer-motion/client";

const products = [
  {
    id: 1,
    name: "Yoga spice",
    price: "500.00",
    img: "https://hatha.qodeinteractive.com/wp-content/uploads/2020/08/shop1-List-img.jpg",
    path: "/detail-yoga-spice",
  },
  {
    id: 2,
    name: "Pink mat",
    price: "300.00",
    img: "https://hatha.qodeinteractive.com/wp-content/uploads/2020/08/shop3-list-img.jpg",
    path: "/detail-pink-mat",
  },
  {
    id: 3,
    name: "Yoga Wheel",
    price: "199.00",
    img: "https://hatha.qodeinteractive.com/wp-content/uploads/2020/08/h1-shopimg-img2-1.jpg",
    path: "/detail-yoga-wheel",
  },
  {
    id: 4,
    name: "Blue mat",
    price: "300.00",
    img: "https://hatha.qodeinteractive.com/wp-content/uploads/2020/08/shop9-list-img1.jpg",
    path: "/detail-blue-mat",
  },
  {
    id: 5,
    name: "Yoga Pillow",
    price: "399.00",
    img: "https://hatha.qodeinteractive.com/wp-content/uploads/2020/08/h1-shopimg-img4.jpg",
    path: "/detail-yoga-pillow",
  },
  {
    id: 6,
    name: "Yoga Blanket",
    price: "249.00",
    img: "https://www.yogikuti.com/wp-content/uploads/2016/05/purple.jpg",
    path: "/detail-yoga-blanket",
  },
  {
    id: 7,
    name: "Yoga strap",
    price: "99.00",
    img: "https://hatha.qodeinteractive.com/wp-content/uploads/2020/08/shop8-list-img1.jpg",
    path: "/detail-yoga-strap",
  },
  {
    id: 8,
    name: "Bumpy Foam Roller",
    price: "449.00",
    img: "https://www.yogikuti.com/wp-content/uploads/2024/10/1.jpg",
    path: "/detail-bumpy-foam-roller",
  },
];

const ProductGrid = () => {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <BackToTop />

      <section
        className="flex flex-col items-center justify-center text-center h-screen w-full bg-cover bg-bottom bg-no-repeat relative p-6"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/6339715/pexels-photo-6339715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-4">
          <h2 className="text-4xl md:text-5xl font-medium text-white">
            Browse Our Shop
          </h2>
          <p className="text-lg md:text-xl text-white mt-4 font-serif">
            Explore our yoga shop for premium mats, props, and essentials to
            support your practice, enhance comfort, and elevate your wellness
            journey
          </p>
        </div>
      </section>

      <div className="bg-[#eddbcc] text-[#8e5d36] sticky flex justify-center gap-2 font-medium text-xl items-center p-3 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee space-x-8">
          <span className="text-lg font-semibold">
            Exclusive Sale! Get 20% OFF on Yoga Accessories! Limited Time Offer!
          </span>
          <span className="text-lg font-semibold">
            Hurry Up! Don’t Miss This Amazing Deal! 🏷️
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center lg:px-12 mt-5 px-4 md:px-8">
        <span className="text-2xl p-3 sticky flex justify-center gap-2 font-medium items-center">
          Products
        </span>
        <button className="bg-[#eddbcc] text-[#8e5d36] p-3 sticky flex justify-center gap-2 font-medium text-xl items-center">
          <span class="material-symbols-outlined">shopping_bag</span>
        </button>
      </div>

      <div className="flex justify-center pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 my-10 px-4 md:px-10 lg:px-14">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative text-center group p-4  w-full max-w-[300px] flex flex-col justify-between mx-auto">
              <div className="relative">
                <img
                  src={product.img}
                  alt={product.name}
                  className="mx-auto rounded-md h-[300px] w-[300px] object-cover hover:scale-105"/>
                <Link
                  to={product.path}
                  className="absolute inset-0 bg-[#eddbcc] bg-opacity-100 text-[#8E5D36] text-xl font-semibold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View More
                </Link>
              </div>
              <p className="mt-2 text-gray-700 font-semibold text-xl">
                {product.name}
              </p>
              <p className="text-orange-500">&#8377; {product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
