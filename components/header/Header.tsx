"use client";

import Link from "next/link";
import { LogoutButton } from "../auth/LogoutButton";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const Header = () => {
  const pathName = usePathname();

  return (
    <header className="flex justify-between items-center p-3 bg-slate-900 text-white">
      <div className="text-2xl font-bold">
        <Link href="/">DataKavach</Link>
      </div>
      <nav className="space-x-4">
        <Link
          href="/upload"
          className={cn(pathName === "/upload" ? "underline" : "no-underline")}
        >
          Upload A File
        </Link>
        <Link
          href="/receive"
          className={cn(pathName === "/receive" ? "underline" : "no-underline")}
        >
          Download Received Files
        </Link>
        <Link
          href="/profile"
          className={cn(pathName === "/profile" ? "underline" : "no-underline")}
        >
          Manage Your Profile
        </Link>
      </nav>

      <div>
        <LogoutButton>Logout</LogoutButton>
      </div>
    </header>
  );
};
