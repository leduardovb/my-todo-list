"use client";

import useTasks from "@/lib/react-query/use-tasks";
import { ScrollArea } from "../ui/scroll-area";
import TasksItem from "./tasks-item";
import { TasksSkeleton } from "./tasks-skeleton";

export function Tasks() {
  const { data, isLoading, error } = useTasks();

  console.log(error);

  return (
    <div className="mx-auto mt-10 flex w-full max-w-[680px] overflow-hidden">
      <ScrollArea className="w-full">
        <ul className="flex flex-col gap-y-2">
          {isLoading &&
            new Array(5).fill(null).map((_, index) => (
              <li key={index}>
                <TasksSkeleton />
              </li>
            ))}

          {data?.map((task) => (
            <li key={task.id}>
              <TasksItem task={task} />
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
}
