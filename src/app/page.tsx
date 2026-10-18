import DarkModeToggle from "@/components/DarkModeToggle";
import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";
import type { LinkItem } from "@/components/LinkCard";

const links: LinkItem[] = [
  { id: "1", label: "🐙 깃허브", url: "https://github.com/floyonghwan1222-spec" },
  { id: "2", label: "✍️ 블로그", url: "https://blog.naver.com/stanyhk" },
  { id: "3", label: "📫 이메일", url: "mailto:floyonghwan@yahoo.com" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center px-6 py-12 sm:py-16">
      <div className="flex w-full max-w-sm flex-col items-center gap-10">
        <div className="flex w-full justify-end">
          <DarkModeToggle />
        </div>
        <Profile
          name="김용환"
          bio="풀스택 개발자 요즘에는 AI 개발에 관심이 많아요"
          imageUrl="/profile.jpg"
        />
        <LinkList links={links} />
      </div>
    </main>
  );
}
