import {
  Building,
  CalendarFold,
  ChevronDown,
  CirclePlus,
  House,
  Inbox,
  ListCheck,
  ListFilter,
  LoaderCircle,
  SquareChartGantt,
  Ticket,
  UserRound,
  X,
} from "lucide-react";
import React from "react";
import { PORFILES, PROJECTS } from "../constants/data";
import Table, { TableTwo } from "../components/Table";

const ProjectShow = () => {
  return (
    <div className="m-auto flex min-h-fit w-full items-center justify-center overflow-hidden p-3 md:max-w-6xl md:p-0">
      <div className="flex min-h-150 w-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_20px_10px_-20px_rgba(0,0,0,0.3)] md:flex-row">
        <div className="border-r border-neutral-200 md:w-1/4">
          <div className="hidden items-center justify-between border-b border-neutral-200 px-5 py-4 md:flex">
            <div className="hidden items-center justify-center gap-2 md:flex">
              <span className="rounded-md bg-violet-100/70 px-2 py-1.5 text-[10px] font-medium text-blue-700">
                GS
              </span>
              <h2 className="text-sm font-medium">GS Studio</h2>
            </div>
            <ChevronDown size={14} />
          </div>
          <div className="hidden flex-col gap-2 border-b border-neutral-200 px-5 py-4 md:flex">
            <div className="flex items-center gap-2">
              <span>
                <House size={16} color="#a3a3a3" />
              </span>
              <p className="text-sm font-medium text-neutral-400">Home</p>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <UserRound size={16} color="#a3a3a3" />
              </span>
              <p className="text-sm font-medium text-neutral-400">People</p>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <Building size={16} color="#a3a3a3" />
              </span>
              <p className="text-sm font-medium text-neutral-400">Companies</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 px-5 py-4 md:flex-col">
            <div className="flex flex-row items-center justify-between">
              <h2 className="text-sm font-bold text-neutral-500">APPS</h2>
              <CirclePlus size={16} color="#a3a3a3" />
            </div>
            <div className="flex gap-3 border-t border-neutral-200 pt-3 md:flex-col md:border-none md:pt-0">
              {PROJECTS.map((item, index) => {
                const Icons = item.icon;
                return (
                  <div key={index} className="flex">
                    <div className="flex items-center gap-2">
                      <span className={`${item.bgColor} rounded-lg p-2`}>
                        <Icons size={20} />
                      </span>
                      <p className="text-[13px] font-medium text-neutral-800 md:text-sm">
                        {item.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-between gap-2 border-b border-neutral-200 px-5 py-4">
            <h2 className="text-xl font-semibold">Projects</h2>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-2 rounded-md bg-neutral-100 px-3 py-1">
                <CirclePlus size={16} />
                <button className="text-sm font-medium">Create Project</button>
              </span>
              <span className="flex">
                {PORFILES.map((item, index) =>
                  index < 3 ? (
                    <img
                      key={index}
                      className={`h-6 w-6 rounded-full border border-neutral-200 object-cover ${index !== 0 ? `-ml-2` : ""}`}
                      src={item.img}
                      alt={item.alt}
                    />
                  ) : (
                    <span className="-ml-2 flex h-6 w-6 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 object-cover text-xs text-neutral-500">
                      +{index}
                    </span>
                  ),
                )}
              </span>
            </div>
          </div>
          <div className="hidden justify-between px-5 py-4 md:flex">
            <div className="flex items-center gap-3">
              <div className="flex rounded-md border border-neutral-200">
                <span className="flex items-center justify-center gap-1 rounded-l-sm rounded-bl-sm border-r border-neutral-200 px-3 py-1.5">
                  <CalendarFold size={12} />
                  <h2 className="text-xs">Date</h2>
                </span>

                <span className="flex items-center justify-center gap-1 border-r border-neutral-200 px-2 py-1.5">
                  <h2 className="text-xs text-neutral-500">is</h2>
                </span>

                <span className="flex items-center justify-center gap-1 border-r border-neutral-200 px-2 py-1.5">
                  <h2 className="text-xs text-neutral-600">Today</h2>
                </span>

                <span className="flex items-center justify-center gap-1 border-r border-neutral-200 px-2 py-1.5">
                  <X size={12} color="#171717" />
                </span>
              </div>

              <ListFilter size={16} color="#a3a3a3" />
            </div>

            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <div className="h-6 w-6 rounded-full border-3 border-neutral-200 border-r-yellow-500"></div>
                <h2 className="pl-1 font-semibold text-neutral-500">3</h2>
                <p className="text-sm text-neutral-500 capitalize">pending</p>
              </span>

              <span className="flex items-center gap-1">
                <div className="h-6 w-6 rounded-full border-3 border-neutral-200 border-r-blue-500"></div>
                <h2 className="pl-1 font-semibold text-neutral-500">3</h2>
                <p className="text-sm text-neutral-500 capitalize">
                  in progress
                </p>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1 px-5 py-4">
            <span className="block h-2.5 w-2.5 rounded-full bg-yellow-500"></span>
            <p className="text-xs font-medium capitalize">3 pending</p>
          </div>

          <div className="overflow-hidden">
            <div className="overflow-x-auto px-6">
              <div className="min-w-max rounded-md border border-neutral-200">
                <Table />
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-1 px-5 py-4">
            <span className="block h-2.5 w-2.5 rounded-full bg-blue-500"></span>
            <p className="text-xs font-medium capitalize">3 In progress</p>
          </div>

          <div className="overflow-x-auto px-6">
            <div className="min-w-max rounded-md border border-neutral-200">
              <TableTwo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShow;
