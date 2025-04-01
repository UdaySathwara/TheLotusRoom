import React from "react";
import {  useNavigate } from "react-router-dom";

export default function TermsandCodition() {
  const navigate = useNavigate();

  return (
    <div className="max-w-full min-h-screen mx-auto p-4 pb-12 lg:px-12 bg-white shadow-lg rounded-lg">
      <div className="flex items-center lg:justify-center justify-between lg:pb-16 pb-6 md:pb-6 py-4 px-2">
        <span
          className="material-symbols-outlined text-xl cursor-pointer xl:hidden"
          onClick={() => navigate(-1)}
        >
          arrow_back_ios
        </span>
        <h2 className="text-2xl font-semibold text-center flex-1">Terms and Conditions</h2>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold pb-2">1. Recording Policy</h2>
        <p className="text-gray-700">
          The Lotus Room reserves the right to record live sessions for internal
          usage and quality assurance purposes. These recordings are strictly
          for the Institute’s use and will not be made available to students.
          The Institute takes reasonable measures to safeguard the recorded data
          against misuse, loss, and unauthorized access, modification, or
          disclosure. Students are not permitted to make their own recordings of
          live sessions.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold pb-2">
          2. Photography and Videography Policy
        </h2>
        <p className="text-gray-700">
          The Lotus Room may capture photographs or videos of students
          during sessions for internal use, promotional materials, and social
          media platforms. If a student does not wish to be photographed or
          recorded, they must inform their course coordinator at the time of
          admission. The Institute respects personal privacy and will take
          reasonable steps to accommodate such requests.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold pb-2">3. No Refund Policy</h2>
        <p className="text-gray-700">
          The Lotus Room maintains a strict no-refund policy for all its
          programs. The only exception to this policy is if a program is
          canceled by the Institute. In such cases, students will be offered a
          credit that can be used for any other program or a refund of the event
          fee.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold pb-2">4. Age Eligibility</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <strong>Teacher Training Course:</strong> Open to individuals aged
            18 years and above.
          </li>
          <li>
            <strong>Specialized Camps and Workshops:</strong> Designed
            exclusively for individuals experiencing specific conditions, such
            as diabetes or pregnancy. Enrollment is limited to individuals who
            meet the specific condition’s criteria.
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold pb-2">5. Course Fee Updates</h2>
        <p className="text-gray-700">
          The course fees are subject to change, and any adjustments will be
          promptly updated on our website. If you have any further inquiries or
          require additional information, please do not hesitate to reach out to
          us at
          <a
            href="mailto:lotusroom@gmail.com"
            className="text-blue-500 underline ml-1"
          >
            lotusroom@gmail.com
          </a>
          .
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold pb-2">
          6. Attendance Criteria for All Certification Courses
        </h2>
        <p className="text-gray-700">
          Attendance of 80% for all certification courses is mandatory.
        </p>
      </div>
    </div>
  );
}
