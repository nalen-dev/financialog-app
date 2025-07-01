import React from "react";
import DashboardTable from "@/components/DashboardTable";
import CardResult from "@/components/CardResult";
import { cookies } from "next/headers";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { logoutAction } from "./action";
import { redirect } from "next/navigation";

export default async function Page() {
  const cookiesStore = await cookies();

  const cookie = cookiesStore.get("username");
  if (!cookie) {
    redirect("/login");
  }
  const username = cookie.value;

  return (
    <div>
      <header className="flex items-center justify-between">
        <h1>FinanciaLog</h1>
        <div className="flex items-center gap-2">
          <h2>
            Welcome Back, <span className="font-semibold">{username}!</span>
          </h2>
          <form action={logoutAction}>
            <Input name="username" defaultValue={username} hidden />
            <Button
              variant="destructive"
              className="h-8 hover:cursor-pointer hover:bg-red-500"
            >
              Logout
            </Button>
          </form>
        </div>
      </header>
      <main className="grid grid-cols-2 gap-10 my-10">
        <section className="grid grid-cols-2 gap-5">
          <DashboardTable title="Income" />
          <DashboardTable title="Expense" />
        </section>
        <section className="w-full grid grid-cols-2 gap-4">
          <CardResult title="Current Balance" />
        </section>
      </main>
    </div>
  );
}
