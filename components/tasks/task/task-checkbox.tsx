"use client";

import debounce from "lodash.debounce";
import { useCallback } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { useCheckTask } from "@/lib/react-query/use-check-task";
import { CheckedState } from "@radix-ui/react-checkbox";

interface Props {
  taskId: string;
  isDone: boolean;
}

export default function TaskCheckbox({ taskId, isDone }: Props) {
  const { mutate: checkTask } = useCheckTask();

  const handleCheck = useCallback(
    (done: CheckedState) => {
      checkTask({ taskId, done: !!done });
    },
    [checkTask, taskId],
  );

  return (
    <Checkbox
      className="size-5"
      defaultChecked={isDone}
      onCheckedChange={debounce(handleCheck, 200)}
    />
  );
}
