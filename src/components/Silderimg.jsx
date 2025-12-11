import { useEffect } from "react";
import { motion, useMotionValue } from "motion/react";
import { animate } from "motion";
import clientLogos from "../assets/client-logos.webp";

const SliderImg = () => {
  const Motion = motion;
  const x = useMotionValue(0);

  useEffect(() => {
    const controls = animate(x, ["0%", "-50%"], {
      duration: 10,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });

    return () => controls.stop();
  }, [x]);

  return (
    <div className="flex items-center justify-center my-10 mb-20 flex-col gap-5">
      <p className="text-neutral-500 text-sm">
        Loved by thousands of small businesses
      </p>

      <div className="overflow-hidden max-w-xl  mask-x-from-100 px-10">
        <Motion.div className="flex w-[250%]" style={{ x }}>
          <div className="flex w-1/2">
            <img src={clientLogos} className="w-250 opacity-60" />
          </div>

          <div className="flex w-1/2">
            <img src={clientLogos} className="w-500 opacity-60" />
          </div>
        </Motion.div>
      </div>
    </div>
  );
};

export default SliderImg;
