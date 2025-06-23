import { NextResponse } from "next/server";

export async function POST() {
  return new NextResponse(
    JSON.stringify({
      message: "Test",
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
