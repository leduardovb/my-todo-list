"use server";

import db from "@/lib/prisma/db";

export type AddNewTaskDTO = {
  title: string;
};

export type CheckTaskDTO = {
  taskId: string;
  done: boolean;
};

export type UpdateTaskDTO = {
  taskId: string;
  task: string;
};

export async function addNewTask(dto: AddNewTaskDTO) {
  return await db.task.create({
    data: {
      title: dto.title,
    },
  });
}

export async function getAllTasks() {
  return await db.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function deleteTask(taskId: string) {
  return await db.task.delete({
    where: {
      id: taskId,
    },
  });
}

export async function updateTask(dto: UpdateTaskDTO) {
  return await db.task.update({
    where: {
      id: dto.taskId,
    },
    data: {
      title: dto.task,
    },
  });
}

export async function checkTask(dto: CheckTaskDTO) {
  return await db.task.update({
    where: {
      id: dto.taskId,
    },
    data: {
      done: dto.done,
    },
  });
}
