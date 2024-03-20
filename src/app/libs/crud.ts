"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addTodo = async () => {
  try {
    const createTodo = {
      title: "test-2",
    };
    const res = await prisma.todo.create({
      data: createTodo,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTodos = async () => {
  try {
    const res = await prisma.todo.findMany();
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async () => {
  try {
    const createTodo = "try";

    const res = await prisma.todo.updateMany({
      where: {
        id: "65fa6fc8ba8c91ee1cc12d87",
      },
      data: {
        title: createTodo,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async () => {
  try {
    const createTodo = "try";

    const res = await prisma.todo.deleteMany({
      where: {
        id: "65fa6fc8ba8c91ee1cc12d87",
      },
    });
  } catch (error) {
    console.log(error);
  }
};
