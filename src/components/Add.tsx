"use client";
import { addTodo, deleteTodo, getTodos, updateTodo } from "../app/libs/crud";
import React, { useEffect } from "react";

type Props = {};

const Add = (props: Props) => {
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <button
        onClick={() => addTodo()}
        className=" bg-red-600 w-[200px] h-[40px] flex items-center justify-center rounded-md"
      >
        Create todo
      </button>
      <button
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
      </button>
    </div>
  );
};

export default Add;
