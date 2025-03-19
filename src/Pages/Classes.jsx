import React from "react";
import Schedule from "../Components/Atoms/Schedule";
import BackToTop from "../Components/Atoms/BacktoTop";
import OnlineClasses from "../Components/Atoms/OnlineClasses";

function Classes() {
  return (
    <div>
        <BackToTop />

      <section
        className="flex flex-col items-center justify-center text-center h-screen w-full bg-cover bg-center bg-no-repeat relative p-6"
        style={{
          backgroundImage:
            "url('https://ecom-static-site-prod.s3.ap-south-1.amazonaws.com/SEO-New-Images/Courses/yoga-asana-regular-classes-for-men.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-4">
          <h2 className="text-4xl md:text-5xl font-medium text-white">
            Classes
          </h2>
          <p className="text-lg md:text-xl text-white mt-4 font-serif">
            Join our yoga classes to connect, grow, and find balance through
            movement, mindfulness, and wellness.
          </p>
        </div>
      </section>

      <Schedule />

      <OnlineClasses />
    </div>
  );
}

export default Classes;
