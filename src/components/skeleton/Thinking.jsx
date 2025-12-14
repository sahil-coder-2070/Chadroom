import { AnimatePresence, motion } from "motion/react";

const Thinking = () => {
  const thinkingItems = [
    {
      title: "Assistant",
      x: 120,
      y: -40,
      class:
        "border border-transparent bg-violet-500/20 px-2 py-1 text-xs ring-1 ring-violet-300/80 text-violet-600 font-medium",
    },
    {
      title: "Automate",
      x: 120,
      y: 20,
      class:
        "border border-transparent bg-yellow-500/20 px-2 py-1 text-xs ring-1 ring-yellow-300/80 text-yellow-600 font-medium",
    },
    {
      title: "Urgency",
      x: 100,
      y: -90,
      class:
        "border border-transparent bg-red-500/20 px-2 py-1 text-xs ring-1 ring-red-300/80 text-red-600 font-medium",
    },
    {
      title: "Assigning",
      x: -120,
      y: -40,
      class:
        "border border-transparent bg-green-500/20 px-2 py-1 text-xs ring-1 ring-green-300/80 text-green-600 font-medium",
    },
    {
      title: "Thinking",
      x: -100,
      y: -90,
      class:
        "border border-transparent bg-orange-500/20 px-2 py-1 text-xs ring-1 ring-orange-300/80 text-orange-600 font-medium",
    },
    {
      title: "Budgeting",
      x: -120,
      y: 20,
      class:
        "border border-transparent bg-blue-600/20 px-2 py-1 text-xs ring-1 ring-blue-300/80 text-blue-700 font-medium",
    },
  ];
  const Motion = motion;
  return (
    <div className="grid h-full grid-cols-2 px-6 py-5">
      <div className="flex flex-col gap-2 pt-2">
        <h2 className="text-xl font-bold tracking-tight">
          Always thinking for you
        </h2>
        <p className="text- max-w-xs font-normal text-neutral-500">
          Chadroom enriches your data and helps you make smarter decisions.
        </p>
      </div>
      <div className="flex h-full items-center justify-center">
        <div className="relative z-1">
          <img
            src="/sahil.png"
            alt="image"
            className="w-40 overflow-hidden rounded-full"
          />
        </div>
        <AnimatePresence mode="wait">
          {thinkingItems.map((item, index) => (
            <Motion.span
              key={index}
              initial={{ x: 0, y: 0, width: 0 }}
              animate={{ x: item.x, y: item.y, width: 70 }}
              transition={{
                duration: 1.5,
                delay: index * 0.4,
                repeat: Infinity,
                repeatDelay: 4,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className={`absolute w-fit overflow-hidden rounded-md ${item.class}`}
            >
              {item.title}
            </Motion.span>
          ))}

          {/* <Motion.span
            initial={{ x: 0, y: 0 }}
            animate={{ x: 100, y: -40 }}
            exit={{ x: 0, y: 0 }}
            transition={{
              duration: 1,
              delay: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="absolute rounded-md border border-transparent bg-white/20 px-2 py-1 text-xs ring-1 ring-neutral-200"
          >
            Thinking
          </Motion.span>
          <Motion.span
            initial={{ x: 0, y: 0 }}
            animate={{ x: -100, y: -40 }}
            exit={{ x: 0, y: 0 }}
            transition={{
              duration: 1,
              delay: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="absolute rounded-md border border-transparent bg-white/20 px-2 py-1 text-xs ring-1 ring-neutral-200"
          >
            Thinking
          </Motion.span>
          <Motion.span
            initial={{ x: 0, y: 0 }}
            animate={{ x: -100, y: -90 }}
            exit={{ x: 0, y: 0 }}
            transition={{
              duration: 1,
              delay: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="absolute rounded-md border border-transparent bg-white/20 px-2 py-1 text-xs ring-1 ring-neutral-200"
          >
            Thinking
          </Motion.span>
          <Motion.span
            initial={{ x: 0, y: 0 }}
            animate={{ x: -100, y: 80 }}
            exit={{ x: 0, y: 0 }}
            transition={{
              duration: 1,
              delay: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="absolute rounded-md border border-transparent bg-white/20 px-2 py-1 text-xs ring-1 ring-neutral-200"
          >
            Thinking
          </Motion.span> */}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Thinking;
