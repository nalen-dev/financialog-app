import React from "react";
import DashboardTable from "@/components/DashboardTable";
import CardResult from "@/components/CardResult";

export default async function Page() {
  const response = await fetch("https://v1.appbackend.io/v1/rows/BpHYhywCeh7S");
  const data = await response.json();

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
          <DashboardTable title="Expenses" />
        </section>
        <section className="w-full grid grid-cols-2 gap-4">
          <CardResult title="Current Balance" />
          <CardResult title="Needs" />
          <CardResult title="Saving" />
          <CardResult title="Wants" />
          <CardResult title="Others" />
        </section>
      </main>
    </div>
  );
}
