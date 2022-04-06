import React from "react";
import NoteTask from "./NoteTask";
import Task from "./Task";
import Title from "./Title";

const Container = () => {
  return (
    <div className="  flex flex-col bg-white shadow-lg rounded-xl  w-full max-w-4xl px-8 py-8 gap-8	font-Nunito">
      <div>
        <NoteTask />
      </div>

      <div className=" text-xl">
        <Task task="Resolver problemas de despliegue" />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
};

export default Container;
