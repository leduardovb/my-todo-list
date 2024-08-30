import { DeleteIcon, EditIcon, TrashIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle } from "../ui/card";

export default function TasksItem() {
  return (
    <Card className="shadow">
      <CardHeader className="m-0 flex-row text-start">
        <CardTitle className="self-center">Task 1</CardTitle>

        <div className="ml-auto flex items-center space-x-2">
          <Button size={"icon"} variant={"destructive"}>
            <TrashIcon size={18} />
          </Button>
          <Button size={"icon"} variant={"default"}>
            <EditIcon size={18} />
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
}
