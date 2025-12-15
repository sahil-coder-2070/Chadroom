import React, { useEffect, useRef, useState } from "react";
import { PORFILES } from "../../constants/data";
import { MobileSvg } from "../PersonSvg";
import { motion as MOTION, useInView } from "motion/react";
const CardStagger = () => {
  return (
    <div className="h-full w-full overflow-hidden mask-b-from-80% px-3 pt-3">
      <div className="flex h-full w-full flex-col gap-2 overflow-hidden rounded-t-xl bg-neutral-200/50 px-1.5 py-1.5">
        <Cards />
      </div>
    </div>
  );
};

export default CardStagger;

const Profile = () => {
  return (
    <span className="flex">
      {PORFILES.map((item, index) =>
        index < 3 ? (
          <img
            key={index}
            className={`h-6 w-6 rounded-full border border-neutral-200 object-cover duration-200 group-hover:ml-0 ${index !== 0 ? `-ml-2` : ""}`}
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
  );
};

const Mobile = () => {
  return (
    <>
      <MobileSvg />
    </>
  );
};

const CardData = [
  {
    id: 3,
    title: "Productive",
    icon: <></>,
  },
  {
    id: 4,
    title: "Innovative",
    icon: <></>,
  },
  {
    id: 2,
    title: "Creative",
    icon: <Mobile />,
  },
  {
    id: 1,
    title: "Collaborative",
    icon: <Profile />,
  },
];

const Cards = () => {
  const [stagget, setStagget] = useState([]);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const animate = () => {
    const interval = setInterval(() => {
      setStagget((prev) => {
        if (!stagget) {
          return [CardData[0]];
        } else if (prev.length >= CardData.length) {
          clearInterval(interval);
          return prev;
        }

        return [CardData[prev.length], ...prev];
      });
    }, 1000);
    return interval;
  };

  useEffect(() => {
    let interval;
    if (isInView) {
      interval = animate();
    }
    return () => clearInterval(interval);
  }, [isInView]);
  return (
    <>
      <span ref={ref}>
        {stagget.map((item) => {
          return (
            <MOTION.div
              layout
              initial={{ opacity: 0, y: -10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              key={item.id}
              className="group mb-2 flex items-center justify-between rounded-[10px] border border-transparent bg-white px-6 py-4 ring-1 ring-black/5"
            >
              <h1 className="text-lg font-semibold">{item.title}</h1>
              <span>{item.icon} </span>
            </MOTION.div>
          );
        })}
      </span>
    </>
  );
};
