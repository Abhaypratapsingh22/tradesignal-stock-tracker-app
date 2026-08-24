import Image from "next/image";
import Link from "next/link";

import logo from "@/assests/images/tradesignal-logo.png";
import NavItems from "@/components/NavItems";
import UserDropdown from "@/components/UserDropdown";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0E11]/95 backdrop-blur-sm">
      <div className="container flex items-center justify-between gap-6 py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3" aria-label="Go to dashboard">
            <Image
              alt="TradeSignal Logo"
              className="h-10 w-10 cursor-pointer shrink-0"
              height={40}
              src={logo}
              width={40}
            />
            <span className="text-2xl font-semibold tracking-tight text-[#f4c75d]">
              TradeSignal
            </span>
          </Link>
        </div>

        <nav className="hidden sm:block" aria-label="Main navigation">
          <NavItems />
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <UserDropdown />
        </div>
      </div>
    </header>
  );
}
