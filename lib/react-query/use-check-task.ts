import { checkTask } from "@/app/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "./query-keys";
import { Task } from "@prisma/client";

export function useCheckTask() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: checkTask,
    onMutate: (dto) => {
      queryClient.setQueryData<Array<Task>>(queryKeys.tasks.list, (prev) => {
        if (prev) {
          return prev.map((task) => {
            if (task.id === dto.taskId) {
              return { ...task, done: dto.done };
            }
            return task;
          });
        }
        return prev;
      });
    },
  });
  return mutation;
}
