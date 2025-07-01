import React from "react";
import DashboardTable from "@/components/DashboardTable";
import CardResult from "@/components/CardResult";

export default async function Page() {
  return (
    <div>
      <header className="flex items-center justify-between">
        <h1>FinanciaLog</h1>
        <h2>
          Welcome Back, <span className="font-semibold">Nalendra!</span>
        </h2>
      </header>
      <main className="grid grid-cols-2 gap-10 my-10">
        <section className="grid grid-cols-2 gap-5">
          <DashboardTable title="Income" />
          <DashboardTable title="Expense" />
        </section>
        <section className="w-full grid grid-cols-2 gap-4">
          <CardResult title="Current Balance" income={500000} expense={20000} />
        </section>
      </main>
    </div>
  );
}
