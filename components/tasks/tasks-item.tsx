import { Card, CardHeader, CardTitle } from "../ui/card";

export default function TasksItem() {
  return (
    <Card className="h-14 shadow">
      <CardHeader className="m-0 h-full flex-row text-start">
        <CardTitle className="self-center">Task 1</CardTitle>
      </CardHeader>
    </Card>
  );
}
