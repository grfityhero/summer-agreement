import React from "react";

const Summary = ({ tasks }) => {
  const calculateSummary = () => {
    let total = 0;
    let success = 0;

    Object.keys(tasks).forEach((week) => {
      Object.keys(tasks[week]).forEach((task) => {
        total += 1;
        if (tasks[week][task].success) success += 1;
      });
    });

    return total > 0 ? Math.round((success / total) * 100) : 0;
  };

  const percentage = calculateSummary();

  return (
    <div className="mt-4 p-4 bg-purple-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-purple-700">Summary</h2>
      <p className="text-purple-700">Success rate: {percentage}%</p>
    </div>
  );
};

export default Summary;
