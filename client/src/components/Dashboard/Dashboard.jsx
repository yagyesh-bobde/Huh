import React from "react";
import Flag from "./Flag";

const Dashboard = () => {
  return (
    <div className="max-w-[1080px] px-[20px] mx-auto h-screen w-screen">
      <div className="flex flex-col items-center">
        <div className="italic text-2xl">Tip of the Day</div>
        <div className="text-3xl">Don't be afraid to make mistakes</div>
        <br />
      </div>
      <div className="text-5xl text-center pb-8">Your Lessons</div>
      <Flag />

      <div className="pt-8 flex gap-16 items-center justify-center">
        <div className="flex flex-col justify-center gap-4 border items-center shadow-lg shadow-slate-700 w-[350px] h-[225px] rounded-2xl">
          <div className="flex items-center gap-5">
            <div>
              <img src="images/dashboard/huh.svg" alt="" />
            </div>

            <div>
              <p>Let's See</p>
              <span className="font-bold text-lg">History</span>
              <p>Relive Your Journey!</p>
            </div>
          </div>

          <button className="bg-blue-400 w-[200px] py-1 rounded-3xl">
            Continue Browsing
          </button>
        </div>

        <div className="flex flex-col justify-center gap-4 border items-center shadow-lg shadow-slate-700 w-[350px] h-[225px] rounded-2xl">
          <div className="flex items-center gap-5">
            <div>
              <img src="images/dashboard/100.svg" alt="" />
            </div>

            <div>
              <p>Chapter 2</p>
              <span className="font-bold text-lg">Discovering English</span>
              <p>Continue Your Journey!</p>
            </div>
          </div>

          <button className="bg-blue-400 w-[200px] py-1 rounded-3xl">
            Continue Studying
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
