import ListMenu from "../Atom/ListMenu";
import DarkMode from "../Atom/button/DarkMode";

export default function Sidebar() {
  return (
    <div className="absolute text-center rounded-sm z-10 top-[55px] left-0 w-3/4 h-auto border-t-2 border-slate-800 dark:border-slate-200 bg-white dark:bg-[#121212] overflow-hidden drop-shadow-[0_70px_35px_rgba(0,0,0,0.25)]">
      <ListMenu dislay={""} list={" mb-1 hover:bg-gray-50"}></ListMenu>
      <DarkMode style={"text-center my-6 pb-2"}></DarkMode>
    </div>
  );
}
