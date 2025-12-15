const OrbitMotionCard = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden px-4 py-2">
      <div className="flex h-full flex-col gap-1 pt-2">
        <h2 className="text-xl font-bold tracking-tight">
          One Platform
        </h2>
        <p className="text-base max-w-xs font-normal text-neutral-500">
         All your apps and data live together. No more juggling emails and spreadsheets.
        </p>
      </div>
      <Circle className="-bottom-40 z-40 flex h-60 w-60 items-center justify-center bg-neutral-50/90">
        <div className="animate-orbit absolute flex size-10 items-center justify-center rounded-md border border-transparent bg-white ring-1 ring-black/20 [--orbit-duration:5s] [--translate-position:120px]">
          <img
            src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/meta-color.png"
            alt="metalogo"
            className="size-6"
          />
        </div>
      </Circle>
      <Circle className="-bottom-49 z-30 flex h-80 w-80 items-center justify-center bg-white">
        <div className="animate-orbit absolute flex size-10 items-center justify-center rounded-md border border-transparent bg-white ring-1 ring-black/20 [--orbit-duration:8s] [--translate-position:160px]">
          <img
            src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/openai.png"
            alt="metalogo"
            className="size-6"
          />
        </div>
      </Circle>
      <Circle className="-bottom-59 z-10 flex h-100 w-100 items-center justify-center bg-neutral-100/10">
        <div className="animate-orbit absolute flex size-10 items-center justify-center rounded-md border border-transparent bg-white ring-1 ring-black/20 [--orbit-duration:12s] [--translate-position:200px]">
          <img
            src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/googlecloud-color.png"
            alt="metalogo"
            className="size-6"
          />
        </div>
        <div className="animate-orbit absolute flex size-10 items-center justify-center rounded-md border border-transparent bg-white ring-1 ring-black/20 [--orbit-duration:16s] [--translate-position:200px]">
          <img
            src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/microsoft-color.png"
            alt="metalogo"
            className="size-6"
          />
        </div>
      </Circle>
    </div>
  );
};

export default OrbitMotionCard;

const Circle = ({ className, children }) => {
  return (
    <div
      className={`absolute m-auto rounded-full border border-transparent ring ring-black/6 ${className}`}
    >
      {children}
    </div>
  );
};
