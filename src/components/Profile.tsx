import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  imageUrl?: string;
};

export default function Profile({ name, bio, imageUrl }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <div className="relative h-[150px] w-[150px] overflow-hidden rounded-full border-4 border-white/80 bg-orange-100 shadow-[0_12px_32px_-8px_rgba(120,70,40,0.35),0_2px_6px_rgba(120,70,40,0.15)] dark:border-white/20 dark:bg-neutral-800 dark:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6)]">
        {imageUrl ? (
          <Image src={imageUrl} alt={`${name} 프로필 사진`} fill sizes="150px" className="object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-2xl font-semibold text-neutral-400 dark:text-neutral-500">
            {name.slice(0, 1)}
          </div>
        )}
      </div>
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-[#3d2f27] dark:text-[#f3e9e1]">{name}</h1>
        <p className="mt-2 text-balance text-[15px] leading-relaxed text-[#8a6f5f] dark:text-[#bfa899]">{bio}</p>
      </div>
    </div>
  );
}
