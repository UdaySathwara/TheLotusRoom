import React from "react";
import Schedule from "../Components/Atoms/Schedule";
import OnlineClasses from "../Components/Atoms/OnlineClasses";

function Classes() {
  return (
    <div>

      <section
        className="flex flex-col items-center justify-center text-center h-screen w-full bg-cover bg-center bg-no-repeat relative p-6"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/women-their-yoga-session_23-2149222428.jpg?t=st=1743500601~exp=1743504201~hmac=bc441cb48e5927fd524a48a027db527424d3c83fd475af66a0040ba251ac61e1&w=1380')",
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
