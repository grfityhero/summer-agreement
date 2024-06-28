import React from "react";

const DatePicker = ({ week, setWeek }) => {
  const handleChange = (event) => {
    setWeek(event.target.value);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2"> שבוע:</label>
      <input
        type="date"
        value={week}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
      />
    </div>
  );
};

export default DatePicker;
