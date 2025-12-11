import {
  Hash,
  InfinityIcon,
  List,
  TriangleAlert,
  UserRound,
} from "lucide-react";

const Table = () => {
  return (
    <>
      <table className="  overflow-hidden">
        <thead className="border-b border-neutral-200 bg-neutral-50/80 overflow-scroll">
          <th className="p-2 md:p-3 shrink-0 overflow-hidden md:sticky md:left-0 md:z-10 md:bg-paper-soft w-[200px] md:border-r md:border-border border-neutral-200 md:shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
            <div className="flex items-center gap-1.5 md:gap-2 overflow-hidden">
              <span className="truncate font-medium uppercase tracking-wide  flex items-center gap-3">
                <p className="font-serif font-bold ">T</p>{" "}
                <p className="text-[10px]">Title</p>
              </span>
            </div>
          </th>
          <th className="p-2 md:p-3 shrink-0 overflow-hidden w-[170px] ">
            <div className="flex items-center gap-1.5 md:gap-2 overflow-hidden">
              <span className="truncate font-medium uppercase tracking-wide  flex items-center gap-3">
                <p className="font-serif font-bold ">
                  <InfinityIcon size={14} />
                </p>
                <p className="text-[10px]">client</p>
              </span>
            </div>
          </th>
          <th className="p-2 md:p-3 shrink-0 overflow-hidden w-[170px] ">
            <div className="flex items-center gap-1.5 md:gap-2 overflow-hidden">
              <span className="truncate font-medium uppercase tracking-wide  flex items-center gap-3">
                <p className="font-serif font-bold ">
                  <TriangleAlert size={14} />
                </p>
                <p className="text-[10px]">urgency</p>
                <span className="text-[10px] bg-neutral-200/50 px-1 py-0.5 text-neutral-500 rounded-sm">
                  AI
                </span>
              </span>
            </div>
          </th>
          <th className="p-2 md:p-3 shrink-0 overflow-hidden w-[170px] ">
            <div className="flex items-center gap-1.5 md:gap-2 overflow-hidden">
              <span className="truncate font-medium uppercase tracking-wide  flex items-center gap-3">
                <p className="font-serif font-bold ">
                  <List size={14} />
                </p>
                <p className="text-[10px]">type</p>
                <span className="text-[10px] bg-neutral-200/50 px-1 py-0.5 text-neutral-500 rounded-sm">
                  AI
                </span>
              </span>
            </div>
          </th>
          <th className="p-2 md:p-3 shrink-0 overflow-hidden md:sticky md:left-0 md:z-10 md:bg-paper-soft w-[200px] md:border-r md:border-border border-neutral-200 md:shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] sticky left-0">
            <div className="flex items-center gap-1.5 md:gap-2 overflow-hidden">
              <span className="truncate font-medium uppercase tracking-wide  flex items-center gap-3">
                <p className="font-serif font-bold ">T</p>{" "}
                <p className="text-[10px]">actions</p>
              </span>
            </div>
          </th>
        </thead>
        <tbody>
          <tr className="border-b border-neutral-200">
            <td className="px-2 md:px-3 py-1 md:py-1.5 bg-paper md:sticky md:left-0 md:z-10 md:border-r md:border-border border-neutral-200 text-sm">
              <div className="truncate">Brand Identity</div>
            </td>
            <td className="px-2 md:px-3 py-1 md:py-1.5 bg-paper md:sticky md:left-0 md:z-10 text-sm">
              <div className="truncate">EcoLife</div>
            </td>
            <td className="px-2 md:px-3 py-1 md:py-1.5 bg-paper md:sticky md:left-0 md:z-10 text-sm">
              <div className="truncate flex items-center gap-2">
                <div className="border w-fit rounded-sm flex overflow-hidden">
                  <span className="h-2.5 w-2.5 block border-r bg-yellow-400 "></span>
                  <span className="h-2.5 w-2.5 block border-r bg-yellow-400"></span>
                  <span className="h-2.5 w-2.5 block"></span>
                </div>
                <p className="font-medium"> Medium</p>
              </div>
            </td>
            <td className="px-2 md:px-3 py-1 md:py-1.5 bg-paper md:sticky md:left-0 md:z-10 text-sm">
              <div className="truncate">
                <p className="text-xs py-1 px-3 bg-neutral-100 w-fit rounded-md font-medium">
                  Branding
                </p>
              </div>
            </td>
            <td className="px-2 md:px-3 py-1 md:py-1.5 bg-paper md:sticky md:left-0 md:z-10 text-sm">
              <div className="truncate flex gap-3">
                <p className="text-xs py-1 px-2 bg-neutral-100 w-fit rounded-sm border border-neutral-200 ">
                  Assgin
                </p>
                <p className="text-xs py-1 px-2 bg-neutral-100 w-fit rounded-sm border border-neutral-200 text-neutral-400 ">
                  •••
                </p>
              </div>
            </td>
          </tr>
          <tr className="border-b border-neutral-200">
            <td className="px-2 md:px-3 py-1 md:py-1.5 bg-paper md:sticky md:left-0 md:z-10 md:border-r md:border-border border-neutral-200 text-sm">
              <div className="truncate">Mobile App UI</div>
            </td>
            <td className="px-2 md:px-3 py-1 md:py-1.5 bg-paper md:sticky md:left-0 md:z-10 text-sm">
              <div className="truncate">FitnessPro</div>
            </td>
            <td className="px-2 md:px-3 py-1 md:py-1.5 bg-paper md:sticky md:left-0 md:z-10 text-sm">
              <div className="truncate flex items-center gap-2">
                <div className="border w-fit rounded-sm flex overflow-hidden">
                  <span className="h-2.5 w-2.5 block border-r bg-yellow-400"></span>
                  <span className="h-2.5 w-2.5 block border-r "></span>
                  <span className="h-2.5 w-2.5 block"></span>
                </div>
                <p className="font-medium"> Low</p>
              </div>
            </td>
            <td className="px-2 md:px-3 py-1 md:py-1.5 bg-paper md:sticky md:left-0 md:z-10 text-sm">
              <div className="truncate">
                <p className="text-xs py-1 px-3 bg-neutral-100 w-fit rounded-md font-medium">
                  UI/UX
                </p>
              </div>
            </td>
            <td className="px-2 md:px-3 py-1 md:py-1.5 bg-paper md:sticky md:left-0 md:z-10 text-sm">
              <div className="truncate flex gap-3">
                <p className="text-xs py-1 px-2 bg-neutral-100 w-fit rounded-sm border border-neutral-200 ">
                  Assgin
                </p>
                <p className="text-xs py-1 px-2 bg-neutral-100 w-fit rounded-sm border border-neutral-200 text-neutral-400 ">
                  •••
                </p>
              </div>
            </td>
          </tr>
          <tr className="border-b border-neutral-200">
            <td className="px-2 md:px-3 py-1 md:py-1.5 bg-paper md:sticky md:left-0 md:z-10 md:border-r md:border-border border-neutral-200 text-sm">
              <div className="truncate">Website Resdesign</div>
            </td>
            <td className="px-2 md:px-3 py-1 md:py-1.5 bg-paper md:sticky md:left-0 md:z-10 text-sm">
              <div className="truncate">TechStart</div>
            </td>
            <td className="px-2 md:px-3 py-1 md:py-1.5 bg-paper md:sticky md:left-0 md:z-10 text-sm">
              <div className="truncate flex items-center gap-2">
                <div className="border w-fit rounded-sm flex overflow-hidden">
                  <span className="h-2.5 w-2.5 block border-r bg-red-400"></span>
                  <span className="h-2.5 w-2.5 block border-r bg-red-400"></span>
                  <span className="h-2.5 w-2.5 block bg-red-400"></span>
                </div>
                <p className="font-medium"> High</p>
              </div>
            </td>
            <td className="px-2 md:px-3 py-1 md:py-1.5 bg-paper md:sticky md:left-0 md:z-10 text-sm">
              <div className="truncate">
                <p className="text-xs py-1 px-3 bg-neutral-100 w-fit rounded-md font-medium">
                  Web Design
                </p>
              </div>
            </td>
            <td className="px-2 md:px-3 py-1 md:py-1.5 bg-paper md:sticky md:left-0 md:z-10 text-sm">
              <div className="truncate flex gap-3">
                <p className="text-xs py-1 px-2 bg-neutral-100 w-fit rounded-sm border border-neutral-200 ">
                  Assgin
                </p>
                <p className="text-xs py-1 px-2 bg-neutral-100 w-fit rounded-sm border border-neutral-200 text-neutral-400 ">
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

export default Table;

export const TableTwo = () => {
  return (
    <>
      <table className="  overflow-hidden">
        <thead className="border-b border-neutral-200 bg-neutral-50/80 overflow-scroll">
          <th className="p-2 md:p-3 shrink-0 overflow-hidden md:sticky md:left-0 md:z-10 md:bg-paper-soft w-[200px] md:border-r md:border-border border-neutral-200 md:shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
            <div className="flex items-center gap-1.5 md:gap-2 overflow-hidden">
              <span className="truncate font-medium uppercase tracking-wide  flex items-center gap-3">
                <p className="font-serif font-bold ">T</p>{" "}
                <p className="text-[10px]">Title</p>
              </span>
            </div>
          </th>
          <th className="p-2 md:p-3 shrink-0 overflow-hidden w-[170px] ">
            <div className="flex items-center gap-1.5 md:gap-2 overflow-hidden">
              <span className="truncate font-medium uppercase tracking-wide  flex items-center gap-3">
                <p className="font-serif font-bold ">
                  <TriangleAlert size={14} />
                </p>
                <p className="text-[10px]">urgency</p>
                <span className="text-[10px] bg-neutral-200/50 px-1 py-0.5 text-neutral-500 rounded-sm">
                  AI
                </span>
              </span>
            </div>
          </th>
          <th className="p-2 md:p-3 shrink-0 overflow-hidden w-[170px] ">
            <div className="flex items-center gap-1.5 md:gap-2 overflow-hidden">
              <span className="truncate font-medium uppercase tracking-wide  flex items-center gap-3">
                <p className="font-serif font-bold ">
                  <UserRound size={14} />
                </p>
                <p className="text-[10px]">Assignee</p>
                <span className="text-[10px] bg-neutral-200/50 px-1 py-0.5 text-neutral-500 rounded-sm">
                  AI
                </span>
              </span>
            </div>
          </th>
          <th className="p-2 md:p-3 shrink-0 overflow-hidden w-[170px] ">
            <div className="flex items-center gap-1.5 md:gap-2 overflow-hidden">
              <span className="truncate font-medium uppercase tracking-wide  flex items-center gap-3">
                <p className="font-serif font-bold ">
                  <Hash size={14} />
                </p>
                <p className="text-[10px]">days open</p>
                <span className="text-[10px] bg-neutral-200/50 px-1 py-0.5 text-neutral-500 rounded-sm">
                  live
                </span>
              </span>
            </div>
          </th>
          <th className="p-2 md:p-3 shrink-0 overflow-hidden md:sticky md:left-0 md:z-10 md:bg-paper-soft w-[200px] md:border-r md:border-border border-neutral-200 md:shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] sticky left-0">
            <div className="flex items-center gap-1.5 md:gap-2 overflow-hidden">
              <span className="truncate font-medium uppercase tracking-wide  flex items-center gap-3">
                <p className="font-serif font-bold ">T</p>{" "}
                <p className="text-[10px]">actions</p>
              </span>
            </div>
          </th>
        </thead>
        <tbody>
          <tr className="border-b border-neutral-200">
            <td className="px-2 md:px-3 py-1 md:py-1.5 bg-paper md:sticky md:left-0 md:z-10 md:border-r md:border-border border-neutral-200 text-sm">
              <div className="truncate">Packaging Desgin</div>
            </td>
            <td className="px-2 md:px-3 py-1 md:py-1.5 bg-paper md:sticky md:left-0 md:z-10 text-sm">
              <div className="truncate flex items-center gap-2">
                <div className="border w-fit rounded-sm flex overflow-hidden">
                  <span className="h-2.5 w-2.5 block border-r bg-yellow-400"></span>
                  <span className="h-2.5 w-2.5 block border-r bg-yellow-400"></span>
                  <span className="h-2.5 w-2.5 block"></span>
                </div>
                <p className="font-medium"> Medium</p>
              </div>
            </td>
            <td className="px-2 md:px-3 py-1 md:py-1.5 bg-paper md:sticky md:left-0 md:z-10 text-sm">
              <div className="truncate flex gap-2 items-center">
                <span className="text-xs bg-neutral-200/50 w-6 flex items-center justify-center border border-neutral-200 p-1 rounded-full uppercase">
                  lo
                </span>
                Liam O'Sullivan
              </div>
            </td>
            <td className="px-2 md:px-3 py-1 md:py-1.5 bg-paper md:sticky md:left-0 md:z-10 text-sm">
              <div className="truncate">12</div>
            </td>
            <td className="px-2 md:px-3 py-1 md:py-1.5 bg-paper md:sticky md:left-0 md:z-10 text-sm">
              <div className="truncate flex gap-3">
                <p className="text-xs py-1 px-2 bg-neutral-100 w-fit rounded-sm border border-neutral-200 ">
                  Complete
                </p>
                <p className="text-xs py-1 px-2 bg-neutral-100 w-fit rounded-sm border border-neutral-200 text-neutral-400 ">
                  •••
                </p>
              </div>
            </td>
          </tr>
          <tr className="border-b border-neutral-200">
            <td className="px-2 md:px-3 py-1 md:py-1.5 bg-paper md:sticky md:left-0 md:z-10 md:border-r md:border-border border-neutral-200 text-sm">
              <div className="truncate">Social Media Graphics</div>
            </td>
            <td className="px-2 md:px-3 py-1 md:py-1.5 bg-paper md:sticky md:left-0 md:z-10 text-sm">
              <div className="truncate flex items-center gap-2">
                <div className="border w-fit rounded-sm flex overflow-hidden">
                  <span className="h-2.5 w-2.5 block border-r bg-yellow-400"></span>
                  <span className="h-2.5 w-2.5 block border-r "></span>
                  <span className="h-2.5 w-2.5 block"></span>
                </div>
                <p className="font-medium"> Low</p>
              </div>
            </td>
            <td className="px-2 md:px-3 py-1 md:py-1.5 bg-paper md:sticky md:left-0 md:z-10 text-sm">
              <div className="truncate flex gap-2 items-center">
                <span className="text-xs bg-neutral-200/50 w-6 flex items-center justify-center border border-neutral-200 p-1 rounded-full uppercase">
                  sr
                </span>
                Sofia Rossi
              </div>
            </td>
            <td className="px-2 md:px-3 py-1 md:py-1.5 bg-paper md:sticky md:left-0 md:z-10 text-sm">
              <div className="truncate">32</div>
            </td>
            <td className="px-2 md:px-3 py-1 md:py-1.5 bg-paper md:sticky md:left-0 md:z-10 text-sm">
              <div className="truncate flex gap-3">
                <p className="text-xs py-1 px-2 bg-neutral-100 w-fit rounded-sm border border-neutral-200 ">
                  Complete
                </p>
                <p className="text-xs py-1 px-2 bg-neutral-100 w-fit rounded-sm border border-neutral-200 text-neutral-400 ">
                  •••
                </p>
              </div>
            </td>
          </tr>
          <tr className="border-b border-neutral-200">
            <td className="px-2 md:px-3 py-1 md:py-1.5 bg-paper md:sticky md:left-0 md:z-10 md:border-r md:border-border border-neutral-200 text-sm">
              <div className="truncate">Print Campaing</div>
            </td>
            <td className="px-2 md:px-3 py-1 md:py-1.5 bg-paper md:sticky md:left-0 md:z-10 text-sm">
              <div className="truncate flex items-center gap-2">
                <div className="border w-fit rounded-sm flex overflow-hidden">
                  <span className="h-2.5 w-2.5 block border-r bg-red-400"></span>
                  <span className="h-2.5 w-2.5 block border-r bg-red-400"></span>
                  <span className="h-2.5 w-2.5 block bg-red-400"></span>
                </div>
                <p className="font-medium"> High</p>
              </div>
            </td>
            <td className="px-2 md:px-3 py-1 md:py-1.5 bg-paper md:sticky md:left-0 md:z-10 text-sm">
              <div className="truncate flex gap-2 items-center">
                <span className="text-xs bg-neutral-200/50 w-6 flex items-center justify-center border border-neutral-200 p-1 rounded-full uppercase">
                  bl
                </span>
                Benjamin Lee
              </div>
            </td>
            <td className="px-2 md:px-3 py-1 md:py-1.5 bg-paper md:sticky md:left-0 md:z-10 text-sm">
              <div className="truncate">16</div>
            </td>
            <td className="px-2 md:px-3 py-1 md:py-1.5 bg-paper md:sticky md:left-0 md:z-10 text-sm">
              <div className="truncate flex gap-3">
                <p className="text-xs py-1 px-2 bg-neutral-100 w-fit rounded-sm border border-neutral-200 ">
                  Complete
                </p>
                <p className="text-xs py-1 px-2 bg-neutral-100 w-fit rounded-sm border border-neutral-200 text-neutral-400 ">
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
