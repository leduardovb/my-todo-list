"use client";

import { addNewTask, AddNewTaskDTO } from "@/app/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "./query-keys";
import { Task } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

export function useAddTask() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: addNewTask,
    onMutate: (dto) => {
      const id = uuidv4();
      queryClient.setQueryData(
        queryKeys.tasks.list,
        (old: Array<Task> | undefined) => {
          const createdAt = new Date();
          const newTask = {
            id,
            title: dto.title,
            done: false,
            createdAt,
          };
          if (!old) {
            return [newTask];
          }
          return [newTask, ...old];
        },
      );
      return id;
    },
    onSuccess: (createdTask, _, id) => {
      queryClient.setQueryData(queryKeys.tasks.list, (old: Array<Task>) => {
        return old.map((task) => {
          if (task.id === id) {
            return createdTask;
          }
          return task;
        });
      });
    },
  });
  return mutate;
}
