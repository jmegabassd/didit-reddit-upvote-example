"use server";

import { signIn } from "@/auth";

export async function handleLogin() {
  await signIn();
}
