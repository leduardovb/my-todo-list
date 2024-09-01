import { Task } from "@prisma/client";
import { Card, CardHeader, CardTitle } from "../ui/card";

interface Props {
  task: Task;
}

export default function TasksItem({ task }: Props) {
  return (
    <Card className="h-14 shadow">
      <CardHeader className="m-0 h-full flex-row text-start">
        <CardTitle className="self-center">{task.title}</CardTitle>
      </CardHeader>
    </Card>
  );
}
