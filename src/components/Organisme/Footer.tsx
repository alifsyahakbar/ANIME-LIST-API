import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <div className="flex-1 text-center m-4 p-2 text-slate-800 dark:text-white">
        <h2 className="font-bangers text-lg lg:text-3xl">Moshidesu.Moe</h2>
        <a href="https://github.com/alifsyahakbar">
          <small className="font-serif font-bold hover:underline">
            &copy;2023 Vivy
          </small>
        </a>
      </div>
    </div>
  );
}
