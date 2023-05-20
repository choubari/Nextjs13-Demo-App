import { NextResponse } from "next/server";

export async function GET() {
  console.log("GET REQUEST");
  return NextResponse.json({
    type: "GET REQUEST",
    data: { username: "@choubari_", url: "choubari.com" },
  });
}
export async function POST() {
  console.log("POST REQUEST");
  return NextResponse.json({
    type: "POST REQUEST",
    data: { username: "@choubari_", url: "choubari.com" },
  });
}
