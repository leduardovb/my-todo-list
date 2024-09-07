import { deleteTask } from "@/app/actions";
import { Task } from "@prisma/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "./query-keys";

export function useDeleteTask() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteTask,
    onMutate: (taskId: string) => {
      queryClient.setQueryData<Array<Task>>(queryKeys.tasks.list, (prev) => {
        if (prev) {
          return prev.filter((task) => task.id !== taskId);
        }
        return prev;
      });
    },
  });
  return mutation;
}
