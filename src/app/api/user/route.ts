import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse(
    JSON.stringify({
      message: "Hello from the user API route!",
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
