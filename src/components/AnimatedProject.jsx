import { CalendarFold, CirclePlus, ListFilter, X } from "lucide-react";
import { PORFILES } from "../constants/data";
import AnimateTableOne, { AnimateTableTwo } from "./AnimateTable";
import cube from "../assets/rotating-cube.gif";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const AnimatedProject = () => {
  const [showTable, setShowTable] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showMail, setShowMail] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => {
      setShowTable(false);
    }, 3000);

    const t2 = setTimeout(() => {
      setShowOverlay(true);
    }, 3500);

    const t3 = setTimeout(() => {
      setShowOverlay(false);
      setShowMail(true);
    }, 6000);

    const t4 = setTimeout(() => {
      setShowTable(true);
      setShowOverlay(false);
      setShowMail(false);
    }, 10000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);
  const Motion = motion;
  return (
    <div className="flex justify-center items-center w-full md:max-w-5xl m-auto min-h-screen p-3 md:p-0 overflow-hidden relative mb-10">
      <div className="border border-gray-200 min-h-150 w-full bg-white rounded-xl overflow-hidden shadow-[0_20px_10px_-20px_rgba(0,0,0,0.3)] flex md:flex-row flex-col ">
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
          <div className="hidden py-4 px-5 md:flex justify-between">
            <div className="flex items-center gap-3">
              <div className="flex border border-neutral-200 rounded-md">
                <span className="flex items-center justify-center border-r border-neutral-200 py-1.5 px-3 gap-1 rounded-l-sm rounded-bl-sm">
                  <CalendarFold size={12} />
                  <h2 className="text-xs">Date</h2>
                </span>

                <span className="flex items-center justify-center border-r border-neutral-200 py-1.5 px-2 gap-1">
                  <h2 className="text-xs text-neutral-500">is</h2>
                </span>

                <span className="flex items-center justify-center border-r border-neutral-200 py-1.5 px-2 gap-1">
                  <h2 className="text-xs text-neutral-600">Today</h2>
                </span>

                <span className="flex items-center justify-center border-r border-neutral-200 py-1.5 px-2 gap-1">
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
          <div className="py-4 px-5 flex gap-1 items-center">
            <span className="h-2.5 w-2.5 rounded-full block bg-yellow-500"></span>
            <p className="text-xs font-medium capitalize">3 pending</p>
          </div>

          <div className="overflow-hidden ">
            <div className="px-6 overflow-x-auto w-full  ">
              <div className="rounded-md border border-neutral-200 w-full ">
                <AnimateTableOne visible={showTable} />
              </div>
            </div>
          </div>

          <div className="py-4 px-5 flex gap-1 items-center mt-3">
            <span className="h-2.5 w-2.5 rounded-full block bg-blue-500"></span>
            <p className="text-xs font-medium capitalize">3 In progress</p>
          </div>

          <div className="px-6 overflow-x-auto ">
            <div className="rounded-md border border-neutral-200 min-w-max">
              <AnimateTableTwo />
            </div>
          </div>
        </div>
      </div>
      {showOverlay && (
        <div className="h-full w-full absolute z-10 bg-white/60 flex items-center justify-center">
          <span className="flex  items-center bg-white w-fit h-13 px-2 shadow-sm border border-neutral-200/80 rounded-md overflow-hidden relative">
            <div className="flex items-center gap-3 ">
              <img src={cube} alt="cube" className="w-8 " />
              <span className="h-fit w-fit pb-1 absolute right-1 pl-1 overflow-hidden">
                |
              </span>
              <Motion.p
                initial={{ width: 10 }}
                animate={{ width: "fit-content" }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 0.5,
                }}
                className="capitalize text-neutral-500 text-nowrap"
              >
                Chadroom is scanning for new email
              </Motion.p>
            </div>
          </span>
        </div>
      )}
      {showMail && (
        <div className="absolute w-full h-full  z-10 max-w-xl flex items-end justify-center  ">
          <div
            className="border border-neutral-200 bg-white w-fit flex flex-col px-5
        py-2 justify-center rounded-lg shadow-xl "
          >
            <div className="flex gap-5 items-center py-3 px-3 border-b border-neutral-200">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4vtphMtxRWfK6nO2CIbGfSETyEs79Dr6oPw&s"
                alt="d"
                className="w-8"
              />
              <h2 className="text-sm font-medium">New Email Detacted</h2>
            </div>
            <div className="px-2 py-3 flex flex-col gap-2">
              <p>Hello Team,</p>
              <ul>
                <li>
                  <strong>Project Alpha:</strong> We’ve completed the initial
                  review and will begin testing tomorrow.
                </li>
                <li>
                  <strong>Design Assets:</strong> New mockups are available in
                  the shared folder.
                </li>
                <li>
                  <strong>Team Meeting:</strong> Don’t forget our sync at 10 AM
                  on Friday.
                </li>
              </ul>

              <p>
                Best regards,
                <br />
                The Management Team
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimatedProject;
