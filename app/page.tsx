import { AddNewTaskForm } from "@/components/add-new-task-form";
import { ModeToggle } from "@/components/mode-toggle";
import { Tasks } from "@/components/tasks";

export default function Home() {
  return (
    <main className="relative flex h-screen w-full flex-col p-10 sm:text-start md:text-center">
      <div className="absolute right-0 top-0 mr-4 mt-4">
        <ModeToggle />
      </div>
      <h1 className="text-5xl font-bold text-primary">TODO</h1>
      <AddNewTaskForm />
      <Tasks />
    </main>
  );
}
