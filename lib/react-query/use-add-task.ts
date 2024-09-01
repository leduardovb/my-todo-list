"use client";

import { addNewTask, AddNewTaskDTO } from "@/server/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "./query-keys";
import { Task } from "@prisma/client";

export function useAddTask() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: addNewTask,
    onMutate: (dto) => {
      queryClient.setQueryData(
        queryKeys.tasks.list,
        (old: Array<Task> | undefined) => {
          if (!old) {
            return [{ id: 0, title: dto.title, done: false }];
          }
          return [{ id: 0, title: dto.title, done: false }, ...old];
        },
      );
    },
    onSuccess: (createdTask) => {
      queryClient.setQueryData(queryKeys.tasks.list, (old: Array<Task>) => {
        return old.map((task) => {
          if (task.id === 0) {
            return createdTask;
          }
          return task;
        });
      });
    },
  });
  return mutate;
}
