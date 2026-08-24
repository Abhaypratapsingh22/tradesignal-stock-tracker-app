"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_ITEMS } from "@/lib/constants";

export default function NavItems() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <ul className="flex items-center gap-6">
      {NAV_ITEMS.map(({ href, label }) => {
        const active = isActive(href);

        return (
          <li key={href}>
            <Link
              href={href}
              className={[
                "transition-colors duration-200",
                active ? "text-gray-100" : "text-gray-400",
                "hover:text-yellow-500",
              ].join(" ")}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
