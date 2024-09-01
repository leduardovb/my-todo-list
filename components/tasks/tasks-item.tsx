import { Task } from "@prisma/client";
import { Card, CardFooter, CardHeader } from "../ui/card";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Edit2, Save, Trash2, X } from "lucide-react";
import { useDeleteTask } from "@/lib/react-query/use-delete-task";
import { useMemo } from "react";
import { Input } from "../ui/input";
import TaskCheckbox from "./task/task-checkbox";
import { TaskTitle } from "./task/task-title";
import { useTaskEditor } from "./task/hooks/use-task-editor";
import { useUpdateTask } from "@/lib/react-query/use-update-task";

interface Props {
  task: Task;
}

export default function TasksItem({ task }: Props) {
  const { mutate: deleteTask } = useDeleteTask();
  const { mutate: updateTask } = useUpdateTask();
  const {
    isEditing,
    editedTitle,
    startEditing,
    updateEditing,
    cancelEditing,
    saveEditing,
  } = useTaskEditor(task.title, (title) =>
    updateTask({ taskId: task.id, task: title }),
  );

  const isDone = task.done;

  const formattedDate = useMemo(
    () => task.createdAt.toLocaleDateString("pt-BR"),
    [task.createdAt],
  );

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateEditing(e.target.value);
  };

  return (
    <Card className="flex min-h-[88px] items-center gap-x-4 p-6 shadow">
      {!isEditing && <TaskCheckbox taskId={task.id} isDone={isDone} />}
      <CardHeader
        className={cn(
          "m-0 h-full w-full overflow-hidden p-0 text-start",
          isDone && "text-muted-foreground",
        )}
      >
        {isEditing ? (
          <Input
            onChange={handleUpdate}
            defaultValue={editedTitle}
            className="focus-visible:ring-0"
          />
        ) : (
          <TaskTitle
            isDone={isDone}
            title={task.title}
            formattedDate={formattedDate}
          />
        )}
      </CardHeader>
      <CardFooter className="p-0">
        {!isEditing && (
          <>
            {!isDone && (
              <Button
                size="icon"
                variant="ghost"
                onClick={startEditing}
                aria-label="Edit Task"
              >
                <Edit2 size={18} />
              </Button>
            )}
            <Button
              size="icon"
              variant="ghost"
              onClick={handleDelete}
              aria-label="Delete Task"
            >
              <Trash2 size={18} />
            </Button>
          </>
        )}
        {isEditing && (
          <>
            <Button
              size="icon"
              variant="ghost"
              onClick={saveEditing}
              aria-label="Save Edit"
            >
              <Save size={18} />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={cancelEditing}
              aria-label="Cancel Edit"
            >
              <X size={18} />
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
