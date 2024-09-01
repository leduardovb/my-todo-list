"use server";

import db from "@/lib/prisma/db";

export type AddNewTaskDTO = {
  title: string;
};

export type CheckTaskDTO = {
  taskId: number;
  done: boolean;
};

export async function addNewTask(dto: AddNewTaskDTO) {
  return db.task.create({
    data: {
      title: dto.title,
    },
  });
}

export async function getAllTasks() {
  return db.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function deleteTask(taskId: number) {
  return db.task.delete({
    where: {
      id: taskId,
    },
  });
}

export async function updateTask(taskId: number, task: string) {
  return db.task.update({
    where: {
      id: taskId,
    },
    data: {
      title: task,
    },
  });
}

export async function checkTask(dto: CheckTaskDTO) {
  return db.task.update({
    where: {
      id: dto.taskId,
    },
    data: {
      done: dto.done,
    },
  });
}
