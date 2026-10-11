export type LinkItem = {
  id: string;
  label: string;
  url: string;
};

export default function LinkCard({ label, url }: LinkItem) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-xl border border-neutral-200 bg-white px-5 py-4 text-center font-medium text-neutral-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    >
      {label}
    </a>
  );
}
