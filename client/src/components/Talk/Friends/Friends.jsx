import React from "react";
import Language from "../Language";
import Profilee from "../Profilee";

const Friends = () => {
  return (
    <div className="max-w-[1080px] px-[20px] mx-auto h-screen w-screen overflow-hidden flex align-middle justify-center">
      <div className="flex gap-4 items-center">
        <div className="bg-[#F5F5F1] w-[433px] h-[319px] flex flex-col justify-center items-center">
          <Language />

          <div className="bg-[#F5F5F5] w-[350px] h-[248px] flex flex-col items-center gap-4 justify-center">
            <div>Searching</div>
            <img src="/images/talk/search.svg" alt="" width={51} height={33} />
          </div>
        </div>

        <div className="flex gap-10 pb-10">
          <Profilee />

          <Profilee />
        </div>
      </div>
    </div>
  );
};

export default Friends;
