import React from "react";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
const AiFeature = ({ Activeclass }) => {
  const Motion = motion;

  return (
    <div className="flex items-center justify-center">
      <div className="h-fit w-full min-w-sm rounded-md border border-neutral-200 bg-white">
        <div className="flex items-center justify-between border-b border-neutral-200 px-7 py-5">
          <h2 className="text-lg font-bold">AI Automation</h2>
          <p className="text-sm font-medium text-blue-600">See Suggestions</p>
        </div>
        <div className="flex items-center justify-between px-7 py-5">
          <div className="h-30 w-90 max-w-90 overflow-hidden rounded-md border border-neutral-200 px-2 py-1 text-wrap">
            <p className="text-sm whitespace-pre-wrap">
              <Typewriter
                words={[
                  " Assign tickets to the customer's account manager automatically,unless it's a service ticket, in which case assgin to service team",
                ]}
                loop={true}
                cursor
                cursorStyle=""
                typeSpeed={50}
                deleteSpeed={20}
                delaySpeed={10000}
              />
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-6 pb-10">
          <div
            className={`flex h-8 w-[60px] items-center rounded-2xl pr-1 pl-1 ${
              Activeclass
                ? "justify-start bg-neutral-200/70"
                : "justify-end bg-blue-600"
            }`}
          >
            <div className="h-6 w-6 rounded-full bg-white"></div>
          </div>
          <p className="text-sm font-medium">Active</p>
        </div>
      </div>
    </div>
  );
};

export default AiFeature;
