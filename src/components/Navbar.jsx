import React from "react";

const Navbar = () => {
  return (
    <navbar className="flex items-center justify-between max-w-7xl m-auto py-5 px-6 rounded-md sticky top-2  bg-neutral-50/50  ">
      <div className="flex items-center gap-8"> 
        <div className="flex items-center gap-2">
          <span className="h-5 w-5 bg-gray-200 border-b-5 border-blue-700"></span>
          <h1 className="font-bold text-xl">chadroom</h1>
        </div>
        <ul className="flex items-center gap-5 text-sm text-neutral-600">
          <a href="#">
            <li>Platform</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <button className="py-1.5 px-3 bg-neutral-100/80 border border-neutral-200 text-sm rounded-sm">Login</button>
        <button className="py-1.5 px-3 bg-blue-700 border-none rounded-md text-sm text-white">Get access now</button>
      </div>
    </navbar>
  );
};

export default Navbar;
