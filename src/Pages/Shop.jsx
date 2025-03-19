import React, { useState } from "react";
import { Link } from "react-router-dom";
import BackToTop from "../Components/Atoms/BacktoTop";

const products = [
  {
    id: 1,
    name: "Yoga spice",
    price: 500,
    img: "https://hatha.qodeinteractive.com/wp-content/uploads/2020/08/shop1-List-img.jpg",
  },
  {
    id: 2,
    name: "Pink mat",
    price: 300,
    img: "https://hatha.qodeinteractive.com/wp-content/uploads/2020/08/shop3-list-img.jpg",
  },
  {
    id: 3,
    name: "Yoga Wheel",
    price: 199,
    img: "https://hatha.qodeinteractive.com/wp-content/uploads/2020/08/h1-shopimg-img2-1.jpg",
  },
  {
    id: 4,
    name: "Blue mat",
    price: 300,
    img: "https://hatha.qodeinteractive.com/wp-content/uploads/2020/08/shop9-list-img1.jpg",
  },
  {
    id: 5,
    name: "Yoga Pillow",
    price: 399,
    img: "https://hatha.qodeinteractive.com/wp-content/uploads/2020/08/h1-shopimg-img4.jpg",
  },
  {
    id: 6,
    name: "Yoga Blanket",
    price: 249,
    img: "https://www.yogikuti.com/wp-content/uploads/2016/05/purple.jpg",
  },
  {
    id: 7,
    name: "Yoga strap",
    price: 99,
    img: "https://hatha.qodeinteractive.com/wp-content/uploads/2020/08/shop8-list-img1.jpg",
  },
  {
    id: 8,
    name: "Bumpy Foam Roller",
    price: 449,
    img: "https://www.yogikuti.com/wp-content/uploads/2024/10/1.jpg",
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

      <div className="flex justify-end items-center mt-3 pr-6">
        <button className="bg-[#eddbcc] text-[#8e5d36] p-3 sticky flex justify-center gap-2 font-medium text-xl items-center">
          <span class="material-symbols-outlined">shopping_bag</span>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative text-center group border p-4 rounded-lg shadow-md"
          >
            <img
              src={product.img}
              alt={product.name}
              className="mx-auto rounded-md h-[300px] w-[300px] object-cover"
            />
            <p className="mt-2 text-gray-700 font-semibold text-xl">
              {product.name}
            </p>
            <p className="text-gray-500">&#8377; {product.price}.00</p>
            <Link
              to={`/product/${product.id}`}
              className="absolute inset-0 bg-[#eddbcc] bg-opacity-100 text-[#8E5D36] text-2xl font-semibold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              View More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
