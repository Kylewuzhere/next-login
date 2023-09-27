"use client";
import { useSession } from "next-auth/react";

// Client-side rendered protected route

export default function Dashboard() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // handle unauthenticated users here
      console.log("Not logged in!");
      // redirect to login page
    },
  });

  if (status === "loading") {
    return "loading or unauthenticated";
  }

  return (
    <main>
      <h1>Dashboard</h1>
    </main>
  );
}
