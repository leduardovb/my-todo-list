import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function AddNewTask() {
  return (
    <div className="mx-auto mt-14 flex h-10 gap-x-4">
      <Input
        className="h-full w-full max-w-[500px]"
        placeholder="Add new task"
      />
      <Button className="h-full w-[140px]">Add</Button>
    </div>
  );
}
