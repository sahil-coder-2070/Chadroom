import {
  Hash,
  InfinityIcon,
  List,
  TriangleAlert,
  UserRound,
} from "lucide-react";

const AnimateTableOne = ({ visible }) => {
  return (
    <>
      <table className="overflow-hidden">
        <thead className="overflow-scroll border-b border-neutral-200 bg-neutral-50/80">
          <th className="md:bg-paper-soft md:border-border w-[200px] shrink-0 overflow-hidden border-neutral-200 p-2 md:sticky md:left-0 md:z-10 md:border-r md:p-3 md:shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
            <div className="flex items-center gap-1.5 overflow-hidden md:gap-2">
              <span className="flex items-center gap-3 truncate font-medium tracking-wide uppercase">
                <p className="font-serif font-bold">T</p>{" "}
                <p className="text-[10px]">Title</p>
              </span>
            </div>
          </th>
          <th className="w-[170px] shrink-0 overflow-hidden p-2 md:p-3">
            <div className="flex items-center gap-1.5 overflow-hidden md:gap-2">
              <span className="flex items-center gap-3 truncate font-medium tracking-wide uppercase">
                <p className="font-serif font-bold">
                  <InfinityIcon size={14} />
                </p>
                <p className="text-[10px]">client</p>
              </span>
            </div>
          </th>
          <th className="w-[170px] shrink-0 overflow-hidden p-2 md:p-3">
            <div className="flex items-center gap-1.5 overflow-hidden md:gap-2">
              <span className="flex items-center gap-3 truncate font-medium tracking-wide uppercase">
                <p className="font-serif font-bold">
                  <TriangleAlert size={14} />
                </p>
                <p className="text-[10px]">urgency</p>
                <span className="rounded-sm bg-neutral-200/50 px-1 py-0.5 text-[10px] text-neutral-500">
                  AI
                </span>
              </span>
            </div>
          </th>
          <th className="w-[180px] shrink-0 overflow-hidden p-2 md:p-3">
            <div className="flex items-center gap-1.5 overflow-hidden md:gap-2">
              <span className="flex items-center gap-3 truncate font-medium tracking-wide uppercase">
                <p className="font-serif font-bold">
                  <List size={14} />
                </p>
                <p className="text-[10px]">type</p>
                <span className="rounded-sm bg-neutral-200/50 px-1 py-0.5 text-[10px] text-neutral-500">
                  AI
                </span>
              </span>
            </div>
          </th>
          <th className="md:bg-paper-soft md:border-border sticky left-0 w-[252px] shrink-0 overflow-hidden border-neutral-200 p-2 md:sticky md:left-0 md:z-10 md:border-r md:p-3 md:shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
            <div className="flex items-center gap-1.5 overflow-hidden md:gap-2">
              <span className="flex items-center gap-3 truncate font-medium tracking-wide uppercase">
                <p className="font-serif font-bold">T</p>{" "}
                <p className="text-[10px]">actions</p>
              </span>
            </div>
          </th>
        </thead>
        <tbody>
          {visible && (
            <tr className="animate-pulse border border-blue-600 bg-neutral-200/60">
              <td className="bg-paper md:border-border border-neutral-200 px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:border-r md:px-3 md:py-1.5">
                <div className="truncate">Brand Identity</div>
              </td>
              <td className="bg-paper px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:px-3 md:py-1.5">
                <div className="truncate">EcoLife</div>
              </td>
              <td className="bg-paper px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:px-3 md:py-1.5">
                <div className="flex items-center gap-2 truncate">
                  <div className="flex w-fit overflow-hidden rounded-sm border">
                    <span className="block h-2.5 w-2.5 border-r bg-yellow-400"></span>
                    <span className="block h-2.5 w-2.5 border-r bg-yellow-400"></span>
                    <span className="block h-2.5 w-2.5"></span>
                  </div>
                  <p className="font-medium"> Medium</p>
                </div>
              </td>
              <td className="bg-paper px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:px-3 md:py-1.5">
                <div className="truncate">
                  <p className="w-fit rounded-md bg-neutral-100 px-3 py-1 text-xs font-medium">
                    Branding
                  </p>
                </div>
              </td>
              <td className="bg-paper px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:px-3 md:py-1.5">
                <div className="flex gap-3 truncate">
                  <p className="w-fit rounded-sm border border-neutral-200 bg-neutral-100 px-2 py-1 text-xs">
                    Assgin
                  </p>
                  <p className="w-fit rounded-sm border border-neutral-200 bg-neutral-100 px-2 py-1 text-xs text-neutral-400">
                    •••
                  </p>
                </div>
              </td>
            </tr>
          )}
          <tr className="border-b border-neutral-200">
            <td className="bg-paper md:border-border border-neutral-200 px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:border-r md:px-3 md:py-1.5">
              <div className="truncate">Brand Identity</div>
            </td>
            <td className="bg-paper px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:px-3 md:py-1.5">
              <div className="truncate">EcoLife</div>
            </td>
            <td className="bg-paper px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:px-3 md:py-1.5">
              <div className="flex items-center gap-2 truncate">
                <div className="flex w-fit overflow-hidden rounded-sm border">
                  <span className="block h-2.5 w-2.5 border-r bg-yellow-400"></span>
                  <span className="block h-2.5 w-2.5 border-r bg-yellow-400"></span>
                  <span className="block h-2.5 w-2.5"></span>
                </div>
                <p className="font-medium"> Medium</p>
              </div>
            </td>
            <td className="bg-paper px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:px-3 md:py-1.5">
              <div className="truncate">
                <p className="w-fit rounded-md bg-neutral-100 px-3 py-1 text-xs font-medium">
                  Branding
                </p>
              </div>
            </td>
            <td className="bg-paper px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:px-3 md:py-1.5">
              <div className="flex gap-3 truncate">
                <p className="w-fit rounded-sm border border-neutral-200 bg-neutral-100 px-2 py-1 text-xs">
                  Assgin
                </p>
                <p className="w-fit rounded-sm border border-neutral-200 bg-neutral-100 px-2 py-1 text-xs text-neutral-400">
                  •••
                </p>
              </div>
            </td>
          </tr>
          <tr className="border-b border-neutral-200">
            <td className="bg-paper md:border-border border-neutral-200 px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:border-r md:px-3 md:py-1.5">
              <div className="truncate">Mobile App UI</div>
            </td>
            <td className="bg-paper px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:px-3 md:py-1.5">
              <div className="truncate">FitnessPro</div>
            </td>
            <td className="bg-paper px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:px-3 md:py-1.5">
              <div className="flex items-center gap-2 truncate">
                <div className="flex w-fit overflow-hidden rounded-sm border">
                  <span className="block h-2.5 w-2.5 border-r bg-yellow-400"></span>
                  <span className="block h-2.5 w-2.5 border-r"></span>
                  <span className="block h-2.5 w-2.5"></span>
                </div>
                <p className="font-medium"> Low</p>
              </div>
            </td>
            <td className="bg-paper px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:px-3 md:py-1.5">
              <div className="truncate">
                <p className="w-fit rounded-md bg-neutral-100 px-3 py-1 text-xs font-medium">
                  UI/UX
                </p>
              </div>
            </td>
            <td className="bg-paper px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:px-3 md:py-1.5">
              <div className="flex gap-3 truncate">
                <p className="w-fit rounded-sm border border-neutral-200 bg-neutral-100 px-2 py-1 text-xs">
                  Assgin
                </p>
                <p className="w-fit rounded-sm border border-neutral-200 bg-neutral-100 px-2 py-1 text-xs text-neutral-400">
                  •••
                </p>
              </div>
            </td>
          </tr>
          <tr className="border-b border-neutral-200">
            <td className="bg-paper md:border-border border-neutral-200 px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:border-r md:px-3 md:py-1.5">
              <div className="truncate">Website Resdesign</div>
            </td>
            <td className="bg-paper px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:px-3 md:py-1.5">
              <div className="truncate">TechStart</div>
            </td>
            <td className="bg-paper px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:px-3 md:py-1.5">
              <div className="flex items-center gap-2 truncate">
                <div className="flex w-fit overflow-hidden rounded-sm border">
                  <span className="block h-2.5 w-2.5 border-r bg-red-400"></span>
                  <span className="block h-2.5 w-2.5 border-r bg-red-400"></span>
                  <span className="block h-2.5 w-2.5 bg-red-400"></span>
                </div>
                <p className="font-medium"> High</p>
              </div>
            </td>
            <td className="bg-paper px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:px-3 md:py-1.5">
              <div className="truncate">
                <p className="w-fit rounded-md bg-neutral-100 px-3 py-1 text-xs font-medium">
                  Web Design
                </p>
              </div>
            </td>
            <td className="bg-paper px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:px-3 md:py-1.5">
              <div className="flex gap-3 truncate">
                <p className="w-fit rounded-sm border border-neutral-200 bg-neutral-100 px-2 py-1 text-xs">
                  Assgin
                </p>
                <p className="w-fit rounded-sm border border-neutral-200 bg-neutral-100 px-2 py-1 text-xs text-neutral-400">
                  •••
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default AnimateTableOne;

export const AnimateTableTwo = () => {
  return (
    <>
      <table className="overflow-hidden">
        <thead className="overflow-scroll border-b border-neutral-200 bg-neutral-50/80">
          <th className="md:bg-paper-soft md:border-border w-[200px] shrink-0 overflow-hidden border-neutral-200 p-2 md:sticky md:left-0 md:z-10 md:border-r md:p-3 md:shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
            <div className="flex items-center gap-1.5 overflow-hidden md:gap-2">
              <span className="flex items-center gap-3 truncate font-medium tracking-wide uppercase">
                <p className="font-serif font-bold">T</p>{" "}
                <p className="text-[10px]">Title</p>
              </span>
            </div>
          </th>
          <th className="w-[170px] shrink-0 overflow-hidden p-2 md:p-3">
            <div className="flex items-center gap-1.5 overflow-hidden md:gap-2">
              <span className="flex items-center gap-3 truncate font-medium tracking-wide uppercase">
                <p className="font-serif font-bold">
                  <TriangleAlert size={14} />
                </p>
                <p className="text-[10px]">urgency</p>
                <span className="rounded-sm bg-neutral-200/50 px-1 py-0.5 text-[10px] text-neutral-500">
                  AI
                </span>
              </span>
            </div>
          </th>
          <th className="w-[170px] shrink-0 overflow-hidden p-2 md:p-3">
            <div className="flex items-center gap-1.5 overflow-hidden md:gap-2">
              <span className="flex items-center gap-3 truncate font-medium tracking-wide uppercase">
                <p className="font-serif font-bold">
                  <UserRound size={14} />
                </p>
                <p className="text-[10px]">Assignee</p>
                <span className="rounded-sm bg-neutral-200/50 px-1 py-0.5 text-[10px] text-neutral-500">
                  AI
                </span>
              </span>
            </div>
          </th>
          <th className="w-[180px] shrink-0 overflow-hidden p-2 md:p-3">
            <div className="flex items-center gap-1.5 overflow-hidden md:gap-2">
              <span className="flex items-center gap-3 truncate font-medium tracking-wide uppercase">
                <p className="font-serif font-bold">
                  <Hash size={14} />
                </p>
                <p className="text-[10px]">days open</p>
                <span className="rounded-sm bg-neutral-200/50 px-1 py-0.5 text-[10px] text-neutral-500">
                  live
                </span>
              </span>
            </div>
          </th>
          <th className="md:bg-paper-soft md:border-border sticky left-0 w-[252px] shrink-0 overflow-hidden border-neutral-200 p-2 md:sticky md:left-0 md:z-10 md:p-3 md:shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
            <div className="flex items-center gap-1.5 overflow-hidden md:gap-2">
              <span className="flex items-center gap-3 truncate font-medium tracking-wide uppercase">
                <p className="font-serif font-bold">T</p>{" "}
                <p className="text-[10px]">actions</p>
              </span>
            </div>
          </th>
        </thead>
        <tbody>
          <tr className="border-b border-neutral-200">
            <td className="bg-paper md:border-border border-neutral-200 px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:border-r md:px-3 md:py-1.5">
              <div className="truncate">Packaging Desgin</div>
            </td>
            <td className="bg-paper px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:px-3 md:py-1.5">
              <div className="flex items-center gap-2 truncate">
                <div className="flex w-fit overflow-hidden rounded-sm border">
                  <span className="block h-2.5 w-2.5 border-r bg-yellow-400"></span>
                  <span className="block h-2.5 w-2.5 border-r bg-yellow-400"></span>
                  <span className="block h-2.5 w-2.5"></span>
                </div>
                <p className="font-medium"> Medium</p>
              </div>
            </td>
            <td className="bg-paper px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:px-3 md:py-1.5">
              <div className="flex items-center gap-2 truncate">
                <span className="flex w-6 items-center justify-center rounded-full border border-neutral-200 bg-neutral-200/50 p-1 text-xs uppercase">
                  lo
                </span>
                Liam O'Sullivan
              </div>
            </td>
            <td className="bg-paper px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:px-3 md:py-1.5">
              <div className="truncate">12</div>
            </td>
            <td className="bg-paper px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:px-3 md:py-1.5">
              <div className="flex gap-3 truncate">
                <p className="w-fit rounded-sm border border-neutral-200 bg-neutral-100 px-2 py-1 text-xs">
                  Complete
                </p>
                <p className="w-fit rounded-sm border border-neutral-200 bg-neutral-100 px-2 py-1 text-xs text-neutral-400">
                  •••
                </p>
              </div>
            </td>
          </tr>
          <tr className="border-b border-neutral-200">
            <td className="bg-paper md:border-border border-neutral-200 px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:border-r md:px-3 md:py-1.5">
              <div className="truncate">Social Media Graphics</div>
            </td>
            <td className="bg-paper px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:px-3 md:py-1.5">
              <div className="flex items-center gap-2 truncate">
                <div className="flex w-fit overflow-hidden rounded-sm border">
                  <span className="block h-2.5 w-2.5 border-r bg-yellow-400"></span>
                  <span className="block h-2.5 w-2.5 border-r"></span>
                  <span className="block h-2.5 w-2.5"></span>
                </div>
                <p className="font-medium"> Low</p>
              </div>
            </td>
            <td className="bg-paper px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:px-3 md:py-1.5">
              <div className="flex items-center gap-2 truncate">
                <span className="flex w-6 items-center justify-center rounded-full border border-neutral-200 bg-neutral-200/50 p-1 text-xs uppercase">
                  sr
                </span>
                Sofia Rossi
              </div>
            </td>
            <td className="bg-paper px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:px-3 md:py-1.5">
              <div className="truncate">32</div>
            </td>
            <td className="bg-paper px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:px-3 md:py-1.5">
              <div className="flex gap-3 truncate">
                <p className="w-fit rounded-sm border border-neutral-200 bg-neutral-100 px-2 py-1 text-xs">
                  Complete
                </p>
                <p className="w-fit rounded-sm border border-neutral-200 bg-neutral-100 px-2 py-1 text-xs text-neutral-400">
                  •••
                </p>
              </div>
            </td>
          </tr>
          <tr className="border-b border-neutral-200">
            <td className="bg-paper md:border-border border-neutral-200 px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:border-r md:px-3 md:py-1.5">
              <div className="truncate">Print Campaing</div>
            </td>
            <td className="bg-paper px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:px-3 md:py-1.5">
              <div className="flex items-center gap-2 truncate">
                <div className="flex w-fit overflow-hidden rounded-sm border">
                  <span className="block h-2.5 w-2.5 border-r bg-red-400"></span>
                  <span className="block h-2.5 w-2.5 border-r bg-red-400"></span>
                  <span className="block h-2.5 w-2.5 bg-red-400"></span>
                </div>
                <p className="font-medium"> High</p>
              </div>
            </td>
            <td className="bg-paper px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:px-3 md:py-1.5">
              <div className="flex items-center gap-2 truncate">
                <span className="flex w-6 items-center justify-center rounded-full border border-neutral-200 bg-neutral-200/50 p-1 text-xs uppercase">
                  bl
                </span>
                Benjamin Lee
              </div>
            </td>
            <td className="bg-paper px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:px-3 md:py-1.5">
              <div className="truncate">16</div>
            </td>
            <td className="bg-paper px-2 py-1 text-sm md:sticky md:left-0 md:z-10 md:px-3 md:py-1.5">
              <div className="flex gap-3 truncate">
                <p className="w-fit rounded-sm border border-neutral-200 bg-neutral-100 px-2 py-1 text-xs">
                  Complete
                </p>
                <p className="w-fit rounded-sm border border-neutral-200 bg-neutral-100 px-2 py-1 text-xs text-neutral-400">
                  •••
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
