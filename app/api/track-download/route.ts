import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const STATS_FILE = path.join(process.cwd(), "data", "downloads-stats.json");

interface DownloadStat {
  count: number;
  title: string;
  lastDownloadedAt: string;
}

function getStats(): Record<string, DownloadStat> {
  try {
    if (!fs.existsSync(STATS_FILE)) {
      return {};
    }
    const content = fs.readFileSync(STATS_FILE, "utf-8");
    return JSON.parse(content) || {};
  } catch {
    return {};
  }
}

function saveStats(stats: Record<string, DownloadStat>) {
  try {
    const dir = path.dirname(STATS_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(STATS_FILE, JSON.stringify(stats, null, 2), "utf-8");
  } catch (error) {
    console.error("Failed to save download stats:", error);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fileId, title } = body;

    if (!fileId) {
      return NextResponse.json({ error: "Missing fileId" }, { status: 400 });
    }

    const stats = getStats();
    const current = stats[fileId] || { count: 0, title: title || fileId, lastDownloadedAt: "" };
    stats[fileId] = {
      count: current.count + 1,
      title: title || current.title,
      lastDownloadedAt: new Date().toISOString(),
    };

    saveStats(stats);

    return NextResponse.json({ success: true, count: stats[fileId].count });
  } catch (error) {
    console.error("Track download error:", error);
    return NextResponse.json({ error: "Internal Error" }, { status: 500 });
  }
}

export async function GET() {
  const stats = getStats();
  return NextResponse.json({ success: true, stats });
}
