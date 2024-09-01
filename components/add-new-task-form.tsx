"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { useAddTask } from "@/lib/react-query/use-add-task";

export function AddNewTaskForm() {
  const [task, setTask] = useState("");
  const { mutate, isPending } = useAddTask();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTask("");
    mutate({ title: task });
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="mx-auto mt-14 flex h-14 w-full max-w-[680px] gap-x-4">
        <Card className="w-full">
          <Input
            value={task}
            onChange={handleOnChange}
            placeholder="Add new task"
            disabled={isPending}
            className="h-full w-full border-0"
          />
        </Card>
        <Button
          type="submit"
          className="h-full w-[140px]"
          disabled={!task.trim() || isPending}
        >
          Add
        </Button>
      </div>
    </form>
  );
}
