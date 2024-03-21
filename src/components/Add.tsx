"use client";
import React, { useEffect } from "react";
import { getTodos } from "../app/libs/crud";

type Props = {};

const Add = (props: Props) => {
  const getTodos = async () => {
    const res = await fetch("/api/todo");
    const result = await res.json();
    console.log(result);
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <button
        // onClick={() => addTodo()}
        className=" bg-red-600 w-[200px] h-[40px] flex items-center justify-center rounded-md"
      >
        Create todo
      </button>
      {/* <button
        onClick={() => updateTodo()}
        className=" bg-red-600 w-[200px] h-[40px] flex items-center justify-center rounded-md"
      >
        Update todo
      </button>
      <button
        onClick={() => deleteTodo()}
        className=" bg-red-600 w-[200px] h-[40px] flex items-center justify-center rounded-md"
      >
        Update todo
      </button> */}
    </div>
  );
};

export default Add;
