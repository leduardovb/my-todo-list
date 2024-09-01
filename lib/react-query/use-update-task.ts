"use client";

import { updateTask } from "@/server/actions";
import { Task } from "@prisma/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "./query-keys";

export function useUpdateTask() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: updateTask,
    onMutate: (dto) => {
      queryClient.setQueryData<Array<Task>>(queryKeys.tasks.list, (prev) => {
        if (prev) {
          return prev.map((task) => {
            if (task.id === dto.taskId) {
              return {
                ...task,
                title: dto.task,
              };
            }
            return task;
          });
        }
      });
    },
  });
  return mutation;
}
