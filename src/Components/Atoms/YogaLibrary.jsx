import React, { useState } from "react";
import { motion } from "framer-motion";
import BackToTop from "./BacktoTop";
import { useNavigate } from "react-router-dom";

const yogaPoses = [
  {
    name: "Mountain Pose",
    difficulty: "Beginner",
    duration: "30s",
    animation: "🏔️",
    video: "https://www.youtube.com/embed/5NxDs-ovJU8?si=AS26xeMf3dpd1fRp",
    description: "A foundational pose that promotes balance and grounding.",
  },
  {
    name: "Warrior Pose",
    difficulty: "Intermediate",
    duration: "45s",
    animation: "🕺",
    video: "https://www.youtube.com/embed/Mn6RSIRCV3w?si=TNHN_lcnITVSTo8W",
    description: "Strengthens legs and improves focus.",
  },
  {
    name: "Tree Pose",
    difficulty: "Advanced",
    duration: "60s",
    animation: "🌳",
    video: "https://www.youtube.com/embed/uELr6MPi7pI?si=X95XavNPFkmrw6VF",
    description: "Enhances balance and stability.",
  },
  {
    name: "Downward Dog",
    difficulty: "Beginner",
    duration: "45s",
    animation: "🐶",
    video: "https://www.youtube.com/embed/j97SSGsnCAQ",
    description: "Stretches the entire body and relieves tension.",
  },
  {
    name: "Cobra Pose",
    difficulty: "Intermediate",
    duration: "30s",
    animation: "🐍",
    video: "https://www.youtube.com/embed/Nd3j6Avtv6Q?si=egk-yqPlhhh_xIhE",
    description: "Opens the chest and strengthens the spine.",
  },
  {
    name: "Bridge Pose",
    difficulty: "Beginner",
    duration: "40s",
    animation: "🌉",
    video: "https://www.youtube.com/embed/_leI4qFfPVw?si=i8uGFBtrf4O3nBHp",
    description: "Strengthens the back and improves posture.",
  },
  {
    name: "Seated Forward Bend",
    difficulty: "Intermediate",
    duration: "50s",
    animation: "🙇",
    video: "https://www.youtube.com/embed/SLIaql7h6RQ?si=-247rJDbww1qEh41",
    description: "Stretches the spine and hamstrings.",
  },
  {
    name: "Child's Pose",
    difficulty: "Beginner",
    duration: "30s",
    animation: "👶",
    video: "https://www.youtube.com/embed/_ZX_zTOBgp8?si=KYTsLWfM6YHvuLFe",
    description: "Relaxes the body and calms the mind.",
  },
  {
    name: "Triangle Pose",
    difficulty: "Intermediate",
    duration: "45s",
    animation: "🔺",
    video: "https://www.youtube.com/embed/_1124fj0BeQ?si=JeZos3Z1vxE_tYaW",
    description: "Improves flexibility and balance.",
  },
  {
    name: "Camel Pose",
    difficulty: "Advanced",
    duration: "60s",
    animation: "🐫",
    video: "https://www.youtube.com/embed/_NNnowkcIqU?si=W_1udjZmV-9UCP5i",
    description: "Opens the chest and strengthens the spine.",
  },
  {
    name: "Boat Pose",
    difficulty: "Intermediate",
    duration: "45s",
    animation: "⛵",
    video: "https://www.youtube.com/embed/QVEINjrYUPU?si=0W_NbPBvw7ifek3R",
    description: "Strengthens the core and improves balance.",
  },
  {
    name: "Cat Pose",
    difficulty: "Beginner",
    duration: "30s",
    animation: "🐈",
    video: "https://www.youtube.com/embed/LGLIyrfTiUc?si=igHzQZfWZJUNltwV",
    description: "Relieves lower back tension and promotes relaxation.",
  },
  {
    name: "Eagle Pose",
    difficulty: "Advanced",
    duration: "60s",
    animation: "🦅",
    video: "https://www.youtube.com/embed/FTWFM-lL5jQ?si=xQXdjhbdO8y5Shxa",
    description: "Improves concentration and balance.",
  },
  {
    name: "Fish Pose",
    difficulty: "Intermediate",
    duration: "45s",
    animation: "🐟",
    video: "https://www.youtube.com/embed/6a9H0BOWqAE?si=hmW5sJzz24bqb225",
    description: "Opens the chest and stretches the throat.",
  },
  {
    name: "Chair Pose",
    difficulty: "Beginner",
    duration: "40s",
    animation: "🪑",
    video: "https://www.youtube.com/embed/tEZhXr0FuAQ?si=x__QVM7UfHfbiPZT",
    description: "Strengthens the legs and core.",
  },
  {
    name: "Crow Pose",
    difficulty: "Advanced",
    duration: "60s",
    animation: "🐦",
    video: "https://www.youtube.com/embed/DgvjvwPGLPY?si=Fz501N7-6cnCS3u2",
    description: "Enhances upper body strength and balance.",
  },
  {
    name: "Butterfly Pose",
    difficulty: "Beginner",
    duration: "30s",
    animation: "🦋",
    video: "https://www.youtube.com/embed/4J7kbCmPScQ?si=WfijewMnDXNQNwpO",
    description: "Stretches inner thighs and promotes relaxation.",
  },
  {
    name: "Lotus Pose",
    difficulty: "Intermediate",
    duration: "50s",
    animation: "🌺",
    video: "https://www.youtube.com/embed/tEzSZ8OaMDg?si=YDy6U2yIJSb4ss28",
    description: "Enhances meditation and flexibility.",
  },
  {
    name: "Shoulder Stand",
    difficulty: "Advanced",
    duration: "60s",
    animation: "🤸",
    video: "https://www.youtube.com/embed/xJ0exoga2oc?si=i9qaLjwaT7dm6sIq",
    description: "Boosts circulation and strengthens the shoulders.",
  },
  {
    name: "Meditation",
    difficulty: "Advanced",
    duration: "60s",
    animation: "🧘‍♂️",
    video: "https://www.youtube.com/embed/VpHz8Mb13_Y?si=n_TjavRM5pje0YmG",
    description: "Practices mindfulness and inner peace.",
  },
];

const YogaPoseLibrary = () => {
  const [filter, setFilter] = useState("");
  const [selectedPose, setSelectedPose] = useState(null);

  const navigate = useNavigate();

  const filteredPoses = yogaPoses.filter((pose) =>
    pose.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#EDDBCC] text-black pb-12 p-4 ">
      <BackToTop />
      <div className="flex items-center justify-between lg:pb-6 pb-6 md:pb-6 p-4">
        <span
          className="material-symbols-outlined text-xl cursor-pointer xl:hidden "
          onClick={() => navigate(-1)}
        >
          arrow_back_ios
        </span>
        <h2 className="text-2xl font-semibold text-center flex-1 text-black">
          Yoga Pose Animation Library
        </h2>
      </div>
      <div className="flex flex-col items-center">
        <input
          className="w-full max-w-md p-2 mb-6 rounded bg-[#f7f7fc]  text-black border border-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
          placeholder="Search for a yoga pose..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredPoses.map((pose, index) => (
            <motion.div
              key={index}
              className="bg-[#f7f7fc] text-black p-4 rounded-lg text-center cursor-pointer hover:border-orange-500 border border-orange-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedPose(pose)}
            >
              <div className="text-4xl mb-2">{pose.animation}</div>
              <h2 className="text-lg font-bold">{pose.name}</h2>
              <p className="text-sm text-gray-400">
                {pose.difficulty} - {pose.duration}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedPose && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-[#f7f7fc] p-6 rounded-lg shadow-lg max-w-lg w-full text-center">
            <h2 className="text-2xl font-bold mb-2">{selectedPose.name}</h2>
            <p className="text-gray-900 mb-4">{selectedPose.description}</p>
            <iframe
              width="100%"
              height="315"
              src={selectedPose.video}
              title={selectedPose.name}
              allowFullScreen
              className="rounded-lg"
            ></iframe>
            <button
              onClick={() => setSelectedPose(null)}
              className="mt-4 bg-red-500 text-white w-full py-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default YogaPoseLibrary;
