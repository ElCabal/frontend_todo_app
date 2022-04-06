import React from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const Task = ({ id, task, delTask, setUpdateId, setTaskEdited }) => {
  const onEdit = () => {
    setUpdateId(id);
    setTaskEdited(task);
  };
  return (
    <div className="flex flex-col  gap-2">
      <div className="flex gap-5 mt-6  items-center">
        {" "}
        <p className=" w-4/5 text-gray-700">{task}</p>
        <div className="flex w-1/5 gap-5">
          <button
            className="btn bg-green-500 flex justify-center"
            onClick={onEdit}
          >
            <FaEdit className=" text-2xl text-white" />
          </button>
          <button
            className="btn btn-danger flex justify-center"
            onClick={() => delTask(id)}
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Task;
