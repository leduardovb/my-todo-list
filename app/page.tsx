import { AddNewTask } from "@/components/add-new-task";
import { Tasks } from "@/components/tasks";

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col p-10 sm:text-start md:text-center">
      <h1 className="text-5xl font-bold text-primary">TODO</h1>
      <AddNewTask />
      <Tasks />
    </main>
  );
}
