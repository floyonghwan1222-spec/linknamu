import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  imageUrl?: string;
};

export default function Profile({ name, bio, imageUrl }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="relative h-24 w-24 overflow-hidden rounded-full border border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800">
        {imageUrl ? (
          <Image src={imageUrl} alt={`${name} 프로필 사진`} fill sizes="96px" className="object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-2xl font-semibold text-neutral-400 dark:text-neutral-500">
            {name.slice(0, 1)}
          </div>
        )}
      </div>
      <div>
        <h1 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">{name}</h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">{bio}</p>
      </div>
    </div>
  );
}
