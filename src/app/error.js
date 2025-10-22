"use client";
import { LoginButton } from "@/components/LoginButton";

export default function Error({ error, reset }) {
  return (
    <html>
      <body>
        <p>{error.message}</p>
        <LoginButton />
      </body>
    </html>
  );
}
