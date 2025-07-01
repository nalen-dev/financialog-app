"use client";

import { useEffect, useState } from "react";

export default function CardResult(props) {
  const [moneyAllocation, setMoneyAllocation] = useState(null);

  useEffect(() => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
    };

    const username = getCookie("username");

    const fetchData = async () => {
      const response = await fetch(
        "https://v1.appbackend.io/v1/rows/1Bp2Pkk8ordW?filterKey=username&filterValue=" +
          username
      );
      const { data } = await response.json();

      const totalIncome = data
        .filter((x) => x.category == "income")
        .reduce((x, y) => x + +y.amount, 0);

      const totalExpense = data
        .filter((x) => x.category == "expense")
        .reduce((x, y) => x + +y.amount, 0);

      console.log(totalExpense, totalIncome);

      setMoneyAllocation({ income: totalIncome, expense: totalExpense });
    };
    fetchData();
  }, []);
  return (
    <>
      <section className="relative h-28 border bg-zinc-100 rounded p-3">
        <h2 className="text-zinc-600">{props.title}</h2>
        <p className="absolute right-3 bottom-4 text-3xl font-bold">
          Rp{" "}
          {moneyAllocation && moneyAllocation.income - moneyAllocation.expense}
        </p>
      </section>
    </>
  );
}
