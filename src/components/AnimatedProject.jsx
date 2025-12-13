import { CalendarFold, CirclePlus, ListFilter, X } from "lucide-react";
import { PORFILES } from "../constants/data";
import AnimateTableOne, { AnimateTableTwo } from "./AnimateTable";
import cube from "../assets/rotating-cube.gif";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const AnimatedProject = () => {
  const [showTable, setShowTable] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showMail, setShowMail] = useState(false);
  useEffect(() => {
    const runSequence = () => {
      // Step 0: Reset states before starting cycle
      setShowTable(true);
      setShowOverlay(false);
      setShowMail(false);

      // Step 1 → 3 sec later
      const t1 = setTimeout(() => {
        setShowTable(false);
      }, 3000);

      // Step 2 → 3.5 sec later
      const t2 = setTimeout(() => {
        setShowOverlay(true);
      }, 3500);

      // Step 3 → 6 sec later
      const t3 = setTimeout(() => {
        setShowOverlay(false);
        setShowMail(true);
      }, 6000);

      // Step 4 → 10 sec later (RESET AND START AGAIN)
      const t4 = setTimeout(() => {
        runSequence(); // 👈 LOOP STARTS AGAIN
      }, 10000);

      // Cleanup for each loop cycle
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
      };
    };

    const cleanup = runSequence();
    return cleanup;
  }, []);
  const Motion = motion;
  return (
    <div className="relative m-auto mb-10 flex h-fit w-full items-center justify-center overflow-hidden p-3 md:max-w-5xl md:p-0">
      <div className="flex min-h-150 w-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_20px_10px_-20px_rgba(0,0,0,0.3)] md:flex-row">
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
            <div className="w-full overflow-x-auto px-6">
              <div className="w-full rounded-md border border-neutral-200">
                <AnimateTableOne visible={showTable} />
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-1 px-5 py-4">
            <span className="block h-2.5 w-2.5 rounded-full bg-blue-500"></span>
            <p className="text-xs font-medium capitalize">3 In progress</p>
          </div>

          <div className="overflow-x-auto px-6">
            <div className="min-w-max rounded-md border border-neutral-200">
              <AnimateTableTwo />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {showOverlay && (
          <Motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: showOverlay ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute z-10 flex h-full w-full items-center justify-center bg-white/60 backdrop-blur-[1px]"
          >
            <span className="relative flex h-13 w-fit items-center overflow-hidden rounded-md border border-neutral-200/80 bg-white px-2 shadow-sm">
              <div className="flex items-center gap-3">
                <img src={cube} alt="cube" className="w-8" />
                <span className="absolute right-1 h-fit w-fit overflow-hidden pb-1 pl-1">
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
                  className="text-nowrap text-neutral-500 capitalize"
                >
                  Chadroom is scanning for new email
                </Motion.p>
              </div>
            </span>
          </Motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {showMail && (
          <Motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: showMail ? 1 : 0, y: showMail ? 0 : 50 }}
            transition={{ duration: 0.6 }}
            exit={{ opacity: 0, y: 50 }}
            className="absolute z-10 flex h-full w-full max-w-xl items-end justify-center"
          >
            <div className="flex w-fit flex-col justify-center rounded-lg border border-neutral-200 bg-white px-5 py-2 shadow-xl">
              <div className="flex items-center gap-5 border-b border-neutral-200 px-3 py-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4vtphMtxRWfK6nO2CIbGfSETyEs79Dr6oPw&s"
                  alt="d"
                  className="w-8"
                />
                <h2 className="text-sm font-medium">New Email Detacted</h2>
              </div>
              <div className="flex flex-col gap-2 px-2 py-3">
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
                    <strong>Team Meeting:</strong> Don’t forget our sync at 10
                    AM on Friday.
                  </li>
                </ul>

                <p>
                  Best regards,
                  <br />
                  The Management Team
                </p>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedProject;
