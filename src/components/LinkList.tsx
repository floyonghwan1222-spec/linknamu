"use client";

import { useEffect, useState } from "react";
import LinkCard, { type LinkItem } from "@/components/LinkCard";

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 데이터를 받기 전에는 비어 있고, 카드에서는 0회로 표시된다.
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    let cancelled = false;
    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : null))
      .then((data: Record<string, number> | null) => {
        if (!cancelled && data) {
          // 응답 전에 이미 누른 클릭이 있어도 사라지지 않도록 큰 값을 유지한다.
          setCounts((prev) => {
            const next = { ...data };
            for (const [id, n] of Object.entries(prev)) next[id] = Math.max(next[id] ?? 0, n);
            return next;
          });
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const handleClick = (id: string) => {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch(`/api/clicks/${id}`, { method: "POST", keepalive: true }).catch(() => {});
  };

  return (
    <div className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <LinkCard key={link.id} {...link} count={counts[link.id] ?? 0} onClick={() => handleClick(link.id)} />
      ))}
    </div>
  );
}
