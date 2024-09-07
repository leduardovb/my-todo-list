"use client";

import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "./query-keys";
import { getAllTasks } from "@/app/actions";

export default function useTasks() {
  const query = useQuery({
    queryKey: queryKeys.tasks.list,
    queryFn: () => getAllTasks(),
  });
  return query;
}
