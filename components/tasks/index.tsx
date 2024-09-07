"use client";

import useTasks from "@/lib/react-query/use-tasks";
import { ScrollArea } from "../ui/scroll-area";
import TasksItem from "./tasks-item";
import { TasksSkeleton } from "./tasks-skeleton";

export function Tasks() {
  const { data, isLoading, error } = useTasks();

  if (error) {
    return (
      <div className="mx-auto mt-10 flex w-full justify-center overflow-hidden md:max-w-[680px]">
        <h3 className="text-lg font-bold">Error on list taks</h3>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-10 flex w-full overflow-hidden md:max-w-[680px]">
      <ScrollArea className="flex w-full">
        <ul className="flex w-[calc(90vw-2.5rem)] flex-col gap-y-2 md:w-full md:max-w-[680px]">
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
