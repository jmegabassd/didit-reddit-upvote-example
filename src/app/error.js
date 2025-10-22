"use client";
import { LoginButton } from "@/components/LoginButton";
import Image from "next/image";
import ohNoes from "@/../public/ohnoes.jpg";

export default function Error({ error, reset }) {
  return (
    <html>
      <body className="flex flex-col justify-center items-center">
        <Image src={ohNoes} alt="Cat says oh noes!" width="400" height="359" />
        <p>Oh noes something went wrong!</p>
        <p>{error.message}</p>
        <LoginButton onClick={() => reset()} />
      </body>
    </html>
  );
}
