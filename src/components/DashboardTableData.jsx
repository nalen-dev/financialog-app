import React from "react";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
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
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { editData } from "./action";

export default async function DashboardTableData(props) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <TableBody>
            <TableRow className="hover:cursor-pointer hover:bg-gray-200">
              <TableCell className="font-medium">{props.rowNumb}</TableCell>
              <TableCell className="text-left" colSpan={2}>
                {props.data.name_0}
              </TableCell>
              <TableCell className="text-right">
                Rp {props.data.amount}
              </TableCell>
            </TableRow>
          </TableBody>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form action={editData}>
            <DialogHeader>
              <DialogTitle>Add {props.title}</DialogTitle>
              <DialogDescription>Add money to your pocket</DialogDescription>
            </DialogHeader>
            <div className="my-2 grid gap-3">
              <div className="grid gap-2">
                <Label htmlFor="source">Source</Label>
                <Input
                  id="source"
                  name="name"
                  defaultValue={props.data.name_0}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="amount">Amount</Label>
                <Input
                  id="amount"
                  name="amount"
                  type="number"
                  defaultValue={+props.data.amount}
                />
                <Input
                  id="category"
                  name="category"
                  value={props.data.category}
                  readOnly
                  hidden
                />
                <Input
                  id="username"
                  name="username"
                  value="nalendraprajaa"
                  readOnly
                  hidden
                />
                <Input
                  id="_id"
                  name="_id"
                  value={props.data._id}
                  readOnly
                  hidden
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                type="submit"
                variant="destructive"
                name="action"
                value="delete"
              >
                Delete Data
              </Button>
              <Button type="submit" name="action" value="save">
                Save Data
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
