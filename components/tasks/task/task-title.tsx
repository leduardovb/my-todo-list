import { CardDescription, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  isDone: boolean;
  formattedDate: string;
}

export function TaskTitle({ title, isDone, formattedDate }: Props) {
  return (
    <>
      <CardDescription className="text-xs">{formattedDate}</CardDescription>
      <CardTitle
        title={title}
        className={cn(isDone && "line-through", "truncate")}
      >
        {title}
      </CardTitle>
    </>
  );
}
