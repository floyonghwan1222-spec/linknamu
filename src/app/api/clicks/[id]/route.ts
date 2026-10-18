import { NextResponse } from "next/server";
import { getClicksCollection } from "@/lib/mongodb";
import { links } from "@/lib/links";

export const dynamic = "force-dynamic";

// 해당 링크의 클릭 수를 1 증가시킨다.
export async function POST(_req: Request, { params }: { params: { id: string } }) {
  if (!links.some((l) => l.id === params.id)) {
    return NextResponse.json({ error: "존재하지 않는 링크입니다." }, { status: 404 });
  }
  try {
    const collection = await getClicksCollection();
    const result = await collection.findOneAndUpdate(
      { _id: params.id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );
    return NextResponse.json({ id: params.id, count: result?.count ?? 1 });
  } catch {
    return NextResponse.json({ error: "클릭 수를 저장하지 못했습니다." }, { status: 500 });
  }
}
