import { motion } from "motion/react";
import PersonSvg from "./PersonSvg";

const Verification = () => {
  const Motion = motion;
  const CheckList = [
    "confirm appointment schedule",
    "follow up with customer inquiry",
    "acknowledge refund request",
    "notify order shipment",
    "send payment reminder",
    "respond to service complaint",
    "inform user of account update",
    "request additional information",
    "confirm subscription renewal",
    "notify delivery delay",
    "send payment reminder",
    "respond to service complaint",
    "inform user of account update",
    "request additional information",
    "confirm subscription renewal",
    "notify delivery delay",
  ];
  const itemHeight = 60;
  const list = [...CheckList, ...CheckList];
  const totalHeight = CheckList.length * itemHeight;
  return (
    <div className="h-[900px] p-3">
      <div className="h-full w-full bg-[#143CFF] rounded-md flex flex-col">
        <div className=" w-full h-3/12 flex justify-center items-center flex-col pt-10 gap-3">
          <h2 className="text-white font-semibold text-lg">Meet Headroom</h2>
          <p className="text-2xl text-white font-bold text-center tracking-tight">
            Your AI assistant that does all your work for you, so you can go
            back to
            <br /> being busy
          </p>
        </div>
        <div className=" w-full h-full flex overflow-hidden">
          <div className=" w-3/4 flex items-center justify-end  pr-4 pb-5 ">
          <span className="border border-white rounded-full overflow-hidden border-2">

            <PersonSvg />
          </span>
          </div>
          <div className=" w-full h-full p-2 flex flex-col items-start justify-center overflow-hidden mask-y-from-50%">
            {/* {[...CheckList, ...CheckList].map((item, index) => {
              return (
                <Motion.h2
                  animate={{ y: [-50 - index * 1, 0, 150] }}
                  transition={{
                    delay: 5,
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="capitalize text-white text-lg font-medium py-4"
                  key={index}
                >
                  {item}
                </Motion.h2>
              );
            })} */}
            <motion.div
              animate={{ y: [0, -totalHeight] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: CheckList.length,
                ease: "linear",
              }}
            >
              {list.map((item, index) => (
                <h2
                  key={index}
                  className="capitalize text-white text-lg font-medium py-4"
                  style={{ height: `${itemHeight}px` }}
                >
                  {item}
                </h2>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
