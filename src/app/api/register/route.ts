import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(
  request: Request
) {
  try {
    const body = await request.json();
    const { email, name, password } = body;

    if (!email || !name || !password) {
      return new Response("Missing info", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await db.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      }
    });

    return Response.json(user);
  } catch (error: any) {
    console.error(error, "REGISTRATION_ERROR");
    return new Response("Internal Error", { status: 500 });
  }
}
