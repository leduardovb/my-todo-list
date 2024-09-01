import { Task } from "@prisma/client";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";
import { useCheckTask } from "@/lib/react-query/use-check-task";
import { CheckedState } from "@radix-ui/react-checkbox";
import debounce from "lodash.debounce";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { useDeleteTask } from "@/lib/react-query/use-delete-task";

interface Props {
  task: Task;
}

export default function TasksItem({ task }: Props) {
  const { mutate: checkTask } = useCheckTask();
  const { mutate: deleteTask } = useDeleteTask();

  const isDone = task.done;
  const formattedDate = task.createdAt.toLocaleDateString("pt-BR");

  const handleCheck = (done: CheckedState) => {
    checkTask({ taskId: task.id, done: !!done });
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <Card className="flex items-center gap-x-4 p-6 shadow">
      <Checkbox
        className="size-5"
        defaultChecked={isDone}
        onCheckedChange={debounce(handleCheck, 200)}
      />
      <CardHeader
        className={cn(
          "m-0 h-full w-full overflow-hidden p-0 text-start",
          isDone && "text-muted-foreground",
        )}
      >
        <CardDescription className="text-xs">{formattedDate}</CardDescription>
        <CardTitle
          title={task.title}
          className={cn(isDone && "line-through", "truncate")}
        >
          {task.title}
        </CardTitle>
      </CardHeader>
      <CardFooter className="p-0">
        <Button variant="ghost" size="icon" onClick={handleDelete}>
          <Trash2 size={18} />
        </Button>
      </CardFooter>
    </Card>
  );
}
