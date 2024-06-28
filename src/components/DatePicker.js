import React from "react";

const DatePicker = ({ week, setWeek }) => {
  const handleChange = (event) => {
    setWeek(new Date(event.target.value));
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Select Week:</label>
      <input
        type="date"
        value={week.toISOString().substr(0, 10)}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};

export default DatePicker;
