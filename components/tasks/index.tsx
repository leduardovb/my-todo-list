import { ScrollArea } from "../ui/scroll-area";
import TasksItem from "./tasks-item";

const mockTasks = [
  {
    id: 1,
    title: "Task 1",
    completed: false,
  },
  {
    id: 2,
    title: "Task 2",
    completed: true,
  },
  {
    id: 3,
    title: "Task 3",
    completed: false,
  },
  {
    id: 4,
    title: "Task 3",
    completed: false,
  },
  {
    id: 5,
    title: "Task 3",
    completed: false,
  },
  {
    id: 6,
    title: "Task 3",
    completed: false,
  },
  {
    id: 7,
    title: "Task 3",
    completed: false,
  },
  {
    id: 8,
    title: "Task 3",
    completed: false,
  },
];

export function Tasks() {
  return (
    <div className="mx-auto mt-10 flex w-full max-w-[680px] overflow-hidden">
      <ScrollArea className="w-full">
        <ul className="flex flex-col gap-y-2">
          {mockTasks.map((task) => (
            <li key={task.id}>
              <TasksItem />
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
}
