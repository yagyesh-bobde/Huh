import React from "react";
import Language from "./Language";
import { Link } from "react-router-dom";

const Talk = () => {
  return (
    <div className="flex gap-5 max-w-[1080px] px-[20px] mx-auto h-screen w-screen overflow-hidden items-center">
      <div className="w-full flex flex-col items-center text-center gap-10 pb-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl text-slate-500">Talk</h1>
          <Language />
        </div>

        <div className="flex gap-10">
          <Link
            to={"/dashboard/talk/friends"}
            className="bg-[#F5F5F5] w-[350px] h-[242px] flex flex-col items-center gap-4 justify-center"
          >
            <img src="/images/talk/music.svg" alt="" width={180} height={114} />
            <div>Learn with Friends</div>
          </Link>

          <Link
            to="/dashboard/talk/ai"
            className="bg-[#F5F5F5] w-[350px] h-[242px] flex flex-col items-center gap-4 justify-center"
          >
            <img src="/images/talk/mic.svg" alt="" width={133} height={133} />
            <div>Learn with AI</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Talk;
