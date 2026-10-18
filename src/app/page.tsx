import DarkModeToggle from "@/components/DarkModeToggle";
import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";
import { links } from "@/lib/links";

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
