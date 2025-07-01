import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createNewData } from "./action";
import { getUserName } from "@/utils/getUserName";

export default async function DialogTable({ title }) {
  const username = await getUserName();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="hover:cursor-pointer h-7 rounded-sm">Add</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={createNewData}>
          <DialogHeader>
            <DialogTitle>Add {title}</DialogTitle>
            <DialogDescription>Add money to your pocket</DialogDescription>
          </DialogHeader>
          <div className="my-2 grid gap-3">
            <div className="grid gap-2">
              <Label htmlFor="source">Source</Label>
              <Input id="source" name="name" defaultValue="Salary" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="amount">Amount</Label>
              <Input id="amount" name="amount" type="number" defaultValue="0" />
              <Input
                id="category"
                name="category"
                value={title.toLowerCase()}
                readOnly
                hidden
              />
              <Input
                id="username"
                name="username"
                value={username}
                readOnly
                hidden
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Add Data</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
