"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useActionState } from "react";
import { loginAction } from "./action";

export default function Page() {
  const [_, action, pending] = useActionState(loginAction, null);

  return (
    <div className="flex flex-col justify-center h-screen m-auto max-w-2xs">
      <form action={action} className="flex flex-col gap-2">
        <h2 className="text-lg">
          Welcome to <span className="font-semibold">FincanciaLog</span>
        </h2>
        <Input name="username" placeholder="Username" />
        <Button
          disabled={pending}
          type="submit"
          className="hover:cursor-pointer"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
