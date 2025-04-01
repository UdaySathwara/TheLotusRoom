import React, { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const DetailYogaWheel = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [mainImage, setMainImage] = useState(
    "https://hatha.qodeinteractive.com/wp-content/uploads/2020/08/h1-shopimg-img2-1.jpg"
  );

  const thumbnails = [
    "https://hatha.qodeinteractive.com/wp-content/uploads/2020/08/h1-shopimg-img2-1.jpg",
    "https://hatha.qodeinteractive.com/wp-content/uploads/2020/08/h1-shopimggallery-img8-1.jpg",
    "https://hatha.qodeinteractive.com/wp-content/uploads/2020/08/h1-shopimggallery-img7-1.jpg",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { cart, addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    const product = {
      id: 3,
      name: "Yoga Wheel",
      price: "199.00",
      img: "https://hatha.qodeinteractive.com/wp-content/uploads/2020/08/h1-shopimg-img2-1.jpg",
      path: "/detail-yoga-wheel",
    };
    addToCart(product, quantity); // Pass selected quantity
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const navigate = useNavigate();

  const products = [
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
  ];

  return (
    <div className="container mx-auto bg-grey-50 m-6 pb-10">
      <div className="flex items-center justify-between px-10">
        <span
          className="material-symbols-outlined text-xl cursor-pointer xl:hidden"
          onClick={() => navigate(-1)}
        >
          arrow_back_ios
        </span>
        <h2 className="text-2xl font-semibold text-center flex-1">
          Product Detail
        </h2>
        <button
          className="relative bg-[#eddbcc] text-[#8e5d36] p-3 flex justify-center gap-2 font-medium text-xl items-center"
          onClick={() => navigate("/cart")}
        >
          <span className="material-symbols-outlined">shopping_bag</span>
          <span className="text-xs bg-[#8e5d36] text-white w-5 h-5 flex justify-center items-center rounded-full absolute top-1 right-0">
            {totalItems}
          </span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center w-full mt-10 px-6 md:px-10 lg:px-20 gap-8">
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

        <div className="lg:w-1/2 lg:pr-16 text-center lg:text-left flex flex-col p-4">
          <h1 className="text-3xl font-medium mb-2 text-[#8e5d36]">
            Yoga Wheel
          </h1>
          <div className="text-2xl text-orange-600 font-medium mb-4">
            ₹ 199.00
          </div>
          <p className="mb-4 text-base leading-relaxed">
          The Pink Mat Yoga Wheel is a must-have prop for yogis looking to deepen stretches, improve flexibility, and strengthen their core. Designed with a non-slip surface and durable construction, it provides stability and support for backbends, balance training, and posture correction.
          </p>

          <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:gap-4 justify-center lg:justify-start mb-4">
            <div className="flex items-center border border-orange-500 rounded overflow-hidden">
              <button
                className=" p-2 text-lg font-bold hover:bg-orange-300"
                onClick={decreaseQuantity}
              >
                −
              </button>
              <input
                type="text"
                className="w-10 text-center border-x border-orange-500"
                value={quantity}
                readOnly
              />
              <button
                className=" p-2 text-lg font-bold hover:bg-orange-300"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-[#8e5d36] text-white px-5 py-2 rounded"
            >
              ADD TO CART
            </button>
          </div>

          <div className="mb-4 flex flex-col space-y-1 text-base">
            <p>
              <strong>In Stock :</strong> 95
            </p>
            <p>
              <strong>Category : </strong>Yoga Props, Flexibility & Mobility Tools
            </p>
            <p>
              <strong>Tag : </strong>Posture & Back Support, Wellness & Balance, Yoga Wheel
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
              Experience a new level of flexibility, balance, and strength with
              the Pink Mat Yoga Wheel. Crafted from high-density TPE and ABS, it
              offers exceptional durability, support, and comfort for all levels
              of practice. Its non-slip, sweat-resistant surface ensures a
              secure grip, making it ideal for deep backbends, spinal
              decompression, and core workouts. Lightweight yet sturdy, this
              yoga wheel is perfect for both home and studio use.
            </p>
          ) : (
            <span className="text-center">
              <p>Weight : 1.2–1.5 kg </p>
              <p>Dimensions : 32 x 13 cm</p>
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
              className="relative text-center group p-4 w-full max-w-[300px] flex flex-col justify-between mx-auto"
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

export default DetailYogaWheel;
