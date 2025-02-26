import { DriveImageGetPayload } from "@/data/schemas";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = (await req.json()) as DriveImageGetPayload;
  const url = body.url;
  const res = await fetch(url);
  const buffer = await res.arrayBuffer();
  const arrayBuffer = Buffer.from(buffer);
  const base64 = arrayBuffer.toString("base64");
  const src = `data:image/png;base64,${base64}`;
  return NextResponse.json({ src });
};
