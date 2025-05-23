import React from "react";
import Schedule from "../Components/Atoms/Schedule";

function Classes() {
  return (
    <div>

      <section
        className="flex flex-col items-center justify-center text-center h-screen w-full bg-cover bg-bottom bg-no-repeat relative p-6"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/yoga-group-classes-inside-gym_1303-14788.jpg?semt=ais_country_boost&w=740')",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>

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

    </div>
  );
}

export default Classes;
