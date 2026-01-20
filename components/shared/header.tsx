"use client";

import Image from "next/image";
import { LogOut, User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/lib/hooks/use-auth";
import { toast } from "sonner";

export function Header() {
  const { logout, getUserEmail } = useAuth();
  const email = getUserEmail();
  const initials = email
    ? email
      .split("@")[0]
      .split(".")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
    : "U";

  const handleLogout = () => {
    toast.info("Logged out successfully");
    logout();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-nexcell-pink-light bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Image
            src="/nexcell-logo.png"
            alt="NexCell Solutions"
            width={48}
            height={48}
            priority
            className="h-12 w-12"
          />
          <div className="flex flex-col">
            <span className="font-bold text-xl text-nexcell-burgundy-700 transition-colors duration-300">
              NexCell Solutions
            </span>
            <span className="text-xs text-gray-600 hidden sm:block">
              Lead Management Dashboard
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <Avatar className="h-10 w-10 cursor-pointer ring-2 ring-nexcell-pink-light hover:ring-nexcell-burgundy-500 transition-all">
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem disabled>
                <User className="mr-2 h-4 w-4" />
                <span className="truncate">{email}</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
