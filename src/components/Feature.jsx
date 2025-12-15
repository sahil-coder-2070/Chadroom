import {
  Calendar,
  Check,
  DollarSign,
  InfinityIcon,
  TriangleAlert,
} from "lucide-react";
import AiFeature from "./AiFeature";
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import cube from "../assets/rotating-cube.gif";
import { motion } from "motion/react";

const Feature = () => {
  const Motion = motion;
  const [showContent, setShowContent] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [active, setAcitve] = useState(true);
  useEffect(() => {
    const runSequence = () => {
      setShowContent(false);
      setShowOverlay(false);
      setAcitve(true);

      const t1 = setTimeout(() => {
        setAcitve(false);
      }, 8900);

      const t2 = setTimeout(() => {
        setShowOverlay(true);
      }, 10000 - 500);

      const t3 = setTimeout(() => {
        setShowOverlay(false);
        setShowContent(true);
      }, 13000);
      const t5 = setTimeout(() => {
        setAcitve(false);
      }, 15000);
      const t4 = setTimeout(() => {
        runSequence();
      }, 18000);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
        clearTimeout(t5);
      };
    };

    const cleanup = runSequence();
    return cleanup;
  }, []);
  return (
    <div className="relative flex min-h-screen items-center justify-center select-none">
      <div className="relative mr-40 h-fit w-full max-w-lg rounded-lg border border-neutral-200 bg-white py-5 shadow-xl">
        <div className="border-b border-neutral-200 px-5 pt-3 pb-6">
          <p className="text-xs font-medium text-neutral-500">ASSIGN</p>
          <h2 className="text-lg font-bold">Event Video Needed</h2>
        </div>
        <div className="grid grid-cols-3 border-b border-neutral-200 px-5 pt-3 pb-6">
          <div className="flex flex-col gap-3">
            <span className="flex items-center gap-3 truncate font-medium tracking-wide text-neutral-500 capitalize">
              <p className="font-serif font-bold">
                <InfinityIcon size={18} />
              </p>
              <p className="text-sm font-semibold">client</p>
            </span>
            <span className="flex items-center gap-3 truncate font-medium tracking-wide text-neutral-500 capitalize">
              <p className="font-serif font-bold">
                <TriangleAlert size={18} />
              </p>
              <p className="text-sm font-semibold">urgency</p>
              <span className="rounded-sm bg-neutral-200/50 px-1 py-0.5 text-[10px] text-neutral-500">
                AI
              </span>
            </span>
            <span className="flex items-center gap-3 truncate font-medium tracking-wide text-neutral-500 capitalize">
              <p className="font-serif font-bold">
                <DollarSign size={18} />
              </p>
              <p className="text-sm font-semibold">budget</p>
            </span>
            <span className="flex items-center gap-3 truncate tracking-wide text-neutral-500 capitalize">
              <p className="font-serif font-bold">
                <Calendar size={18} />
              </p>
              <p className="text-sm font-semibold">deadline</p>
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm text-neutral-600">Fitness Pro</p>
            <div className="flex items-center gap-2 truncate">
              <div className="flex w-fit overflow-hidden rounded-sm border">
                <span className="block h-2 w-2 border-r bg-yellow-400"></span>
                <span className="block h-2 w-2 border-r bg-yellow-400"></span>
                <span className="block h-2 w-2"></span>
              </div>
              <p className="text-sm font-medium"> Low</p>
            </div>
            <p className="text-sm text-neutral-600">$40,000</p>
            <p className="text-sm text-neutral-600">Q3 2024</p>
          </div>
        </div>
        <div className="border-b border-neutral-200 px-5 pt-3 pb-6">
          <form className="flex flex-col items-start justify-center gap-1">
            <p className="mt-2 text-sm font-medium">Assignee</p>
            <input
              type="text"
              value={!showContent ? "" : "lima O'Sullivan"}
              className="h-9 w-full animate-pulse rounded-md border border-neutral-200 px-2 text-sm font-medium"
            />
            <p className="mt-3 text-sm font-medium">Note to Assignee</p>
            <input
              type="text"
              placeholder=" "
              value={
                !showContent
                  ? ""
                  : "We need to make sure Packaging high Quality"
              }
              className="h-9 w-full animate-pulse rounded-md border border-neutral-200 px-2 text-xs font-medium"
            />
          </form>
        </div>
        <div className="border-b border-neutral-200 px-5 pt-3 pb-6">
          <div className="flex h-full w-full flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-blue-600 p-0.5">
                <Check size={16} color="white" />
              </div>
              <p className="text-sm">Send an email to the Asignee</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-blue-600 p-0.5">
                <Check size={16} color="white" />
              </div>
              <p className="text-sm">Send an email to the Client</p>
            </div>
          </div>
        </div>
        <div className="px-5 pt-6">
          <div className="flex h-full w-full flex-col items-end gap-2">
            <button className="rounded-md border-none border-transparent bg-blue-600 px-5 py-1.5 text-sm font-medium text-white ring-1 ring-blue-500">
              Assign
            </button>
          </div>
        </div>
      </div>
      <span className="relative -ml-90 shadow-xl">
        <AiFeature Activeclass={active} />
      </span>

      <AnimatePresence mode="wait">
        {showOverlay && (
          <Motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: showOverlay ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute inset-0 z-10 flex h-[90%] w-full items-center justify-center bg-white/60 backdrop-blur-[1px]"
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
                    duration: 3,
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
    </div>
  );
};

export default Feature;
