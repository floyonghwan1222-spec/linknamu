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
      className="block w-full rounded-2xl border border-white/60 bg-white/40 px-6 py-4 text-center text-[15px] font-medium text-[#3d2f27] shadow-[0_4px_20px_rgba(150,90,50,0.10)] backdrop-blur-md transition duration-200 hover:bg-white/60 hover:shadow-[0_8px_26px_rgba(150,90,50,0.16)] active:scale-[0.99] dark:border-white/10 dark:bg-white/5 dark:text-[#f3e9e1] dark:shadow-none dark:hover:bg-white/10"
    >
      {label}
    </a>
  );
}
