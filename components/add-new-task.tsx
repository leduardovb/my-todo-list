import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";

export function AddNewTask() {
  return (
    <div className="mx-auto mt-14 flex h-14 w-full max-w-[680px] gap-x-4">
      <Card className="w-full">
        <Input placeholder="Add new task" className="h-full w-full border-0" />
      </Card>
      <Button className="h-full w-[140px]">Add</Button>
    </div>
  );
}
