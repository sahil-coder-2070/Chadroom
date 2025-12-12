import React from "react";

const Hero = () => {
  return (
    <>
      <div className="min-h-fit flex items-center justify-center flex-col gap-12 my-20">
        <h1 className="text-center uppercase text-4xl md:text-[120px] font-extrabold md:leading-28 ">
          Run on <br /> autopilot
        </h1>
        <p className="font-medium md:text-lg tracking-tight">
          Powerful software that works so you don't have to
        </p>
        <div className="flex items-center gap-3">
          <button className="py-2.5 px-5 bg-neutral-100/80 border border-neutral-200 text-sm rounded-sm font-medium">
            Join waitlist
          </button>
          <button className="py-2.5 px-5 bg-blue-700 border-none rounded-md text-sm text-white font-medium">
            Get access now
          </button>
        </div>
        <div className="flex items-center flex-col  gap-3 md:w-150 relative">
          <p className="text-md text-neutral-500">
            Describe your business, get powerful software
          </p>
          <textarea
            className="h-30 w-60 md:w-150 border border-neutral-200 
              focus:border-blue-700 focus:outline-none active:outline-none p-3 rounded-md bg-white resize-none "
          ></textarea>
          <button className=" absolute py-2 px-4 bg-neutral-100/80 border border-neutral-200 text-sm rounded-md  bottom-2 right-12">
            Generate
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
