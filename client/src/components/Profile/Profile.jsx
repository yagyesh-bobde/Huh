import React from "react";
import Navbar from "./Navbar";

const Profile = () => {
  return (
    <div className="max-w-[1080px] px-[20px] mx-auto h-screen w-screen overflow-hidde">
      <Navbar />

      <h1 className="text-4xl font-semibold text-center pb-8">Profile</h1>

      <div className="flex gap-12">
        <div className="bg-[#F5F5F5] w-[570px] h-[503px] flex flex-col items-center gap-2 justify-center">
          <img src="/images/talk/profile.svg" alt="" width={212} height={212} />
          <div className="text-2xl font-semibold">
            Alex Jakson <sup className="text-red-700">US</sup>
          </div>
          <div className="flex gap-1 text-lg">
            <img src="/images/talk/Vector.svg" alt="" width={20} height={20} />
            @alen.23
          </div>
          <div className="flex gap-4 items-center justify-center">
            <div className="bg-blue-200 w-[151px] h-[40px] flex justify-center align-middle text-center text-lg text-blue-950 font-semibold">
              English
            </div>
            <div className="bg-blue-200 w-[151px] h-[40px] flex justify-center align-middle text-center text-lg text-blue-950 font-semibold">
              German
            </div>
          </div>
        </div>

        <div className="bg-[#F5F5F5] w-[530px] h-[195px] ">
          <h1 className="text-center text-[#006FFF] font-medium text-lg p-3">
            JANUARY 2024 | Week 01
            <div className="border border-[#006FFF]"></div>
          </h1>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
