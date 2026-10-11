import DarkModeToggle from "@/components/DarkModeToggle";
import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";
import type { LinkItem } from "@/components/LinkCard";

const links: LinkItem[] = [
  { id: "1", label: "블로그", url: "https://example.com/blog" },
  { id: "2", label: "인스타그램", url: "https://instagram.com" },
  { id: "3", label: "이메일 문의", url: "mailto:contact@example.com" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center bg-white px-4 py-10 dark:bg-neutral-900">
      <div className="flex w-full max-w-md flex-col items-center gap-8">
        <div className="flex w-full justify-end">
          <DarkModeToggle />
        </div>
        <Profile name="김용환" bio="EHS전문가" />
        <LinkList links={links} />
      </div>
    </main>
  );
}
