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
    <div className="flex justify-center items-center max-w-6xl m-auto min-h-screen">
      <div className="border border-gray-200 min-h-150 w-full bg-white rounded-xl overflow-hidden shadow-[0_20px_10px_-20px_rgba(0,0,0,0.3)] flex">
        <div className=" w-1/4 border-r border-neutral-200 ">
          <div className="flex justify-between items-center py-4 px-5 border-b border-neutral-200">
            <div className="flex items-center justify-center gap-2">
              <span className="text-[10px] text-blue-700 bg-violet-100/70 px-2 py-1.5 font-medium rounded-md">
                GS
              </span>
              <h2 className="text-sm font-medium">GS Studio</h2>
            </div>
            <ChevronDown size={14} />
          </div>
          <div className="py-4 px-5 flex flex-col gap-2 border-b border-neutral-200 ">
            <div className=" flex items-center gap-2 ">
              <span>
                <House size={16} color="#a3a3a3" />
              </span>
              <p className="text-sm text-neutral-400 font-medium">Home</p>
            </div>
            <div className=" flex items-center gap-2 ">
              <span>
                <UserRound size={16} color="#a3a3a3" />
              </span>
              <p className="text-sm text-neutral-400 font-medium">People</p>
            </div>
            <div className=" flex items-center gap-2 ">
              <span>
                <Building size={16} color="#a3a3a3" />
              </span>
              <p className="text-sm text-neutral-400 font-medium">Companies</p>
            </div>
          </div>
          <div className="py-4 px-5 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-sm text-neutral-500">APPS</h2>
              <CirclePlus size={16} color="#a3a3a3" />
            </div>
            {PROJECTS.map((item, index) => {
              const Icons = item.icon;
              return (
                <div key={index} className=" flex items-center gap-2 ">
                  <span className={`${item.bgColor}  p-2 rounded-lg`}>
                    <Icons size={20} />
                  </span>
                  <p className="text-sm text-neutral-800 font-medium">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" w-full ">
          <div className="py-4 px-5 flex justify-between gap-2 border-b border-neutral-200">
            <h2 className="text-xl font-semibold">Projects</h2>
            <div className="flex  items-center gap-2   ">
              <span className="flex  items-center gap-2 py-1 px-3 bg-neutral-100 rounded-md">
                <CirclePlus size={16} />
                <button className="text-sm font-medium">Create Project</button>
              </span>
              <span className="flex">
                {PORFILES.map((item, index) =>
                  index < 3 ? (
                    <img
                      key={index}
                      className={`h-6 w-6 rounded-full object-cover border border-neutral-200 
        ${index !== 0 ? `-ml-2` : ""}`}
                      src={item.img}
                      alt={item.alt}
                    />
                  ) : (
                    <span className="h-6 w-6 rounded-full object-cover border border-neutral-200 flex items-center text-xs justify-center text-neutral-500 -ml-2 bg-neutral-50">
                      +{index}
                    </span>
                  )
                )}
              </span>
            </div>
          </div>
          <div className="py-4 px-5 flex justify-between">
            <div className="flex items-center gap-3">
              <div className="flex border border-neutral-200 rounded-md">
                <span className="flex items-center justify-center border-r border-neutral-200 py-1.5 px-3 gap-1 rounded-l-sm rounded-bl-sm">
                  <CalendarFold size={12} />
                  <h2 className="text-xs">Date</h2>
                </span>
                <span className="flex items-center justify-center border-r border-neutral-200 py-1.5 px-2 gap-1 ">
                  <h2 className="text-xs text-neutral-500">is</h2>
                </span>
                <span className="flex items-center justify-center border-r border-neutral-200 py-1.5 px-2 gap-1 ">
                  <h2 className="text-xs text-neutral-600">Today</h2>
                </span>
                <span className="flex items-center justify-center border-r border-neutral-200 py-1.5 px-2 gap-1 ">
                  <X size={12} color="#171717" />
                </span>
              </div>
              <ListFilter size={16} color="#a3a3a3" />
            </div>
            <div className="flex items-center gap-3">
              <span className="flex gap-1 items-center">
                <div className="w-6 h-6 border-3 border-neutral-200 border-r-yellow-500 rounded-full"></div>
                <h2 className="pl-1 font-semibold text-neutral-500">3</h2>
                <p className="capitalize text-neutral-500 text-sm">pending</p>
              </span>
              <span className="flex gap-1 items-center">
                <div className="w-6 h-6 border-3 border-neutral-200 border-r-blue-500 rounded-full"></div>
                <h2 className="pl-1 font-semibold text-neutral-500">3</h2>
                <p className="capitalize text-neutral-500 text-sm">
                  in progress
                </p>
              </span>
            </div>
          </div>
          <div>
            <div className="py-4 px-5 flex gap-1 items-center">
              <span
                className="h-2.5 w-2.5
                 rounded-full block bg-yellow-500"
              ></span>
              <p className="text-xs font-medium capitalize">3 pending</p>
            </div>
            <div className="">
              <div className="px-6 ">
                <div className="rounded-md border border-neutral-200  ">
                  <Table />
                </div>
              </div>
              <div className="py-4 px-5 flex gap-1 items-center mt-3">
                <span
                  className="h-2.5 w-2.5
                 rounded-full block bg-blue-500"
                ></span>
                <p className="text-xs font-medium capitalize">3 In progress</p>
              </div>
              <div className="px-6 ">
                <div className="rounded-md border border-neutral-200  ">
                  <TableTwo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShow;
