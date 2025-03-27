import React, { useState } from "react";

const OnlineClasses = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const yogaClasses = [
    {
      id: 1,
      title: "Morning Yoga",
      description:
        "Start your day with a refreshing yoga session to boost energy and mindfulness.",
      day: "Monday - Friday",
      time: "7:00 AM - 8:00 AM",
      type: "live",
      note: "Only for Members",
      link: "https://us05web.zoom.us/j/88154663668?pwd=ufbahi0XX1b2VBiucSqY2BHhaSfOxu.1",
    },
    {
      id: 2,
      title: "Evening Meditation",
      description: "Relax and unwind with a calming guided meditation session.",
      day: "Every Wednesday",
      time: "6:00 PM - 7:00 PM",
      type: "live",
      note: "Only for Members",
      link: "https://us05web.zoom.us/j/88154663668?pwd=ufbahi0XX1b2VBiucSqY2BHhaSfOxu.1",
    },
    {
      id: 3,
      title: "Yoga for Beginners",
      description: "Learn the basics of yoga with step-by-step instructions.",
      day: "AnyDay",
      duration: "15 minutes",
      type: "recorded",
      note : "For Everyone",
      link: "https://www.youtube.com/watch?v=149Iac5fmoE",
    },
    {
      id: 4,
      title: "Yoga for Intermediate",
      description:
        "Improve your flexibility and strength with intermediate yoga techniques.",
      day: "AnyDay",
      duration: "30 minutes",
      type: "recorded",
      note : "For Everyone",
      link: "https://youtu.be/U1cHGJYIwhA?si=fIm3b2bK31gOpd-8",
    },
    {
      id: 5,
      title: "Advanced Yoga",
      description:
        "Explore advanced yoga poses and techniques for a deeper practice.",
      day: "AnyDay",
      duration: "30 minutes",
      type: "recorded",
      note : "For Everyone",
      link: "https://youtu.be/5AXUBLOUL4E?si=nzW7U6dWwHTP1aqa",
    },
    {
      id: 6,
      title: "Power Yoga",
      description:
        "Unleash your inner power with power yoga techniques and poses.",
      day: "Every Monday",
      time: "9:00 AM - 10:00 AM",
      type: "live",
      note: "Only for Members",
      link: "https://us05web.zoom.us/j/88154663668?pwd=ufbahi0XX1b2VBiucSqY2BHhaSfOxu.1",
    },
  ];

  const handleJoinClass = (link, type) => {
    if (type === "live") {
      window.open(link, "_blank"); // Open Zoom link in a new tab
    } else {
      const videoId = extractYouTubeVideoId(link);
      if (videoId) {
        setSelectedVideo(`https://www.youtube.com/embed/${videoId}`);
      } else {
        window.open(link, "_blank");
      }
    }
  };

  const extractYouTubeVideoId = (url) => {
    try {
      const youtubeRegex =
        /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
      const match = url.match(youtubeRegex);
      return match ? match[1] : null;
    } catch (error) {
      return null;
    }
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="p-8 pb-16 bg-[#eddbcc] min-h-screen flex flex-col items-center">
      <p className="text-xl mb-12 text-center max-w-xl">
        Explore our yoga sessions and join live or recorded classes to enhance
        your well-being.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {yogaClasses.map((yogaClass) => (
          <div
            key={yogaClass.id}
            className="p-6 bg-white rounded-md hover:shadow-lg transition-all border border-gray-200"
          >
            <h2 className="text-2xl font-semibold mb-3 text-orange-600">
              {yogaClass.title}
            </h2>
            <p className="text-gray-600 mb-4">{yogaClass.description}</p>
            <div className="mb-4">
              <p className="text-gray-700">
                <strong>Day :</strong> {yogaClass.day}
              </p>
              <p className="text-gray-700">
                <strong>Time/Duration:</strong>{" "}
                {yogaClass.time || yogaClass.duration}
              </p>
              <p className="text-gray-700">
                <strong>Type :</strong>
                <span
                  className={`ml-2 font-semibold ${
                    yogaClass.type === "live"
                      ? "text-green-600"
                      : "text-blue-600"
                  }`}
                >
                  {yogaClass.type.charAt(0).toUpperCase() +
                    yogaClass.type.slice(1)}
                </span>
              </p>
              {yogaClass.note && (
                <p className="text-gray-700">
                  <strong>Note :</strong> {yogaClass.note}
                </p>
              )}
            </div>
            <button
              onClick={() => handleJoinClass(yogaClass.link, yogaClass.type)}
              className="w-full bg-[#8e5d36]/70 text-white font-semibold px-4 py-2 my-2 rounded-lg hover:bg-transparent hover:text-[#8e5d36] border border-[#8e5d36]/70 transition-all shadow-md"
            >
              {yogaClass.type === "live" ? "Join Live Class" : "Watch Video"}
            </button>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4 md:p-0">
          <div className="py-12 relative flex items-center justify-center w-full md:w-1/2">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-0 right-0  text-white/60 hover:text-white rounded-full"
            >
              <span className="font-bold text-4xl">&times;</span>
            </button>

            {/* Embedded Video */}
            <div className="relative w-full">
              <iframe
                width="100%"
                height="400"
                src={selectedVideo}
                title="Yoga Video"
                allowFullScreen
                className=""
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default OnlineClasses;