import React from "react";
import Language from "../Language";

const AI = () => {
  return (
    <div className="flex gap-5 max-w-[1080px] px-[20px] mx-auto h-screen w-screen overflow-hidden items-center">
      <div className="bg-[#F5F5F1] w-[433px] h-[319px] flex flex-col justify-center items-center">
        <Language />

        <h2 className="text-slate-500 text-xl">Talk With Me...</h2>

        <img src="/images/talk/mic.svg" alt="" width={133} height={133} />
      </div>

      <div className="bg-[#F5F5F5] w-[703px] h-[149px] text-4xl text-[#4D4D4D] font-normal text-center justify-start flex">
        Herman is just like the rest of us . Everyday he has to make all
      </div>
    </div>
  );
};

export default AI;
