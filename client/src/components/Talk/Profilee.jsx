import React from "react";
import LangName from "./LangName";

const Profilee = () => {
  return (
    <div className="bg-[#F5F5F5] w-[350px] h-[242px] flex flex-col items-center gap-1 justify-center">
      <img src="/images/talk/profile.svg" alt="" width={100} height={105} />
      <div className="text-xl font-semibold">
        Alex Jakson <sup className="text-red-700">US</sup>
      </div>
      <div className="flex gap-1 text-xs">
        <img src="/images/talk/Vector.svg" alt="" />
        @alen.23
      </div>
      <div className="flex gap-4 items-center justify-center">
        <LangName language={"English"} />
        <LangName language={"French"} />
      </div>
    </div>
  );
};

export default Profilee;
