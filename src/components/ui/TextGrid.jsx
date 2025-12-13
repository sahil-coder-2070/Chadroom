import React from "react";
import { ArrowSvg, MailSvg, MoonSvg } from "../PersonSvg";
import { motion } from "motion/react";

const TextGrid = ({ items ,heading }) => {
  const Motion = motion;
  return (
    <div className="h-100 grid grid-cols-3 md:grid-cols-5 items-center justify-center max-w-5xl m-auto gap-10">
      <div className=" h-full flex items-center  col-span-3 md:col-span-2">
        <Motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-bold text-2xl "
        >
         {heading}
        </Motion.h2>
      </div>
      {items.map((item, index) => {
        return (
          <>
            {" "}
            <div className=" h-full flex items-start justify-center flex-col">
              <Motion.span
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {item.TopIcon}
              </Motion.span>
              <Motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-[175px] text-sm"
              >
                {item.Title}
              </Motion.p>
            </div>
          </>
        );
      })}
      
    </div>
  );
};

export default TextGrid;
