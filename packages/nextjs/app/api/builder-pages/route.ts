import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    // Path to the builders directory
    const buildersDir = path.join(process.cwd(), "app/builders");

    // Check if directory exists
    if (!fs.existsSync(buildersDir)) {
      return NextResponse.json({ builders: [] });
    }

    // Get all subdirectories (builder addresses)
    const builders = fs
      .readdirSync(buildersDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    return NextResponse.json({ builders });
  } catch (error) {
    console.error("Error fetching builder pages:", error);
    return NextResponse.json({ builders: [], error: "Failed to fetch builder pages" }, { status: 500 });
  }
}
