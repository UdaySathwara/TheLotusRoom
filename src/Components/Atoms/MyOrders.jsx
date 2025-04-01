import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";

const MyOrders = () => {
  const { orders, setOrders } = useContext(CartContext);
  const navigate = useNavigate();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showCancelPopup, setShowCancelPopup] = useState(false);
  const [cancelReason, setCancelReason] = useState("");

  const handleCancelOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
    sessionStorage.setItem("orders", JSON.stringify(updatedOrders));
    setShowCancelPopup(false);
    setSelectedOrder(null);
  };

  return (
    <div className="h-screen mx-auto p-4 lg:px-8 mb-8">
      <div className="flex items-center lg:justify-center justify-between lg:pb-16 pb-6 md:pb-6 p-4">
        <span
          className="material-symbols-outlined text-xl cursor-pointer xl:hidden"
          onClick={() => navigate(-1)}
        >
          arrow_back_ios
        </span>
        <h2 className="text-2xl font-semibold text-center flex-1">My Orders</h2>
      </div>

      {orders.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white shadow-lg rounded-lg p-4 border border-orange-500 flex items-center space-x-4 cursor-pointer hover:bg-gray-100 hover:shadow-md transition duration-300 ease-in-out"
              onClick={() => setSelectedOrder(order)}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/679/679821.png"
                alt="Order Box"
                className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-lg"
              />
              <div className="text-sm sm:text-base">
                <p className="text-gray-700 font-medium">Order #{order.id}</p>
                <p className="text-gray-600">Total : ₹{order.totalPrice}.00</p>
                <p className="text-gray-600">Delivery : 5-7 days</p>
                <p className="text-gray-600 hidden sm:block">
                  We will contact you before delivery.
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[450px] text-center px-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/8950/8950495.png"
            alt="No Orders"
            className="w-24 h-24 sm:w-32 sm:h-32 mb-4 opacity-85"
          />
          <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
            You haven't placed any orders yet.
          </h1>
          <p className="text-gray-500 mb-4 text-sm sm:text-base">
            Discover amazing products and start shopping today!
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="px-4 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-50 flex items-center justify-center text-sm sm:text-base"
          >
            Shop Now
            <span className="material-symbols-outlined ml-2 text-lg sm:text-xl">
              shopping_cart
            </span>
          </button>
        </div>
      )}

      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-lg font-semibold mb-2">Order Details</h3>
            <p className="text-gray-700 font-medium">
              Order #{selectedOrder.id}
            </p>
            <p className="text-gray-600 mb-2">
              Total : ₹{selectedOrder.totalPrice}.00
            </p>
            <p className="text-gray-600 mb-2">Delivery : 5-7 days</p>
            <ul className="border-t pt-2 mb-4">
              {selectedOrder.items.map((item) => (
                <li
                  key={item.id}
                  className="text-gray-700 flex items-center space-x-2"
                >
                  <span>
                    {item.name} × {item.quantity} - ₹
                    {item.price * item.quantity}.00
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap justify-between">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded text-sm sm:text-base hover:bg-white hover:text-red-500 border border-red-500"
                onClick={() => setShowCancelPopup(true)}
              >
                Cancel Order
              </button>
              <button
                className="bg-white text-orange-500 px-4 py-2 rounded text-sm sm:text-base hover:text-white hover:bg-orange-500 border border-orange-500"
                onClick={() => setSelectedOrder(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showCancelPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-lg font-semibold mb-2">Cancel Order</h3>
            <p className="text-gray-600 mb-2">
              Please provide a reason for cancellation:
            </p>
            <textarea
              className="w-full border p-2 rounded mb-4 text-sm sm:text-base"
              value={cancelReason}
              onChange={(e) => setCancelReason(e.target.value)}
              placeholder="Enter reason..."
            ></textarea>
            <div className="flex flex-wrap justify-between">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded text-sm sm:text-base hover:bg-white hover:text-red-500 border border-red-500"
                onClick={() => handleCancelOrder(selectedOrder.id)}
                disabled={!cancelReason.trim()}
              >
                Confirm Cancel
              </button>
              <button
                className="bg-white text-orange-500 px-4 py-2 rounded text-sm sm:text-base hover:text-white hover:bg-orange-500 border border-orange-500"
                onClick={() => setShowCancelPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
