import React from "react";
import {
  Table,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
} from "@/components/ui/table";

import DialogTable from "./DialogTable";
import DashboardTableData from "./DashboardTableData";
import { getUserName } from "@/utils/getUserName";
import { filterMoneyFlowData } from "@/utils/filterMoneyFlowData";

export default async function DashboardTable(props) {
  const username = await getUserName();
  const response = await fetch(
    `https://v1.appbackend.io/v1/rows/1Bp2Pkk8ordW?filterKey=username&filterValue=${username}`
  );

  const { data } = await response.json();
  const userData = await filterMoneyFlowData(data, props.title.toLowerCase());
  const total = userData.reduce((x, y) => x + +y.amount, 0);

  return (
    <div>
      <section className="flex justify-between">
        <h3 className="font-semibold">{props.title}</h3>
        <DialogTable title={props.title}></DialogTable>
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
        <>
          {data.length != 0 && (
            <>
              {userData.map((dataRow, i) => (
                <DashboardTableData key={i} data={dataRow} rowNumb={i + 1} />
              ))}
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right">Rp {total}</TableCell>
                </TableRow>
              </TableFooter>
            </>
          )}
          {data.length == 0 && (
            <TableBody>
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center text-xl text-gray-400"
                >
                  No Data yet
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </>
      </Table>
    </div>
  );
}
