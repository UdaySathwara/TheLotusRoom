import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import BackToTop from './BackToTop';

const DetailYogaSpice = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [mainImage, setMainImage] = useState(
    "https://hatha.qodeinteractive.com/wp-content/uploads/2020/08/shop1-List-img.jpg"
  );

  const thumbnails = [
    "https://hatha.qodeinteractive.com/wp-content/uploads/2020/08/shop1-List-img.jpg",
    "https://hatha.qodeinteractive.com/wp-content/uploads/2020/08/Shop1-List-img1.jpg",
    "https://hatha.qodeinteractive.com/wp-content/uploads/2020/08/Shop1-List-img2.jpg",
  ];

  const products = [
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
  ];

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const navigate = useNavigate();

  return (
      <div className="container mx-auto bg-grey-50 m-6 pb-10">
        <BackToTop />
        <div className="flex items-center justify-between px-10">
          <span
            className="material-symbols-outlined text-xl cursor-pointer"
            onClick={() => navigate(-1)}
          >
            arrow_back_ios
          </span>
          <h2 className="text-xl font-semibold text-center flex-1">
            Product Detail
          </h2>
          <button className="bg-[#eddbcc] text-[#8e5d36] p-3 sticky flex justify-center gap-2 font-medium text-xl items-center">
            <span className="material-symbols-outlined">shopping_bag</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center w-full mt-10 px-6 md:px-10 lg:px-20 gap-8">
          {/* Left Column: Product Images */}
          <div className="flex flex-col justify-center items-center min-w-96">
            <img
              src={mainImage}
              alt="Main product"
              className="mb-4 w-full max-w-xs h-[300px] object-cover"
            />
            <div className="flex space-x-2">
              {thumbnails.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-16 h-16 cursor-pointer border border-gray-300 hover:border-orange-600"
                  onClick={() => setMainImage(src)}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Product Details */}
          <div className="lg:w-1/2 lg:pr-16 text-center lg:text-left flex flex-col p-4">
            <h1 className="text-3xl font-medium mb-2 text-[#8e5d36]">
              Yoga Spice
            </h1>
            <div className="text-2xl text-orange-600 font-medium mb-4">
              ₹ 500.00
            </div>
            <p className="mb-4 text-base leading-relaxed">
              A warming blend of Ayurvedic herbs and spices to enhance
              relaxation and balance. Perfect for teas, lattes, or wellness
              rituals.
            </p>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:gap-4 justify-center lg:justify-start mb-4">
              <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                <button
                  className="bg-gray-50 p-2 text-lg font-bold hover:bg-gray-300"
                  onClick={decreaseQuantity}
                >
                  −
                </button>
                <input
                  type="text"
                  className="w-10 text-center border-x border-gray-300"
                  value={quantity}
                  readOnly
                />
                <button
                  className="bg-gray-50 p-2 text-lg font-bold hover:bg-gray-300"
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </div>

              <button className="bg-[#8e5d36] text-white px-5 py-2 rounded md:w-auto">
                ADD TO CART
              </button>
            </div>

            {/* Product Info */}
            <div className="mb-4 flex flex-col space-y-1 text-base">
              <p>
                <strong>In Stock :</strong> 101
              </p>
              <p className="">
                <strong>Category : </strong>
                Yoga & Meditation Support, Health & Wellness Supplements
              </p>
              <p>
                <strong>Tag : </strong>
                Relaxation & Balance, Natural Ingredients, Holistic Healing
              </p>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-10 lg:px-36 md:px-10 px-6">
          <div className="border-b border-gray-300">
            <ul className="flex justify-center items-center space-x-8">
              {["Description", "Additional Information"].map((tab, index) => (
                <li
                  key={index}
                  className={`py-2 px-4 cursor-pointer ${
                    activeTab === index ? "border-b-2 border-orange-600" : ""
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 border border-gray-300 p-4 flex justify-center items-center ">
            {activeTab === 0 ? (
              <p>
                Yoga Spice is a carefully curated blend of Ayurvedic herbs and
                spices designed to support overall well-being. Crafted with
                premium ingredients, it enhances relaxation, promotes digestion,
                and helps restore balance to the body and mind. Ideal for teas,
                lattes, and wellness recipes, this aromatic blend offers a
                natural way to elevate your daily routine.
              </p>
            ) : (
              <span className="text-center">
                <p>Weight : 0.5 kg </p>
                <p>Dimensions : 16 × 6 × 12 cm</p>
              </span>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-10 px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col items-center">
          <h2 className="text-2xl font-medium text-[#8e5d36] mb-6 lg:mb-10 text-center font-serif">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 space-x-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative text-center group p-4  w-full max-w-[300px] flex flex-col justify-between mx-auto"
              >
                <div className="relative">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="mx-auto rounded-md h-[300px] w-[300px] object-cover hover:scale-105"
                  />
                  <Link
                    to={product.path}
                    className="absolute inset-0 bg-[#eddbcc] bg-opacity-100 text-[#8E5D36] text-xl font-semibold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
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

export default DetailYogaSpice;
