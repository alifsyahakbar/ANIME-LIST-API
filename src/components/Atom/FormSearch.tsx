import { FaSearch } from "react-icons/fa";

export default function FormSearch({
  HandleSearch,
  title,
  styleInput,
  styleButton,
}: any) {
  return (
    <>
      <form
        className="mx-4 items-center flex justify-center"
        onSubmit={HandleSearch}
      >
        <input
          type="text"
          placeholder={title}
          className={`${styleInput} w-3/4 focus:text-slate-800 shadow-sm outline-none font-bangers dark:text-white`}
        />
        <button
          className={`${styleButton} bg-[#564da2] shadow-sm border-spacing-1 border-slate-200 font-bangers items-center flex gap-x-1 dark:bg-white dark:text-black transition-all duration-150`}
        >
          Search<FaSearch></FaSearch>
        </button>
      </form>
    </>
  );
}
