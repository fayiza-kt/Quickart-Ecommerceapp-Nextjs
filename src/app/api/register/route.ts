// app/api/register/route.ts
import { NextResponse } from "next/server";
import { addUser, findUser } from "@/lib/users";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json({ error: "Username and password required" }, { status: 400 });
  }

  if (findUser(username)) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  addUser({ username, password });
  return NextResponse.json({ message: "User registered successfully" });
}
