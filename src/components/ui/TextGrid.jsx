import React from "react";
import { ArrowSvg, MailSvg, MoonSvg } from "../PersonSvg";

const TextGrid = () => {
  return (
    <div className="h-100 grid grid-cols-3 md:grid-cols-5 items-center justify-center max-w-5xl m-auto gap-10">
      <div className=" h-full flex items-center  col-span-3 md:col-span-2">
        <h2 className="font-bold text-2xl ">
          All your time consuming emails, handled by Headroom
        </h2>
      </div>
      <div className=" h-full flex items-start justify-center flex-col">
        <ArrowSvg />
        <p className="max-w-[175px] text-sm">
          Headroom quickly takes action for you, because humans are slow
        </p>
      </div>
      <div className=" h-full flex items-start justify-center flex-col">
        <MailSvg />
        <p className="max-w-[177px] text-[13.5px]">
          Headroom tracks, follows up, and closes the loop while you do
          important stuff
        </p>
      </div>
      <div className=" h-full flex items-start justify-center flex-col">
        <MoonSvg />
        <p className="max-w-[175px] text-sm">
          Rest easy knowing your business actually works without you for once
        </p>
      </div>
    </div>
  );
};

export default TextGrid;
