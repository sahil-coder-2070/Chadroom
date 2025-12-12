import React from "react";

const PersonSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ml-auto"
      viewBox="0 0 128 128"
      fill="white"
      width="150"
      stroke="white"
    >
      <path d="M50 25h23m3 4h2m6 20h2m-8 36h2m-6-18h3m-31 0h12m-11 2h15m-13 2h28m-27 2h30m-29 2h25m-23 2h22m-19 2h16m-22 6h24m-24 4h29m-30 2h17m-16-4h11m-11-4h4m-9 12h26m-24-2h38m-87 4h98m-50 2h37m-35 4h33m-31 4h29m-25 4h21m-54-10h87m-95 4h103M8 109h113M7 113h115M7 117h115M6 121h117M6 125h117M40 55h3.83M84 55h2m-40-8h4m12 0h8m-24 4h7m-7 8h17m6 0h11m-37 2h42m-39 2h33m-33 2h36m-12 4h11M60 51h12m-26 4h35m-41 2h46M47 37h9m-6 2h28m-32 4h34m-44 2h44m-40 4h41m-41 4h46M26 41h54m-43-8h14m-5-4h11m6-8h7" />
    </svg>
  );
};

export default PersonSvg;

export const ArrowSvg = () => (
  <svg
    className="text-primary"
    height={64}
    viewBox="0 0 64 64"
    width={64}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.977 14h3.424m-3.424 4h8.121m-8.121 4h12.948m-12.948 4H36M18.997 42H40m-21.003 4h7.112m5.896 0h9.778m-7.778 4h9.778m-6.778 4H41M18.977 30h20.108m-20.108 4h24.896m-24.896 4H48.66M3 32h10m-5-5v2m-3 1h6m-6 4h6m-3 1v2m29-23h18m-12-4h6m-9 2h12m-12 4h12M46 5v2m-2 1h4m-4 12h4m-2 1v2m-3-5h6m1 31h8m-4-5v2m-2 1h4m-4 4h4m-2 1v2"
      fill="none"
      stroke="#2563eb"
      strokeWidth={2}
    />
  </svg>
);

export const MailSvg = () => (
  <svg
    className="text-primary"
    fill="none"
    height={64}
    viewBox="0 0 64 64"
    width={64}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 17h42M8 39h48M8 35h20M8 31h14M8 27h10M8 23h5m38 0h5m-10 4h10m-14 4h14m-20 4h20M8 43h48M9 47h46M8 21h48M8 45h48M8 41h48M8 37h48M8 33h48M8 29h48M8 25h48M11 49h42"
      strokeWidth={2}
      stroke="#2563eb"
    />
  </svg>
);

export const MoonSvg = (props) => (
  <svg
    className="text-primary"
    fill="none"
    height={64}
    viewBox="0 0 64 64"
    width={64}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M37 8h2M9 40h5m10 12h13m3-40h4M16 48h28m-3-32h7M12 44h36m-7-24h10M24 40h27M40 24h12M32 36h20m-13-8h14m-17 4h17"
      stroke="#2563eb"
      strokeWidth={2}
    />
  </svg>
);
