"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

type NavItemProps = {
  href: string;
  title: string;
};

export function NavItem({ href, title }: NavItemProps) {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      className={cn(
        "text-muted-foreground hover:text-primary relative text-sm font-medium transition-colors",
        isActive && "text-secondary-foreground",
      )}
      href={href}
    >
      {title}
      {isActive && (
        <div className="bg-secondary-foreground absolute inset-x-0 -bottom-[4px] h-[2px] w-full rounded-full" />
      )}
    </Link>
  );
}
