import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../Atoms/CartContext";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();
  const auth = getAuth();
  
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUserLoggedIn(true);
      } else {
        setIsUserLoggedIn(false);
      }
    });
  }, [auth]);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDeleteClick = (id) => {
    setSelectedItem(id);
    setShowModal(true);
  };

  const confirmDelete = () => {
    if (selectedItem !== null) {
      removeFromCart(selectedItem);
    }
    setShowModal(false);
    setSelectedItem(null);
  };

  if (!isUserLoggedIn) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#eddbcc] min-h-screen">
        <div className="bg-white p-6 rounded-lg shadow-lg w-80">
          <h2 className="text-lg font-semibold">You are not logged in</h2>
          <p className="mt-2 text-gray-600">
            Please log in to view your cart.
          </p>
          <div className="flex justify-end mt-4">
            <button
              className="mr-4 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-200"
              onClick={() => setShowLoginPrompt(false)}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-white hover:text-orange-500 border border-orange-500"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 px-6 min-h-screen">
      <div className="flex items-center lg:justify-center justify-between lg:pb-16 pb-6 md:pb-6 p-4">
        <span
          className="material-symbols-outlined text-xl cursor-pointer xl:hidden"
          onClick={() => navigate(-1)}>
          arrow_back_ios
        </span>
        <h2 className="text-2xl font-semibold text-center flex-1 ">My Cart</h2>
      </div>

      {cart.length === 0 ? (
        <div className="flex items-center justify-center h-[500px] bg-white">
          <div className="text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/13539/13539700.png"
              alt="Illustration of an empty shopping cart with stars around it"
              className="mx-auto mb-4"
              width="100"
              height="100"
            />
            <h1 className="text-xl font-semibold text-gray-800">Your cart is empty</h1>
            <p className="text-gray-500 mb-6">Looks like you haven't made your choice yet...</p>
            <button
              onClick={() => navigate("/shop")}
              className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50"
            >
              Start Shopping
            </button>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto w-full lg:px-10 px-4">
          <table className="hidden sm:table w-full border-collapse text-center">
            <thead>
              <tr className="border-b font-serif text-sm">
                <th className="py-2 flex ">Product</th>
                <th className="py-2">Price</th>
                <th className="py-2">Quantity</th>
                <th className="py-2">Subtotal</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>

            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-b text-sm sm:text-base">
                  <td className="py-4 flex items-center space-x-2 sm:space-x-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-12 h-12 sm:w-16 sm:h-16"
                    />
                    <span className="text-center text-lg">{item.name}</span>
                  </td>
                  <td className="py-4 text-orange-500 whitespace-nowrap">
                    ₹ {item.price}.00
                  </td>
                  <td className="py-4">
                    <div className="flex items-center justify-center rounded-xl ">
                      <button
                        className="py-1 px-2 border border-orange-500 text-center disabled:opacity-50"
                        onClick={() => updateQuantity(item.id, -1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <input
                        className="w-10 py-1 text-center border-y border-orange-500 pl-2"
                        type="number"
                        value={item.quantity}
                        readOnly
                      />
                      <button
                        className="py-1 px-2 border border-orange-500 text-center disabled:opacity-50"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-4 text-orange-500 whitespace-nowrap">
                    ₹ {item.price * item.quantity}.00
                  </td>
                  <td className="py-4">
                    <button
                      className="text-red-500"
                      onClick={() => handleDeleteClick(item.id)}
                    >
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile View: Vertical List */}
          <div className="sm:hidden">
            {cart.map((item) => (
              <div
                key={item.id}
                className="border-b py-4 flex flex-col space-y-3 bg-white mb-6"
              >
                <div className="flex items-center ">
                  <img src={item.img} alt={item.name} className="w-24 h-20 object-cover" />
                  <div className="flex-1">
                    <h3 className="font-semibold  flex justify-end">
                      {item.name}
                    </h3>
                    <p className="text-orange-500 flex justify-end">
                      ₹ {item.price}.00
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center rounded-xl ">
                    <button
                      className="py-1 px-2 border border-orange-500 text-center disabled:opacity-50"
                      onClick={() => updateQuantity(item.id, -1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <input
                      className="w-10 py-1 text-center border-y border-orange-500 pl-2"
                      type="number"
                      value={item.quantity}
                      readOnly
                    />
                    <button
                      className="py-1 px-2 border border-orange-500 text-center disabled:opacity-50"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-orange-500 font-semibold">
                    ₹ {item.price * item.quantity}.00
                  </p>
                  <button
                    className="text-red-500"
                    onClick={() => handleDeleteClick(item.id)}
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h2 className="text-lg sm:text-2xl mb-4 font-medium font-serif">
              Cart totals
            </h2>
            <div className="flex justify-between text-lg border-b py-2">
              <span>Subtotal</span>
              <span className="text-orange-500">₹ {totalPrice}.00</span>
            </div>
            <div className="flex justify-between text-lg border-b py-2">
              <span>Total</span>
              <span className="text-orange-500">₹ {totalPrice}.00</span>
            </div>
            <div className="flex justify-center m-4">
              <button
                className="mt-4 bg-orange-500 text-white py-2 px-4  hover:bg-white border-orange-500 border-2 hover:text-orange-500"
                onClick={() => navigate("/checkout")}
              >
                PROCEED TO CHECKOUT
              </button>
            </div>

            {/* Custom Delete Confirmation Modal */}
            {showModal && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                  <h2 className="text-lg font-semibold">Confirm Deletion</h2>
                  <p className="mt-2 text-gray-600">
                    Are you sure you want to remove this item from the cart?
                  </p>
                  <div className="flex justify-end mt-4">
                    <button
                      className="mr-4 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-200"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
                      onClick={confirmDelete}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;