// app/api/login/route.ts
import { NextResponse } from "next/server";
import { findUser } from "@/lib/users";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json({ error: "Username and password required" }, { status: 400 });
  }

  const user = findUser(username);

  if (!user || user.password !== password) {
    return NextResponse.json({ error: "Invalid username or password" }, { status: 401 });
  }

  return NextResponse.json({ message: "Login successful" });
}
