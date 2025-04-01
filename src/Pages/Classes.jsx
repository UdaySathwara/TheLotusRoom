import React from "react";
import Schedule from "../Components/Atoms/Schedule";
import OnlineClasses from "../Components/Atoms/OnlineClasses";

function Classes() {
  return (
    <div>

      <section
        className="flex flex-col items-center justify-center text-center h-screen w-full bg-cover bg-bottom bg-no-repeat relative p-6"
        style={{
          backgroundImage:
            "url('https://cdn.decorpad.com/photos/2012/10/30/4f46401b2bf3.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

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
