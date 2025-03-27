import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import BackToTop from "./BacktoTop";
import { CartContext } from "./CartContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, placeOrder } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePlaceOrder = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsOrderPlaced(true);
      placeOrder(); // Ensure order is added to the context
    }, 3000);
  };

  const handleCloseModal = () => {
    setIsOrderPlaced(false);
    placeOrder(); // Clears cart after clicking "OK"
    navigate("/shop"); // Redirect to cart page
  };

  return (
    <div className="container mx-auto p-4 lg:px-8 mb-8">
      <BackToTop />
      <div className="flex items-center justify-between lg:pb-12 pb-8 pt-4">
        <span
          className="material-symbols-outlined text-xl cursor-pointer xl:hidden"
          onClick={() => navigate(-1)}
        >
          arrow_back_ios
        </span>
      </div>

      {/* Order Confirmation Modal */}
      {isOrderPlaced && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-2">Order Placed!</h2>
            <p className="text-gray-600 mb-4">
              Your order has been successfully placed.
              <p className=""><a href="/my-orders" className="text-orange-500">View Order.</a></p>
            </p>
            <button
              onClick={handleCloseModal}
              className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-white hover:text-orange-500 border hover:border-orange-500 font-medium"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Loading Animation */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-orange-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Processing your order...</p>
          </div>
        </div>
      )}

      {/* Checkout Page Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-8 md:px-6">
        <div>
          <h2 className="text-2xl font-medium mb-4 font-serif">
            Billing Details
          </h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="first-name"
              >
                First name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="first-name"
                className="w-full border border-orange-500 p-2 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="last-name"
              >
                Last name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="last-name"
                className="w-full border border-orange-500 p-2 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="country"
              >
                Country / Region <span className="text-red-500">*</span>
              </label>
              <select
                id="country"
                className="w-full border border-orange-500 p-2 rounded"
                required
              >
                <option>India (IN)</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="street-address"
              >
                Street address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="street-address"
                className="w-full border border-orange-500 p-2 rounded mb-2"
                placeholder="House number and street name"
                required
              />
              <input
                type="text"
                className="w-full border border-orange-500 p-2 rounded"
                placeholder="Apartment, suite, unit, etc. (optional)"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="town-city"
              >
                Town / City <span className="text-red-500">*</span>
              </label>
              <select
                id="town-city"
                className="w-full border border-orange-500 p-2 rounded"
                required
              >
                <option value="">Select a City</option>
                <option value="Ahmedabad">Ahmedabad</option>
                {/* Add more cities as needed */}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="state">
                State <span className="text-red-500">*</span>
              </label>
              <select
                id="state"
                className="w-full border border-orange-500 p-2 rounded"
                required
              >
                <option>Gujarat</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="zip-code"
              >
                ZIP Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="zip-code"
                className="w-full border border-orange-500 p-2 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="phone">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="phone"
                className="w-full border border-orange-500 p-2 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-orange-500 p-2 rounded"
                required
              />
            </div>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-medium font-serif mb-4">
            Additional Information
          </h2>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="order-notes"
            >
              Order notes (optional)
            </label>
            <textarea
              id="order-notes"
              className="w-full border border-orange-500 p-2 rounded"
              rows="4"
              placeholder="Notes about your order, e.g. special notes for delivery."
            ></textarea>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="mt-8 lg:px-8 md:px-6">
        <h2 className="text-2xl font-medium font-serif mb-4">Your Order</h2>
        <table className="w-full border-orange-500 mb-8">
          <thead>
            <tr className="border-b border-orange-500">
              <th className="text-left p-2 border-b border-orange-500">
                Product
              </th>
              <th className="text-right p-2 border-b border-orange-500">
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td className="p-2 border-b border-orange-500">
                  {item.name} × {item.quantity}
                </td>
                <td className="text-right p-2 border-b border-orange-500">
                  ₹ {item.price * item.quantity}.00
                </td>
              </tr>
            ))}
            <tr>
              <td className="p-2 border-b border-orange-500 font-semibold">
                Total
              </td>
              <td className="text-right p-2 border-b border-orange-500 font-semibold">
                ₹ {totalPrice}.00
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mb-3">
          <label className="block text-2xl font-serif font-medium mb-3">
            Payment method
          </label>
          <div className="text-lg">
            <input
              type="radio"
              id="cash-on-delivery"
              name="payment-method"
              className="mr-2"
              defaultChecked
            />
            <label htmlFor="cash-on-delivery">Cash on delivery</label>
          </div>
        </div>
        <p className="text-base text-gray-600 mb-2">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our
          <a href="#" className="text-orange-500 hover:underline pl-1">
            privacy policy.
          </a>
        </p>
        <p className="text-base text-gray-600 mb-4">
          For Now, Only Cash on Delivery is available.
        </p>
        <button
          onClick={handlePlaceOrder}
          className="bg-orange-500 text-white px-8 py-2 rounded hover:bg-white hover:text-orange-500 border hover:border-orange-500 font-medium"
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : "PLACE ORDER"}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
