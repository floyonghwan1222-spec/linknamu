import { NextResponse } from "next/server";
import { getClicksCollection } from "@/lib/mongodb";
import { links } from "@/lib/links";

export const dynamic = "force-dynamic";

// 모든 링크의 현재 클릭 수를 한 번에 반환한다. 기록이 없는 링크는 0.
export async function GET() {
  try {
    const collection = await getClicksCollection();
    const docs = await collection.find({}).toArray();
    const stored = new Map(docs.map((d) => [d._id, d.count]));
    const counts = Object.fromEntries(links.map((l) => [l.id, stored.get(l.id) ?? 0]));
    return NextResponse.json(counts);
  } catch {
    return NextResponse.json({ error: "클릭 수를 불러오지 못했습니다." }, { status: 500 });
  }
}
