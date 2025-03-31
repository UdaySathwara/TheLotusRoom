import React from "react";
import BackToTop from "./BacktoTop";
import { Link, useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="max-w-full min-h-screen mx-auto p-4 lg:px-12 bg-white shadow-lg rounded-lg pb-12">
      <BackToTop />
      <div className="flex items-center lg:justify-center justify-between lg:pb-16 pb-6 md:pb-6">
        <span
          className="material-symbols-outlined text-xl cursor-pointer xl:hidden"
          onClick={() => navigate(-1)}
        >
          arrow_back_ios
        </span>
        <h2 className="text-2xl font-semibold text-center flex-1">
          Privacy Policy
        </h2>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold pb-2">
          Data Protection & Privacy Policy
        </h2>
        <p className="text-gray-700">
          The Lotus Room has created this Privacy Statement to demonstrate its
          commitment to upholding the privacy of visitors to its Web site,
          amongst other contacts. In this section of the Privacy Statement, The
          Lotus Room describes the type of information it collects and how and
          why it collects such information.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold pb-2">Registration</h2>
        <p className="text-gray-700">
          During registration, users are required to provide their contact
          information (such as name, e-mail id, country), which The Lotus Room
          uses to provide requested services for its Web site visitors, to help
          make surfing this site easier, and provide a more personalized
          experience on these Web sites. The Lotus Room uses such information to
          improve its services.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold pb-2">Contact Us</h2>
        <p className="text-gray-700">
          The Web site has features where The Lotus Room’s customers and
          investors can submit information to The Lotus Room by using the
          ‘Contact Us’ facility. Such submissions include queries, feedback, or
          other information needed to best respond to specific requests. In
          addition, The Lotus Room may retain e-mails and other information sent
          to it for its internal administrative purposes to help it serve you
          better.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold pb-2">Safeguarding Security</h2>
        <p className="text-gray-700">
          The Lotus Room will take appropriate steps to ensure that personal
          data is protected from unauthorized access and disclosure, including
          limiting access to such data only to those employees with a business
          need to know.Users should check this policy frequently to keep abreast
          of any changes.For questions about this Privacy Statement, contact{" "}
          <a
            href="mailto:lotusroom@gmail.com"
            className="text-blue-500 underline ml-1"
          >
            lotusroom@gmail.com
          </a>
          .
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold pb-2">Order and Delivery Policy</h2>
        <p className="text-gray-700">
          he Lotus Room operates a shop that delivers orders on a Cash on
          Delivery (COD) basis. Customers are notified before delivery, and the
          standard delivery time is 5-7 days from the order confirmation date.
          Please ensure that accurate contact and address details are provided
          to facilitate a smooth delivery process.
        </p>
      </div>
    </div>
  );
}
