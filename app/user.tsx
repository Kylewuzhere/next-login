"use client";

import { useSession } from "next-auth/react";

export const User = () => {
  const { data: session } = useSession();
  console.log("Client Session", session);

  return (
    <main>
      <pre>{JSON.stringify(session)}</pre>
    </main>
  );
};
