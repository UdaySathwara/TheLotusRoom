import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useFormik } from "formik";
import * as Yup from "yup";

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
    if (!formik.isValid) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsOrderPlaced(true);
      placeOrder();
    }, 3000);
  };

  const handleCloseModal = () => {
    setIsOrderPlaced(false);
    placeOrder();
    navigate("/shop");
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      country: "India (IN)",
      streetAddress: "",
      apartment: "",
      city: "",
      state: "Gujarat",
      zipCode: "",
      phone: "",
      email: "",
      notes: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is Required"),
      lastName: Yup.string().required("Last Name is Required"),
      streetAddress: Yup.string().required("Address is Required"),
      city: Yup.string().required("Select a City"),
      zipCode: Yup.string().required("Zip Code is Required"),
      phone: Yup.string().required("Phone Number is Required") .matches(
        /^[0-9]{10}$/, "Phone number must be 10 digits"
      ),
      email: Yup.string().email("Invalid email").required("Email is Required"),
    }),
    onSubmit: handlePlaceOrder,
  });

  return (
    <div className="container mx-auto p-4 lg:px-8 mb-8">
      <div className="flex items-center justify-between lg:pb-12 pb-8 pt-4">
        <span
          className="material-symbols-outlined text-xl cursor-pointer xl:hidden"
          onClick={() => navigate(-1)}
        >
          arrow_back_ios
        </span>
      </div>

      {isOrderPlaced && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-2">Order Placed!</h2>
            <p className="text-gray-600 mb-4">
              Your order has been successfully placed.
              <p>
                <a href="/my-orders" className="text-orange-500">
                  View Order.
                </a>
              </p>
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

      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-orange-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Processing your order...</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-8 md:px-6">
        <div>
          <h2 className="text-2xl font-medium mb-4 font-serif">Billing Details</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="first-name">
                First name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                className="w-full border border-orange-500 p-2 rounded"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <p className="text-red-500 text-sm">{formik.errors.firstName}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="last-name">
                Last name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                className="w-full border border-orange-500 p-2 rounded"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <p className="text-red-500 text-sm">{formik.errors.lastName}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="country">
                Country / Region <span className="text-red-500">*</span>
              </label>
              <select
                id="country"
                name="country"
                className="w-full border border-orange-500 p-2 rounded"
                onChange={formik.handleChange}
                value={formik.values.country}
              >
                <option>India (IN)</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="street-address">
                Street address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="street-address"
                name="streetAddress"
                className="w-full border border-orange-500 p-2 rounded mb-2"
                placeholder="House number and street name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.streetAddress}
              />
              {formik.touched.streetAddress && formik.errors.streetAddress && (
                <p className="text-red-500 text-sm">{formik.errors.streetAddress}</p>
              )}
              <input
                type="text"
                name="apartment"
                className="w-full border border-orange-500 p-2 rounded"
                placeholder="Apartment, suite, unit, etc. (optional)"
                onChange={formik.handleChange}
                value={formik.values.apartment}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="town-city">
                Town / City <span className="text-red-500">*</span>
              </label>
              <select
                id="town-city"
                name="city"
                className="w-full border border-orange-500 p-2 rounded"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
              >
                <option value="">Select a City</option>
                <option value="Ahmedabad">Ahmedabad</option>
              </select>
              {formik.touched.city && formik.errors.city && (
                <p className="text-red-500 text-sm">{formik.errors.city}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="state">
                State <span className="text-red-500">*</span>
              </label>
              <select
                id="state"
                name="state"
                className="w-full border border-orange-500 p-2 rounded"
                onChange={formik.handleChange}
                value={formik.values.state}
              >
                <option>Gujarat</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="zip-code">
                ZIP Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="zip-code"
                name="zipCode"
                className="w-full border border-orange-500 p-2 rounded"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.zipCode}
              />
              {formik.touched.zipCode && formik.errors.zipCode && (
                <p className="text-red-500 text-sm">{formik.errors.zipCode}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="phone">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full border border-orange-500 p-2 rounded"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500 text-sm">{formik.errors.phone}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-orange-500 p-2 rounded"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              )}
            </div>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-medium font-serif mb-4">Additional Information</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="order-notes">
              Order notes (optional)
            </label>
            <textarea
              id="order-notes"
              name="notes"
              className="w-full border border-orange-500 p-2 rounded"
              rows="4"
              placeholder="Notes about your order, e.g. special notes for delivery."
              onChange={formik.handleChange}
              value={formik.values.notes}
            />
          </div>
        </div>
      </div>

      <div className="mt-8 lg:px-8 md:px-6">
        <h2 className="text-2xl font-medium font-serif mb-4">Your Order</h2>
        <table className="w-full border-orange-500 mb-8">
          <thead>
            <tr className="border-b border-orange-500">
              <th className="text-left p-2 border-b border-orange-500">Product</th>
              <th className="text-right p-2 border-b border-orange-500">Subtotal</th>
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
              <td className="p-2 border-b border-orange-500 font-semibold">Total</td>
              <td className="text-right p-2 border-b border-orange-500 font-semibold">
                ₹ {totalPrice}.00
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mb-3">
          <label className="block text-2xl font-serif font-medium mb-3">Payment method</label>
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
          Your personal data will be used to process your order, support your experience throughout
          this website, and for other purposes described in our
          <a href="#" className="text-orange-500 hover:underline pl-1">
            privacy policy.
          </a>
        </p>
        <p className="text-base text-gray-600 mb-4">
          For Now, Only Cash on Delivery is available.
        </p>

        <button
          onClick={formik.handleSubmit}
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
