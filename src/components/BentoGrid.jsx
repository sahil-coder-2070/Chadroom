import React from "react";
import Thinking from "./skeleton/Thinking";
import CardStagger from "./skeleton/CardStagger";
import OrbitMotionCard from "./skeleton/OrbitMotionCard";
import MarqueeCard from "./skeleton/MarqueeCard";

const BentoGrid = () => {
  const gridItems = [
    {
      className: "md:col-span-2",
      skeleton: <Thinking />,
    },
    { className: "", skeleton: <CardStagger /> },
    { className: "", skeleton: <OrbitMotionCard /> },
    { className: "md:col-span-2", skeleton: <MarqueeCard/> },
  ];

  return (
    <div className="m-auto my-20 flex min-h-screen max-w-4/5 items-center justify-center">
      <div className="grid h-full w-full grid-cols-1 gap-4 md:grid-cols-3">
        {gridItems.map((item, index) => (
          <div
            key={index}
            className={`h-75 w-full rounded-lg border border-transparent bg-white ring-1 ring-black/10 ${item.className}`}
          >
            {item.skeleton}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
