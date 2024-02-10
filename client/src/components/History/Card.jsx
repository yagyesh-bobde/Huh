import React from "react";

const Card = () => {
  return (
    <div className="w-[290px] h-[400x] bg-[#F5F5F5] text-2xl font-sans text-slate-400 leading-10 py-4 px-2 rounded-[25px] align-center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
      reiciendis voluptatum reprehenderit, hic unde ex dignissimos sunt
      officiis...
      <br />
      <br />
      <div className="flex border-t-2 gap-2 items-center">
        <div>
          <img src="/images/history/Delete.svg" alt="" width={35} height={35} />
        </div>
        <div className="border-t-2 ">
          <img src="/images/history/Copy.svg" alt="" width={30} height={30} />
        </div>
        <div className="border-t-2 ">
          <img src="/images/history/Audio.svg" alt="" width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export default Card;
