import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col justify-center h-screen m-auto max-w-2xs">
      <form className="flex flex-col gap-2">
        <h2 className="text-lg">
          Welcome to <span className="font-semibold">FincanciaLog</span>
        </h2>
        <Input placeholder="Username" />
        <Button className="hover:cursor-pointer">
          <Link href="/">Login</Link>
        </Button>
      </form>
    </div>
  );
}
