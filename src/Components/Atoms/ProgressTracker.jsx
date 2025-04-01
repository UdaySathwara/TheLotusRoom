import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Firebase from "firebase/compat/app";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const currentUser = {
  id: "user123",
  name: "Yoga User",
};

const savedData = JSON.parse(
  localStorage.getItem(`yogaData_${currentUser.id}`)
) || {
  activities: [],
  dailyGoal: 30,
  goalSettingPhase: "setGoal",
};

const YogaProgressTracker = () => {
  const [weeklyActivity, setWeeklyActivity] = useState(savedData.activities);
  const [dailyMinutes, setDailyMinutes] = useState("");
  const [dailyGoal, setDailyGoal] = useState(savedData.dailyGoal);
  const [newGoal, setNewGoal] = useState(savedData.dailyGoal);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [yogaStyle, setYogaStyle] = useState("Hatha");
  const [goalSettingPhase, setGoalSettingPhase] = useState(
    savedData.goalSettingPhase
  );

  const navigate = useNavigate();

  useEffect(() => {
    const userData = {
      activities: weeklyActivity,
      dailyGoal: dailyGoal,
      goalSettingPhase: goalSettingPhase,
    };
    localStorage.setItem(
      `yogaData_${currentUser.id}`,
      JSON.stringify(userData)
    );
  }, [weeklyActivity, dailyGoal, goalSettingPhase]);

  const addDailyActivity = () => {
    if (dailyMinutes) {
      const newEntry = {
        date: selectedDate,
        minutes: parseInt(dailyMinutes, 10),
        style: yogaStyle,
        goal: dailyGoal,
      };

      setWeeklyActivity((prevActivity) => {
        const updatedActivity = [...prevActivity, newEntry]
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .slice(-7);

        if (updatedActivity.length === 7) {
          setGoalSettingPhase("canChange");
        }
        return updatedActivity;
      });

      setDailyMinutes("");
    }
  };

  const resetData = () => {
    if (window.confirm("Are you sure you want to reset all your yoga data?")) {
      setWeeklyActivity([]);
      setDailyGoal(30);
      setNewGoal(30);
      setGoalSettingPhase("setGoal");
    }
  };

  const setNewDailyGoal = () => {
    if (goalSettingPhase === "setGoal" || goalSettingPhase === "canChange") {
      setDailyGoal(newGoal);
      setGoalSettingPhase("locked");
    }
  };

  const lastSevenActivities = useMemo(
    () => weeklyActivity.slice(-7),
    [weeklyActivity]
  );
  const weeklyProgress = useMemo(
    () => lastSevenActivities.reduce((acc, entry) => acc + entry.minutes, 0),
    [lastSevenActivities]
  );
  const chartData = useMemo(
    () =>
      lastSevenActivities.map((entry) => ({
        date: entry.date,
        minutes: entry.minutes,
      })),
    [lastSevenActivities]
  );

  return (
    <>
      <div className="p-4 pb-12 bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center min-h-screen mx-auto ">
        <div className="flex items-center lg:justify-center justify-between lg:pb-16 pb-6 md:pb-6 p-4">
          <span
            className="material-symbols-outlined text-xl cursor-pointer xl:hidden fixed left-8"
            onClick={() => navigate(-1)}
          >
            arrow_back_ios
          </span>
          <h2 className="text-2xl font-semibold text-center flex-1">
            Yoga Progress Tracker
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
          {/* Activity Log & Form */}
          <div>
            <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-lg font-semibold text-gray-700">
                  Set Daily Goal (minutes):
                </label>
                {goalSettingPhase === "locked" && (
                  <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                    Goal locked (7 entries logged)
                  </span>
                )}
              </div>
              <div className="flex">
                <input
                  type="number"
                  value={newGoal}
                  onChange={(e) => setNewGoal(parseInt(e.target.value))}
                  className={`flex-1 p-2 border rounded focus:ring-2 ${
                    goalSettingPhase === "locked"
                      ? "border-gray-300 bg-gray-100 cursor-not-allowed"
                      : "border-gray-300 focus:ring-indigo-500"
                  }`}
                  disabled={goalSettingPhase === "locked"}
                />
                <button
                  onClick={setNewDailyGoal}
                  disabled={goalSettingPhase === "locked"}
                  className={`ml-2 px-4 py-2 rounded-lg transition-all ${
                    goalSettingPhase === "locked"
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-indigo-500 text-white hover:bg-indigo-600"
                  }`}
                >
                  Set Goal
                </button>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                {goalSettingPhase === "setGoal"
                  ? "Set your goal (will lock after 7 entries)"
                  : goalSettingPhase === "locked"
                  ? "Goal is locked. Log next 7 activities to reset."
                  : "You can now change your goal."}
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
              <label className="block text-lg font-semibold mb-2 text-gray-700">
                Select Date:
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4 focus:ring-2 focus:ring-indigo-500"
              />
              <label className="block text-lg font-semibold mb-2 text-gray-700">
                Select Yoga Style:
              </label>
              <select
                value={yogaStyle}
                onChange={(e) => setYogaStyle(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4 focus:ring-2 focus:ring-indigo-500"
              >
                <option value="Hatha">Hatha</option>
                <option value="Vinyasa">Vinyasa</option>
                <option value="Ashtanga">Ashtanga</option>
                <option value="Yin">Yin</option>
              </select>
              <label className="block text-lg font-semibold mb-2 text-gray-700">
                Log Yoga Activity (minutes):
              </label>
              <div className="flex">
                <input
                  type="number"
                  value={dailyMinutes}
                  onChange={(e) => setDailyMinutes(e.target.value)}
                  className="flex-1 p-2 border border-gray-300 rounded mr-2 focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  onClick={addDailyActivity}
                  className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-all"
                >
                  Add
                </button>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-700">
                  Activity Log (Last 7)
                </h2>
                <button
                  onClick={resetData}
                  className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-all"
                >
                  Reset All Data
                </button>
              </div>
              <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-indigo-200 text-gray-700">
                    <th className="p-2">Date</th>
                    <th className="p-2">Style</th>
                    <th className="p-2">Minutes</th>
                    <th className="p-2">Goal</th>
                  </tr>
                </thead>
                <tbody>
                  {lastSevenActivities.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="p-4 text-center text-gray-500">
                        No activities logged yet
                      </td>
                    </tr>
                  ) : (
                    lastSevenActivities.map((entry, index) => (
                      <tr key={index} className="bg-white text-center border-b">
                        <td className="p-2">{entry.date}</td>
                        <td className="p-2">{entry.style}</td>
                        <td className="p-2">{entry.minutes}</td>
                        <td className="p-2">{entry.goal}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-700">
                Progress Chart
              </h2>
              {lastSevenActivities.length > 0 ? (
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="minutes"
                      stroke="#6366F1"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-[300px] flex items-center justify-center text-gray-500">
                  No data to display
                </div>
              )}
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4 text-center">
              <h2 className="text-xl font-semibold mb-4 text-gray-700">
                Weekly Progress
              </h2>
              <p className="text-lg font-medium">
                Total:{" "}
                <span className="font-bold text-indigo-700">
                  {weeklyProgress} mins
                </span>
              </p>
              <div className="mt-4 p-3 bg-indigo-50 rounded-lg">
                <p className="font-semibold text-indigo-800">
                  Weekly Goal: {dailyGoal * 7} minutes
                </p>
                {lastSevenActivities.length > 0 && (
                  <>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div
                        className="bg-indigo-600 h-2.5 rounded-full"
                        style={{
                          width: `${Math.min(
                            100,
                            (weeklyProgress / (dailyGoal * 7)) * 100
                          )}%`,
                        }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {Math.round((weeklyProgress / (dailyGoal * 7)) * 100)}%
                      completed
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YogaProgressTracker;
