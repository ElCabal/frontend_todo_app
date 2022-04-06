import React from "react";
import "../index.css";
import { VscAdd } from "react-icons/vsc";
import { useState } from "react";

const NoteTask = () => {
  const [task, setTask] = useState("");
  return (
    <div className="flex justify-between gap-5 md:text-2xl 	">
      <input
        type="text"
        placeholder="Agrega una tarea"
        className=" rounded-lg border-2 placeholder-gray-400 w-4/5  p-3  bg-slate-100 "
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        type="submit"
        className="btn bg-cyan-600 flex justify-center items-center   w-1/5"
      >
        <VscAdd className=" text-white font-bold text-2xl" />
      </button>
    </div>
  );
};

export default NoteTask;
