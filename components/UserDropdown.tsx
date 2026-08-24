"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NavItems from "@/components/NavItems";

const user = {
  name: "TradeSignal User",
};

export default function UserDropdown() {
  const router = useRouter();

  const handleSignOut = () => {
    router.push("/sign-in");
  };

  const initials = user.name.charAt(0).toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          variant="ghost"
          className="flex items-center gap-3 rounded-full px-2 py-1.5 hover:bg-white/5"
        >
          <Avatar className="h-8 w-8 border border-yellow-500/30">
            <AvatarFallback className="bg-yellow-500 text-sm font-bold text-yellow-900">
              {initials}
            </AvatarFallback>
          </Avatar>

          <span className="hidden md:flex flex-col items-start text-base font-medium text-gray-400">
            <span className="leading-none text-gray-400">{user.name}</span>
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56 rounded-xl border border-gray-700 bg-[#111827] p-2 text-gray-100 shadow-lg">
        <DropdownMenuSeparator className="bg-gray-600" />

        <nav className="sm:hidden py-1">
          <NavItems />
        </nav>

        <DropdownMenuSeparator className="sm:hidden bg-gray-600" />

        <DropdownMenuItem
          onClick={handleSignOut}
          className="flex cursor-pointer items-center rounded-md px-2 py-2 text-gray-400 focus:bg-transparent focus:text-yellow-500"
        >
          <LogOut className="mr-2 hidden h-4 w-4 sm:inline" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
