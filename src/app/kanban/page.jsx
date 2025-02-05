'use client'
import { useState } from "react";

const KanbanBoard = () => {
  const [columns, setColumns] = useState({
    todo: [{ id: "1", text: "Task 1" }, { id: "2", text: "Task 2" }],
    inProgress: [{ id: "3", text: "Task 3" }],
    done: [{ id: "4", text: "Task 4" }]
  });

  const [draggedItem, setDraggedItem] = useState(null);
  const [draggedOverIndex, setDraggedOverIndex] = useState(null);

  const handleDragStart = (e, item, sourceColumn, index) => {
    setDraggedItem({ item, sourceColumn, index });
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e, targetColumn, targetIndex) => {
    e.preventDefault();
    setDraggedOverIndex(targetIndex);
  };

  const handleDrop = (e, targetColumn) => {
    e.preventDefault();
    if (!draggedItem) return;

    setColumns((prevColumns) => {
      const { item, sourceColumn, index } = draggedItem;

      let updatedColumns = { ...prevColumns };

      if (sourceColumn === targetColumn) {
        updatedColumns[targetColumn] = handleSort(
          updatedColumns[targetColumn],
          index,
          draggedOverIndex
        );
      } else {
        updatedColumns[sourceColumn] = updatedColumns[sourceColumn].filter(
          (task) => task.id !== item.id
        );
        updatedColumns[targetColumn] = [...updatedColumns[targetColumn], item];
      }

      return updatedColumns;
    });

    setDraggedItem(null);
    setDraggedOverIndex(null);
  };

  // 🛠 **Separate Sorting Function**
  const handleSort = (columnTasks, fromIndex, toIndex) => {
    const updatedTasks = [...columnTasks];
    const [movedItem] = updatedTasks.splice(fromIndex, 1); // Remove dragged item
    updatedTasks.splice(toIndex, 0, movedItem); // Insert at new position
    return updatedTasks;
  };

  // 🚀 **Handle Button Click**
  const handleButtonClick = (task) => {
    alert(`Clicked on: ${task.text}`);
  };

  console.log(columns)

  return (
    <div className="flex gap-4 p-4">
      {Object.entries(columns).map(([columnId, tasks]) => (
        <div
          key={columnId}
          className="w-64 min-h-40 bg-gray-100 p-4 rounded-md shadow-md"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, columnId)}
        >
          <h3 className="text-lg font-semibold mb-2">{columnId.toUpperCase()}</h3>
          {tasks.map((task, index) => (
            <div
              key={task.id}
              draggable
              onDragStart={(e) => handleDragStart(e, task, columnId, index)}
              onDragOver={(e) => handleDragOver(e, columnId, index)}
              className="p-2 bg-white shadow-md rounded-md cursor-pointer mb-2 flex justify-between items-center"
            >
              <span>{task.text}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // 🔥 Prevents drag event from triggering
                  handleButtonClick(task);
                }}
                className="bg-blue-500 text-white px-2 py-1 rounded text-sm"
              >
                Click
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
