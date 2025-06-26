import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import DialogTable from "./DialogTable";

export default function DashboardTable(props) {
  return (
    <div>
      <section className="flex justify-between">
        <h3 className="font-semibold">{props.title}</h3>
        <DialogTable></DialogTable>
      </section>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[10px]">No</TableHead>
            <TableHead className="text-left" colSpan={2}>
              Source
            </TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell className="text-left" colSpan={2}>
              Gaji
            </TableCell>
            <TableCell className="text-right">Rp 500.000</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">Rp 500.000</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
