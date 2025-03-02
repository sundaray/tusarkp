import React from "react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { UserAccountNavClient } from "@/components/user-account-nav-client";

export async function UserAccountNav() {
  const user = null;

  if (!user) {
    return (
      <Link
        href="/signin"
        className={buttonVariants({ variant: "default", size: "sm" })}
      >
        Sign in
      </Link>
    );
  }
  return <UserAccountNavClient user={user} />;
}
