import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const folder = formData.get("folder") as string;
  const file = formData.get("file") as File | null;

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  const fileName = `${nanoid()}-${file.name}`;

  const { data, error } = await supabase.storage
    .from("trusted-tally")
    .upload(`uploads/${folder}/${fileName}`, file);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  const imagePath = data.fullPath;

  return NextResponse.json({ url: imagePath }, { status: 200 });
}
