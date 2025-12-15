import Marquee from "react-fast-marquee";
import { motion as Motion, useAnimation } from "motion/react";
import { useEffect } from "react";

const notifications = [
  { id: 1, message: "Your quote was approved" },
  { id: 2, message: "New comment on your project" },
  { id: 3, message: "Team member joined the workspace" },
  { id: 4, message: "Your document has been shared" },
  { id: 5, message: "Payment received successfully" },
  { id: 6, message: "Reminder: Meeting starts in 10 minutes" },
];
const MarqueeCard = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: ["0%", "-50%"],
      transition: { duration: 18, repeat: Infinity, ease: "linear" },
    });
  }, [controls]);

  const repeatedNotifications = [
    ...notifications,
    ...notifications,
    ...notifications,
  ];
  return (
    <div className="grid h-full grid-cols-2 px-6 py-5">
      <div className="flex flex-col gap-2 pt-2">
        <h2 className="text-xl font-bold tracking-tight">
          Always keep in loop
        </h2>
        <p className="text- max-w-xs font-normal text-neutral-500">
          Send notifications to teammates, customers, and vendors automatically.
        </p>
      </div>

      <div className="flex h-full flex-col items-center justify-center gap-3 overflow-hidden mask-y-from-80%">
        <Motion.div
          animate={controls}
          onHoverStart={() => controls.stop()}
          onHoverEnd={() =>
            controls.start({
              y: ["0%", "-50%"],
              transition: { duration: 12, repeat: Infinity, ease: "linear" },
            })
          }
          className="flex flex-col items-center justify-center gap-3"
        >
          {repeatedNotifications.map((items) => {
            return (
              <div
                key={items.id}
                className="vertical-marquee ml-1 flex w-full items-center justify-start gap-2 rounded-md border border-neutral-200 px-5 py-2"
              >
                <img
                  src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
                  alt="gmail logo"
                  className="h-4"
                />
                <p className="text-sm text-neutral-500">{items.message}</p>
              </div>
            );
          })}
        </Motion.div>
      </div>
    </div>
  );
};

export default MarqueeCard;
