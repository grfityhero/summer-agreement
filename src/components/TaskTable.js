import React from "react";

const TaskTable = ({ week, tasks, updateTasks }) => {
  const taskList = [
    "לצאת מחוץ לרעננה (ערב לילה) פעם בשבוע",
    "פעמיים בשבוע מותר עד 2 בלילה לחזור אבל להיות מאחת בבית של חברים לא בחוץ",
    "פעמיים בשבוע עד אחת בלילה",
    "שלושה ימים בשבוע ב12.30",
    "שינה אצל חברה פעמיים בשבוע",
    "מותר בימים אחרים גם אצלנו שינה עם חברה",
    "50₪ בשבוע אם תוריד את ליאו הכלב שלה 3 פעמים בשבוע",
  ];

  const handleCheckboxChange = (task, type) => {
    const newTasks = { ...tasks };
    if (!newTasks[week]) newTasks[week] = {};
    if (!newTasks[week][task])
      newTasks[week][task] = { success: false, failed: false };

    newTasks[week][task][type] = !newTasks[week][task][type];
    updateTasks(newTasks);
  };

  return (
    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead className="bg-purple-600 text-white">
        <tr>
          <th className="py-2 px-4">Task</th>
          <th className="py-2 px-4">יופי</th>
          <th className="py-2 px-4">עבד לא</th>
        </tr>
      </thead>
      <tbody>
        {taskList.map((task, index) => (
          <tr
            key={index}
            className={`bg-${index % 2 === 0 ? "gray-100" : "white"}`}
          >
            <td className="border px-4 py-2">{task}</td>
            <td className="border px-4 py-2 text-center">
              <input
                type="checkbox"
                checked={
                  tasks[week] && tasks[week][task]
                    ? tasks[week][task].success
                    : false
                }
                onChange={() => handleCheckboxChange(task, "success")}
                className="form-checkbox text-green-500"
              />
            </td>
            <td className="border px-4 py-2 text-center">
              <input
                type="checkbox"
                checked={
                  tasks[week] && tasks[week][task]
                    ? tasks[week][task].failed
                    : false
                }
                onChange={() => handleCheckboxChange(task, "failed")}
                className="form-checkbox text-red-500"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
