export default function Loading() {
  return (
    <div className="w-full h-auto mt-4">
      <div className="flex flex-wrap justify-center bg-slate-50 p-6 gap-x-4 gap-y-8 rounded-md">
        {[1, 2, 3, 4, 5, 6].map((user: any, index: number) => {
          return (
            <div
              key={index}
              className="flex bg-slate-100 rounded-sm animate-pulse"
            >
              <div className="w-44 h-44 bg-slate-200 rounded-sm animate-pulse"></div>
              <div className="w-56 ml-2 px-2 text-left relative">
                <h1 className="text-lg font-bold leading-tight w-full mt-2 h-6 bg-slate-200 animate-pulse"></h1>
                <p className="text-xs leading-normal w-full mt-2 h-3 bg-slate-200 animate-pulse"></p>
                <p className="text-xs leading-normal w-full mt-2 h-3 bg-slate-200 animate-pulse"></p>
                <p className="text-xs leading-normal w-full mt-2 h-3 bg-slate-200 animate-pulse"></p>
                <p className="text-xs leading-normal w-full mt-2 h-3 bg-slate-200 animate-pulse"></p>
                <p className="text-xs leading-normal w-[50%] mt-2 h-3 bg-slate-200 animate-pulse"></p>
                <div className="flex w-full absolute bottom-0 mb-2">
                  <span className="text-xs mr-2 pr-2 w-[50%] h-4 bg-slate-200 animate-pulse"></span>
                  <span className="text-xs w-[40%] h-4 bg-slate-200 animate-pulse"></span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
