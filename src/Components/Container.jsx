import React from "react";
import { VscAdd } from "react-icons/vsc";
import { useState } from "react";
import axios from "axios";
import "../index.css";
import Task from "./Task";
import { useEffect } from "react";
import { Swal } from "sweetalert2";

const Container = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const [updateId, setUpdateId] = useState("");
  const [updateInput, setUpdateInput] = useState("");
  const [taskEdited, setTaskEdited] = useState("");

  useEffect(() => {
    axios
      .get("https://apirest-to-do-app.herokuapp.com/api/tasks")
      .then((res) => setTodo(res.data))
      .catch((error) => console.log(error));
  }, []);

  const delTask = (id) => {
    axios
      .delete("https://apirest-to-do-app.herokuapp.com/api/tasks/" + id)
      .then((res) => {
        setTodo(todo.filter((item) => item._id != id));
      })
      .catch((error) => console.log(error));
  };

  const putTask = (e) => {
    e.preventDefault();
    axios
      .put("https://apirest-to-do-app.herokuapp.com/api/tasks/" + updateId, {
        task: updateInput,
      })
      .then((res) => {
        setTodo(
          todo.map((item) =>
            item._id === updateId ? { ...item, task: updateInput } : item
          )
        );
        setUpdateId("");
      })
      .catch((error) => console.log(error));
  };

  const addTask = (e) => {
    e.preventDefault();
    if (task === "") {
      return alert("Por favor introduce una tarea");
    } else {
      axios
        .post("https://apirest-to-do-app.herokuapp.com/api/tasks/", {
          task: task,
        })
        .then((res) => {
          window.location.reload(false);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="  flex flex-col bg-white shadow-lg rounded-xl  w-full max-w-4xl px-8 py-8 gap-8	font-Nunito">
      <form
        className="flex justify-between gap-5 md:text-2xl 	"
        onSubmit={addTask}
      >
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
      </form>

      {updateId && (
        <form
          onSubmit={putTask}
          className="flex justify-between gap-5 md:text-2xl 	"
        >
          <input
            type="text"
            placeholder="Editar una tarea"
            className=" rounded-lg border-2 placeholder-gray-400 w-4/5  p-3  bg-slate-100 "
            onChange={(e) => setUpdateInput(e.target.value)}
            defaultValue={taskEdited}
          />
          <button
            type="submit"
            className="btn bg-cyan-600 flex justify-center items-center   w-1/5"
          >
            <VscAdd className=" text-white font-bold text-2xl" />
          </button>
        </form>
      )}

      <div className=" text-xl">
        {todo.map((item) => (
          <Task
            id={item._id}
            key={item._id}
            task={item.task}
            delTask={delTask}
            setUpdateId={setUpdateId}
            setTaskEdited={setTaskEdited}
          />
        ))}
      </div>
    </div>
  );
};

export default Container;
