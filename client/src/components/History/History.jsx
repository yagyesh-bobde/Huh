import React from "react";
import Card from "./Card";

const History = () => {
  return (
    <div className="max-w-[1080px] px-[20px] mx-auto h-screen w-screen overflow-hidden">

      <div className="items-center flex justify-center pb-8">
        <h1 className="text-5xl flex font-normal text-center">
          History
          <img
            src="/images/history/sparkles.svg"
            alt=""
            width={68}
            height={68}
          />
        </h1>
      </div>

      <div className="flex gap-8 justify-between">
        <Card />
        <Card />
        <Card />
      </div>

      <div className="flex gap-44 pt-12 items-center justify-center">
        <div className="bg-blue-200 w-[258px] h-[45px] flex items-center justify-center text-center text-xl text-blue-950 font-semibold rounded-[25px]">
          Saved
        </div>

        <div className="bg-blue-200 w-[258px] h-[45px] flex items-center justify-center text-center text-xl text-blue-950 font-semibold rounded-[25px]">
          Recent
        </div>
      </div>
    </div>
  );
};

export default History;
